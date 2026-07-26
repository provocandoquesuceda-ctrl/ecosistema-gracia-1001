'use client';

import Link from 'next/link';

export default function DiscipuladoPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          🌱 Formación Básica
        </span>
        <h1 className="text-3xl font-bold mt-2">Módulo de Discipulado en la Gracia</h1>
        <p className="text-slate-400 text-sm">
          Cimientos teológicos fundamentales para la vida cristiana basada en la obra terminada de Cristo.
        </p>
      </header>

      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 shadow-xl">
        <h2 className="text-lg font-bold text-slate-100">Contenido en preparación</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Las lecciones e itinerarios de discipulado personal y comunitario se están estructurando para este módulo.
        </p>
        <Link
          href="/"
          className="inline-block bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
