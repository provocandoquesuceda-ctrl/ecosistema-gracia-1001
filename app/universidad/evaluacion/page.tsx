'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EvaluacionPage() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const preguntas = [
    {
      pregunta: '¿Cuál es la base sobre la cual el creyente es declarado justo ante Dios?',
      opciones: [
        { texto: 'Su esfuerzo diario por cumplir la Ley de Moisés.', correcta: false },
        { texto: 'La fe en la obra terminada de Jesucristo y su justicia imputada.', correcta: true },
        { texto: 'Una combinación de fe en Cristo y buenas obras personales.', correcta: false }
      ],
      explicacion: 'Romanos 3:24 nos enseña que somos justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús.'
    },
    {
      pregunta: '¿Cuál es la función principal de la Ley según el Nuevo Pacto?',
      opciones: [
        { texto: 'Mostrar la santidad de Dios y llevar al hombre a reconocer su necesidad de Salvador.', correcta: true },
        { texto: 'Ser el método de santificación para el creyente bajo la gracia.', correcta: false },
        { texto: 'Darle al creyente una lista de reglas para no perder la salvación.', correcta: false }
      ],
      explicacion: 'Gálatas 3:24 explica que la ley fue nuestro tutor para llevarnos a Cristo, a fin de que fuésemos justificados por la fe.'
    },
    {
      pregunta: 'Cuando un creyente tropieza o falla, ¿cuál es la actitud de Dios revelada en el Nuevo Pacto?',
      opciones: [
        { texto: 'Retira su Santo Espíritu hasta que el creyente vuelva a ganárselo.', correcta: false },
        { texto: 'Lo disciplina con enfermedades y tragedias para enseñarle.', correcta: false },
        { texto: 'Le recuerda su identidad de justicia en Cristo y lo atrae con bondad al arrepentimiento.', correcta: true }
      ],
      explicacion: 'Romanos 2:4 enseña que su benignidad es la que nos guía al arrepentimiento, y Heb 13:5 promete que jamás nos dejará ni nos desamparará.'
    }
  ];

  const responder = (esCorrecta: boolean) => {
    if (esCorrecta) setPuntuacion(puntuacion + 1);

    const siguiente = preguntaActual + 1;
    if (siguiente < preguntas.length) {
      setPreguntaActual(siguiente);
    } else {
      setMostrarResultado(true);
    }
  };

  const reiniciar = () => {
    setPreguntaActual(0);
    setPuntuacion(0);
    setMostrarResultado(false);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
          📝 Diagnóstico Teológico Reposado
        </span>
        <h1 className="text-3xl font-bold mt-2">Centro de Autoevaluación de la Gracia</h1>
        <p className="text-slate-400 text-sm">
          Asegura la asimilación del paradigma del Nuevo Pacto sin presión ni condenación.
        </p>
      </header>

      {!mostrarResultado ? (
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-6 shadow-xl">
          <div className="flex justify-between items-center border-b border-slate-700 pb-3 text-xs text-slate-400 font-mono">
            <span>Pregunta {preguntaActual + 1} de {preguntas.length}</span>
            <span>Aciertos acumulados: {puntuacion}</span>
          </div>

          <h2 className="text-lg font-bold text-white leading-snug">
            {preguntas[preguntaActual].pregunta}
          </h2>

          <div className="space-y-3">
            {preguntas[preguntaActual].opciones.map((op, idx) => (
              <button
                key={idx}
                onClick={() => responder(op.correcta)}
                className="w-full text-left p-4 rounded-xl bg-slate-900 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs transition-all flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center font-bold text-teal-400 text-xs border border-slate-600">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{op.texto}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-slate-800 p-8 rounded-3xl border border-teal-500/50 text-center space-y-6 shadow-2xl">
          <span className="text-5xl">🎉</span>
          <h2 className="text-2xl font-bold text-teal-300">¡Evaluación Completada!</h2>
          <p className="text-sm text-slate-300">
            Has obtenido <strong className="text-teal-400 font-bold">{puntuacion}</strong> de <strong className="text-teal-400 font-bold">{preguntas.length}</strong> aciertos.
          </p>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-xs text-slate-400 max-w-md mx-auto">
            💡 "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios." — Efesios 2:8
          </div>
          <button
            onClick={reiniciar}
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg"
          >
            🔄 Intentar de Nuevo
          </button>
        </div>
      )}
    </main>
  );
}