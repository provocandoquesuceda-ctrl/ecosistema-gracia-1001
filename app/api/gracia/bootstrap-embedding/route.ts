import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const bootstrapToken = process.env.GRACIA_BOOTSTRAP_TOKEN;
    const providedToken = req.headers.get('x-gracia-bootstrap');

    if (!bootstrapToken || providedToken !== bootstrapToken) {
      return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
    }

    const { data: beneficio, error: beneficioError } = await supabase
      .from('beneficios_gracia')
      .select('id, codigo, titulo, concepto, descripcion, fundamento_biblico, aplicacion, declaracion, oracion, ensenanza, cita')
      .eq('id', 624)
      .single();

    if (beneficioError || !beneficio) {
      return NextResponse.json({ error: 'No se pudo recuperar BENEFICIO-0624.' }, { status: 500 });
    }

    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: [
        beneficio.titulo,
        beneficio.concepto,
        beneficio.descripcion,
        beneficio.fundamento_biblico,
        beneficio.aplicacion,
        beneficio.declaracion,
        beneficio.oracion,
        beneficio.ensenanza,
        beneficio.cita,
      ].filter(Boolean).join('\n'),
    });

    const embedding = embeddingResponse.data[0]?.embedding;

    if (!embedding || embedding.length !== 1536) {
      return NextResponse.json({ error: 'OpenAI no devolvió un embedding de 1536 dimensiones.' }, { status: 502 });
    }

    const { data: guardado, error: guardadoError } = await supabase.rpc(
      'guardar_embedding_beneficio_0624',
      { p_embedding: embedding }
    );

    if (guardadoError) {
      console.error('Error persistiendo embedding:', guardadoError);
      return NextResponse.json(
        { error: 'OpenAI generó el embedding, pero Supabase no pudo persistirlo.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: guardado ? 'embedded' : 'already_embedded',
      beneficio: 'BENEFICIO-0624',
      model: 'text-embedding-3-small',
      dimensions: embedding.length,
      persisted: Boolean(guardado),
      usage: embeddingResponse.usage ?? null,
    });
  } catch (error) {
    console.error('Error en bootstrap de embedding:', error);
    return NextResponse.json(
      { error: 'No se pudo completar el bootstrap de embedding.' },
      { status: 500 }
    );
  }
}
