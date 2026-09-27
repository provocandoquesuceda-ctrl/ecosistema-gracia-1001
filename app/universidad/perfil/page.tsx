'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PerfilPage() {
  const [nombre, setNombre] = useState('Estudiante Activo');
  const [email, setEmail] = useState('estudiante@ecosistemagracia.org');
  const [cohorte, setCohorte] = useState('Cohorte 2026 - Trimestre III');
  const [notificaciones, setNotificaciones] = useState(true);
  const [guardado, setGuardado] = useState(false);

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();
    setGuardado(true);
    setTimeout(() => setGuardado(false), 3000);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          👤 Identidad Académica
        </span>
        <h1 className="text-3xl font-bold mt-2">Perfil & Configuración</h1>
        <p className="text-slate-400 text-sm">
          Administra tu credencial estudiantil, datos personales y preferencias del campus.
        </p>
      </header>

      {/* Carnet Digital */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-3xl border border-amber-500/30 flex flex-col sm:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
        <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-4xl font-extrabold text-amber-400 font-mono shrink-0">
          EA
        </div>

        <div className="space-y-1 text-center sm:text-left flex-1">
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
            Matrícula Activa: UGV-2026-8842
          </span>
          <h2 className="text-xl font-bold text-slate-100">{nombre}</h2>
          <p className="text-xs text-slate-400">{email}</p>
          <p className="text-[11px] text-amber-300 font-medium pt-1">
            🎓 {cohorte}
          </p>
        </div>
      </div>

      {/* Formulario de Configuración */}
      <form onSubmit={handleGuardar} className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          ⚙️ Editar Información de Cuenta
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Nombre Completo:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-400">Correo Electrónico:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-slate-400">Cohorte / Programa Asignado:</label>
          <select
            value={cohorte}
            onChange={(e) => setCohorte(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-all"
          >
            <option value="Cohorte 2026 - Trimestre III">Cohorte 2026 - Trimestre III (Actual)</option>
            <option value="Programa Especial de Hermenéutica">Programa Especial de Hermenéutica</option>
            <option value="Diplomado en Salud Pastoral">Diplomado en Salud Pastoral</option>
          </select>
        </div>

        <div className="flex items-center justify-between bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80">
          <div>
            <p className="text-xs font-bold text-slate-200">Alertas y Avisos Académicos</p>
            <p className="text-[10px] text-slate-400">Recibe recordatorios de clases, entregas de autoevaluación y notas.</p>
          </div>
          <input
            type="checkbox"
            checked={notificaciones}
            onChange={(e) => setNotificaciones(e.target.checked)}
            className="w-4 h-4 accent-amber-400 cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
          >
            Guardar Cambios
          </button>

          {guardado && (
            <span className="text-xs text-emerald-400 font-semibold animate-pulse">
              ✓ Cambios guardados correctamente
            </span>
          )}
        </div>
      </form>

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
