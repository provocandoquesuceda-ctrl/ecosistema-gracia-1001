'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NotificacionesPage() {
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      titulo: 'Nueva calificación publicada',
      mensaje: 'Se ha publicado la nota del Ensayo Exegético sobre Gálatas (98/100).',
      fecha: 'Hace 2 horas',
      categoria: 'Académico',
      leida: false,
      enlace: '/universidad/calificaciones',
      color: 'border-teal-500 text-teal-400 bg-teal-950/30'
    },
    {
      id: 2,
      titulo: 'Recordatorio de Clase en Vivo',
      mensaje: 'Mañana a las 19:00 UTC-4 tendrás la sesión sincrónica de Sintaxis Griega.',
      fecha: 'Hace 5 horas',
      categoria: 'En Vivo',
      leida: false,
      enlace: '/universidad/en-vivo',
      color: 'border-red-500 text-red-400 bg-red-950/30'
    },
    {
      id: 3,
      titulo: 'Documento Emitido por Secretaría',
      mensaje: 'Tu Constancia de Matrícula Activa ha sido aprobada y firmada digitalmente.',
      fecha: 'Ayer',
      categoria: 'Secretaría',
      leida: true,
      enlace: '/universidad/secretaria',
      color: 'border-indigo-500 text-indigo-400 bg-indigo-950/30'
    },
    {
      id: 4,
      titulo: 'Nueva vacante en Red Alumni',
      mensaje: 'Se ha publicado una vacante para Docente de Hermenéutica Teológica.',
      fecha: 'Hace 2 días',
      categoria: 'Alumni',
      leida: true,
      enlace: '/universidad/alumni',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30'
    }
  ]);

  const marcarTodasLeidas = () => {
    setNotificaciones(prev => prev.map(n => ({ ...n, leida: true })));
  };

  const marcarComoLeida = (id: number) => {
    setNotificaciones(prev => prev.map(n => n.id === id ? { ...n, leida: true } : n));
  };

  const noLeidasCount = notificaciones.filter(n => !n.leida).length;

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2 flex justify-between items-end flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
              🔔 Alertas del Campus
            </span>
            {noLeidasCount > 0 && (
              <span className="text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full">
                {noLeidasCount} Nuevas
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold mt-2">Bandeja de Notificaciones</h1>
          <p className="text-slate-400 text-sm">
            Mantente al día con los avisos del cuerpo docente, trámites y eventos del campus.
          </p>
        </div>

        {noLeidasCount > 0 && (
          <button
            onClick={marcarTodasLeidas}
            className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
          >
            Marcar todas como leídas ✓
          </button>
        )}
      </header>

      {/* Lista de Notificaciones */}
      <section className="space-y-3">
        {notificaciones.map((n) => (
          <div
            key={n.id}
            onClick={() => marcarComoLeida(n.id)}
            className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer ${
              n.leida
                ? 'bg-slate-800/40 border-slate-800 opacity-80'
                : 'bg-slate-800 border-slate-700 shadow-md'
            }`}
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                {!n.leida && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                )}
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${n.color}`}>
                  {n.categoria}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">• {n.fecha}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-100">{n.titulo}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{n.mensaje}</p>
            </div>

            <Link
              href={n.enlace}
              className="bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition-all w-full sm:w-auto text-center shrink-0"
            >
              Ver Detalle →
            </Link>
          </div>
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
