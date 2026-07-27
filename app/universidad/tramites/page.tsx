'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TramitesPage() {
  const [tipoTramite, setTipoTramite] = useState('Constancia de Matriculación Activa');
  const [destino, setDestino] = useState('');
  const [solicitudProcesada, setSolicitudProcesada] = useState(false);

  const tramitesOficiales = [
    {
      id: 'TRM-01',
      nombre: 'Constancia de Matriculación Activa',
      tiempoEntrega: 'Inmediata (PDF Digital)',
      costo: 'Gratuito',
      icono: '📄',
      color: 'border-sky-500/40 text-sky-400 bg-sky-950/30',
    },
    {
      id: 'TRM-02',
      nombre: 'Récord de Notas Oficial (Oficializado)',
      tiempoEntrega: '24 a 48 Horas',
      costo: '$15 USD',
      icono: '📊',
      color: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/30',
    },
    {
      id: 'TRM-03',
      nombre: 'Carta de Convalidación & Curriculum Académico',
      tiempoEntrega: '3 Días Hábiles',
      costo: '$25 USD',
      icono: '📜',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30',
    },
  ];

  const misTramitesHistorial = [
    {
      id: 'SOL-2026-88',
      tipo: 'Constancia de Matriculación Activa',
      fecha: '10 de Julio, 2026',
      estado: 'Completado',
      descarga: true,
    },
    {
      id: 'SOL-2026-42',
      tipo: 'Récord de Notas Oficial',
      fecha: '02 de Marzo, 2026',
      estado: 'Entregado',
      descarga: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destino) {
      setSolicitudProcesada(true);
      setTimeout(() => {
        setSolicitudProcesada(false);
        setDestino('');
      }, 4000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
          📜 Ventanilla Virtual
        </span>
        <h1 className="text-3xl font-bold mt-2">Trámites & Certificaciones Oficiales</h1>
        <p className="text-slate-400 text-sm">
          Solicita y descarga certificados académicos con sello digital seguro y verificación mediante código QR institucional.
        </p>
      </header>

      {/* Servicios de Trámites */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          📑 Catálogo de Trámites Disponibles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tramitesOficiales.map((t) => (
            <div
              key={t.id}
              className="bg-slate-800/80 p-5 rounded-3xl border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="text-2xl">{t.icono}</div>
                <h3 className="text-sm font-bold text-slate-100">{t.nombre}</h3>
                <p className="text-[11px] text-teal-400 font-semibold">⏱️ Entrega: {t.tiempoEntrega}</p>
                <p className="text-[11px] text-slate-400 font-mono">Costo: {t.costo}</p>
              </div>

              <button
                onClick={() => setTipoTramite(t.nombre)}
                className="bg-slate-900 hover:bg-slate-700 text-teal-400 border border-teal-500/30 font-bold text-xs py-2 rounded-xl transition-all w-full text-center"
              >
                Solicitar Certificación
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de Solicitud */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-teal-400">
          📝 Formulario de Solicitud de Certificado
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-semibold">Tipo de Trámite Requerido:</label>
            <select
              value={tipoTramite}
              onChange={(e) => setTipoTramite(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-400 transition-all"
            >
              <option value="Constancia de Matriculación Activa">Constancia de Matriculación Activa</option>
              <option value="Récord de Notas Oficial (Oficializado)">Récord de Notas Oficial (Oficializado)</option>
              <option value="Carta de Convalidación & Curriculum Académico">Carta de Convalidación & Curriculum Académico</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-semibold">Institución / Organismo Destinatario:</label>
            <input
              type="text"
              required
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              placeholder="Ej. Concilio Teológico, Consulado, Embajada o Universidad..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            Generar Trámite & Certificado 📜
          </button>

          {solicitudProcesada && (
            <p className="text-xs text-emerald-400 font-semibold pt-1">
              ✓ Solicitud procesada exitosamente. Tu documento oficial ha sido generado con firma electrónica y código QR.
            </p>
          )}
        </form>
      </section>

      {/* Historial de Documentos Solicitiados */}
      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          📥 Mis Documentos Generados
        </h2>

        <div className="space-y-2">
          {misTramitesHistorial.map((h) => (
            <div
              key={h.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-400 font-bold">{h.id} | {h.fecha}</span>
                <h3 className="text-xs font-bold text-slate-100 mt-1">{h.tipo}</h3>
              </div>

              <button
                onClick={() => alert(`Descargando documento certificado ${h.id}.pdf`)}
                className="bg-slate-900 hover:bg-slate-700 text-teal-400 border border-teal-500/30 font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                Descargar PDF Oficial ⬇️
              </button>
            </div>
          ))}
        </div>
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
