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
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MentoriaPage() {
  const [agendado, setAgendado] = useState(false);
  const [fecha, setFecha] = useState('');

  const handleAgendar = (e: React.FormEvent) => {
    e.preventDefault();
    if (fecha) setAgendado(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800">
          👥 Acompañamiento Pastoral
        </span>
        <h1 className="text-3xl font-bold mt-2">Centro de Mentoría Dual</h1>
        <p className="text-slate-400 text-sm">
          Conéctate con tu mentor asignado para recibir consejería teológica, orientación ministerial y soporte personal.
        </p>
      </header>

      {/* Perfil del Mentor */}
      <div className="bg-slate-800/90 p-6 rounded-3xl border border-purple-500/30 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-950 border border-purple-500 flex items-center justify-center text-3xl font-bold text-purple-300">
            AR
          </div>
          <div className="space-y-1">
            <span className="text-[10px] bg-purple-950 text-purple-300 border border-purple-700 px-2.5 py-0.5 rounded-full font-bold">
              Mentor Principal Asignado
            </span>
            <h2 className="text-xl font-bold text-slate-100">Dr. Aarón Ramos</h2>
            <p className="text-xs text-slate-400">
              Especialista en Hermenéutica Cristocéntrica y Cuidado Pastoral • <span className="text-purple-300">Disponible</span>
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-700/60 pt-3">
          "Mi compromiso es acompañarte en tu crecimiento académico y espiritual, asegurándome de que ministres desde la plenitud de la gracia y no desde la carga del burnout."
        </p>
      </div>

      {/* Agendar Sesión */}
      <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          📅 Agendar Cita Uno a Uno
        </h3>

        {!agendado ? (
          <form onSubmit={handleAgendar} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-400">Selecciona fecha y hora preferida:</label>
              <input
                type="datetime-local"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-lg"
            >
              Confirmar Solicitud de Mentoría
            </button>
          </form>
        ) : (
          <div className="bg-purple-950/60 border border-purple-500 p-4 rounded-2xl text-center space-y-2">
            <p className="text-xs font-bold text-purple-200">¡Sesión reservada exitosamente!</p>
            <p className="text-[11px] text-purple-300">
              Se ha enviado la confirmación al correo de tu mentor. Recibirás el enlace de la videollamada pronto.
            </p>
          </div>
        )}
      </div>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-purple-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
