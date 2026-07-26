'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-amber-500 selection:text-slate-900">
      {/* Navbar Superior */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl">🕊️</span>
          <span className="font-bold text-sm tracking-wider uppercase text-amber-400">
            Ecosistema Gracia
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/universidad/dashboard"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-all"
          >
            📊 Panel Alumno
          </Link>
          <Link
            href="/universidad/inscripcion"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/10"
          >
            ✍️ Inscripción
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-800 text-amber-400 text-xs font-semibold tracking-wide">
          <span>✨</span> Formación Teológica & Ministerial de Vanguardia
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Universidad de la <span className="text-amber-400">Gracia</span> y la <span className="text-cyan-400">Verdad</span>
        </h1>
        
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Un ecosistema digital completo diseñado para potenciar tu llamado, exégesis bíblica, liderazgo cristocéntrico y especializaciones ministeriales.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/universidad"
            className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2"
          >
            <span>🏛️</span> Explorar la Universidad
          </Link>
          <Link
            href="/universidad/tutor"
            className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-400 font-bold text-sm transition-all flex items-center gap-2"
          >
            <span>🤖</span> Probar Tutor Exégeta
          </Link>
        </div>
      </section>

      {/* Grid de Módulos Destacados */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            🎯 Módulos Principales del Ecosistema
          </h2>
          <span className="text-xs text-slate-500 font-mono">v1.0 Producción</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/universidad/tutor"
            className="p-6 rounded-3xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500 transition-all space-y-3 group block"
          >
            <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-110 transition-transform">
              🤖
            </div>
            <h3 className="font-bold text-base text-slate-100">Tutor de Exégesis</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Asistente inteligente en vivo para resolver dudas exegéticas, gramaticales y contextuales de las Escrituras.
            </p>
          </Link>

          <Link
            href="/universidad/liderazgo-cristocentrico"
            className="p-6 rounded-3xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500 transition-all space-y-3 group block"
          >
            <div className="w-10 h-10 rounded-2xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 text-lg group-hover:scale-110 transition-transform">
              👑
            </div>
            <h3 className="font-bold text-base text-slate-100">Salud Pastoral</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Herramientas de acompañamiento, prevención del desgaste y fortalecimiento del liderazgo ministerial.
            </p>
          </Link>

          <Link
            href="/universidad/audioteca"
            className="p-6 rounded-3xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-violet-500 transition-all space-y-3 group block"
          >
            <div className="w-10 h-10 rounded-2xl bg-violet-950 border border-violet-800 flex items-center justify-center text-violet-400 text-lg group-hover:scale-110 transition-transform">
              🎧
            </div>
            <h3 className="font-bold text-base text-slate-100">Audioteca</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cápsulas de audio y reflexiones breves sobre la gracia para renovar tu mente en el día a día.
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>Ecosistema Gracia & Verdad • Todos los derechos reservados</p>
      </footer>
    </main>
  );
}
