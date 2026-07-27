'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TitulacionPage() {
  const [tipoCertificado, setTipoCertificado] = useState('Título Oficial de Grado');
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const [codigoVerificacion, setCodigoVerificacion] = useState('');
  const [resultadoVerificacion, setResultadoVerificacion] = useState<string | null>(null);

  const solicitudesActivas = [
    {
      id: 'SOL-2026-102',
      tramite: 'Título Oficial - Licenciatura en Teología',
      fecha: '10 de Julio, 2026',
      estado: 'En Revisión Exegética & Académica',
      color: 'border-amber-500 text-amber-400 bg-amber-950/40'
    },
    {
      id: 'SOL-2026-045',
      tramite: 'Récord de Notas Certificado (Oficial)',
      fecha: '02 de Mayo, 2026',
      estado: 'Emitido / Listo para Descarga',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    }
  ];

  const handleSolicitar = (e: React.FormEvent) => {
    e.preventDefault();
    setSolicitudEnviada(true);
    setTimeout(() => setSolicitudEnviada(false), 3500);
  };

  const handleVerificar = (e: React.FormEvent) => {
    e.preventDefault();
    if (codigoVerificacion.trim()) {
      setResultadoVerificacion(`✓ Documento Auténtico. Emitido a favor del titular con folio registrado #${codigoVerificacion.toUpperCase()}`);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
          🎓 Registro Académico & Titulación
        </span>
        <h1 className="text-3xl font-bold mt-2">Trámites de Titulación & Certificados</h1>
        <p className="text-slate-400 text-sm">
          Solicita tus títulos de grado, diplomas, certificados de estudio oficiales y verifica la autenticidad de tus documentos expedidos.
        </p>
      </header>

      {/* Requisitos de Titulación */}
      <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
          📋 Estado de Requisitos para Titulación de Grado
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-emerald-400 font-bold">✓ Créditos Aprobados</span>
            <p className="text-slate-300 font-mono font-bold text-sm">120 / 120 Cr.</p>
          </div>

          <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-emerald-400 font-bold">✓ Horas de Prácticas</span>
            <p className="text-slate-300 font-mono font-bold text-sm">120 / 120 hrs</p>
          </div>

          <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-emerald-400 font-bold">✓ Monografía Exegética</span>
            <p className="text-slate-300 font-mono font-bold text-sm">Aprobada (98/100)</p>
          </div>
        </div>
      </section>

      {/* Formulario de Solicitud */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
          🏛️ Iniciar Solicitud de Documento Documental
        </h2>

        <form onSubmit={handleSolicitar} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-semibold">Selecciona el documento requerido:</label>
            <select
              value={tipoCertificado}
              onChange={(e) => setTipoCertificado(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-400 transition-all"
            >
              <option value="Título Oficial de Grado">Título Oficial de Licenciatura / Maestría</option>
              <option value="Récord de Notas Certificado">Récord de Notas Oficial Certificado</option>
              <option value="Certificado de Conclusión">Certificado de Conclusión de Estudios</option>
              <option value="Diploma de Diplomado">Diploma de Especialización / Diplomado</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            Enviar Solicitud a Registro 🚀
          </button>

          {solicitudEnviada && (
            <p className="text-xs text-emerald-400 font-semibold pt-1">
              ✓ Solicitud enviada exitosamente a la Secretaría Académica para validación.
            </p>
          )}
        </form>
      </section>

      {/* Solicitudes en curso */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          ⏳ Estado de Mis Solicitudes
        </h2>

        <div className="space-y-3">
          {solicitudesActivas.map((s) => (
            <div
              key={s.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">{s.id}</span>
                  <span className="text-[10px] font-mono text-slate-400">| {s.fecha}</span>
                </div>
                <h3 className="text-xs font-bold text-slate-100">{s.tramite}</h3>
                <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${s.color}`}>
                  {s.estado}
                </span>
              </div>

              <button
                onClick={() => alert(`Consultando detalles del trámite ${s.id}`)}
                className="bg-slate-900 hover:bg-slate-700 text-indigo-400 border border-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition-all"
              >
                Ver Detalle
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Verificador Digital */}
      <section className="bg-slate-800/50 p-6 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
          🔍 Verificador Oficial de Documentos Digitales
        </h2>
        <p className="text-xs text-slate-400">
          Ingresa el código seguro impreso en la esquina inferior de un título o certificado para comprobar su autenticidad.
        </p>

        <form onSubmit={handleVerificar} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            required
            value={codigoVerificacion}
            onChange={(e) => setCodigoVerificacion(e.target.value)}
            placeholder="Ej. UGR-2026-X981"
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white uppercase font-mono focus:outline-none focus:border-indigo-400 transition-all"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2 rounded-xl transition-all"
          >
            Verificar Documento
          </button>
        </form>

        {resultadoVerificacion && (
          <div className="bg-emerald-950/50 border border-emerald-800 p-3.5 rounded-xl text-xs text-emerald-300 font-mono">
            {resultadoVerificacion}
          </div>
        )}
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
