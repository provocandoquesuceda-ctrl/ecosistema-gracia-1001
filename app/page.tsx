'use client';

import { useState } from 'react';

export default function Home() {
  const projectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const projectKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  const [sentimiento, setSentimiento] = useState('');
  const [edad, setEdad] = useState('Adultos');
  const [respuesta, setRespuesta] = useState('');
  const [loading, setLoading] = useState(false);

  const consultarDevocional = async () => {
    if (!sentimiento) return;
    setLoading(true);
    setRespuesta('');

    try {
      const res = await fetch('/api/devocional', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sentimiento, segmentoEdad: edad, projectUrl, projectKey }),
      });
      const data = await res.json();
      setRespuesta(data.resultado);
    } catch (err) {
      setRespuesta('Ocurrió un error al consultar el devocional.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-700 space-y-5">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-indigo-400">
            Ecosistema Gracia 1001
          </h1>
          <p className="text-sm text-slate-400">
            Asistente Devocional por Inteligencia Artificial
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">¿Cómo te sientes o qué necesitas hoy?</label>
          <input
            type="text"
            placeholder="Ej: Siento ansiedad, busco dirección, necesito paz..."
            value={sentimiento}
            onChange={(e) => setSentimiento(e.target.value)}
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">Selecciona el Grupo / Etapa:</label>
          <select
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Niños">👶 Niños (Gracia Kids)</option>
            <option value="Adolescentes">👦 Adolescentes (Generación Gracia)</option>
            <option value="Jóvenes">👱 Jóvenes (Gracia en Acción)</option>
            <option value="Adultos">👨 Adultos (Liderazgo y Vida)</option>
            <option value="Nuevos Creyentes">🌱 Nuevos Creyentes (Primeros Pasos)</option>
          </select>
        </div>

        <button
          onClick={consultarDevocional}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl text-sm transition-all shadow-lg disabled:opacity-50"
        >
          {loading ? 'Buscando tu Promesa...' : 'Recibir Palabra de Gracia'}
        </button>

        {respuesta && (
          <div className="mt-4 p-5 bg-slate-900/80 border border-indigo-500/30 rounded-xl text-sm text-slate-200 whitespace-pre-line leading-relaxed">
            {respuesta}
          </div>
        )}
      </div>
    </main>
  );
}
{/* Banner Acelerador Express */}
<div className="bg-gradient-to-r from-rose-950/80 to-slate-900 border border-rose-800/80 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
  <div className="space-y-1">
    <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider bg-rose-950 px-2.5 py-0.5 rounded-full border border-rose-800">
      ⚡ Formación de Alto Impacto
    </span>
    <h3 className="text-lg font-extrabold text-white">Programa de Inmersión Condensada (6 Módulos Express)</h3>
    <p className="text-xs text-slate-300">Diseñado para líderes que buscan velocidad, carácter y aplicación inmediata.</p>
  </div>
  <Link
    href="/universidad/inmersion"
    className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-lg whitespace-nowrap"
  >
    Ingresar al Acelerador ➔
  </Link>
