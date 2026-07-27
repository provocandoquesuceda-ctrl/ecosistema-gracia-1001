'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TesisPage() {
  const [entregado, setEntregado] = useState(false);
  const [comentario, setComentario] = useState('');

  const entregasPrevias = [
    {
      id: 'ADV-01',
      capitulo: 'Capítulo I: Planteamiento del Problema y Marco Teórico',
      fecha: '10 de Junio, 2026',
      estado: 'Aprobado con observaciones',
      comentarioTutor: 'Excelente fundamentación exegética. Revisar el formato de citas en notas al pie.',
      color: 'text-amber-400 bg-amber-950/40 border-amber-800'
    },
    {
      id: 'ADV-02',
      capitulo: 'Capítulo II: Análisis Exegético de Romanos 3:21-26',
      fecha: '05 de Julio, 2026',
      estado: 'En revisión por el Jurado',
      comentarioTutor: 'Pendiente de dictamen final.',
      color: 'text-cyan-400 bg-cyan-950/40 border-cyan-800'
    }
  ];

  const handleSubirAvance = (e: React.FormEvent) => {
    e.preventDefault();
    setEntregado(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          🎓 Investigación & Graduación
        </span>
        <h1 className="text-3xl font-bold mt-2">Tesina de Cierre & Proyecto Teológico</h1>
        <p className="text-slate-400 text-sm">
          Monitorea los avances de tu tesis, sube borradores en PDF y consulta los dictámenes de tu comisión evaluadora.
        </p>
      </header>

      {/* Resumen del Proyecto */}
      <div className="bg-slate-800/90 p-6 rounded-3xl border border-slate-700 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-700/80 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-full border border-amber-800">
              Tema Registrado
            </span>
            <h2 className="text-lg font-bold text-slate-100">
              "La Imputación de la Justicia de Cristo como Fundamento de la Paz Pastoral"
            </h2>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Progreso General</span>
            <span className="text-xl font-extrabold text-amber-400 font-mono">65%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
            <span className="text-slate-400 text-[11px] block">Asesor / Tutor Principal:</span>
            <span className="font-bold text-slate-200">Dr. Aarón Ramos</span>
          </div>
          <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
            <span className="text-slate-400 text-[11px] block">Fecha Límite de Presentación:</span>
            <span className="font-bold text-slate-200">15 de Noviembre, 2026</span>
          </div>
        </div>
      </div>

      {/* Cargar Nuevo Borrador */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">
          📤 Entregar Nuevo Borrador / Capítulo
        </h2>

        {!entregado ? (
          <form onSubmit={handleSubirAvance} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-400">Capítulo o Sección:</label>
              <input
                type="text"
                required
                placeholder="Ej. Capítulo III: Aplicación Pastoral y Conclusiones"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">Notas para el Asesor (Opcional):</label>
              <textarea
                rows={3}
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Indica cambios específicos o dudas exegéticas relativas a esta entrega..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
              />
            </div>

            <div className="border-2 border-dashed border-slate-700 bg-slate-900/50 p-6 rounded-2xl text-center space-y-1">
              <span className="text-2xl">📄</span>
              <p className="text-xs font-bold text-slate-300">Seleccionar documento en formato PDF</p>
              <p className="text-[10px] text-slate-500">Máximo 25 MB por archivo</p>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-3 rounded-xl transition-all shadow-md"
            >
              Enviar Borrador a Revisión →
            </button>
          </form>
        ) : (
          <div className="bg-emerald-950/60 border border-emerald-500 p-4 rounded-2xl text-center space-y-2">
            <span className="text-2xl">✅</span>
            <p className="text-xs font-bold text-emerald-200">¡Avance enviado con éxito!</p>
            <p className="text-[11px] text-emerald-300">
              Tu tutor ha sido notificado. Recibirás las observaciones en un plazo de 3 a 5 días hábiles.
            </p>
            <button
              onClick={() => setEntregado(false)}
              className="text-[10px] text-emerald-400 underline pt-1 block mx-auto"
            >
              Hacer otra entrega
            </button>
          </div>
        )}
      </section>

      {/* Historial de Revisiones */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          📜 Historial de Entregas & Dictámenes
        </h2>

        <div className="space-y-3">
          {entregasPrevias.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-3"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.color}`}>
                    {item.estado}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{item.id}</span>
                </div>
                <span className="text-[11px] text-slate-400">{item.fecha}</span>
              </div>

              <h3 className="font-bold text-slate-100 text-sm">{item.capitulo}</h3>

              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-amber-400 text-[11px] block">Dictamen del Tutor:</span>
                <p className="mt-0.5">{item.comentarioTutor}</p>
              </div>
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
