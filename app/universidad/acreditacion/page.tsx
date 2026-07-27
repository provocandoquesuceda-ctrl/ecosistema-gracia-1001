'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AcreditacionPage() {
  const [seccionActiva, setSeccionActiva] = useState('declaracion');

  const convenios = [
    {
      institucion: 'Asociación Internacional de Educación Teológica (AIET)',
      tipo: 'Acreditación & Membresía Académica',
      estado: 'Vigente (2024 - 2029)',
      cobertura: 'Internacional'
    },
    {
      institucion: 'Red Global de Seminarios Exegéticos',
      tipo: 'Convenio de Intercambio Docente & Repositorio',
      estado: 'Activo',
      cobertura: 'Latinoamérica & Norteamérica'
    },
    {
      institucion: 'Consorcio de Bibliotecas Teológicas Digitales',
      tipo: 'Acceso Mutuo a Bases de Datos & Papers',
      estado: 'Activo',
      cobertura: 'Global'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          📜 Marco Institucional & Transparencia
        </span>
        <h1 className="text-3xl font-bold mt-2">Acreditación, Estatutos & Normativa</h1>
        <p className="text-slate-400 text-sm">
          Conoce los fundamentos institucionales, validez de créditos, convenios académicos e ideario teológico que respaldan nuestra excelencia educativa.
        </p>
      </header>

      {/* Tabs Nav */}
      <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setSeccionActiva('declaracion')}
          className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-all whitespace-nowrap ${
            seccionActiva === 'declaracion'
              ? 'bg-slate-800 text-emerald-400 border-t border-x border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          📖 Declaración Doctrinal
        </button>

        <button
          onClick={() => setSeccionActiva('acreditaciones')}
          className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-all whitespace-nowrap ${
            seccionActiva === 'acreditaciones'
              ? 'bg-slate-800 text-emerald-400 border-t border-x border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          🏛️ Acreditaciones & Convenios
        </button>

        <button
          onClick={() => setSeccionActiva('estatutos')}
          className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-all whitespace-nowrap ${
            seccionActiva === 'estatutos'
              ? 'bg-slate-800 text-emerald-400 border-t border-x border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          ⚖️ Código de Ética & Estatutos
        </button>
      </div>

      {/* Contenido según Tab */}
      {seccionActiva === 'declaracion' && (
        <section className="bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-700 pb-2">
            1. Ideología & Declaración Doctrinal
          </h2>
          <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white">Inerrancia e Inspiración:</strong> Creemos en la inspiración verbal y plenaria de las Sagradas Escrituras en sus manuscritos originales como norma suprema e infalible de fe y práctica.
            </p>
            <p>
              <strong className="text-white">Rigor Exegético:</strong> Sostenemos la importancia del estudio gramático-histórico del texto bíblico en sus lenguas originales (Hebreo, Arameo y Griego Koiné).
            </p>
            <p>
              <strong className="text-white">Soberanía de la Gracia:</strong> Afirmamos la centralidad del Evangelio, la salvación por gracia mediante la fe y el llamado a la edificación de la comunidad global.
            </p>
          </div>
        </section>
      )}

      {seccionActiva === 'acreditaciones' && (
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            2. Respaldos, Convenios & Reconocimientos
          </h2>
          <div className="space-y-3">
            {convenios.map((c, i) => (
              <div key={i} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-sm font-bold text-slate-100">{c.institucion}</h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                    {c.estado}
                  </span>
                </div>
                <p className="text-xs text-slate-400"><strong className="text-slate-300">Tipo:</strong> {c.tipo}</p>
                <p className="text-[11px] text-slate-500 font-mono">🌐 Alcance: {c.cobertura}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {seccionActiva === 'estatutos' && (
        <section className="bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-700 pb-2">
            3. Reglamento de Honestidad Académica
          </h2>
          <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white">Integridad de Autoría:</strong> Todo trabajo académico, investigación o monografía debe citar adecuadamente las fuentes utilizadas conforme al estándar SBL / APA.
            </p>
            <p>
              <strong className="text-white">Cero Tolerancia al Plagio:</strong> Las entregas son sometidas a auditorías digitales de originalidad. El incumplimiento implica la nulidad de la materia.
            </p>
            <p>
              <strong className="text-white">Conducta Cristiana:</strong> Se promueve un ambiente de respeto académico, diálogo crítico constructivo y fraternidad en todas las plataformas institucionales.
            </p>
          </div>
        </section>
      )}

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
