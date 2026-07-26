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