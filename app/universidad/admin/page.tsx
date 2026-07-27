'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [materiaFiltro, setMateriaFiltro] = useState('Todas');
  const [anuncio, setAnuncio] = useState('');
  const [anuncioPublicado, setAnuncioPublicado] = useState(false);

  const entregasPendientes = [
    {
      id: 'ENT-101',
      estudiante: 'Marcos Aurelio Pérez',
      curso: 'Hermenéutica Exegética',
      tarea: 'Ensayo Crítico sobre Romanos 8',
      fecha: '25 de Julio, 2026',
      estado: 'Pendiente'
    },
    {
      id: 'ENT-102',
      estudiante: 'Sofía Rodríguez',
      curso: 'Griego Koiné II',
      tarea: 'Traducción y Análisis de Juan 1:1-14',
      fecha: '26 de Julio, 2026',
      estado: 'Pendiente'
    },
    {
      id: 'ENT-103',
      estudiante: 'David Samuel Gómez',
      curso: 'Historia de la Iglesia',
      tarea: 'Línea de Tiempo del Concilio de Nicea',
      fecha: '26 de Julio, 2026',
      estado: 'Pendiente'
    }
  ];

  const handlePublicarAnuncio = (e: React.FormEvent) => {
    e.preventDefault();
    if (anuncio.trim()) {
      setAnuncioPublicado(true);
      setTimeout(() => {
        setAnuncio('');
        setAnuncioPublicado(false);
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-800">
          ⚙️ Panel Docente & Control
        </span>
        <h1 className="text-3xl font-bold mt-2">Gestión Académica & Administración</h1>
        <p className="text-slate-400 text-sm">
          Supervisa entregas de estudiantes, asigna calificaciones y publica comunicados oficiales para la facultad.
        </p>
      </header>

      {/* Métricas Generales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Estudiantes Activos</span>
          <p className="text-2xl font-extrabold text-rose-400 font-mono">142</p>
          <p className="text-[11px] text-slate-400">En 6 programas teológicos</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Tareas por Calificar</span>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">18</p>
          <p className="text-[11px] text-amber-300">Requieren revisión docente</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Promedio de Aprobación</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">94.2%</p>
          <p className="text-[11px] text-slate-400">Trimestre en curso</p>
        </div>
      </div>

      {/* Lista de Trabajos por Revisar */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            📥 Entregas Recientes por Evaluar
          </h2>
        </div>

        <div className="space-y-3">
          {entregasPendientes.map((e) => (
            <div
              key={e.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-900 font-bold">
                    {e.id}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{e.curso}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-100">{e.tarea}</h3>
                <p className="text-xs text-slate-400">
                  Estudiante: <strong className="text-slate-200">{e.estudiante}</strong> — {e.fecha}
                </p>
              </div>

              <button
                onClick={() => alert(`Abriendo panel de calificación para ${e.estudiante}`)}
                className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md w-full sm:w-auto"
              >
                Evaluar Trabajo →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Emisión de Anuncio Oficial */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-rose-400">
          📢 Publicar Anuncio Oficial a la Comunidad
        </h2>

        <form onSubmit={handlePublicarAnuncio} className="space-y-3">
          <textarea
            rows={3}
            required
            value={anuncio}
            onChange={(e) => setAnuncio(e.target.value)}
            placeholder="Escribe un comunicado para que sea visible en el panel general de todos los estudiantes..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-all"
          />

          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            Difundir Comunicado 🚀
          </button>

          {anuncioPublicado && (
            <p className="text-xs text-emerald-400 font-semibold pt-1">
              ✓ Comunicado difundido exitosamente a todos los alumnos.
            </p>
          )}
        </form>
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-rose-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
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

export default function AdminUniversidadPage() {
  const [filtroMateria, setFiltroMateria] = useState('Todas');
  const [reporteDescargado, setReporteDescargado] = useState(false);

  const metricasGlobales = [
    { titulo: 'Matrícula Total', valor: '342 Estudiantes', cambio: '+12% este trimestre', color: 'text-sky-400 border-sky-800 bg-sky-950/40' },
    { titulo: 'Becas Concedidas', valor: '45 Estudiantes', cambio: '$12,400 USD invertidos', color: 'text-emerald-400 border-emerald-800 bg-emerald-950/40' },
    { titulo: 'Tasa de Completitud', valor: '91.4%', cambio: 'Rendimiento general', color: 'text-purple-400 border-purple-800 bg-purple-950/40' },
    { titulo: 'Tickets Pendientes', valor: '3 Solicitudes', cambio: 'Mesa de ayuda activa', color: 'text-amber-400 border-amber-800 bg-amber-950/40' },
  ];

  const logsAuditoria = [
    { id: 'LOG-8921', usuario: 'Dra. Elena Gómez', accion: 'Calificaciones publicadas - Griego II', hora: 'Hace 12 min', tipo: 'Docente' },
    { id: 'LOG-8920', usuario: 'Juan Pérez (ID-8842)', accion: 'Solicitud de Constancia de Estudio', hora: 'Hace 35 min', tipo: 'Trámite' },
    { id: 'LOG-8919', usuario: 'Sistema de Seguridad', accion: 'Autenticación 2FA validada exitosamente', hora: 'Hace 1 hora', tipo: 'Seguridad' },
    { id: 'LOG-8918', usuario: 'Comité de Becas', accion: 'Aprobación de Beca Pastoral a estudiante', hora: 'Hace 3 horas', tipo: 'Financiero' },
  ];

  const handleDescargarReporte = () => {
    setReporteDescargado(true);
    setTimeout(() => {
      setReporteDescargado(false);
    }, 3500);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-800">
            📊 Administración Central
          </span>
          <h1 className="text-3xl font-bold mt-2">Módulo de Auditoría & Control</h1>
          <p className="text-slate-400 text-sm">
            Monitoreo en tiempo real de operaciones, rendimiento académico y seguridad institucional.
          </p>
        </div>

        <button
          onClick={handleDescargarReporte}
          className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md self-start sm:self-auto"
        >
          Exportar Reporte Ejecutivo 📥
        </button>
      </header>

      {reporteDescargado && (
        <div className="bg-emerald-950/80 border border-emerald-500/50 p-4 rounded-2xl text-xs text-emerald-300 font-semibold">
          ✓ Reporte de auditoría e indicadores globales generado exitosamente en formato consolidado.
        </div>
      )}

      {/* Métricas Principales */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricasGlobales.map((m, i) => (
          <div key={i} className="bg-slate-800/80 p-5 rounded-3xl border border-slate-700/80 space-y-2">
            <span className="text-xs text-slate-400 font-semibold">{m.titulo}</span>
            <p className="text-2xl font-bold text-white">{m.valor}</p>
            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border inline-block ${m.color}`}>
              {m.cambio}
            </span>
          </div>
        ))}
      </section>

      {/* Tabla / Logs de Auditoría */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <div className="flex justify-between items-center border-b border-slate-700 pb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-rose-400">
            📜 Registro de Actividad del Sistema (Audit Log)
          </h2>
          <span className="text-[10px] text-slate-400 font-mono">Actualizado en vivo</span>
        </div>

        <div className="space-y-3">
          {logsAuditoria.map((log) => (
            <div
              key={log.id}
              className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400">{log.id}</span>
                  <span className="text-slate-200 font-bold">{log.usuario}</span>
                  <span className="text-[9px] bg-slate-800 px-2 py-0.5 rounded text-rose-300 border border-rose-950">
                    {log.tipo}
                  </span>
                </div>
                <p className="text-slate-300">{log.accion}</p>
              </div>

              <span className="text-[11px] text-slate-500 font-mono self-end sm:self-center">{log.hora}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-rose-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
