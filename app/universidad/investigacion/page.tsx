'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InvestigacionPage() {
  const [lineaInvestigacion, setLineaInvestigacion] = useState('Todas');

  const publicaciones = [
    {
      id: 1,
      titulo: 'El Uso del Antiguo Testamento en la Epístola a los Hebreos',
      autor: 'Dr. Aarón Ramos',
      linea: 'Exégesis & Intertextualidad',
      fecha: 'Mayo 2026',
      descargas: 142,
      badge: 'Paper Académico',
      color: 'border-indigo-500 text-indigo-400 bg-indigo-950/40'
    },
    {
      id: 2,
      titulo: 'Evolución del Término Logos en el Contexto del Siglo I',
      autor: 'Dra. Elena Morales',
      linea: 'Hermenéutica & Lenguas Bíblicas',
      fecha: 'Junio 2026',
      descargas: 98,
      badge: 'Monografía',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40'
    },
    {
      id: 3,
      titulo: 'Impacto de la Apologética Urbana en Contextos Contemporáneos',
      autor: 'Pr. Carlos Mateo & Equipo Alumni',
      linea: 'Teología Práctica & Pastoral',
      fecha: 'Julio 2026',
      descargas: 210,
      badge: 'Tesis de Grado',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    }
  ];

  const publicacionesFiltradas = publicaciones.filter(
    (p) => lineaInvestigacion === 'Todas' || p.linea.includes(lineaInvestigacion)
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
          🔬 Centro de Investigación
        </span>
        <h1 className="text-3xl font-bold mt-2">Repositorio & Papers Académicos</h1>
        <p className="text-slate-400 text-sm">
          Accede a publicaciones científicas, monografías, tesis y artículos de exégesis teológica desarrollados por nuestra facultad.
        </p>
      </header>

      {/* Métricas del Repositorio */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Artículos Publicados</span>
          <p className="text-2xl font-extrabold text-indigo-400 font-mono">86</p>
          <p className="text-[11px] text-slate-400">Revisados por pares</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Descargas Totales</span>
          <p className="text-2xl font-extrabold text-cyan-400 font-mono">3,420</p>
          <p className="text-[11px] text-cyan-300">Formato PDF abierto</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Líneas Activas</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">4</p>
          <p className="text-[11px] text-slate-400">Grupos de investigación</p>
        </div>
      </div>

      {/* Filtro por Línea de Investigación */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
        <label className="text-xs font-bold text-slate-300">Línea de Investigación:</label>
        <select
          value={lineaInvestigacion}
          onChange={(e) => setLineaInvestigacion(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-400 transition-all"
        >
          <option value="Todas">Todas las líneas</option>
          <option value="Exégesis">Exégesis & Intertextualidad</option>
          <option value="Hermenéutica">Hermenéutica & Lenguas Bíblicas</option>
          <option value="Pastoral">Teología Práctica & Pastoral</option>
        </select>
      </div>

      {/* Lista de Investigaciones */}
      <section className="space-y-4">
        <div className="space-y-3">
          {publicacionesFiltradas.map((pub) => (
            <div
              key={pub.id}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${pub.color}`}>
                    {pub.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{pub.fecha}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100">{pub.titulo}</h3>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">Autor:</strong> {pub.autor}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  🔬 Línea: {pub.linea} | 📥 {pub.descargas} descargas
                </p>
              </div>

              <button
                onClick={() => alert(`Descargando documento PDF: "${pub.titulo}"`)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md w-full sm:w-auto"
              >
                Descargar PDF 📄
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
