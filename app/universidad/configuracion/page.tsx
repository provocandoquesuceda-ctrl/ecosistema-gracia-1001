'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConfiguracionPage() {
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifClases, setNotifClases] = useState(true);
  const [modoLectura, setModoLectura] = useState(false);
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
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
          ⚙️ Preferencias & Cuenta
        </span>
        <h1 className="text-3xl font-bold mt-2">Configuración de la Plataforma</h1>
        <p className="text-slate-400 text-sm">
          Personaliza tus alertas de entregas, opciones de privacidad y experiencia de lectura en el campus.
        </p>
      </header>

      {/* Formulario de Ajustes */}
      <form onSubmit={handleGuardar} className="space-y-6">
        {/* Notificaciones */}
        <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            🔔 Alertas & Notificaciones Académicas
          </h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 bg-slate-900 rounded-2xl border border-slate-800 cursor-pointer">
              <span className="text-xs text-slate-200">Recibir resúmenes semanales por correo</span>
              <input
                type="checkbox"
                checked={notifEmail}
                onChange={(e) => setNotifEmail(e.target.checked)}
                className="w-4 h-4 accent-amber-500 rounded"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-slate-900 rounded-2xl border border-slate-800 cursor-pointer">
              <span className="text-xs text-slate-200">Recordatorios de clases en vivo y entregas (1 hora antes)</span>
              <input
                type="checkbox"
                checked={notifClases}
                onChange={(e) => setNotifClases(e.target.checked)}
                className="w-4 h-4 accent-amber-500 rounded"
              />
            </label>
          </div>
        </section>

        {/* Interfaz y Lectura */}
        <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            📖 Modo de Estudio & Visualización
          </h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 bg-slate-900 rounded-2xl border border-slate-800 cursor-pointer">
              <div>
                <p className="text-xs text-slate-200 font-bold">Optimizar lector de textos exegéticos</p>
                <p className="text-[11px] text-slate-400">Aumenta el contraste e interlineado para lectura prolongada de manuscritos.</p>
              </div>
              <input
                type="checkbox"
                checked={modoLectura}
                onChange={(e) => setModoLectura(e.target.checked)}
                className="w-4 h-4 accent-cyan-500 rounded"
              />
            </label>
          </div>
        </section>

        {/* Integraciones */}
        <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            📅 Sincronización Externa
          </h2>

          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <p className="text-xs font-bold text-slate-200">Sincronizar Calendario Académico</p>
              <p className="text-[11px] text-slate-400">Exporta las fechas de exámenes y sesiones en vivo a Google Calendar o iCal.</p>
            </div>
            <button
              type="button"
              className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 text-xs font-bold px-4 py-2 rounded-xl transition-all"
            >
              Copiar Enlace iCal 🔗
            </button>
          </div>
        </section>

        {/* Mensaje de Confirmación & Guardado */}
        <div className="flex items-center justify-between pt-2">
          {guardado ? (
            <span className="text-xs text-emerald-400 font-bold">✓ Preferencias actualizadas correctamente</span>
          ) : (
            <span></span>
          )}

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
          >
            Guardar Cambios
          </button>
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
