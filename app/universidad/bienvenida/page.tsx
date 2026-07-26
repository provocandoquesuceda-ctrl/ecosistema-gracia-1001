'use client';

import Link from 'next/link';

export default function GuiaBienvenidaPage() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Completa tu Perfil en el Dashboard',
      descripcion: 'Accede a tu panel personal para verificar tu plan de estudios y horarios de clase.',
      enlace: '/universidad/dashboard',
      etiqueta: 'Ir al Dashboard'
    },
    {
      numero: '02',
      titulo: 'Conoce a tu Tutor Exegético IA',
      descripcion: 'Realiza tu primera consulta teológica para familiarizarte con las herramientas de apoyo.',
      enlace: '/universidad/tutor',
      etiqueta: 'Probar Tutor'
    },
    {
      numero: '03',
      titulo: 'Explora la Biblioteca y Audioteca',
      descripcion: 'Descarga el material didáctico en PDF y escucha la cápsula de meditación de esta semana.',
      enlace: '/universidad/biblioteca',
      etiqueta: 'Ver Biblioteca'
    },
    {
      numero: '04',
      titulo: 'Únete al Foro & Mentoría',
      descripcion: 'Preséntate en el Ágora comunitaria y conoce a los mentores de tu cohorte.',
      enlace: '/universidad/foro',
      etiqueta: 'Ir al Foro'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          🎉 ¡Bienvenido a la Universidad!
        </span>
        <h1 className="text-3xl font-bold mt-2">Guía de Onboarding para Nuevos Alumnos</h1>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Sigue estos 4 pasos esenciales para comenzar tu recorrido académico en la Gracia y la Verdad de manera fluida.
        </p>
      </header>

      {/* Pasos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pasos.map((p) => (
          <div key={p.numero} className="bg-slate-800 p-6 rounded-3xl border border-slate-700 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-emerald-400 font-mono">{p.numero}</span>
                <span className="text-[10px] bg-slate-900 border border-slate-700 text-slate-400 px-2.5 py-1 rounded-full font-semibold">
                  Paso Requerido
                </span>
              </div>
              <h3 className="font-bold text-slate-100 text-base">{p.titulo}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.descripcion}</p>
            </div>

            <Link
              href={p.enlace}
              className="w-full bg-slate-900 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-500 text-emerald-400 hover:text-white font-bold text-xs py-2.5 rounded-xl transition-all text-center block"
            >
              {p.etiqueta} →
            </Link>
          </div>
        ))}
      </div>

      {/* Callout de Soporte */}
      <div className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-2xl text-center space-y-2">
        <p className="text-xs text-slate-300">
          ¿Tienes dudas sobre tu proceso de inscripción o asignación de clases?
        </p>
        <Link
          href="/universidad/mentoria"
          className="text-xs text-amber-400 font-bold hover:underline inline-block"
        >
          Contacta con el equipo de mentores aquí →
        </Link>
      </div>
    </main>
  );
}
