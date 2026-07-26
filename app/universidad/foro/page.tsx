'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForoPage() {
  const [temas, setTemas] = useState([
    {
      id: 1,
      titulo: '¿Cómo explicar la Justificación por Fe sin caer en el libertinaje antinomiano?',
      autor: 'Estudiante Marco V.',
      respuestas: 5,
      categoria: 'Teología Sistemática',
      comentarios: [
        'Pr. Aarón: La verdadera gracia no produce pasividad, sino una nueva naturaleza que ama la justicia.',
        'Estudiante Elena: Enfocándose en Romanos 6, donde el estar muertos al pecado es la consecuencia de la unión con Cristo.'
      ]
    },
    {
      id: 2,
      titulo: 'Recursos recomendados para el análisis sintáctico del griego en Efesios',
      autor: 'Estudiante Lucía R.',
      respuestas: 2,
      categoria: 'Exégesis & Idiomas',
      comentarios: [
        'Dra. María: Recomiendo revisar la gramática de Wallace en el capítulo de participios subordinados.'
      ]
    }
  ]);

  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [verComentarios, setVerComentarios] = useState<number | null>(null);

  const handleCrearTema = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoTitulo) return;

    setTemas([
      {
        id: Date.now(),
        titulo: nuevoTitulo,
        autor: 'Tú (Alumno Activo)',
        respuestas: 0,
        categoria: 'General',
        comentarios: []
      },
      ...temas
    ]);
    setNuevoTitulo('');
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
          💬 Diálogo & Comunidad
        </span>
        <h1 className="text-3xl font-bold mt-2">Ágora Teológica & Foro</h1>
        <p className="text-slate-400 text-sm">
          Intercambia reflexiones, plantea dudas de exégesis y debate respetuosamente con la comunidad estudiantil.
        </p>
      </header>

      {/* Crear Nuevo Tema */}
      <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          ➕ Abrir un Nuevo Debate
        </h2>
        <form onSubmit={handleCrearTema} className="flex gap-2">
          <input
            type="text"
            placeholder="Escribe el tema o pregunta para la comunidad..."
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shrink-0"
          >
            Publicar
          </button>
        </form>
      </div>

      {/* Lista de Hilos de Debate */}
      <div className="space-y-4">
        {temas.map((tema) => {
          const desplegado = verComentarios === tema.id;
          return (
            <div
              key={tema.id}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-3 hover:border-blue-500/40 transition-all"
            >
              <div className="flex justify-between items-center text-[10px]">
                <span className="bg-slate-900 text-blue-400 border border-slate-700 px-2.5 py-0.5 rounded-full font-bold uppercase">
                  {tema.categoria}
                </span>
                <span className="text-slate-500 font-mono">{tema.respuestas} Respuestas</span>
              </div>

              <h3 className="font-bold text-slate-100 text-sm">{tema.titulo}</h3>
              <p className="text-xs text-slate-400">Iniciado por: <strong className="text-slate-300">{tema.autor}</strong></p>

              {desplegado && (
                <div className="pt-3 border-t border-slate-700 space-y-2">
                  {tema.comentarios.length > 0 ? (
                    tema.comentarios.map((c, i) => (
                      <div key={i} className="bg-slate-900 p-3 rounded-xl text-xs text-slate-300 border border-slate-800">
                        {c}
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 italic">No hay respuestas aún en este hilo.</p>
                  )}
                </div>
              )}

              <button
                onClick={() => setVerComentarios(desplegado ? null : tema.id)}
                className="bg-slate-900 hover:bg-slate-700 text-blue-400 border border-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition-all block"
              >
                {desplegado ? 'Ocultar Respuestas ▲' : 'Ver Hilo de Respuestas ▼'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
