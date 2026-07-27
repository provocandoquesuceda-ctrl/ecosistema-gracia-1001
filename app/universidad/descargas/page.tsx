'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DescargasPage() {
  const [categoria, setCategoria] = useState('Todas');

  const recursos = [
    {
      id: 1,
      nombre: 'Plantilla de Ensayo Exegético (Formato Turabian/APA)',
      formato: 'DOCX / Word',
      tamano: '1.2 MB',
      categoria: 'Plantillas',
      descripcion: 'Documento base con márgenes, notas al pie y bibliografía preformateada para entregas académicas.',
      color: 'border-blue-500 text-blue-400 bg-blue-950/30'
    },
    {
      id: 2,
      nombre: 'Tabla Resumen: Verbos y Paradigmas del Griego Koiné',
      formato: 'PDF (HD)',
      tamano: '3.5 MB',
      categoria: 'Idiomas',
      descripcion: 'Guía visual rápida de declinaciones, tiempos verbales y sintaxis para consulta en exégesis.',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/30'
    },
    {
      id: 3,
      nombre: 'Infografía Comparativa: Estructura de los Pactos Bíblicos',
      formato: 'PNG / PDF',
      tamano: '5.8 MB',
      categoria: 'Infografías',
      descripcion: 'Esquema cronológico de la revelación progresiva del Pacto de Gracia desde Génesis hasta Apocalipsis.',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30'
    },
    {
      id: 4,
      nombre: 'Guía Metodológica de Acompañamiento Pastoral',
      formato: 'PDF',
      tamano: '2.1 MB',
      categoria: 'Cuidado Pastoral',
      descripcion: 'Manual práctico de principios de consejería biblocéntrica y prevención del desgaste emocional.',
      color: 'border-purple-500 text-purple-400 bg-purple-950/30'
    }
  ];

  const recursosFiltrados = recursos.filter(
    (r) => categoria === 'Todas' || r.categoria === categoria
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📥 Materiales & Herramientas
        </span>
        <h1 className="text-3xl font-bold mt-2">Centro de Descargas Exegéticas</h1>
        <p className="text-slate-400 text-sm">
          Descarga plantillas de redacción, cuadros sintácticos e infografías para apoyar tus investigaciones teológicas.
        </p>
      </header>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {['Todas', 'Plantillas', 'Idiomas', 'Infografías', 'Cuidado Pastoral'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`text-xs font-bold px-4 py-2 rounded-xl transition-all border ${
              categoria === cat
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Recursos */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recursosFiltrados.map((rec) => (
            <div
              key={rec.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${rec.color}`}>
                    {rec.categoria}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{rec.formato} • {rec.tamano}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-100">{rec.nombre}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{rec.descripcion}</p>
              </div>

              <button
                onClick={() => alert(`Iniciando descarga de: ${rec.nombre}`)}
                className="w-full bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                 Descargar Recurso
              </button>
            </div>
          ))}
        </div>
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
