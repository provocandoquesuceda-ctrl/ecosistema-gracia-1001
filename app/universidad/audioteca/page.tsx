'item client';

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
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-3 py-1 rounded-full border border-violet-800">
          🎧 Formación sobre la Marcha
        </span>
        <h1 className="text-3xl font-bold mt-2">Audioteca de Meditación en la Gracia</h1>
        <p className="text-slate-400 text-sm">
          Reflexiones breves de audio para renovar tu mente mientras realizas tus labores diarias.
        </p>
      </header>

      {/* Lista de Audios */}
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