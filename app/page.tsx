'use client';

import Link from 'next/link';

export default function UniversidadPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header Principal */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
            🏛️ Plataforma Académica Central
          </span>
          <Link
            href="/universidad/perfil"
            className="text-xs font-bold text-slate-300 hover:text-amber-400 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5"
          >
            <span>👤</span> Mi Perfil
          </Link>
        </div>
        <h1 className="text-3xl font-bold mt-2">Universidad de la Gracia y la Verdad</h1>
        <p className="text-slate-400 text-sm">
          Ecosistema integral de formación teológica, ministerial y liderazgo Cristocéntrico.
        </p>
      </header>

      {/* Seccion de Inicio Rapido / Onboarding */}
      <section className="bg-gradient-to-r from-emerald-950/50 via-slate-800 to-slate-800 p-6 rounded-3xl border border-emerald-800/60 space-y-3">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div>
            <h2 className="text-base font-bold text-emerald-300">🎉 ¿Nuevo Estudiante o Reingreso?</h2>
            <p className="text-xs text-slate-300">Revisa la guía de inicio rápido o consulta tu cronograma de asignaturas.</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/universidad/bienvenida"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
            >
              Guía de Inicio →
            </Link>
            <Link
              href="/universidad/calendario"
              className="bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
            >
              📅 Ver Calendario
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Categorizado de Módulos */}
      <div className="space-y-6">
        {/* Bloque 1: Progreso & Récord Académico */}
        <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <span>📊</span> Rendimiento & Certificación
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              href="/universidad/dashboard"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-amber-500 text-amber-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>📈</span> Dashboard Alumno
            </Link>

            <Link
              href="/universidad/progreso"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-teal-400 text-teal-300 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>📊</span> Mi Progreso
            </Link>

            <Link
              href="/universidad/evaluacion"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-teal-500 text-teal-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>📝</span> Evaluaciones
            </Link>

            <Link
              href="/universidad/certificados"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-amber-400 text-amber-300 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>🏅</span> Certificados
            </Link>
          </div>
        </section>

        {/* Bloque 2: Recursos de Estudio & Asistencia */}
        <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <span>📚</span> Centro de Estudio & Herramientas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link
              href="/universidad/biblioteca"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-emerald-500 text-emerald-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>📚</span> Biblioteca Digital
            </Link>

            <Link
              href="/universidad/audioteca"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-violet-500 text-violet-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>🎧</span> Audioteca
            </Link>

            <Link
              href="/universidad/tutor"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-cyan-500 text-cyan-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>🤖</span> Tutor Exegético AI
            </Link>
          </div>
        </section>

        {/* Bloque 3: Acompañamiento, Salud Pastoral & Comunidad */}
        <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
            <span>👥</span> Comunidad & Salud Pastoral
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              href="/universidad/mentoria"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-purple-500 text-purple-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>👥</span> Mentoría Dual
            </Link>

            <Link
              href="/universidad/liderazgo-cristocentrico"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-cyan-400 text-cyan-300 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>👑</span> Salud Pastoral
            </Link>

            <Link
              href="/universidad/editorial"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-pink-500 text-pink-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>✍️</span> Hub Editorial
            </Link>

            <Link
              href="/universidad/foro"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-blue-500 text-blue-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>💬</span> Ágora & Foro
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
