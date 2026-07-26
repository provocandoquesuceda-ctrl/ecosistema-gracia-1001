'use client';

import Link from 'next/link';

export default function UniversidadPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          🏛️ Plataforma Académica
        </span>
        <h1 className="text-3xl font-bold mt-2">Universidad de la Gracia y la Verdad</h1>
        <p className="text-slate-400 text-sm">
          Ecosistema integral de formación teológica, ministerial y liderazgo Cristocéntrico.
        </p>
      </header>

      <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-sm uppercase tracking-wider font-bold text-slate-400">
          🛠️ Módulos e Integraciones del Ecosistema
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/universidad/dashboard"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-amber-500 text-amber-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📊</span> Panel Alumno
          </Link>

          <Link
            href="/universidad/tutor"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-cyan-500 text-cyan-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🤖</span> Tutor Exégesis
          </Link>

          <Link
            href="/universidad/liderazgo-cristocentrico"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-cyan-400 text-cyan-300 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>👑</span> Salud Pastoral
          </Link>

          <Link
            href="/universidad/certificados"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-amber-400 text-amber-300 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🏅</span> Certificados
          </Link>

          <Link
            href="/universidad/mentoria"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-purple-500 text-purple-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>👥</span> Mentoría Dual
          </Link>

          <Link
            href="/universidad/editorial"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-pink-500 text-pink-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>✍️</span> Hub Editorial
          </Link>

          <Link
            href="/universidad/biblioteca"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-emerald-500 text-emerald-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📚</span> Biblioteca
          </Link>

          <Link
            href="/universidad/foro"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-blue-500 text-blue-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>💬</span> Ágora & Foro
          </Link>

          <Link
            href="/universidad/audioteca"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-violet-500 text-violet-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🎧</span> Audioteca
          </Link>

          <Link
            href="/universidad/evaluacion"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-teal-500 text-teal-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📝</span> Evaluación
          </Link>

          <Link
            href="/universidad/inscripcion"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-emerald-400 text-emerald-300 text-xs font-bold transition-all flex items-center gap-2 col-span-2"
          >
            <span>📝</span> Formulario de Inscripción
          </Link>
        </div>
      </section>
    </main>
  );
}
