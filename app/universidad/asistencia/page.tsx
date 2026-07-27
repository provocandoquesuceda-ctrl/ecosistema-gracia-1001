'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AsistenciaPage() {
  const [codigo, setCodigo] = useState('');
  const [registrado, setRegistrado] = useState(false);

  const historial = [
    {
      id: 'SES-801',
      clase: 'Exégesis de Romanos 8: La Vida en el Espíritu',
      fecha: '20 de Julio, 2026',
      horas: 2,
      estado: 'Confirmado',
      tipo: 'Clase en Vivo'
    },
    {
      id: 'SES-802',
      clase: 'Higiene Emocional y Prevención del Burnout Pastoral',
      fecha: '13 de Julio, 2026',
      horas: 1.5,
      estado: 'Confirmado',
      tipo: 'Taller Pastoral'
    },
    {
      id: 'SES-803',
      clase: 'Introducción a la Sintaxis del Griego Koiné',
      fecha: '06 de Julio, 2026',
      horas: 2,
      estado: 'Confirmado',
      tipo: 'Clase Grabada'
    }
  ];

  const handleValidarCodigo = (e: React.FormEvent) => {
    e.preventDefault();
    if (codigo.trim()) {
      setRegistrado(true);
      setCodigo('');
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          ⏱️ Acreditación & Horas
        </span>
        <h1 className="text-3xl font-bold mt-2">Bitácora de Asistencia Académica</h1>
        <p className="text-slate-400 text-sm">
          Registra tus códigos de clase y monitorea el total de horas lectivas completadas para tu certificación.
        </p>
      </header>

      {/* Resumen de Horas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Horas Acumuladas</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">5.5 hrs</p>
          <p className="text-[11px] text-slate-500">De 10 hrs requeridas en el trimestre</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Porcentaje de Asistencia</span>
          <p className="text-2xl font-extrabold text-teal-400 font-mono">85%</p>
          <p className="text-[11px] text-slate-500">Mínimo exigido: 80%</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Sesiones Validadas</span>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">3 Clases</p>
          <p className="text-[11px] text-slate-500">Sin faltas no justificadas</p>
        </div>
      </div>

      {/* Registro de Código de Clase */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">
          🔑 Registrar Código de Sesión / Clase en Vivo
        </h2>
        <p className="text-xs text-slate-400">
          Ingresa el código facilitado por el profesor durante la transmisión para acreditar tu asistencia:
        </p>

        {!registrado ? (
          <form onSubmit={handleValidarCodigo} className="flex gap-2">
            <input
              type="text"
              required
              placeholder="Ej. UGV-2026-LIVE"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white uppercase placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-all font-mono"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0"
            >
              Validar Código
            </button>
          </form>
        ) : (
          <div className="bg-emerald-950/60 border border-emerald-500 p-3.5 rounded-2xl text-xs text-emerald-200 font-bold flex justify-between items-center">
            <span>✓ ¡Asistencia registrada exitosamente! Se han acreditado +2 horas a tu perfil.</span>
            <button
              onClick={() => setRegistrado(false)}
              className="text-[10px] underline text-emerald-400"
            >
              Registrar otro
            </button>
          </div>
        )}
      </section>

      {/* Historial de Asistencia */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          📜 Historial de Sesiones Acreditadas
        </h2>

        <div className="space-y-3">
          {historial.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase bg-slate-900 text-emerald-400 border border-slate-700 px-2 py-0.5 rounded-full">
                    {item.tipo}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{item.id}</span>
                </div>
                <h3 className="font-bold text-slate-100 text-sm">{item.clase}</h3>
                <p className="text-[11px] text-slate-400">Fecha: {item.fecha}</p>
              </div>

              <div className="text-right w-full sm:w-auto flex justify-between sm:block">
                <span className="text-xs font-bold text-emerald-300 font-mono block">+{item.horas} hrs</span>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">{item.estado}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

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
