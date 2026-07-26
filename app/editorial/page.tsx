'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HubEditorialPage() {
  const [categoria, setCategoria] = useState<'redes' | 'devocional' | 'boletin'>('redes');
  const [copiadoIdx, setCopiadoIdx] = useState<number | null>(null);

  const plantillasRedes = [
    {
      titulo: 'Identidad vs. Rendimiento',
      texto: 'Dios no te ama por lo que haces para Él, sino por lo que Jesús ya hizo por ti. Tu aceptación no fluctúa según tu rendimiento diario. ¡Descansa hoy en la obra terminada! ✝️✨ #GraciaYVerdad #IdentidadEnCristo #NuevoPacto',
      proposito: 'Ideal para Instagram / Facebook / WhatsApp Status'
    },
    {
      titulo: 'Cero Condenación',
      texto: 'Si tropiezas, el Espíritu Santo no viene a acusarte ni a recordarte tu falla; viene a recordarte tu justicia en Cristo (Romanos 8:1). Levanta la cabeza, fuiste redimido por completo.',
      proposito: 'Ideal para X (Twitter) o Reflexión Corta'
    },
    {
      titulo: 'El Favor Inmerecido',
      texto: 'La Ley exige perfección al hombre imperfecto; la Gracia regala la perfección de Cristo al hombre necesitado. Hoy caminas bajo el favor inmerecido del Padre. 🙌',
      proposito: 'Ideal para inicio de semana'
    }
  ];

  const plantillasDevocional = [
    {
      titulo: 'Devocional de 3 Minutos: Libres del Temor al Juicio',
      pasaje: '1 Juan 4:18 — "En el amor no hay temor; sino que el perfecto amor echa fuera el temor..."',
      reflexion: 'Cuando comprendes la dimensión del amor de Dios manifestado en la cruz, el temor al castigo desaparece. Dios no está buscando tus errores para castigarte; está derramando su amor para transformarte desde adentro.',
      oracion: 'Padre, gracias porque tu perfecto amor ha quitado todo temor de mi vida. Hoy decido vivir confiado en tu gracia incondicional.'
    }
  ];

  const plantillasBoletin = [
    {
      titulo: 'Anuncio Comunitaria: Bienvenidos a la Casa de la Gracia',
      mensaje: 'En nuestra comunidad no hay lugar para el juicio ni la comparación. Ven como estás y descubre la vida abundante que Jesús conquistó para ti. ¡Te esperamos esta semana para celebrar juntos el Nuevo Pacto!'
    }
  ];

  const copiarTexto = (texto: string, idx: number) => {
    navigator.clipboard.writeText(texto);
    setCopiadoIdx(idx);
    setTimeout(() => setCopiadoIdx(null), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 bg-pink-950/80 px-3 py-1 rounded-full border border-pink-800">
          ✍️ Generador Editorial & Comunicación
        </span>
        <h1 className="text-3xl font-bold mt-2">Hub Editorial de la Gracia</h1>
        <p className="text-slate-400 text-sm">
          Plantillas, mensajes y reflexiones Cristocéntricas listas para compartir en redes sociales, boletines y grupos.
        </p>
      </header>

      {/* Navegación por tipo de contenido */}
      <div className="flex gap-3 border-b border-slate-800 pb-4">
        <button
          onClick={() => setCategoria('redes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            categoria === 'redes'
              ? 'bg-pink-600 text-white shadow-lg'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          📱 Redes Sociales (Copys Cortos)
        </button>
        <button
          onClick={() => setCategoria('devocional')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            categoria === 'devocional'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          📖 Devocionales Rápidos
        </button>
        <button
          onClick={() => setCategoria('boletin')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            categoria === 'boletin'
              ? 'bg-emerald-600 text-white shadow-lg'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          📢 Boletines & Anuncios
        </button>
      </div>

      {/* CONTENIDO 1: REDES SOCIALES */}
      {categoria === 'redes' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plantillasRedes.map((item, idx) => (
            <div key={idx} className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] text-pink-400 font-bold bg-pink-950/60 px-2 py-1 rounded border border-pink-900/60 block w-fit">
                  {item.proposito}
                </span>
                <h3 className="font-bold text-white text-sm">{item.titulo}</h3>
                <p className="text-xs text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-700/60 leading-relaxed italic">
                  "{item.texto}"
                </p>
              </div>
              <button
                onClick={() => copiarTexto(item.texto, idx)}
                className="w-full bg-slate-700 hover:bg-pink-600 text-white font-bold text-xs py-2 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {copiadoIdx === idx ? '✅ ¡Copiado al Portapapeles!' : '📋 Copiar Mensaje'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CONTENIDO 2: DEVOCIONALES */}
      {categoria === 'devocional' && (
        <div className="space-y-4">
          {plantillasDevocional.map((item, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
              <h3 className="text-lg font-bold text-indigo-300">{item.titulo}</h3>
              <p className="text-xs font-mono text-indigo-400 bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                {item.pasaje}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">{item.reflexion}</p>
              <div className="bg-indigo-950/40 p-3 rounded-xl border border-indigo-900/50 text-xs text-indigo-200">
                <strong>🙏 Oración:</strong> {item.oracion}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CONTENIDO 3: BOLETINES */}
      {categoria === 'boletin' && (
        <div className="space-y-4">
          {plantillasBoletin.map((item, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <h3 className="text-lg font-bold text-emerald-300">{item.titulo}</h3>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-4 rounded-xl border border-slate-700">
                {item.mensaje}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}