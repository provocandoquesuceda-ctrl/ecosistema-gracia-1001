import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    const { data: beneficio, error } = await supabase
      .from('beneficios_gracia')
      .select('id,codigo,titulo,estado,version,embedding')
      .eq('id', 624)
      .single();

    if (error || !beneficio) {
      return NextResponse.json({ error: 'No se pudo leer el estado del piloto.' }, { status: 500 });
    }

    const [{ count: referencias }, { count: necesidades }, { count: productos }, { count: auditorias }] =
      await Promise.all([
        supabase.from('beneficio_referencia').select('*', { count: 'exact', head: true }).eq('beneficio_id', 624),
        supabase.from('beneficio_necesidad').select('*', { count: 'exact', head: true }).eq('beneficio_id', 624),
        supabase.from('productos_derivados').select('*', { count: 'exact', head: true }).eq('beneficio_id', 624),
        supabase.from('auditoria_conocimiento').select('*', { count: 'exact', head: true }).eq('beneficio_id', 624),
      ]);

    return NextResponse.json({
      status: 'operational-readiness',
      beneficio: {
        id: beneficio.id,
        codigo: beneficio.codigo,
        titulo: beneficio.titulo,
        estado: beneficio.estado,
        version: beneficio.version,
        embedding_persistido: Boolean(beneficio.embedding),
      },
      trazabilidad: {
        referencias: referencias ?? 0,
        necesidades: necesidades ?? 0,
        productos: productos ?? 0,
        auditorias: auditorias ?? 0,
      },
      next_gate: beneficio.embedding ? 'verificar-recuperacion-vectorial' : 'generar-embedding-real',
    });
  } catch (error) {
    console.error('Error en estado Gracia 1001:', error);
    return NextResponse.json({ error: 'No se pudo recuperar el estado.' }, { status: 500 });
  }
}