</div>
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RecursosAvanzadosPage() {
  const [seccion, setSeccion] = useState<'griego' | 'apologetica' | 'homiletica'>('griego');

  // MÓDULO 1: Lexicografía (Griego de la Gracia)
  const terminosGriego = [
    {
      palabra: 'Χάρις (Charis)',
      traduccion: 'Gracia / Favor inmerecido',
      definición: 'El favor inclinado de Dios hacia quien no tiene mérito. No es un pago por esfuerzo, sino un regalo absoluto.',
      aplicacion: 'Tu aceptación ante Dios no fluctúa según tu rendimiento diario.'
    },
    {
      palabra: 'Δικαιοσύνη (Dikaiosyne)',
      traduccion: 'Justicia / Estado de corrección legal',
      definición: 'Condición legal dada al creyente donde es declarado libre de todo cargo en el tribunal de Dios.',
      aplicacion: 'No trabajas para ser justo; actúas correctamente porque ya fuiste declarado justo en Cristo.'
    },
    {
      palabra: 'Ἀπολύτρωσις (Apolytrosis)',
      traduccion: 'Redención / Liberación por rescate',
      definición: 'Pago total del precio de rescate para liberar a un esclavo permanentemente de su antiguo amo.',
      aplicacion: 'Fuiste comprado por la sangre de Cristo; el pecado y la culpa ya no tienen derecho legal sobre ti.'
    }
  ];

  // MÓDULO 2: Apologética y Pasajes Complejos
  const pasajesApologetica = [
    {
      pasaje: 'Hebreos 10:26',
      texto: '"Porque si pecáremos voluntariamente después de haber recibido el conocimiento de la verdad..."',
      malinterpretacion: 'Creer que si vuelves a fallar, pierdes la salvación y ya no hay perdón para ti.',
      explicacionGracia: 'El contexto de Hebreos habla de judíos que rechazaban el sacrificio definitivo de Jesús para volver al sistema de sacrificios de animales. El "único sacrificio" rechazado era Jesús; no se refiere a tropiezos diarios del creyente.'
    },
    {
      pasaje: '1 Juan 1:9',
      texto: '"Si confesamos nuestros pecados, él es fiel y justo para perdonar..."',
      malinterpretacion: 'Pensar que si mueres con un pecado sin confesar verbalmente, te vas al infierno.',
      explicacionGracia: 'Confesar (Homologeo) significa "coincidir con Dios" en que somos pecadores necesitados de Salvador. La carta contrarrestaba el gnosticismo que negaba la existencia del pecado.'
    }
  ];

  // MÓDULO 3: Plantilla Homilética
  const bosquejoEjemplo = {
    titulo: 'Libres de la Condenación',
    pasajeBase: 'Romanos 8:1-4',
    introduccion: 'Ilustrar la diferencia entre vivir bajo la amenaza de un juez vs. vivir bajo la protección de un padre.',
    punto1: '1. El veredicto de Dios: Ninguna condenación en Cristo.',
    punto2: '2. La ley del Espíritu de vida nos libró de la ley del pecado.',
    punto3: '3. Lo que era imposible para la Ley por la debilidad humana, Dios lo hizo enviando a su Hijo.',
    conclusionYLlamado: 'Invitar a la audiencia a descansar en la obra terminada de Cristo y soltar la carga de la culpa.'
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          🎓 Herramientas Académicas de Alto Impacto
        </span>
        <h1 className="text-3xl font-bold mt-2">Módulos de Valor Teológico Avanzado</h1>
        <p className="text-slate-400 text-sm">
          Lexicografía, apologética del Nuevo Pacto y taller de comunicación homilética.
        </p>
      </header>

      {/* Selector de Módulos */}
      <div className="flex flex-wrap gap-3 border-b border-slate-800 pb-4">
        <button
          onClick={() => setSeccion('griego')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            seccion === 'griego'
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          🔬 Griego de la Gracia
        </button>
        <button
          onClick={() => setSeccion('apologetica')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            seccion === 'apologetica'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          🛡️ Apologética & Pasajes Difíciles
        </button>
        <button
          onClick={() => setSeccion('homiletica')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            seccion === 'homiletica'
              ? 'bg-emerald-600 text-white shadow-lg'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          📢 Taller de Homilética
        </button>
      </div>

      {/* MÓDULO 1: LEXICOGRAFÍA GRIEGA */}
      {seccion === 'griego' && (
        <section className="space-y-4">
          <div className="bg-amber-950/30 border border-amber-800/50 p-4 rounded-xl text-xs text-amber-300">
            ℹ️ <strong>Lexicografía Práctica:</strong> Términos originales del Nuevo Testamento explicados con enfoque de liberación y gracia.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {terminosGriego.map((t, idx) => (
              <div key={idx} className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
                <div className="border-b border-slate-700 pb-2">
                  <h3 className="font-bold text-amber-400 text-base">{t.palabra}</h3>
                  <span className="text-[11px] text-slate-400">{t.traduccion}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{t.definición}</p>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-700/80">
                  <span className="text-[10px] text-indigo-400 font-bold block">💡 Aplicación Práctica:</span>
                  <span className="text-xs text-slate-200">{t.aplicacion}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MÓDULO 2: APOLOGÉTICA DE LA GRACIA */}
      {seccion === 'apologetica' && (
        <section className="space-y-4">
          <div className="bg-indigo-950/30 border border-indigo-800/50 p-4 rounded-xl text-xs text-indigo-300">
            🛡️ <strong>Exégesis y Respuesta a Objeciones:</strong> Análisis de pasajes comúnmente malinterpretados para infundir temor.
          </div>
          <div className="space-y-4">
            {pasajesApologetica.map((p, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <h3 className="font-bold text-indigo-300 text-lg">{p.pasaje}</h3>
                  <span className="text-xs text-slate-400 italic">{p.texto}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-rose-950/40 border border-rose-900/50 p-4 rounded-xl space-y-1">
                    <span className="text-rose-400 font-bold block">❌ Mala Interpretación Común:</span>
                    <p className="text-slate-300 leading-relaxed">{p.malinterpretacion}</p>
                  </div>
                  <div className="bg-emerald-950/40 border border-emerald-900/50 p-4 rounded-xl space-y-1">
                    <span className="text-emerald-400 font-bold block">✅ Respuesta de Gracia & Contexto:</span>
                    <p className="text-slate-300 leading-relaxed">{p.explicacionGracia}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MÓDULO 3: TALLER DE HOMILÉTICA */}
      {seccion === 'homiletica' && (
        <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-6">
          <div className="border-b border-slate-700 pb-3 space-y-1">
            <h2 className="text-xl font-bold text-emerald-400">📢 Plantilla Homilética: Predicación Centrara en Cristo</h2>
            <p className="text-xs text-slate-400">Estructura guiada para armar enseñanzas de alto impacto en minutos.</p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 space-y-4 text-xs">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="font-bold text-slate-200 text-sm">{bosquejoEjemplo.titulo}</span>
              <span className="text-indigo-400 font-mono">{bosquejoEjemplo.pasajeBase}</span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-emerald-400 font-semibold block">🎯 Introducción Sugerida:</span>
                <p className="text-slate-300">{bosquejoEjemplo.introduccion}</p>
              </div>
              <div>
                <span className="text-emerald-400 font-semibold block">📌 Desarrollo de Puntos Clave:</span>
                <ul className="list-disc list-inside text-slate-300 space-y-1 mt-1">
                  <li>{bosquejoEjemplo.punto1}</li>
                  <li>{bosquejoEjemplo.punto2}</li>
                  <li>{bosquejoEjemplo.punto3}</li>
                </ul>
              </div>
              <div>
                <span className="text-emerald-400 font-semibold block">🚀 Conclusión y Aplicación:</span>
                <p className="text-slate-300">{bosquejoEjemplo.conclusionYLlamado}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
<Link
  href="/universidad/recursos"
  className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
>
  <span>🔬</span> Recursos Avanzados (Griego, Apologética & Homilética)
</Link>
<Link
  href="/universidad/especializaciones"
  className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
>
  <span>🎯</span> Especializaciones Ministeriales
</Link>
<Link
  href="/universidad/liderazgo-cristocentrico"
  className="bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
>
  <span>👑</span> Liderazgo Cristocéntrico & Salud Ministerial
</Link>
<Link
  href="/universidad/certificados"
  className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
>
  <span>🏅</span> Certificados Digitales
</Link>
<div className="flex flex-wrap gap-2">
  <Link
    href="/universidad/editorial"
    className="bg-slate-800 hover:bg-slate-700 text-pink-400 border border-pink-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
  >
    <span>✍️</span> Hub Editorial & Copys
  </Link>

  <Link
    href="/universidad/mentoria"
    className="bg-slate-800 hover:bg-slate-700 text-purple-400 border border-purple-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
  >
    <span>👥</span> Centro de Mentoría Dual
  </Link>
</div>
<div className="flex flex-wrap gap-2">
  <Link
    href="/universidad/evaluacion"
    className="bg-slate-800 hover:bg-slate-700 text-teal-400 border border-teal-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
  >
    <span>📝</span> Diagnóstico Teológico
  </Link>

  <Link
    href="/universidad/foro"
    className="bg-slate-800 hover:bg-slate-700 text-blue-400 border border-blue-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
  >
    <span>💬</span> Ágora & Foro
  </Link>
</div>

<div className="flex flex-wrap gap-2">
  <Link
    href="/universidad/biblioteca"
    className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
  >
    <span>📚</span> Biblioteca Digital
  </Link>

  <Link
    href="/universidad/audioteca"
    className="bg-slate-800 hover:bg-slate-700 text-violet-400 border border-violet-800/60 font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
  >
    <span>🎧</span> Audioteca de Meditación
  </Link>
</div>
