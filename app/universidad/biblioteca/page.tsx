'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BibliotecaPage() {
  const [busqueda, setBusqueda] = useState('');

  const recursos = [
    {
      id: 1,
      titulo: 'Manual Integrado de Hermenéutica Cristocéntrica',
      categoria: 'Hermenéutica',
      formato: 'PDF (2.4 MB)',
      descripcion: 'Principios fundamentales para la interpretación bíblica enfocada en la Gracia.'
    },
    {
      id: 2,
      titulo: 'Guía Práctica para la Salud y Cuidado del Pastor',
      categoria: 'Salud Pastoral',
      formato: 'PDF (1.8 MB)',
      descripcion: 'Estrategias de prevención del desgaste ministerial e higiene mental/espiritual.'
    },
    {
      id: 3,
      titulo: 'Compendio Exegético: Carta a los Gálatas',
      categoria: 'Exégesis',
      formato: 'PDF (3.1 MB)',
      descripcion: 'Análisis gramatical y contextual de la doctrina de la justificación por fe.'
    },
    {
      id: 4,
      titulo: 'Antología de Citas y Artículos Teológicos',
      categoria: 'Liderazgo',
      formato: 'PDF (1.2 MB)',
      descripcion: 'Recopilación de ensayos académicos sobre la libertad en el servicio cristiano.'
    }
  ];

  const recursosFiltrados = recursos.filter((r) =>
    r.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    r.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          📚 Biblioteca & Recursos
        </span>
        <h1 className="text-3xl font-bold mt-2">Repositorio Digital Teológico</h1>
        <p className="text-slate-400 text-sm">
          Accede a manuales, guías de estudio y material académico en formato digital.
        </p>
      </header>

      {/* Buscador */}
      <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
        <input
          type="text"
          placeholder="🔍 Buscar por título o categoría..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
        />
      </div>

      {/* Grid de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recursosFiltrados.map((rec) => (
          <div
            key={rec.id}
            className="bg-slate-800/80 p-5 rounded-3xl border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-emerald-500/50 transition-all"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="bg-slate-900 text-emerald-400 border border-slate-700 px-2.5 py-0.5 rounded-full font-bold uppercase">
                  {rec.categoria}
                </span>
                <span className="text-slate-500 font-mono">{rec.formato}</span>
              </div>
              <h3 className="font-bold text-slate-100 text-sm">{rec.titulo}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{rec.descripcion}</p>
            </div>

            <button
              onClick={() => alert(`Iniciando descarga de: ${rec.titulo}`)}
              className="w-full bg-slate-900 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-500 text-emerald-400 hover:text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>📥</span> Descargar Material
            </button>
          </div>
        ))}
      </div>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
