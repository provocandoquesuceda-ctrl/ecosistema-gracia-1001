'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CalificacionesPage() {
  const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState<number | null>(1);

  const materias = [
    {
      id: 1,
      codigo: 'EXG-101',
      nombre: 'Exégesis de la Epístola a los Romanos',
      creditos: 4,
      notaFinal: 95,
      letra: 'A',
      estado: 'Aprobada',
      desglose: [
        { evaluacion: 'Examen Parcial: Romanos 1-4', peso: '30%', nota: 92 },
        { evaluacion: 'Ensayo Exegético sobre la Justificación', peso: '40%', nota: 98 },
        { evaluacion: 'Participación en el Ágora Teológica', peso: '15%', nota: 95 },
        { evaluacion: 'Evaluación Final', peso: '15%', nota: 94 }
      ]
    },
    {
      id: 2,
      codigo: 'HER-202',
      nombre: 'Hermenéutica Teológica y Lenguajes Originales',
      creditos: 3,
      notaFinal: 88,
      letra: 'B+',
      estado: 'Aprobada',
      desglose: [
        { evaluacion: 'Análisis Sintáctico de Texto Griego', peso: '35%', nota: 85 },
        { evaluacion: 'Trabajo de Campo Hermenéutico', peso: '35%', nota: 90 },
        { evaluacion: 'Examen de Vocabulario Koiné', peso: '30%', nota: 89 }
      ]
    },
    {
      id: 3,
      codigo: 'PAS-301',
      nombre: 'Salud Pastoral y Cuidado Familiar',
      creditos: 3,
      notaFinal: 98,
      letra: 'A+',
      estado: 'Aprobada',
      desglose: [
        { evaluacion: 'Estudio de Caso: Prevención de Burnout', peso: '50%', nota: 100 },
        { evaluacion: 'Bitácora de Reflexión Personal', peso: '50%', nota: 96 }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
          📊 Evaluación & Desempeño
        </span>
        <h1 className="text-3xl font-bold mt-2">Récord Académico de Calificaciones</h1>
        <p className="text-slate-400 text-sm">
          Consulta el desglose ponderado de tus evaluaciones, promedio acumulado y créditos validados.
        </p>
      </header>

      {/* KPI Resumen de Rendimiento */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Índice Académico (GPA)</span>
          <p className="text-2xl font-extrabold text-teal-400 font-mono">3.85 / 4.0</p>
          <p className="text-[11px] text-emerald-400 font-semibold">Suma Cum Laude</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Promedio General</span>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">93.6 pts</p>
          <p className="text-[11px] text-slate-500">3 Asignaturas evaluadas</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Créditos Aprobados</span>
          <p className="text-2xl font-extrabold text-indigo-400 font-mono">10 Créditos</p>
          <p className="text-[11px] text-slate-500">De 12 requeridos este nivel</p>
        </div>
      </div>

      {/* Lista de Materias y Desglose */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          📚 Asignaturas del Período
        </h2>

        <div className="space-y-4">
          {materias.map((m) => {
            const abierta = asignaturaSeleccionada === m.id;
            return (
              <div
                key={m.id}
                className="bg-slate-800/80 border border-slate-700/80 rounded-3xl overflow-hidden transition-all"
              >
                {/* Cabeza de la Tarjeta */}
                <button
                  onClick={() => setAsignaturaSeleccionada(abierta ? null : m.id)}
                  className="w-full text-left p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-slate-800 transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-teal-400 font-bold bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-700">
                        {m.codigo}
                      </span>
                      <span className="text-xs text-slate-400">{m.creditos} Créditos</span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-100">{m.nombre}</h3>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-teal-400 font-mono">{m.notaFinal} pts</span>
                      <span className="text-xs text-slate-400 font-bold ml-2 bg-teal-950 text-teal-300 px-2 py-0.5 rounded-md border border-teal-800">
                        {m.letra}
                      </span>
                    </div>
                    <span className="text-teal-400 font-mono text-xs">{abierta ? '▲' : '▼'}</span>
                  </div>
                </button>

                {/* Detalle Ponderado */}
                {abierta && (
                  <div className="p-5 bg-slate-900/90 border-t border-slate-700/80 space-y-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Desglose de Evaluaciones:
                    </h4>
                    <div className="space-y-2">
                      {m.desglose.map((d, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center text-xs p-2.5 bg-slate-800/50 rounded-xl border border-slate-800"
                        >
                          <span className="text-slate-300">{d.evaluacion}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] text-slate-500 font-mono">Peso: {d.peso}</span>
                            <span className="font-bold font-mono text-teal-300">{d.nota} / 100</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
