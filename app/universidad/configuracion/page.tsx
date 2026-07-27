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
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConfiguracionPage() {
  const [perfil, setPerfil] = useState({
    nombre: 'Juan Pérez',
    email: 'j.perez@universidad.edu',
    telefono: '+1 (809) 555-0199',
    idioma: 'Español',
    mfaActivo: true,
  });

  const [notifEmail, setNotifEmail] = useState(true);
  const [notifTareas, setNotifTareas] = useState(true);
  const [guardado, setGuardado] = useState(false);

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();
    setGuardado(true);
    setTimeout(() => {
      setGuardado(false);
    }, 3500);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
          ⚙️ Ajustes de Cuenta
        </span>
        <h1 className="text-3xl font-bold mt-2">Configuración & Seguridad</h1>
        <p className="text-slate-400 text-sm">
          Administra tus datos personales, preferencias de notificación y parámetros de seguridad de tu cuenta universitaria.
        </p>
      </header>

      <form onSubmit={handleGuardar} className="space-y-6">
        {/* Datos de Perfil */}
        <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400">
            👤 Información Personal
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Nombre Completo:</label>
              <input
                type="text"
                value={perfil.nombre}
                onChange={(e) => setPerfil({ ...perfil, nombre: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Correo Institucional:</label>
              <input
                type="email"
                disabled
                value={perfil.email}
                className="w-full bg-slate-950 border border-slate-800 text-slate-500 rounded-xl px-4 py-2.5 text-xs cursor-not-allowed"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Teléfono de Contacto:</label>
              <input
                type="text"
                value={perfil.telefono}
                onChange={(e) => setPerfil({ ...perfil, telefono: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Idioma Preferido:</label>
              <select
                value={perfil.idioma}
                onChange={(e) => setPerfil({ ...perfil, idioma: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400 transition-all"
              >
                <option value="Español">Español</option>
                <option value="English">English</option>
              </select>
            </div>
          </div>
        </section>

        {/* Seguridad y 2FA */}
        <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400">
            🔒 Seguridad & Autenticación
          </h2>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80">
            <div>
              <h3 className="text-xs font-bold text-slate-100">Autenticación de Dos Factores (2FA)</h3>
              <p className="text-[11px] text-slate-400">Protege tu cuenta utilizando una aplicación de autenticación (Google Authenticator / Authy).</p>
            </div>

            <button
              type="button"
              onClick={() => setPerfil({ ...perfil, mfaActivo: !perfil.mfaActivo })}
              className={`text-xs font-bold px-4 py-2 rounded-xl border transition-all ${
                perfil.mfaActivo
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800'
                  : 'bg-rose-950/60 text-rose-400 border-rose-800'
              }`}
            >
              {perfil.mfaActivo ? '✓ 2FA Activado' : 'Habilitar 2FA'}
            </button>
          </div>
        </section>

        {/* Notificaciones */}
        <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400">
            🔔 Preferencias de Notificaciones
          </h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={notifEmail}
                onChange={(e) => setNotifEmail(e.target.checked)}
                className="rounded bg-slate-900 border-slate-700 text-sky-500 focus:ring-0"
              />
              <span>Recibir avisos institucionales e imprevistos por correo electrónico.</span>
            </label>

            <label className="flex items-center gap-3 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={notifTareas}
                onChange={(e) => setNotifTareas(e.target.checked)}
                className="rounded bg-slate-900 border-slate-700 text-sky-500 focus:ring-0"
              />
              <span>Recordatorios de fechas límite de tareas y calificaciones publicadas.</span>
            </label>
          </div>
        </section>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
          >
            Guardar Cambios 💾
          </button>

          {guardado && (
            <span className="text-xs text-emerald-400 font-semibold">
              ✓ Ajustes de perfil actualizados correctamente.
            </span>
          )}
        </div>
      </form>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
