'use client';

import Link from 'next/link';

export default function UniversidadPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          🏛️ Plataforma Académica
        </span>
        <h1 className="text-3xl font-bold mt-2">Universidad de la Gracia y la Verdad</h1>
        <p className="text-slate-400 text-sm">
          Ecosistema integral de formación teológica, ministerial y liderazgo Cristocéntrico.
        </p>
      </header>

      <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-sm uppercase tracking-wider font-bold text-slate-400">
          🛠️ Módulos e Integraciones del Ecosistema
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/universidad/dashboard"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-amber-500 text-amber-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📊</span> Panel Alumno
          </Link>

          <Link
            href="/universidad/tutor"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-cyan-500 text-cyan-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🤖</span> Tutor Exégesis
          </Link>

          <Link
            href="/universidad/liderazgo-cristocentrico"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-cyan-400 text-cyan-300 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>👑</span> Salud Pastoral
          </Link>

          <Link
            href="/universidad/certificados"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-amber-400 text-amber-300 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🏅</span> Certificados
          </Link>

          <Link
            href="/universidad/mentoria"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-purple-500 text-purple-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>👥</span> Mentoría Dual
          </Link>

          <Link
            href="/universidad/editorial"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-pink-500 text-pink-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>✍️</span> Hub Editorial
          </Link>

          <Link
            href="/universidad/biblioteca"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-emerald-500 text-emerald-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📚</span> Biblioteca
          </Link>

          <Link
            href="/universidad/foro"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-blue-500 text-blue-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>💬</span> Ágora & Foro
          </Link>

          <Link
            href="/universidad/audioteca"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-violet-500 text-violet-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🎧</span> Audioteca
          </Link>

          <Link
            href="/universidad/evaluacion"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-teal-500 text-teal-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📝</span> Evaluación
          </Link>

          <Link
            href="/universidad/inscripcion"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-emerald-400 text-emerald-300 text-xs font-bold transition-all flex items-center gap-2 col-span-2"
          >
            <span>📝</span> Formulario de Inscripción
          </Link>
        </div>
      </section>
    </main>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Mensaje {
  id: number;
  emisor: 'usuario' | 'tutor';
  texto: string;
}

export default function TutorPage() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 1,
      emisor: 'tutor',
      texto: '¡Hola! Soy tu Tutor Exegético. ¿Qué pasaje o concepto bíblico deseas analizar hoy desde la perspectiva de la Gracia?'
    }
  ]);
  const [input, setInput] = useState('');
  const [cargando, setCargando] = useState(false);

  const sugerencias = [
    'Exégesis de Gálatas 2:20',
    'Significado de "Logizomai" en Romanos 4',
    'Diferencia entre Ley y Gracia en Juan 1:17'
  ];

  const handleEnviar = (consultaText?: string) => {
    const q = consultaText || input;
    if (!q.trim()) return;

    const userMsg: Mensaje = { id: Date.now(), emisor: 'usuario', texto: q };
    setMensajes((prev) => [...prev, userMsg]);
    if (!consultaText) setInput('');
    setCargando(true);

    // Simulación de respuesta exegética
    setTimeout(() => {
      const tutorMsg: Mensaje = {
        id: Date.now() + 1,
        emisor: 'tutor',
        texto: `Análisis para "${q}": En el texto original, este pasaje resalta la obra completada de Cristo. No depende del esfuerzo ritual humano, sino de la posición del creyente incorporado en Su justicia.`
      };
      setMensajes((prev) => [...prev, tutorMsg]);
      setCargando(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
          🤖 Asistente Virtual
        </span>
        <h1 className="text-3xl font-bold mt-2">Tutor Inteligente de Exégesis</h1>
        <p className="text-slate-400 text-sm">
          Resuelve dudas hermenéuticas, gramaticales y contextuales de las Escrituras en tiempo real.
        </p>
      </header>

      {/* Caja de Chat */}
      <div className="bg-slate-800/80 rounded-3xl border border-slate-700/80 p-6 space-y-4 flex flex-col justify-between min-h-[400px]">
        {/* Historial */}
        <div className="space-y-3 overflow-y-auto max-h-[350px] pr-2">
          {mensajes.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.emisor === 'usuario' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-lg p-4 rounded-2xl text-xs leading-relaxed ${
                  m.emisor === 'usuario'
                    ? 'bg-amber-500 text-slate-950 font-medium rounded-br-none'
                    : 'bg-slate-900 border border-slate-700 text-slate-200 rounded-bl-none'
                }`}
              >
                {m.texto}
              </div>
            </div>
          ))}

          {cargando && (
            <div className="flex justify-start">
              <div className="bg-slate-900 border border-slate-700 text-cyan-400 p-3 rounded-2xl text-xs font-mono animate-pulse">
                Analizando texto y contexto gramatical...
              </div>
            </div>
          )}
        </div>

        {/* Sugerencias rápidas */}
        <div className="pt-2 border-t border-slate-700 space-y-2">
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
            Sugerencias de Consulta:
          </p>
          <div className="flex flex-wrap gap-2">
            {sugerencias.map((s, i) => (
              <button
                key={i}
                onClick={() => handleEnviar(s)}
                className="bg-slate-900 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-[11px] px-3 py-1.5 rounded-xl transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Formulario de Entrada */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEnviar();
          }}
          className="flex gap-2 pt-2"
        >
          <input
            type="text"
            placeholder="Escribe tu consulta exegética o pasaje bíblico..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shrink-0"
          >
            Consultar
          </button>
        </form>
      </div>

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
