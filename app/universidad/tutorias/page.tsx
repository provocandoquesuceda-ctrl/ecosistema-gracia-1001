'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TutoriasPage() {
  const [tutorSeleccionado, setTutorSeleccionado] = useState<number | null>(null);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [motivo, setMotivo] = useState('');
  const [agendado, setAgendado] = useState(false);

  const mentores = [
    {
      id: 1,
      nombre: 'Dr. Aarón Ramos',
      especialidad: 'Exégesis del Nuevo Testamento & Griego Koiné',
      disponibilidad: 'Lunes y Miércoles (18:00 - 21:00 UTC-4)',
      avatar: '👨‍🏫',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/30'
    },
    {
      id: 2,
      nombre: 'Dra. Elena Morales',
      especialidad: 'Teología Sistemática & Pactos Reformados',
      disponibilidad: 'Martes y Jueves (15:00 - 18:00 UTC-4)',
      avatar: '👩‍🏫',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30'
    },
    {
      id: 3,
      nombre: 'Pr. Carlos Mateo',
      especialidad: 'Salud Pastoral & Prevención del Burnout',
      disponibilidad: 'Viernes y Sábados (10:00 - 13:00 UTC-4)',
      avatar: '👨‍⚕️',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/30'
    }
  ];

  const handleAgendar = (e: React.FormEvent) => {
    e.preventDefault();
    if (tutorSeleccionado && fecha && hora) {
      setAgendado(true);
    }
  };

  const tutorActual = mentores.find((m) => m.id === tutorSeleccionado);

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
          🤝 Acompañamiento 1-on-1
        </span>
        <h1 className="text-3xl font-bold mt-2">Tutorías & Mentoría Personalizada</h1>
        <p className="text-slate-400 text-sm">
          Reserva una sesión directa con nuestros docentes para resolver consultas exegéticas o recibir orientación ministerial.
        </p>
      </header>

      {/* Catálogo de Mentores */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          👥 Selecciona un Tutor o Mentor Académico
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mentores.map((m) => {
            const seleccionado = tutorSeleccionado === m.id;
            return (
              <div
                key={m.id}
                onClick={() => {
                  setTutorSeleccionado(m.id);
                  setAgendado(false);
                }}
                className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  seleccionado
                    ? 'bg-slate-800 border-cyan-400 shadow-lg shadow-cyan-950/50 scale-[1.02]'
                    : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl">{m.avatar}</span>
                    {seleccionado && (
                      <span className="text-[10px] font-bold bg-cyan-500 text-slate-950 px-2 py-0.5 rounded-full">
                        Seleccionado
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-100 text-sm">{m.nombre}</h3>
                  <p className="text-xs text-slate-400 leading-snug">{m.especialidad}</p>
                </div>

                <div className="pt-2 border-t border-slate-700/60">
                  <span className="text-[10px] font-mono text-slate-500 block">Horarios habitules:</span>
                  <span className="text-[11px] font-mono text-cyan-300 font-medium">{m.disponibilidad}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Formulario de Agendamiento */}
      {tutorSeleccionado && (
        <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            📅 Programar Sesión con {tutorActual?.nombre}
          </h2>

          {!agendado ? (
            <form onSubmit={handleAgendar} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Fecha de la Sesión:</label>
                  <input
                    type="date"
                    required
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Hora (UTC-4):</label>
                  <input
                    type="time"
                    required
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">Motivo / Temas a tratar:</label>
                <textarea
                  rows={3}
                  required
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  placeholder="Ej. Revisión exegética del pasaje de Romanos 4 o consulta sobre consejería pastoral..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-3 rounded-xl transition-all shadow-md"
              >
                Confirmar Reserva de Tutoría →
              </button>
            </form>
          ) : (
            <div className="bg-cyan-950/80 border border-cyan-500 p-5 rounded-2xl text-center space-y-2">
              <span className="text-3xl">🗓️</span>
              <p className="text-xs font-bold text-cyan-200">¡Tutoría Agendada Exitosamente!</p>
              <p className="text-[11px] text-cyan-300">
                Se ha enviado una invitación de videoconferencia a tu correo para el <strong className="text-white">{fecha}</strong> a las <strong className="text-white">{hora}</strong>.
              </p>
              <button
                onClick={() => setAgendado(false)}
                className="text-[10px] text-cyan-400 underline pt-1 block mx-auto"
              >
                Agendar otra tutoría
              </button>
            </div>
          )}
        </section>
      )}

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
