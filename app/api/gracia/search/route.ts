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
    const body = await req.json();
    const consulta = typeof body?.consulta === 'string' ? body.consulta.trim() : '';

    if (!consulta) {
      return NextResponse.json({ error: 'La consulta es obligatoria.' }, { status: 400 });
    }

    if (consulta.length > 1000) {
      return NextResponse.json({ error: 'La consulta excede el límite permitido.' }, { status: 400 });
    }

    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: consulta,
    });

    const embedding = embeddingResponse.data[0]?.embedding;

    if (!embedding || embedding.length !== 1536) {
      return NextResponse.json({ error: 'Embedding inválido.' }, { status: 502 });
    }

    const { data, error } = await supabase.rpc('buscar_beneficios', {
      query_embedding: embedding,
      match_threshold: 0.3,
      match_count: 5,
    });

    if (error) {
      console.error('Error en búsqueda semántica:', error);
      return NextResponse.json({ error: 'No se pudo realizar la búsqueda semántica.' }, { status: 500 });
    }

    return NextResponse.json({
      consulta,
      model: 'text-embedding-3-small',
      dimensions: embedding.length,
      resultados: data ?? [],
    });
  } catch (error) {
    console.error('Error en API de búsqueda Gracia 1001:', error);
    return NextResponse.json({ error: 'No se pudo procesar la búsqueda.' }, { status: 500 });
  }
}
