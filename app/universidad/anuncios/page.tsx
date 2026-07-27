'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AnunciosUniversidadPage() {
  const [filtro, setFiltro] = useState('Todos');

  const anuncios = [
    {
      id: 'ANC-2026-01',
      titulo: 'Inicio del Proceso de Matrícula para el Próximo Trimestre',
      fecha: '26 de Julio, 2026',
      categoria: 'Académico',
      prioridad: 'Alta',
      contenido:
        'Estimada comunidad académica, se informa que la recepción de solicitudes de inscripción y convalidación para el próximo ciclo estará abierta hasta el 15 de agosto.',
      badgeColor: 'border-amber-500/50 text-amber-400 bg-amber-950/40',
    },
    {
      id: 'ANC-2026-02',
      titulo: 'Mantenimiento Programado de los Servidores del Campus Virtual',
      fecha: '20 de Julio, 2026',
      categoria: 'Sistemas',
      prioridad: 'Urgente',
      contenido:
        'El campus virtual estará fuera de línea por mantenimiento preventivo el sábado 1 de agosto de 02:00 UTC a 06:00 UTC.',
      badgeColor: 'border-rose-500/50 text-rose-400 bg-rose-950/40',
    },
    {
      id: 'ANC-2026-03',
      titulo: 'Apertura de la Convocatoria para Becas de Liderazgo Pastoral',
      fecha: '12 de Julio, 2026',
      categoria: 'Financiero',
      prioridad: 'Media',
      contenido:
        'El Comité de Becas abre la recepción de expedientes para ministros y líderes activos en congregaciones locales.',
      badgeColor: 'border-emerald-500/50 text-emerald-400 bg-emerald-950/40',
    },
  ];

  const anunciosFiltrados = anuncios.filter(
    (a) => filtro === 'Todos' || a.categoria === filtro
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📢 Tablón de Anuncios
        </span>
        <h1 className="text-3xl font-bold mt-2">Comunicados Oficiales</h1>
        <p className="text-slate-400 text-sm">
          Mantente informado sobre avisos importantes, circulares rectorales y actualizaciones del campus.
        </p>
      </header>

      {/* Controles de Filtro */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-800">
        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Filtrar Comunicados:
        </span>
        <div className="flex flex-wrap gap-2">
          {['Todos', 'Académico', 'Sistemas', 'Financiero'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                filtro === cat
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Listado de Anuncios */}
      <section className="space-y-4">
        {anunciosFiltrados.map((item) => (
          <article
            key={item.id}
            className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-3 hover:border-slate-600 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                  {item.categoria}
                </span>
                <span className="text-xs font-mono text-slate-400">Prioridad: {item.prioridad}</span>
              </div>
              <span className="text-xs font-mono text-slate-400">{item.fecha}</span>
            </div>

            <h2 className="text-lg font-bold text-slate-100">{item.titulo}</h2>
            <p className="text-xs text-slate-300 leading-relaxed">{item.contenido}</p>

            <div className="pt-2 flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span>{item.id}</span>
              <span>Emisión Oficial — Rectoría</span>
            </div>
          </article>
        ))}
      </section>

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
