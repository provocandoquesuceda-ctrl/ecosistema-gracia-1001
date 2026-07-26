'use client';

import { useState } from 'react';

export default function AudiotecaPage() {
  const [reproduciendo, setReproduciendo] = useState<number | null>(null);

  const audios = [
    {
      id: 1,
      titulo: 'Cápsula 01: La Diferencia entre Perdón de Dios y Perdón Humano',
      duracion: '04:12',
      orador: 'Pr. Aarón Ramos',
      tema: 'Romanos 5:8'
    },
    {
      id: 2,
      titulo: 'Cápsula 02: Tu Identidad Inmovible tras el Velo',
      duracion: '03:45',
      orador: 'Dra. María Fernández',
      tema: 'Hebreos 10:19'
    },
    {
      id: 3,
      titulo: 'Cápsula 03: Vivir Sin la Carga de la Comparación',
      duracion: '05:00',
      orador: 'Pr. Carlos Mendoza',
      tema: 'Gálatas 6:4'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-3 py-1 rounded-full border border-violet-800">
          🎧 Formación sobre la Marcha
        </span>
        <h1 className="text-3xl font-bold mt-2">Audioteca de Meditación en la Gracia</h1>
        <p className="text-slate-400 text-sm">
          Reflexiones breves de audio para renovar tu mente mientras realizas tus labores diarias.
        </p>
      </header>

      <div className="space-y-3">
        {audios.map((a) => (
          <div
            key={a.id}
            className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
              reproduciendo === a.id
                ? 'bg-violet-950/60 border-violet-500 shadow-xl'
                : 'bg-slate-800 border-slate-700 hover:bg-slate-750'
            }`}
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => setReproduciendo(reproduciendo === a.id ? null : a.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  reproduciendo === a.id
                    ? 'bg-violet-500 text-white shadow-lg animate-pulse'
                    : 'bg-slate-900 text-violet-400 border border-slate-700 hover:border-violet-500'
                }`}
              >
                {reproduciendo === a.id ? '⏸️' : '▶️'}
              </button>
              <div>
                <h3 className="font-bold text-sm text-slate-100">{a.titulo}</h3>
                <p className="text-xs text-slate-400">
                  {a.orador} • <span className="text-violet-400 font-mono">{a.tema}</span>
                </p>
              </div>
            </div>

            <span className="text-xs text-slate-400 font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700">
              {a.duracion}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AudiotecaPage() {
  const episodios = [
    {
      id: 1,
      titulo: 'Episodio 01: La centralidad de la Gracia en el Nuevo Pacto',
      duracion: '24 min',
      modulo: 'Hermenéutica',
      descripcion: 'Análisis de la perspectiva paulina sobre la gracia sin mezclas de mérito legalista.'
    },
    {
      id: 2,
      titulo: 'Episodio 02: Higiene emocional y pastoral del líder',
      duracion: '18 min',
      modulo: 'Salud Pastoral',
      descripcion: 'Herramientas de autocuidado para prevenir el agotamiento y sostener un ministerio saludable.'
    },
    {
      id: 3,
      titulo: 'Episodio 03: Exégesis de Gálatas 2:20 - Con Cristo estoy juntamente crucificado',
      duracion: '31 min',
      modulo: 'Exégesis',
      descripcion: 'Un desglose verso por verso sobre la identidad del creyente resucitado.'
    }
  ];

  const [reproduciendo, setReproduciendo] = useState<number | null>(null);

  const toggleReproduccion = (id: number) => {
    if (reproduciendo === id) {
      setReproduciendo(null);
    } else {
      setReproduciendo(id);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-3 py-1 rounded-full border border-violet-800">
          🎧 Formación Auditiva
        </span>
        <h1 className="text-3xl font-bold mt-2">Audioteca & Podcasts Académicos</h1>
        <p className="text-slate-400 text-sm">
          Escucha tus clases, conferencias y recursos de profundización ministerial en cualquier lugar.
        </p>
      </header>

      {/* Lista de Episodios */}
      <div className="space-y-4">
        {episodios.map((ep) => {
          const estaSonando = reproduciendo === ep.id;
          return (
            <div
              key={ep.id}
              className={`p-6 rounded-3xl border transition-all ${
                estaSonando
                  ? 'bg-violet-950/40 border-violet-500 shadow-lg shadow-violet-950/30'
                  : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600'
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase bg-slate-900 text-violet-300 border border-slate-700 px-2.5 py-0.5 rounded-full">
                      {ep.modulo}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">⏱️ {ep.duracion}</span>
                  </div>
                  <h3 className="font-bold text-slate-100 text-base mt-1">{ep.titulo}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ep.descripcion}</p>
                </div>

                <button
                  onClick={() => toggleReproduccion(ep.id)}
                  className={`w-full sm:w-auto font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 ${
                    estaSonando
                      ? 'bg-violet-500 text-slate-950 hover:bg-violet-400'
                      : 'bg-slate-900 hover:bg-slate-700 text-violet-300 border border-slate-700'
                  }`}
                >
                  <span>{estaSonando ? '⏸️ Pausar Audio' : '▶️ Reproducir Audio'}</span>
                </button>
              </div>

              {estaSonando && (
                <div className="mt-4 pt-4 border-t border-violet-800/50 space-y-2 animate-fadeIn">
                  <div className="flex justify-between text-[10px] text-violet-300 font-mono">
                    <span>En reproducción...</span>
                    <span>12:40 / {ep.duracion}</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-violet-800/60">
                    <div className="bg-violet-500 h-full w-1/2 rounded-full transition-all duration-300"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-violet-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
