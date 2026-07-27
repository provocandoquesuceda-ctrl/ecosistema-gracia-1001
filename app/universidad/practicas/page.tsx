'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PracticasPage() {
  const [horasCompletadas, setHorasCompletadas] = useState(72);
  const horasTotalesRequeridas = 120;

  const [actividad, setActividad] = useState({
    titulo: '',
    horas: '',
    fecha: '',
    supervisor: '',
    descripcion: '',
  });

  const [registrado, setRegistrado] = useState(false);

  const historialPracticas = [
    {
      id: 1,
      titulo: 'Enseñanza Bíblica Comunitaria & Discipulado',
      horas: 20,
      fecha: '18 de Julio, 2026',
      supervisor: 'Pr. Carlos Mateo',
      estado: 'Aprobado',
    },
    {
      id: 2,
      titulo: 'Coordinación de Proyecto de Asistencia Social',
      horas: 15,
      fecha: '05 de Julio, 2026',
      supervisor: 'Lic. Elena Morales',
      estado: 'Aprobado',
    },
    {
      id: 3,
      titulo: 'Tutoría de Apoyo Académico Teológico',
      horas: 37,
      fecha: '12 de Junio, 2026',
      supervisor: 'Dr. Aarón Ramos',
      estado: 'Aprobado',
    },
  ];

  const handleRegistrarHoras = (e: React.FormEvent) => {
    e.preventDefault();
    if (actividad.titulo && actividad.horas) {
      setHorasCompletadas((prev) => prev + Number(actividad.horas));
      setRegistrado(true);
      setTimeout(() => {
        setActividad({ titulo: '', horas: '', fecha: '', supervisor: '', descripcion: '' });
        setRegistrado(false);
      }, 3000);
    }
  };

  const porcentaje = Math.min(Math.round((horasCompletadas / horasTotalesRequeridas) * 100), 100);

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-800">
          🛠️ Campo & Practicum
        </span>
        <h1 className="text-3xl font-bold mt-2">Prácticas Ministeriales & Servicio Social</h1>
        <p className="text-slate-400 text-sm">
          Lleva el control de tus horas de servicio comunitario, pastoreo e impacto social requeridas para tu titulación académica.
        </p>
      </header>

      {/* Progreso de Horas Prácticas */}
      <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-sm font-bold text-slate-100">Progreso del Requisito de Practicum</h2>
            <p className="text-xs text-slate-400">Total requerido para titulación: {horasTotalesRequeridas} horas</p>
          </div>
          <span className="text-xl font-bold font-mono text-orange-400 bg-orange-950/60 px-4 py-1 rounded-xl border border-orange-800">
            {horasCompletadas} / {horasTotalesRequeridas} hrs ({porcentaje}%)
          </span>
        </div>

        {/* Barra de Progreso */}
        <div className="w-full bg-slate-900 rounded-full h-3 border border-slate-700 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-500 to-amber-400 h-full transition-all duration-500"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
      </section>

      {/* Formulario de Reporte de Horas */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-orange-400">
          📝 Registrar Nuevo Reporte de Campo
        </h2>

        <form onSubmit={handleRegistrarHoras} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Título de la Actividad:</label>
              <input
                type="text"
                required
                value={actividad.titulo}
                onChange={(e) => setActividad({ ...actividad, titulo: e.target.value })}
                placeholder="Ej. Taller de Formación Teológica Local"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Horas Realizadas:</label>
              <input
                type="number"
                required
                min="1"
                max="50"
                value={actividad.horas}
                onChange={(e) => setActividad({ ...actividad, horas: e.target.value })}
                placeholder="Ej. 10"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition-all font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Fecha de Ejecución:</label>
              <input
                type="date"
                required
                value={actividad.fecha}
                onChange={(e) => setActividad({ ...actividad, fecha: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-400 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Supervisor / Mentor de Campo:</label>
              <input
                type="text"
                required
                value={actividad.supervisor}
                onChange={(e) => setActividad({ ...actividad, supervisor: e.target.value })}
                placeholder="Ej. Pastor de la comunidad o docente"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-semibold">Resumen de la Actividad:</label>
            <textarea
              rows={3}
              required
              value={actividad.descripcion}
              onChange={(e) => setActividad({ ...actividad, descripcion: e.target.value })}
              placeholder="Describe los objetivos alcanzados y el impacto de la práctica..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-400 transition-all"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            Enviar Reporte a Verificación 🚀
          </button>

          {registrado && (
            <p className="text-xs text-emerald-400 font-semibold pt-1">
              ✓ Reporte registrado exitosamente. Las horas se añadirán tras la aprobación de tu supervisor.
            </p>
          )}
        </form>
      </section>

      {/* Historial de Reportes */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          📜 Historial de Actividades Registradas
        </h2>

        <div className="space-y-3">
          {historialPracticas.map((p) => (
            <div
              key={p.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800 font-bold">
                    {p.estado}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{p.fecha}</span>
                </div>
                <h3 className="text-xs font-bold text-slate-100">{p.titulo}</h3>
                <p className="text-[11px] text-slate-400">Supervisor: {p.supervisor}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-bold font-mono text-orange-400">+{p.horas} hrs</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-orange-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
