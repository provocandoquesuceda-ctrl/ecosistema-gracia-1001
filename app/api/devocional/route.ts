import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { mensaje, edad } = await req.json();

    // 1. Generar embedding con OpenAI a partir del mensaje del usuario
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: mensaje,
    });
    const embedding = embeddingResponse.data[0].embedding;

    // 2. Buscar beneficios relevantes en Supabase (RAG)
    const { data: beneficiosRelacionados } = await supabase.rpc('buscar_beneficios', {
      query_embedding: embedding,
      match_threshold: 0.3,
      match_count: 2,
    });

    let contextoBaseDatos = '';
    if (beneficiosRelacionados && beneficiosRelacionados.length > 0) {
      contextoBaseDatos = beneficiosRelacionados
        .map((b: any) => `- Beneficio: ${b.concepto} (${b.cita}): ${b.afirmacion}`)
        .join('\n');
    }

    // 3. Crear prompt enriquecido para el modelo
    const systemPrompt = `
      Eres el Asistente Pastoral del 'Ecosistema Gracia 1001'.
      Adaptas siempre tu lenguaje al grupo de edad: ${edad || 'General'}.
      
      Usa este contexto Bíblico de los Beneficios de la Gracia si es relevante:
      ${contextoBaseDatos || 'Responde desde los principios generales del evangelio de la gracia.'}

      Proporciona un mensaje lleno de paz, apoyo emocional, fundamentado en la Biblia y conciso.
    `;

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: mensaje },
      ],
      temperature: 0.7,
    });

    return NextResponse.json({
      respuesta: chatResponse.choices[0].message.content,
      fuentes: beneficiosRelacionados || [],
    });
  } catch (error) {
    console.error('Error en API devocional:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al procesar tu consulta.' },
      { status: 500 }
    );
  }
}