'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EnVivoPage() {
  const [mensajes, setMensajes] = useState([
    { id: 1, usuario: 'Estudiante Lucía', texto: '¡Buenas noches a todos desde Santo Domingo!' },
    { id: 2, usuario: 'Pr. Aarón', texto: 'Bienvenidos a todos. En 5 minutos comenzamos la exégesis de Romanos 8.' }
  ]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const handleEnviarChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoMensaje.trim()) return;

    setMensajes((prev) => [
      ...prev,
      { id: Date.now(), usuario: 'Tú (Alumno)', texto: nuevoMensaje }
    ]);
    setNuevoMensaje('');
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-800">
            🔴 Sesión en Directo
          </span>
        </div>
        <h1 className="text-3xl font-bold mt-2">Aula Virtual Magistral</h1>
        <p className="text-slate-400 text-sm">
          Participa en las conferencias interactivas y resuelve tus dudas en tiempo real con el cuerpo docente.
        </p>
      </header>

      {/* Grid: Video + Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contenedor del Video / Transmisión */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-950 rounded-3xl border border-slate-800 aspect-video flex flex-col items-center justify-center p-6 text-center space-y-3 shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-400 text-2xl font-bold">
              ▶️
            </div>
            <h2 className="text-lg font-bold text-slate-100">Clase Especial: Hermenéutica del Nuevo Pacto</h2>
            <p className="text-xs text-slate-400 max-w-md">
              La sesión sincrónica está lista. Si tienes problemas de audio o video, puedes unirte a la sala de respaldo.
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              Unirse vía Zoom / Meet ↗
            </a>
          </div>

          {/* Información del Docente */}
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
            <span className="text-[10px] text-amber-400 font-bold uppercase">Cátedra Principal</span>
            <h3 className="font-bold text-sm text-slate-100">Dr. Aarón Ramos — "La Perspectiva Paulina de la Justificación"</h3>
            <p className="text-xs text-slate-400">Duración estimada: 60 minutos • Material adjunto en la Biblioteca.</p>
          </div>
        </div>

        {/* Chat de Participación en Vivo */}
        <div className="bg-slate-800/90 rounded-3xl border border-slate-700/80 p-5 flex flex-col justify-between h-[450px]">
          <div className="border-b border-slate-700/80 pb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              💬 Chat de la Clase
            </h3>
          </div>

          {/* Lista de Mensajes */}
          <div className="flex-1 overflow-y-auto my-3 space-y-3 pr-1">
            {mensajes.map((m) => (
              <div key={m.id} className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                <span className="font-bold text-amber-400 text-[11px] block">{m.usuario}</span>
                <p className="text-slate-300">{m.texto}</p>
              </div>
            ))}
          </div>

          {/* Formulario de Mensaje */}
          <form onSubmit={handleEnviarChat} className="flex gap-2 pt-2 border-t border-slate-700/80">
            <input
              type="text"
              placeholder="Pregunta o comenta..."
              value={nuevoMensaje}
              onChange={(e) => setNuevoMensaje(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-400 transition-all"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-red-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
