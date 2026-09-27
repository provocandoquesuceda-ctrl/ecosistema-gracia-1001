import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ codigo: string }> }
) {
  try {
    const { codigo } = await params;

    if (!/^BENEFICIO-\d{4}$/.test(codigo)) {
      return NextResponse.json({ error: 'Código de beneficio inválido.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('beneficios_gracia')
      .select(
        'id,codigo,titulo,concepto,descripcion,cita,texto_biblico,fundamento_biblico,interpretacion,aplicacion,declaracion,oracion,ensenanza,categoria,estado,version,fecha_verificacion,metadata'
      )
      .eq('codigo', codigo)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Beneficio no encontrado.' }, { status: 404 });
    }

    const [{ data: referencias, error: referenciasError }, { data: necesidades, error: necesidadesError }, { data: productos, error: productosError }] =
      await Promise.all([
        supabase
          .from('beneficio_referencia')
          .select('referencia_biblica_id,referencias_biblicas(*)')
          .eq('beneficio_id', data.id),
        supabase
          .from('beneficio_necesidad')
          .select('necesidad_id,necesidades(*)')
          .eq('beneficio_id', data.id),
        supabase
          .from('productos_derivados')
          .select('id,tipo_producto,estado,version,publicable,publicado,fecha_generacion,fecha_revision,contenido')
          .eq('beneficio_id', data.id)
          .eq('publicado', true),
      ]);

    if (referenciasError || necesidadesError || productosError) {
      return NextResponse.json(
        { error: 'No se pudo completar la trazabilidad del beneficio.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      beneficio: data,
      trazabilidad: {
        referencias: referencias ?? [],
        necesidades: necesidades ?? [],
        productos_publicados: productos ?? [],
      },
    });
  } catch (error) {
    console.error('Error en API de beneficio:', error);
    return NextResponse.json({ error: 'No se pudo recuperar el beneficio.' }, { status: 500 });
  }
}
