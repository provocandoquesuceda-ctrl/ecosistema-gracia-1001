'use client';

import Link from 'next/link';

export default function DashboardAlumnoPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📊 Panel de Control Académico
        </span>
        <h1 className="text-3xl font-bold mt-2">Bienvenido, Estudiante de la Gracia</h1>
        <p className="text-slate-400 text-sm">
          Tu resumen de actividades, avance por trimestre y próximos compromisos en la universidad.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 block font-medium">Progreso General</span>
          <span className="text-2xl font-bold text-emerald-400 mt-1 block">65%</span>
          <span className="text-[10px] text-slate-500">Trimestre 2 Activo</span>
        </div>
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 block font-medium">Créditos Aprobados</span>
          <span className="text-2xl font-bold text-cyan-400 mt-1 block">24 / 48</span>
          <span className="text-[10px] text-slate-500">Horas Lectivas</span>
        </div>
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 block font-medium">Certificados Emitidos</span>
          <span className="text-2xl font-bold text-amber-400 mt-1 block">2</span>
          <span className="text-[10px] text-slate-500">Nivel 1 & 2</span>
        </div>
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 block font-medium">Próxima Mentoría</span>
          <span className="text-sm font-bold text-purple-400 mt-2 block">Martes, 6:00 PM</span>
          <span className="text-[10px] text-slate-500">Dr. Aarón Ramos</span>
        </div>
      </div>

      <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
        <h3 className="text-base font-bold text-slate-100">🚀 Rutas de Aprendizaje Directas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link
            href="/universidad/tutor"
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 transition-all text-left space-y-1 block"
          >
            <span className="text-lg">🤖</span>
            <h4 className="font-bold text-xs text-cyan-300">Tutor de Exégesis</h4>
            <p className="text-[11px] text-slate-400">Resuelve dudas teológicas con el asistente en vivo.</p>
          </Link>

          <Link
            href="/universidad/especializaciones"
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 transition-all text-left space-y-1 block"
          >
            <span className="text-lg">🎯</span>
            <h4 className="font-bold text-xs text-emerald-300">Especializaciones</h4>
            <p className="text-[11px] text-slate-400">Profundiza en tu área de llamado (Familia, Salud, Negocios).</p>
          </Link>

          <Link
            href="/universidad/certificados"
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 transition-all text-left space-y-1 block"
          >
            <span className="text-lg">🏅</span>
            <h4 className="font-bold text-xs text-amber-300">Mis Certificados</h4>
            <p className="text-[11px] text-slate-400">Descarga o imprime tus títulos por nivel completado.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
