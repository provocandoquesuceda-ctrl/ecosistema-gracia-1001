'use client';

import { useState } from 'react';

export default function PrimerosPasosPage() {
  const [pasoActual, setPasoActual] = useState<'lecciones' | 'quiz' | 'resultado'>('lecciones');
  const [leccionIndex, setLeccionIndex] = useState(0);
  const [respuestasQuiz, setRespuestasQuiz] = useState<{ [key: number]: number }>({});
  const [score, setScore] = useState(0);

  const lecciones = [
    {
      titulo: '1. ¿Qué es la Gracia?',
      cita: 'Efesios 2:8-9',
      contenido: 'La gracia es un regalo inmerecido de Dios. No se gana por buenas obras ni se pierde por caídas; fue pagada por completo en la cruz.',
      reflexion: '¿Qué diferencia a la gracia de tus propios esfuerzos personales?',
    },
    {
      titulo: '2. Tu Nueva Identidad',
      cita: '2 Corintios 5:17',
      contenido: 'Al estar en Cristo, tu pasado ha sido borrado. No te defines por tus errores cometidos, sino por la posición de hijo/a amado/a que recibiste.',
      reflexion: '¿Cómo cambia tu día a día saber que Dios no te mira con reproche?',
    },
    {
      titulo: '3. Paz sobre la Condenación',
      cita: 'Romanos 8:1',
      contenido: 'Ya no hay ninguna condenación para los que están en Cristo Jesús. Caminas en libertad diaria para aprender, crecer y levantarte.',
      reflexion: '¿Qué atadura o culpa puedes entregarle hoy a Dios?',
    },
  ];

  const preguntasQuiz = [
    {
      id: 1,
      pregunta: '¿Cómo se obtiene la gracia de Dios?',
      opciones: [
        'Haciendo suficiente mérito personal',
        'Como un regalo inmerecido por medio de la fe',
        'Cumpliendo una lista de reglas rígidas',
      ],
      correcta: 1,
    },
    {
      id: 2,
      pregunta: 'Según 2 Corintios 5:17, ¿cuál es tu nueva condición en Cristo?',
      opciones: [
        'Una persona atada a sus errores pasados',
        'Una nueva creación con pasado borrado',
        'Alguien que debe ganarse la aceptación diaria',
      ],
      correcta: 1,
    },
    {
      id: 3,
      pregunta: '¿Qué enseña Romanos 8:1 sobre los que están en Cristo?',
      opciones: [
        'Que están bajo juicio constante',
        'Que ya no hay ninguna condenación para ellos',
        'Que deben pagar sus fallas antes de acercarse a Dios',
      ],
      correcta: 1,
    },
  ];

  const manejarRespuesta = (preguntaId: number, opcionIndex: number) => {
    setRespuestasQuiz((prev) => ({ ...prev, [preguntaId]: opcionIndex }));
  };

  const calcularResultado = () => {
    let puntos = 0;
    preguntasQuiz.forEach((q) => {
      if (respuestasQuiz[q.id] === q.correcta) {
        puntos += 1;
      }
    });
    setScore(puntos);
    setPasoActual('resultado');
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">
        {/* Banner Superior */}
        <header className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
            🌱 Módulo I: Primeros Pasos
          </span>
          <h1 className="text-3xl font-bold">Descubriendo la Gracia</h1>
          <p className="text-slate-400 text-sm">Fundamentos firmes para tu nueva vida</p>
        </header>

        {/* MODO 1: LECCIONES */}
        {pasoActual === 'lecciones' && (
          <div className="space-y-6">
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
              <div
                className="bg-indigo-500 h-full transition-all duration-300"
                style={{ width: `${((leccionIndex + 1) / lecciones.length) * 100}%` }}
              ></div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 space-y-4 shadow-xl">
              <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                <h2 className="text-xl font-semibold text-indigo-300">
                  {lecciones[leccionIndex].titulo}
                </h2>
                <span className="text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg">
                  {lecciones[leccionIndex].cita}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {lecciones[leccionIndex].contenido}
              </p>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-indigo-500/20 space-y-2">
                <p className="text-xs font-semibold text-indigo-400">Reflexión personal:</p>
                <p className="text-sm text-slate-200 italic">{lecciones[leccionIndex].reflexion}</p>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setLeccionIndex((prev) => Math.max(0, prev - 1))}
                  disabled={leccionIndex === 0}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm disabled:opacity-30 transition-all"
                >
                  Anterior
                </button>

                {leccionIndex < lecciones.length - 1 ? (
                  <button
                    onClick={() => setLeccionIndex((prev) => prev + 1)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold transition-all shadow-lg"
                  >
                    Siguiente Lección
                  </button>
                ) : (
                  <button
                    onClick={() => setPasoActual('quiz')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-sm font-semibold transition-all shadow-lg"
                  >
                    Iniciar Quiz Final 📝
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* MODO 2: QUIZ INTERACTIVO */}
        {pasoActual === 'quiz' && (
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-indigo-300 border-b border-slate-700 pb-3">
              📝 Quiz de Evaluación: Primeros Pasos
            </h2>

            {preguntasQuiz.map((q) => (
              <div key={q.id} className="space-y-3">
                <p className="text-sm font-semibold text-slate-200">{q.id}. {q.pregunta}</p>
                <div className="space-y-2">
                  {q.opciones.map((opcion, idx) => (
                    <button
                      key={idx}
                      onClick={() => manejarRespuesta(q.id, idx)}
                      className={`w-full text-left p-3 rounded-xl text-xs border transition-all ${
                        respuestasQuiz[q.id] === idx
                          ? 'bg-indigo-900/80 border-indigo-500 text-white font-medium'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {opcion}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={calcularResultado}
              disabled={Object.keys(respuestasQuiz).length < preguntasQuiz.length}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 rounded-xl font-semibold text-sm transition-all shadow-lg"
            >
              Finalizar y Ver Calificación 🎯
            </button>
          </div>
        )}

        {/* MODO 3: RESULTADOS */}
        {pasoActual === 'resultado' && (
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center space-y-6 shadow-xl">
            <div className="text-5xl">🎉</div>
            <h2 className="text-2xl font-bold">¡Evaluación Completada!</h2>
            <p className="text-slate-300 text-sm">
              Obtuviste <span className="text-indigo-400 font-bold text-lg">{score}</span> de{' '}
              <span className="font-bold">{preguntasQuiz.length}</span> respuestas correctas.
            </p>

            <div className="p-4 bg-indigo-950/60 border border-indigo-800 rounded-xl text-xs text-indigo-300 leading-relaxed">
              {score === 3
                ? '¡Excelente trabajo! Comprendes con claridad los fundamentos de la gracia y tu nueva identidad.'
                : '¡Buen intento! Te invitamos a repasar las lecciones para afirmar aún más estos principios.'}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setLeccionIndex(0);
                  setRespuestasQuiz({});
                  setPasoActual('lecciones');
                }}
                className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-xl text-xs transition-all"
              >
                Repetir Lecciones
              </button>
              <a
                href="/dashboard"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-semibold transition-all shadow-lg"
              >
                Volver al Dashboard ➔
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}