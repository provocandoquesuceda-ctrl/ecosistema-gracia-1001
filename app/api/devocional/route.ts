import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sentimiento, segmentoEdad, projectUrl, projectKey } = body || {};

    const supabaseUrl = projectUrl || process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = projectKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      const resultado = `No hay Supabase configurado. Recibido: ${sentimiento || ''}`;
      return NextResponse.json({ resultado });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Consulta ejemplo: buscar un devocional por segmento. Ajusta según tu esquema de DB.
    const { data, error } = await supabase
      .from('devocionales')
      .select('texto')
      .ilike('segmento', `%${segmentoEdad || ''}%`)
      .limit(1);

    if (error) {
      return NextResponse.json({ resultado: 'Error consultando Supabase.' }, { status: 500 });
    }

    const texto = Array.isArray(data) && data[0]?.texto
      ? data[0].texto
      : `No se encontró un devocional para "${sentimiento}" en "${segmentoEdad}".`;

    return NextResponse.json({ resultado: texto });
  } catch (err) {
    return NextResponse.json({ resultado: 'Error interno en la API.' }, { status: 500 });
  }
}
