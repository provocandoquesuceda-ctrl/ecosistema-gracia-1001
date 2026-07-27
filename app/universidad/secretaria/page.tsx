'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SecretariaPage() {
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState('Constancia de Estudios');
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  const solicitudes = [
    {
      id: 'TRM-2026-104',
      documento: 'Constancia de Matrícula Activa',
      fecha: '18 de Julio, 2026',
      estado: 'Emitido',
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800'
    },
    {
      id: 'TRM-2026-089',
      documento: 'Carta de Recomendación Ministerial',
      fecha: '02 de Junio, 2026',
      estado: 'Emitido',
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800'
    }
  ];

  const handleSolicitar = (e: React.FormEvent) => {
    e.preventDefault();
    setSolicitudEnviada(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
          📜 Ventanilla de Secretaría
        </span>
        <h1 className="text-3xl font-bold mt-2">Secretaría Académica Virtual</h1>
        <p className="text-slate-400 text-sm">
          Solicita constancias institucionales, récords de notas y certificaciones con firma digital.
        </p>
      </header>

      {/* Formulario de Solicitud */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">
          📑 Solicitar Nuevo Documento Oficial
        </h2>

        {!solicitudEnviada ? (
          <form onSubmit={handleSolicitar} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-400">Tipo de Documento:</label>
              <select
                value={tramiteSeleccionado}
                onChange={(e) => setTramiteSeleccionado(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-400 transition-all"
              >
                <option value="Constancia de Estudios">Constancia de Estudios Activo</option>
                <option value="Record de Calificaciones">Récord de Calificaciones Oficcial</option>
                <option value="Carta de Recomendacion">Carta de Recomendación Ministerial</option>
                <option value="Expedición de Titulo">Expedición de Título / Diploma del Trimestre</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">Motivo / Institución Receptora (Opcional):</label>
              <input
                type="text"
                placeholder="Ej. Requisito para trámite eclesiástico o beca"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md"
            >
              Procesar Solicitud de Documento →
            </button>
          </form>
        ) : (
          <div className="bg-indigo-950/60 border border-indigo-500 p-4 rounded-2xl text-center space-y-2">
            <p className="text-xs font-bold text-indigo-200">¡Solicitud recibida correctamente!</p>
            <p className="text-[11px] text-indigo-300">
              Tu solicitud para <strong className="text-white">{tramiteSeleccionado}</strong> ha sido enviada a validación. Recibirás el documento PDF en tu correo en 24 a 48 horas.
            </p>
            <button
              onClick={() => setSolicitudEnviada(false)}
              className="text-[10px] text-indigo-400 underline pt-1 block mx-auto"
            >
              Hacer otra solicitud
            </button>
          </div>
        )}
      </section>

      {/* Mis Solicitudes Previas */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          📂 Historial de Trámites Realizados
        </h2>

        <div className="space-y-3">
          {solicitudes.map((s) => (
            <div
              key={s.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${s.color}`}>
                    {s.estado}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{s.id}</span>
                </div>
                <h3 className="font-bold text-slate-100 text-sm">{s.documento}</h3>
                <p className="text-[11px] text-slate-400">Solicitado el: {s.fecha}</p>
              </div>

              <button className="bg-slate-900 hover:bg-slate-700 text-indigo-300 border border-slate-700 text-[11px] font-bold px-4 py-2 rounded-xl transition-all w-full sm:w-auto">
                Descargar Documento 📥
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
