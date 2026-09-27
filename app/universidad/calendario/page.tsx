'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CalendarioPage() {
  const [filtro, setFiltro] = useState('Todos');

  const eventos = [
    {
      id: 1,
      titulo: 'Clase Magistral: Exégesis de Romanos 8',
      fecha: '28 de Julio, 2026',
      hora: '19:00 UTC-4',
      tipo: 'Clase en Vivo',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/30',
      enlace: '/universidad/tutor'
    },
    {
      id: 2,
      titulo: 'Cierre de Entrega: Cuestionario de Hermenéutica II',
      fecha: '02 de Agosto, 2026',
      hora: '23:59 UTC-4',
      tipo: 'Evaluación',
      color: 'border-teal-500 text-teal-400 bg-teal-950/30',
      enlace: '/universidad/evaluacion'
    },
    {
      id: 3,
      titulo: 'Taller de Salud Pastoral: Manejo del Estrés Ministerial',
      fecha: '05 de Agosto, 2026',
      hora: '20:00 UTC-4',
      tipo: 'Salud Pastoral',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/30',
      enlace: '/universidad/liderazgo-cristocentrico'
    },
    {
      id: 4,
      titulo: 'Sesión Grupal de Mentoría con Dr. Aarón Ramos',
      fecha: '10 de Agosto, 2026',
      hora: '18:30 UTC-4',
      tipo: 'Mentoría',
      color: 'border-purple-500 text-purple-400 bg-purple-950/30',
      enlace: '/universidad/mentoria'
    }
  ];

  const eventosFiltrados = filtro === 'Todos'
    ? eventos
    : eventos.filter((e) => e.tipo === filtro);

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📅 Cronograma Académico
        </span>
        <h1 className="text-3xl font-bold mt-2">Calendario de Clases & Entregas</h1>
        <p className="text-slate-400 text-sm">
          Mantén el control de tus sesiones en vivo, fechas límites de evaluación y talleres del trimestre.
        </p>
      </header>

      {/* Filtros de Categoría */}
      <div className="flex flex-wrap gap-2">
        {['Todos', 'Clase en Vivo', 'Evaluación', 'Salud Pastoral', 'Mentoría'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all border ${
              filtro === cat
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de Eventos */}
      <div className="space-y-4">
        {eventosFiltrados.map((ev) => (
          <div
            key={ev.id}
            className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${ev.color}`}>
                  {ev.tipo}
                </span>
                <span className="text-xs font-mono text-slate-400">⏰ {ev.hora}</span>
              </div>
              <h2 className="text-base font-bold text-slate-100">{ev.titulo}</h2>
              <p className="text-xs text-slate-400">
                Fecha: <strong className="text-slate-200">{ev.fecha}</strong>
              </p>
            </div>

            <Link
              href={ev.enlace}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all text-center block shrink-0"
            >
              Ver Módulo →
            </Link>
          </div>
        ))}
      </div>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
