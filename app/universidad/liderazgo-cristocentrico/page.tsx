'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LiderazgoCristocentricoPage() {
  const [nivelCarga, setNivelCarga] = useState(3);
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const [mensajeConfidencial, setMensajeConfidencial] = useState('');

  const niveles = [
    { nivel: 1, etiqueta: 'Excelente', color: 'text-emerald-400', desc: 'Ritmo ministerial balanceado y con buen tiempo de descanso.' },
    { nivel: 2, etiqueta: 'Estable', color: 'text-teal-400', desc: 'Carga manejable con cansancio natural por la rutina.' },
    { nivel: 3, etiqueta: 'Atención', color: 'text-amber-400', desc: 'Acumulación de fatiga. Conviene delegar tareas y priorizar descanso.' },
    { nivel: 4, etiqueta: 'Alerta de Burnout', color: 'text-red-400', desc: 'Agotamiento elevado. Se recomienda pausa activa y consejería.' }
  ];

  const handleEnviarConfidencial = (e: React.FormEvent) => {
    e.preventDefault();
    if (mensajeConfidencial) setSolicitudEnviada(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
          👑 Cuidado del Líder
        </span>
        <h1 className="text-3xl font-bold mt-2">Salud Pastoral & Liderazgo Cristocéntrico</h1>
        <p className="text-slate-400 text-sm">
          Herramientas de acompañamiento, prevención del agotamiento y fortalecimiento emocional para líderes.
        </p>
      </header>

      {/* Barómetro de Carga Ministerial */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          📊 Barómetro Personal de Carga Ministerial
        </h2>
        <p className="text-xs text-slate-400">
          Ajusta el indicador según cómo te sientes en tu servicio actual para recibir una recomendación:
        </p>

        <div className="space-y-3 pt-2">
          <input
            type="range"
            min="1"
            max="4"
            value={nivelCarga}
            onChange={(e) => setNivelCarga(Number(e.target.value))}
            className="w-full accent-cyan-400 bg-slate-900 h-2 rounded-lg cursor-pointer"
          />

          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Estado de Carga:</span>
              <span className={`font-bold ${niveles[nivelCarga - 1].color}`}>
                {niveles[nivelCarga - 1].etiqueta}
              </span>
            </div>
            <p className="text-xs text-slate-300 pt-1">
              {niveles[nivelCarga - 1].desc}
            </p>
          </div>
        </div>
      </section>

      {/* Canal Confidencial de Apoyo */}
      <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          🔒 Línea Confidencial de Cuidado Pastoral
        </h2>
        <p className="text-xs text-slate-400">
          Escribe a nuestro equipo ministerial si estás pasando por una etapa de alto estrés, crisis de fe o necesidad de escucha pastoral.
        </p>

        {!solicitudEnviada ? (
          <form onSubmit={handleEnviarConfidencial} className="space-y-3">
            <textarea
              rows={3}
              placeholder="Escribe tu mensaje confidencial aquí..."
              value={mensajeConfidencial}
              onChange={(e) => setMensajeConfidencial(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
            />
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md"
            >
              Enviar Nota Confidencial
            </button>
          </form>
        ) : (
          <div className="bg-cyan-950/60 border border-cyan-500 p-4 rounded-2xl text-center space-y-1">
            <p className="text-xs font-bold text-cyan-200">¡Mensaje recibido con total confidencialidad!</p>
            <p className="text-[11px] text-cyan-300">
              Un mentor asignado se pondrá en contacto privado contigo en las próximas horas.
            </p>
          </div>
        )}
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
