'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NotificacionesPage() {
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      titulo: 'Nueva calificación publicada',
      mensaje: 'Se ha publicado la nota del Ensayo Exegético sobre Gálatas (98/100).',
      fecha: 'Hace 2 horas',
      categoria: 'Académico',
      leida: false,
      enlace: '/universidad/calificaciones',
      color: 'border-teal-500 text-teal-400 bg-teal-950/30'
    },
    {
      id: 2,
      titulo: 'Recordatorio de Clase en Vivo',
      mensaje: 'Mañana a las 19:00 UTC-4 tendrás la sesión sincrónica de Sintaxis Griega.',
      fecha: 'Hace 5 horas',
      categoria: 'En Vivo',
      leida: false,
      enlace: '/universidad/en-vivo',
      color: 'border-red-500 text-red-400 bg-red-950/30'
    },
    {
      id: 3,
      titulo: 'Documento Emitido por Secretaría',
      mensaje: 'Tu Constancia de Matrícula Activa ha sido aprobada y firmada digitalmente.',
      fecha: 'Ayer',
      categoria: 'Secretaría',
      leida: true,
      enlace: '/universidad/secretaria',
      color: 'border-indigo-500 text-indigo-400 bg-indigo-950/30'
    },
    {
      id: 4,
      titulo: 'Nueva vacante en Red Alumni',
      mensaje: 'Se ha publicado una vacante para Docente de Hermenéutica Teológica.',
      fecha: 'Hace 2 días',
      categoria: 'Alumni',
      leida: true,
      enlace: '/universidad/alumni',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30'
    }
  ]);

  const marcarTodasLeidas = () => {
    setNotificaciones(prev => prev.map(n => ({ ...n, leida: true })));
  };

  const marcarComoLeida = (id: number) => {
    setNotificaciones(prev => prev.map(n => n.id === id ? { ...n, leida: true } : n));
  };

  const noLeidasCount = notificaciones.filter(n => !n.leida).length;

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2 flex justify-between items-end flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
              🔔 Alertas del Campus
            </span>
            {noLeidasCount > 0 && (
              <span className="text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full">
                {noLeidasCount} Nuevas
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold mt-2">Bandeja de Notificaciones</h1>
          <p className="text-slate-400 text-sm">
            Mantente al día con los avisos del cuerpo docente, trámites y eventos del campus.
          </p>
        </div>

        {noLeidasCount > 0 && (
          <button
            onClick={marcarTodasLeidas}
            className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
          >
            Marcar todas como leídas ✓
          </button>
        )}
      </header>

      {/* Lista de Notificaciones */}
      <section className="space-y-3">
        {notificaciones.map((n) => (
          <div
            key={n.id}
            onClick={() => marcarComoLeida(n.id)}
            className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer ${
              n.leida
                ? 'bg-slate-800/40 border-slate-800 opacity-80'
                : 'bg-slate-800 border-slate-700 shadow-md'
            }`}
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                {!n.leida && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                )}
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${n.color}`}>
                  {n.categoria}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">• {n.fecha}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-100">{n.titulo}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{n.mensaje}</p>
            </div>

            <Link
              href={n.enlace}
              className="bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition-all w-full sm:w-auto text-center shrink-0"
            >
              Ver Detalle →
            </Link>
          </div>
        ))}
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

export default function NotificacionesPage() {
  const [filtro, setFiltro] = useState('Todas');

  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      titulo: 'Nueva Calificación Emitida',
      mensaje: 'Tu profesor ha publicado la nota final para el ensayo de Hermenéutica Exegética.',
      categoria: 'Académica',
      fecha: 'Hace 30 min',
      leida: false,
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    },
    {
      id: 2,
      titulo: 'Recordatorio de Préstamo Digital',
      mensaje: 'El recurso "Comentario Crítico de Romanos" vence en 2 días. Puedes renovarlo desde la Biblioteca.',
      categoria: 'Biblioteca',
      fecha: 'Hace 3 horas',
      leida: false,
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40'
    },
    {
      id: 3,
      titulo: 'Anuncio Institucional: Capilla Universitaria',
      mensaje: 'Mañana a las 10:00 AM UTC-4 inicia el devocional comunitario. ¡Te esperamos!',
      categoria: 'Comunidad',
      fecha: 'Hace 1 día',
      leida: true,
      color: 'border-purple-500 text-purple-400 bg-purple-950/40'
    },
    {
      id: 4,
      titulo: 'Comprobante de Pago Generado',
      mensaje: 'Tu recibo oficial por concepto de Colegiatura Trimestral está disponible para descarga.',
      categoria: 'Finanzas',
      fecha: 'Hace 2 días',
      leida: true,
      color: 'border-amber-500 text-amber-400 bg-amber-950/40'
    }
  ]);

  const marcarComoLeida = (id: number) => {
    setNotificaciones((prev) =>
      prev.map((n) => (n.id === id ? { ...n, leida: true } : n))
    );
  };

  const marcarTodasComoLeidas = () => {
    setNotificaciones((prev) => prev.map((n) => ({ ...n, leida: true })));
  };

  const filtradas = notificaciones.filter(
    (n) => filtro === 'Todas' || n.categoria === filtro
  );

  const noLeidas = notificaciones.filter((n) => !n.leida).length;

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            🔔 Centro de Notificaciones
          </span>
          {noLeidas > 0 && (
            <button
              onClick={marcarTodasComoLeidas}
              className="text-xs text-cyan-400 hover:underline font-semibold"
            >
              Marcar todas como leídas ✓
            </button>
          )}
        </div>
        <h1 className="text-3xl font-bold mt-2">Alertas & Avisos Institucionales</h1>
        <p className="text-slate-400 text-sm">
          Mantente al día con tus avisos académicos, novedades de biblioteca, recordatorios de pagos y eventos comunitarios.
        </p>
      </header>

      {/* Filtros por Categoría */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
        <label className="text-xs font-bold text-slate-300">Filtrar Categoria:</label>
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 transition-all"
        >
          <option value="Todas">Todas las notificaciones</option>
          <option value="Académica">Académicas & Notas</option>
          <option value="Biblioteca">Biblioteca Digital</option>
          <option value="Comunidad">Comunidad & Capilla</option>
          <option value="Finanzas">Finanzas & Colegiaturas</option>
        </select>
      </div>

      {/* Lista de Notificaciones */}
      <section className="space-y-3">
        {filtradas.length === 0 ? (
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-800 text-center text-slate-400 text-xs">
            No tienes notificaciones en esta categoría.
          </div>
        ) : (
          filtradas.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                item.leida
                  ? 'bg-slate-800/40 border-slate-800 opacity-75'
                  : 'bg-slate-800/90 border-slate-700 shadow-md'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${item.color}`}>
                    {item.categoria}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{item.fecha}</span>
                  {!item.leida && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-slate-100">{item.titulo}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.mensaje}</p>
              </div>

              {!item.leida && (
                <button
                  onClick={() => marcarComoLeida(item.id)}
                  className="bg-slate-900 hover:bg-slate-700 text-cyan-400 border border-slate-700 font-bold text-xs px-3.5 py-2 rounded-xl transition-all whitespace-nowrap"
                >
                  Marcar Leída ✓
                </button>
              )}
            </div>
          ))
        )}
      </section>

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
