'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InscripcionPage() {
  const [completado, setCompletado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nivelEstudio: 'licenciatura',
    interesPrincipal: 'exegesis'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;
    setCompletado(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
          🏛️ Admisiones Abiertas 2026
        </span>
        <h1 className="text-3xl font-bold mt-2">Formulario de Inscripción</h1>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Inicia tu proceso de formación en la Universidad de la Gracia y la Verdad. Transforma tu entendimiento bíblico y tu ministerio.
        </p>
      </header>

      {!completado ? (
        <form onSubmit={handleSubmit} className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700 space-y-5 shadow-2xl">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300 block">Nombre Completo *</label>
            <input
              type="text"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              placeholder="Ej: Juan Pérez"
              className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 block">Correo Electrónico *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="correo@ejemplo.com"
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 block">WhatsApp / Teléfono</label>
              <input
                type="tel"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                placeholder="+1 (800) 000-0000"
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 block">Programa de Interés</label>
              <select
                value={formData.nivelEstudio}
                onChange={(e) => setFormData({ ...formData, nivelEstudio: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2.5 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
              >
                <option value="licenciatura">Licenciatura Completa (8 Trimestres)</option>
                <option value="intensivo">Programa Intensivo de 4 Meses</option>
                <option value="especializacion">Especialización Ministerial Única</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 block">Área de Enfoque</label>
              <select
                value={formData.interesPrincipal}
                onChange={(e) => setFormData({ ...formData, interesPrincipal: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 text-white px-3 py-2.5 rounded-xl text-xs focus:outline-none focus:border-cyan-500"
              >
                <option value="exegesis">Exégesis y Hermenéutica Cristocéntrica</option>
                <option value="salud">Salud Emocional y Cuidado Pastoral</option>
                <option value="familia">Familia y Crianza bajo la Gracia</option>
                <option value="negocios">Fe, Negocios y Ámbitos de Influencia</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-lg mt-2"
          >
            ✅ Confirmar y Enviar Solicud de Admisión
          </button>
        </form>
      ) : (
        <div className="bg-slate-800 p-8 rounded-3xl border border-emerald-500/50 text-center space-y-6 shadow-2xl">
          <span className="text-5xl">🎉</span>
          <h2 className="text-2xl font-bold text-emerald-300">¡Solicitud Recibida con Éxito!</h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            Bienvenido/a <strong className="text-emerald-400">{formData.nombre}</strong>. Un mentor del comité de admisiones se pondrá en contacto contigo a través de <strong className="text-slate-100">{formData.email}</strong> para completar tu asignación de aula.
          </p>
          <div className="pt-2">
            <Link
              href="/universidad/dashboard"
              className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
            >
              Ir al Panel del Alumno
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;

    try {
      const res = await fetch('/api/inscripcion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setCompletado(true);
      }
    } catch (err) {
      console.error('Error al inscribir:', err);
    }
  };
  