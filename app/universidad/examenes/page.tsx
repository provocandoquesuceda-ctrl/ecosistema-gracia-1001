'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExamenesPage() {
  const [pasoActual, setPasoActual] = useState(0);
  const [respuestas, setRespuestas] = useState<number[]>([]);
  const [completado, setCompletado] = useState(false);

  const preguntas = [
    {
      id: 1,
      pregunta: 'En Romanos 4:3, ¿qué término griego se utiliza para expresar la "imputación" de la fe como justicia?',
      opciones: [
        'A) Charis (χάρις)',
        'B) Logizomai (λογίζομαι)',
        'C) Dikaiosyne (δικαιοσύνη)',
        'D) Pneuma (πνεῦμα)'
      ],
      correcta: 1
    },
    {
      id: 2,
      pregunta: '¿Cuál es el enfoque exegético central de la Carta a los Gálatas respecto al cumplimiento de la Ley?',
      opciones: [
        'A) Mantener los ritos ceremoniales junto con la fe',
        'B) Que el creyente es justificado por las obras de la Ley',
        'C) Que Cristo cumplió la Ley y el creyente vive por la fe en la gracia',
        'D) Sustituir la fe por reglamentos eclesiásticos'
      ],
      correcta: 2
    },
    {
      id: 3,
      pregunta: 'En Juan 1:17, la antítesis entre Moisés y Jesucristo resalta principalmente:',
      opciones: [
        'A) La transición de la Ley a la plenitud de la Gracia y la Verdad',
        'B) La continuidad exacta de los rituales del Antiguo Pacto',
        'C) La anulación total de las promesas abrahámicas',
        'D) El mérito humano como base del favor divino'
      ],
      correcta: 0
    }
  ];

  const handleSeleccionar = (opcionIndex: number) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[pasoActual] = opcionIndex;
    setRespuestas(nuevasRespuestas);
  };

  const handleSiguiente = () => {
    if (pasoActual < preguntas.length - 1) {
      setPasoActual(pasoActual + 1);
    } else {
      setCompletado(true);
    }
  };

  const calcularNota = () => {
    let correctas = 0;
    preguntas.forEach((q, i) => {
      if (respuestas[i] === q.correcta) correctas++;
    });
    return Math.round((correctas / preguntas.length) * 100);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
          📝 Evaluación en Tiempo Real
        </span>
        <h1 className="text-3xl font-bold mt-2">Examen Exegético del Trimestre</h1>
        <p className="text-slate-400 text-sm">
          Responde a las preguntas de análisis bíblico para validar tu progreso académico en el programa activo.
        </p>
      </header>

      {!completado ? (
        <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-6">
          {/* Progreso del Examen */}
          <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-700 pb-4">
            <span>Pregunta <strong className="text-teal-400">{pasoActual + 1}</strong> de {preguntas.length}</span>
            <span className="font-mono text-amber-400">⏱️ Tiempo ilimitado (Modo Práctica)</span>
          </div>

          {/* Enunciado */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-100">
              {preguntas[pasoActual].pregunta}
            </h2>

            {/* Opciones */}
            <div className="space-y-3">
              {preguntas[pasoActual].opciones.map((op, idx) => {
                const seleccionada = respuestas[pasoActual] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSeleccionar(idx)}
                    className={`w-full text-left p-4 rounded-2xl text-xs font-medium transition-all border ${
                      seleccionada
                        ? 'bg-teal-950/80 border-teal-500 text-teal-200 shadow-md'
                        : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {op}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Controles */}
          <div className="flex justify-end pt-2">
            <button
              disabled={respuestas[pasoActual] === undefined}
              onClick={handleSiguiente}
              className="bg-teal-500 hover:bg-teal-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
            >
              {pasoActual < preguntas.length - 1 ? 'Siguiente Pregunta →' : 'Finalizar Examen ✨'}
            </button>
          </div>
        </section>
      ) : (
        <section className="bg-slate-800/90 p-8 rounded-3xl border border-teal-500/40 text-center space-y-5 shadow-2xl">
          <span className="text-5xl">🎯</span>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-100">¡Evaluación Finalizada!</h2>
            <p className="text-xs text-slate-400">Tus respuestas han sido procesadas e ingresadas al récord académico.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 max-w-xs mx-auto space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Calificación Obtenida</span>
            <p className="text-4xl font-extrabold text-teal-400 font-mono">{calcularNota()}%</p>
            <p className="text-[11px] text-emerald-400 font-semibold pt-1">
              {calcularNota() >= 70 ? '✓ Aprobado con Éxito' : 'Requiere Repaso'}
            </p>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setPasoActual(0);
                setRespuestas([]);
                setCompletado(false);
              }}
              className="bg-slate-900 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
            >
              Reintentar Examen
            </button>
            <Link
              href="/universidad/certificados"
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              Ver Certificados →
            </Link>
          </div>
        </section>
      )}

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
