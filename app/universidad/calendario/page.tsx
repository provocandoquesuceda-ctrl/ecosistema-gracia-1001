'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CalendarioPage() {
  const [filtro, setFiltro] = useState('Todos');

  const eventos = [
    {
      id: 1,
      titulo: 'Clase Magistral: Exégesis de Romanos 8',
      fecha: '28 de Julio, 2026',
      hora: '19:00 UTC-4',
      tipo: 'Clase en Vivo',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/30',
      enlace: '/universidad/tutor'
    },
    {
      id: 2,
      titulo: 'Cierre de Entrega: Cuestionario de Hermenéutica II',
      fecha: '02 de Agosto, 2026',
      hora: '23:59 UTC-4',
      tipo: 'Evaluación',
      color: 'border-teal-500 text-teal-400 bg-teal-950/30',
      enlace: '/universidad/evaluacion'
    },
    {
      id: 3,
      titulo: 'Taller de Salud Pastoral: Manejo del Estrés Ministerial',
      fecha: '05 de Agosto, 2026',
      hora: '20:00 UTC-4',
      tipo: 'Salud Pastoral',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/30',
      enlace: '/universidad/liderazgo-cristocentrico'
    },
    {
      id: 4,
      titulo: 'Sesión Grupal de Mentoría con Dr. Aarón Ramos',
      fecha: '10 de Agosto, 2026',
      hora: '18:30 UTC-4',
      tipo: 'Mentoría',
      color: 'border-purple-500 text-purple-400 bg-purple-950/30',
      enlace: '/universidad/mentoria'
    }
  ];

  const eventosFiltrados = filtro === 'Todos'
    ? eventos
    : eventos.filter((e) => e.tipo === filtro);

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📅 Cronograma Académico
        </span>
        <h1 className="text-3xl font-bold mt-2">Calendario de Clases & Entregas</h1>
        <p className="text-slate-400 text-sm">
          Mantén el control de tus sesiones en vivo, fechas límites de evaluación y talleres del trimestre.
        </p>
      </header>

      {/* Filtros de Categoría */}
      <div className="flex flex-wrap gap-2">
        {['Todos', 'Clase en Vivo', 'Evaluación', 'Salud Pastoral', 'Mentoría'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all border ${
              filtro === cat
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de Eventos */}
      <div className="space-y-4">
        {eventosFiltrados.map((ev) => (
          <div
            key={ev.id}
            className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${ev.color}`}>
                  {ev.tipo}
                </span>
                <span className="text-xs font-mono text-slate-400">⏰ {ev.hora}</span>
              </div>
              <h2 className="text-base font-bold text-slate-100">{ev.titulo}</h2>
              <p className="text-xs text-slate-400">
                Fecha: <strong className="text-slate-200">{ev.fecha}</strong>
              </p>
            </div>

            <Link
              href={ev.enlace}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all text-center block shrink-0"
            >
              Ver Módulo →
            </Link>
          </div>
        ))}
      </div>

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

export default function CalendarioPage() {
  const [filtro, setFiltro] = useState('Todos');

  const eventos = [
    {
      id: 1,
      fecha: '28 de Julio, 2026',
      hora: '19:00 UTC-4',
      titulo: 'Clase en Vivo: Sintaxis y Análisis del Griego Koiné',
      tipo: 'Clase en Vivo',
      modulo: 'Exégesis del Nuevo Testamento',
      color: 'border-red-500 text-red-400 bg-red-950/30'
    },
    {
      id: 2,
      fecha: '05 de Agosto, 2026',
      hora: '23:59 UTC-4',
      titulo: 'Entrega Final: Ensayo Hermenéutico sobre Gálatas',
      tipo: 'Entrega',
      modulo: 'Hermenéutica Aplicada',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30'
    },
    {
      id: 3,
      fecha: '12 de Agosto, 2026',
      hora: '18:00 UTC-4',
      titulo: 'Examen Trimestral de Teología Reformada y Pactos',
      tipo: 'Examen',
      modulo: 'Teología Sistemática',
      color: 'border-teal-500 text-teal-400 bg-teal-950/30'
    },
    {
      id: 4,
      fecha: '20 de Agosto, 2026',
      hora: '20:00 UTC-4',
      titulo: 'Webinar Especial: Prevención del Burnout Pastoral',
      tipo: 'Webinar',
      modulo: 'Salud Pastoral & Cuidado',
      color: 'border-purple-500 text-purple-400 bg-purple-950/30'
    }
  ];

  const eventosFiltrados = eventos.filter(
    (e) => filtro === 'Todos' || e.tipo === filtro
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📅 Cronograma Trimestral
        </span>
        <h1 className="text-3xl font-bold mt-2">Calendario Académico</h1>
        <p className="text-slate-400 text-sm">
          Planifica tus semanas con el itinerario de clases sincrónicas, fechas límite de evaluaciones y eventos magistrales.
        </p>
      </header>

      {/* Filtros de Tipo de Evento */}
      <div className="flex flex-wrap gap-2">
        {['Todos', 'Clase en Vivo', 'Entrega', 'Examen', 'Webinar'].map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltro(tipo)}
            className={`text-xs font-bold px-4 py-2 rounded-xl transition-all border ${
              filtro === tipo
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>

      {/* Lista de Eventos */}
      <section className="space-y-4">
        <div className="space-y-3">
          {eventosFiltrados.length > 0 ? (
            eventosFiltrados.map((ev) => (
              <div
                key={ev.id}
                className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${ev.color}`}>
                      {ev.tipo}
                    </span>
                    <span className="text-xs font-mono text-slate-400">🕒 {ev.hora}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{ev.titulo}</h3>
                  <p className="text-xs text-slate-400">Cátedra: <span className="text-slate-300 font-medium">{ev.modulo}</span></p>
                </div>

                <div className="text-right w-full sm:w-auto flex sm:flex-col justify-between items-end gap-1">
                  <span className="text-xs font-bold font-mono text-amber-300 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                    🗓️ {ev.fecha}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-800 text-center text-xs text-slate-400">
              No hay eventos registrados bajo el filtro seleccionado.
            </div>
          )}
        </div>
      </section>

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

export default function CalendarioPage() {
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');

  const eventos = [
    {
      id: 'EV-2026-01',
      titulo: 'Entrega Final: Monografía Exegética de Romanos 8',
      materia: 'Sintaxis Griega II',
      fecha: '02 de Agosto, 2026',
      categoria: 'Entregas',
      prioridad: 'Alta',
      badgeColor: 'border-rose-500 text-rose-400 bg-rose-950/40',
    },
    {
      id: 'EV-2026-02',
      titulo: 'Examen Parcial II: Crítica Textual y Manuscritos',
      materia: 'Crítica Textual',
      fecha: '10 de Agosto, 2026',
      categoria: 'Exámenes',
      prioridad: 'Alta',
      badgeColor: 'border-amber-500 text-amber-400 bg-amber-950/40',
    },
    {
      id: 'EV-2026-03',
      titulo: 'Simposio Internacional de Hermenéutica Bíblica',
      materia: 'Extensión Universitaria',
      fecha: '18 de Agosto, 2026',
      categoria: 'Eventos & Webinars',
      prioridad: 'Media',
      badgeColor: 'border-cyan-500 text-cyan-400 bg-cyan-950/40',
    },
    {
      id: 'EV-2026-04',
      titulo: 'Cierre de Pago de Colegiatura Mensual',
      materia: 'Administración',
      fecha: '25 de Agosto, 2026',
      categoria: 'Administrativo',
      prioridad: 'Media',
      badgeColor: 'border-emerald-500 text-emerald-400 bg-emerald-950/40',
    },
  ];

  const eventosFiltrados = eventos.filter(
    (ev) => filtroCategoria === 'Todas' || ev.categoria === filtroCategoria
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📅 Agenda Institucional
        </span>
        <h1 className="text-3xl font-bold mt-2">Calendario Académico</h1>
        <p className="text-slate-400 text-sm">
          Mantén el control de tus entregas de tareas, fechas de evaluaciones, conferencias y límites de pago del trimestre.
        </p>
      </header>

      {/* Control de Filtros */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-800">
        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Filtrar Cronograma por:
        </span>
        <div className="flex flex-wrap gap-2">
          {['Todas', 'Entregas', 'Exámenes', 'Eventos & Webinars', 'Administrativo'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltroCategoria(cat)}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                filtroCategoria === cat
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Listado de Eventos / Timeline */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          📌 Próximos Eventos y Fechas Clave
        </h2>

        <div className="space-y-3">
          {eventosFiltrados.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 p-5 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.categoria}
                  </span>
                  <span className="text-xs font-mono text-slate-400">| Prioridad: {item.prioridad}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100">{item.titulo}</h3>
                <p className="text-xs text-slate-400">Asignatura: <span className="text-slate-200 font-semibold">{item.materia}</span></p>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 border-slate-700/60 pt-3 sm:pt-0">
                <span className="text-xs font-bold text-amber-400 font-mono bg-amber-950/60 px-3 py-1.5 rounded-xl border border-amber-800/60">
                  🗓️ {item.fecha}
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-1">{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sincronización de Calendario */}
      <section className="bg-slate-800/50 p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-200">Sincronizar con tu Calendario Personal</h3>
          <p className="text-xs text-slate-400">Exporta todos los eventos a Google Calendar, Outlook o Apple Calendar en formato iCal.</p>
        </div>
        <button
          onClick={() => alert('Descargando archivo .ics para sincronización de calendario...')}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0"
        >
          Exportar iCal 📥
        </button>
      </section>

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
