'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MentoriaPage() {
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  const mentorAsignado = {
    nombre: 'Dr. Pastor Aarón Ramos',
    especialidad: 'Exégesis del Nuevo Pacto & Identidad en Cristo',
    disponibilidad: 'Martes y Jueves (6:00 PM - 8:00 PM)',
    avatar: '👨‍🏫'
  };

  const bitacora = [
    { sesion: 'Sesión 1', tema: 'Alineación de Expectativas y Sanidad del Legado Religioso', estado: 'Completada' },
    { sesion: 'Sesión 2', tema: 'Desarrollo del Proyecto Práctico de Campo (Trimestre 1)', estado: 'Pendiente' }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800">
          👥 Acompañamiento Académico & Espiritual
        </span>
        <h1 className="text-3xl font-bold mt-2">Centro de Mentoría Dual</h1>
        <p className="text-slate-400 text-sm">
          Conexión directa entre catedráticos y estudiantes para guiar el proceso intensivo de formación.
        </p>
      </header>

      {/* Tarjeta del Mentor Asignado */}
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="text-5xl bg-slate-900 p-3 rounded-2xl border border-slate-700">
            {mentorAsignado.avatar}
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider font-bold text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
              Catedrático / Mentor Asignado
            </span>
            <h2 className="text-xl font-bold mt-1">{mentorAsignado.nombre}</h2>
            <p className="text-xs text-slate-400">{mentorAsignado.especialidad}</p>
            <p className="text-xs text-emerald-400 mt-1 font-mono">📅 {mentorAsignado.disponibilidad}</p>
          </div>
        </div>

        <button
          onClick={() => setSolicitudEnviada(true)}
          disabled={solicitudEnviada}
          className={`px-5 py-3 rounded-xl font-bold text-xs transition-all ${
            solicitudEnviada
              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800 cursor-default'
              : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg'
          }`}
        >
          {solicitudEnviada ? '✓ Solicitud de Cita Enviada' : '📅 Programar Sesión de Mentoría'}
        </button>
      </div>

      {/* Bitácora de Sesiones */}
      <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
        <h3 className="text-base font-bold text-purple-300">📋 Bitácora de Seguimiento Individual</h3>
        <div className="space-y-3">
          {bitacora.map((b, idx) => (
            <div key={idx} className="bg-slate-900 p-4 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-purple-400">{b.sesion}: </span>
                <span className="text-slate-200">{b.tema}</span>
              </div>
              <span
                className={`px-2.5 py-1 rounded-full font-bold text-[10px] border ${
                  b.estado === 'Completada'
                    ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                    : 'bg-amber-950 text-amber-400 border-amber-800'
                }`}
              >
                {b.estado}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}