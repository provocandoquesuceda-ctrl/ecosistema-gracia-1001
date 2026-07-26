'use client';

import Link from 'next/link';

export default function ProgresoPage() {
  const materias = [
    { nombre: 'Hermenéutica Cristocéntrica I', progreso: 90, estado: 'Completado', nota: '98/100' },
    { nombre: 'Exégesis de Romanos y Gálatas', progreso: 65, estado: 'En Curso', nota: '92/100' },
    { nombre: 'Salud Pastoral y Cuidado Personal', progreso: 40, estado: 'En Curso', nota: '88/100' },
    { nombre: 'Liderazgo en la Gracia', progreso: 10, estado: 'Iniciando', nota: 'S/A' },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
          📈 Rendimiento Académico
        </span>
        <h1 className="text-3xl font-bold mt-2">Mi Progreso Teológico</h1>
        <p className="text-slate-400 text-sm">
          Monitorea tu avance en las materias del trimestre activo y tus calificaciones de evaluación exegética.
        </p>
      </header>

      {/* Tarjetas de Métricas Rápidas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-xs text-slate-400 font-medium">Créditos Acumulados</span>
          <p className="text-2xl font-extrabold text-teal-400">18 / 32</p>
          <span className="text-[10px] text-slate-500">Nivel 1 & 2 aprobados</span>
        </div>

        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-xs text-slate-400 font-medium">Promedio Exegético</span>
          <p className="text-2xl font-extrabold text-emerald-400">92.6</p>
          <span className="text-[10px] text-slate-500">Escala 0 - 100</span>
        </div>

        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-1">
          <span className="text-xs text-slate-400 font-medium">Especialización</span>
          <p className="text-lg font-bold text-amber-400 mt-1">Exégesis & Salud</p>
          <span className="text-[10px] text-slate-500">Enfoque Pastoral</span>
        </div>
      </div>

      {/* Desglose por Materia */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-sm uppercase tracking-wider font-bold text-slate-300">
          📚 Avance por Asignatura
        </h2>

        <div className="space-y-4">
          {materias.map((m) => (
            <div key={m.nombre} className="bg-slate-900 p-4 rounded-2xl border border-slate-700/80 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-200">{m.nombre}</span>
                <span className="font-mono text-teal-400 font-semibold">{m.nota}</span>
              </div>

              {/* Barra de Progreso */}
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="bg-teal-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${m.progreso}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-400">
                <span>Estado: <strong className="text-slate-300">{m.estado}</strong></span>
                <span>{m.progreso}% completado</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botón Volver */}
      <div className="pt-2">
        <Link
          href="/universidad/dashboard"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-teal-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver al Panel de Control
        </Link>
      </div>
    </main>
  );
}
