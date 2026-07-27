'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AlumniPage() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [publicado, setPublicado] = useState(false);

  const oportunidades = [
    {
      id: 1,
      titulo: 'Docente de Hermenéutica y Lenguajes Originales',
      organizacion: 'Instituto Teológico Reformado (Virtual)',
      ubicación: 'Remoto / En línea',
      tipo: 'Medio Tiempo',
      categoria: 'Educación Académica',
      color: 'border-amber-500 text-amber-400 bg-amber-950/30'
    },
    {
      id: 2,
      titulo: 'Pastor Asociado & Encargado de Discipulado',
      organizacion: 'Comunidad Cristiana Gracia y Verdad',
      ubicación: 'Santo Domingo, RD',
      tipo: 'Tiempo Completo',
      categoria: 'Liderazgo Pastoral',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/30'
    },
    {
      id: 3,
      titulo: 'Coordinador de Salud Pastoral y Cuidado Familiar',
      organizacion: 'Red Eclesiástica Misión Cristocéntrica',
      ubicación: 'Santiago, RD',
      tipo: 'Por Proyectos',
      categoria: 'Capellanía / Cuidado',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/30'
    }
  ];

  const handlePublicar = (e: React.FormEvent) => {
    e.preventDefault();
    setPublicado(true);
    setTimeout(() => {
      setPublicado(false);
      setModalAbierto(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2 flex justify-between items-end flex-wrap gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
            🤝 Red Alumni & Impacto
          </span>
          <h1 className="text-3xl font-bold mt-2">Bolsa de Trabajo & Red Ministerial</h1>
          <p className="text-slate-400 text-sm">
            Conecta con ministerios, institutos teológicos y oportunidades de servicio pastoral para egresados.
          </p>
        </div>

        <button
          onClick={() => setModalAbierto(true)}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0"
        >
          + Publicar Vacante / Proyecto
        </button>
      </header>

      {/* Lista de Oportunidades */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          💼 Convocatorias & Oportunidades Activas
        </h2>

        <div className="space-y-3">
          {oportunidades.map((op) => (
            <div
              key={op.id}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${op.color}`}>
                    {op.categoria}
                  </span>
                  <span className="text-xs font-mono text-slate-400">📍 {op.ubicación}</span>
                  <span className="text-xs font-mono text-slate-500">• {op.tipo}</span>
                </div>
                <h3 className="text-base font-bold text-slate-100">{op.titulo}</h3>
                <p className="text-xs text-slate-400">
                  Entidad: <strong className="text-slate-200">{op.organizacion}</strong>
                </p>
              </div>

              <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all text-center shrink-0">
                Postularme / Contactar →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Publicación */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-3xl max-w-lg w-full space-y-4 relative shadow-2xl">
            <h3 className="text-base font-bold text-slate-100">Publicar Oportunidad Ministerial</h3>
            <p className="text-xs text-slate-400">
              Completa los datos de la vacante o proyecto para difundirlo entre la comunidad de egresados.
            </p>

            {!publicado ? (
              <form onSubmit={handlePublicar} className="space-y-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Título de la Posición:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Profesor de Teología / Pastor de Jóvenes"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Iglesia u Organización:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Iglesia Cristiana Gracia Sublime"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Ubicación:</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Santo Domingo / Remoto"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Modalidad:</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400">
                      <option>Tiempo Completo</option>
                      <option>Medio Tiempo</option>
                      <option>Por Proyectos</option>
                      <option>Voluntariado</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-2 pt-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setModalAbierto(false)}
                    className="bg-slate-900 hover:bg-slate-700 text-slate-400 font-bold text-xs px-4 py-2 rounded-xl border border-slate-700"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2 rounded-xl shadow-md"
                  >
                    Publicar Convocatoria
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-emerald-950/80 border border-emerald-500 p-4 rounded-2xl text-center space-y-1">
                <span className="text-2xl">✨</span>
                <p className="text-xs font-bold text-emerald-200">¡Convocatoria publicada con éxito!</p>
                <p className="text-[11px] text-emerald-300">Ya está visible en la red Alumni.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
