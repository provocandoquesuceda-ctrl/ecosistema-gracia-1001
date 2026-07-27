'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdmisionesPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    programa: 'Licenciatura en Teología',
    testimonios: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [procesando, setProcesando] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcesando(true);

    setTimeout(() => {
      setProcesando(false);
      setEnviado(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
          📝 Oficina de Admisiones
        </span>
        <h1 className="text-3xl font-bold mt-2">Solicitud de Ingreso Académico</h1>
        <p className="text-slate-400 text-sm">
          Aplica a nuestros programas de grado, maestría y diplomas teológicos. Completa tus datos para iniciar el proceso de admisión.
        </p>
      </header>

      {/* Formulario de Solicitud */}
      <section className="bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-6 shadow-xl">
        {!enviado ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-teal-400 border-b border-slate-700 pb-2">
              📋 Información General del Aspirante
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-semibold">Nombre Completo:</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Ej. Juan Carlos Pérez"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-semibold">Correo Electrónico:</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="correo@ejemplo.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-semibold">Teléfono / WhatsApp:</label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  placeholder="+1 (809) 000-0000"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-semibold">Programa Académico de Interés:</label>
                <select
                  value={formData.programa}
                  onChange={(e) => setFormData({ ...formData, programa: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-400 transition-all"
                >
                  <option value="Licenciatura en Teología">Licenciatura en Teología Exegética</option>
                  <option value="Maestría en Estudios Bíblicos">Maestría en Estudios Bíblicos</option>
                  <option value="Diplomado en Griego Koiné">Diplomado en Griego Koiné & Hebreo</option>
                  <option value="Certificado en Teología Pastoral">Certificado en Teología Pastoral</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Breve Reseña o Testimonio Ministerial:</label>
              <textarea
                rows={4}
                required
                value={formData.testimonios}
                onChange={(e) => setFormData({ ...formData, testimonios: e.target.value })}
                placeholder="Comparte brevemente tu llamado o motivación para ingresar al programa..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={procesando}
              className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              {procesando ? 'Procesando Solicitud...' : 'Enviar Solicitud de Admisión →'}
            </button>
          </form>
        ) : (
          <div className="bg-teal-950/80 border border-teal-500 p-6 rounded-2xl text-center space-y-3">
            <span className="text-4xl">🎉</span>
            <h3 className="text-sm font-bold text-teal-200">¡Solicitud de Admisión Recibida!</h3>
            <p className="text-xs text-teal-300 leading-relaxed max-w-lg mx-auto">
              Estimado/a <strong className="text-white">{formData.nombre}</strong>, hemos registrado tu solicitud para el programa de <strong className="text-white">{formData.programa}</strong>. El comité de admisiones revisará tus datos y te contactará al correo <strong className="text-white">{formData.email}</strong>.
            </p>
            <button
              onClick={() => {
                setEnviado(false);
                setFormData({ nombre: '', email: '', telefono: '', programa: 'Licenciatura en Teología', testimonios: '' });
              }}
              className="text-xs text-teal-400 underline pt-2 block mx-auto"
            >
              Enviar otra solicitud
            </button>
          </div>
        )}
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-teal-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
