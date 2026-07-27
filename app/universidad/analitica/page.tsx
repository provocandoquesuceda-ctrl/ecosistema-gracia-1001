'use client';

import Link from 'next/link';

export default function AnaliticaPage() {
  const metricasHoras = [
    { disciplina: 'Exégesis & Lenguajes Originales', horas: 18, porcentaje: 40, color: 'bg-emerald-500' },
    { disciplina: 'Teología Sistemática & Pactos', horas: 12, porcentaje: 26, color: 'bg-amber-500' },
    { disciplina: 'Salud Pastoral & Liderazgo', horas: 9, porcentaje: 20, color: 'bg-cyan-500' },
    { disciplina: 'Hermenéutica aplicada', horas: 6, porcentaje: 14, color: 'bg-violet-500' },
  ];

  const radarFortalezas = [
    { area: 'Análisis Textual / Griego', nivel: 'Avanzado', puntuacion: 92 },
    { area: 'Cuidado & Acompañamiento Pastoral', nivel: 'Competente', puntuacion: 85 },
    { area: 'Pedagogía & Enseñanza Bíblica', nivel: 'Sobresaliente', puntuacion: 95 },
    { area: 'Investigación Histórico-Dogmática', nivel: 'Intermedio', puntuacion: 78 },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
          📈 Analítica & Rendimiento
        </span>
        <h1 className="text-3xl font-bold mt-2">Estadísticas de Formación Teológica</h1>
        <p className="text-slate-400 text-sm">
          Monitorea la distribución de tu tiempo de estudio, constancia de lecturas y competencias ministeriales.
        </p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Tiempo Total de Estudio</span>
          <p className="text-2xl font-extrabold text-cyan-400 font-mono">45 Horas</p>
          <p className="text-[11px] text-slate-500">Este trimestre lectivo</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Racha de Constancia</span>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">14 Días</p>
          <p className="text-[11px] text-slate-500">Acceso diario consecutivo</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Promedio Exegético</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">94 / 100</p>
          <p className="text-[11px] text-slate-500">Basado en 8 evaluaciones</p>
        </div>
      </div>

      {/* Distribución de Disciplinas */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">
          📊 Distribución del Tiempo de Estudio
        </h2>

        <div className="space-y-4">
          {metricasHoras.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-200 font-medium">{item.disciplina}</span>
                <span className="text-slate-400 font-mono">{item.horas} hrs ({item.porcentaje}%)</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.porcentaje}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perfil de Competencias */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          🎯 Competencias Teológicas & Ministeriales
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {radarFortalezas.map((f, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex justify-between items-center"
            >
              <div className="space-y-1">
                <h3 className="font-bold text-xs text-slate-100">{f.area}</h3>
                <span className="text-[10px] text-cyan-400 font-mono uppercase bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800">
                  {f.nivel}
                </span>
              </div>

              <div className="text-right">
                <span className="text-xl font-extrabold font-mono text-slate-200">{f.puntuacion}</span>
                <span className="text-[10px] text-slate-500 block">/100 pts</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
