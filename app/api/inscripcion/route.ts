import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, programa } = body;

    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios (nombre, email).' },
        { status: 400 }
      );
    }

    // Generación de matrícula simulada
    const matricula = `UGV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      success: true,
      mensaje: 'Inscripción procesada correctamente.',
      datos: {
        matricula,
        nombre,
        email,
        programa: programa || 'Licenciatura Completa',
        fechaIngreso: new Date().toISOString()
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno al procesar la solicitud de admisión.' },
      { status: 500 }
    );
  }
}
