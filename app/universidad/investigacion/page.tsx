'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InvestigacionPage() {
  const [lineaInvestigacion, setLineaInvestigacion] = useState('Todas');

  const publicaciones = [
    {
      id: 1,
      titulo: 'El Uso del Antiguo Testamento en la Epístola a los Hebreos',
      autor: 'Dr. Aarón Ramos',
      linea: 'Exégesis & Intertextualidad',
      fecha: 'Mayo 2026',
      descargas: 142,
      badge: 'Paper Académico',
      color: 'border-indigo-500 text-indigo-400 bg-indigo-950/40'
    },
    {
      id: 2,
      titulo: 'Evolución del Término Logos en el Contexto del Siglo I',
      autor: 'Dra. Elena Morales',
      linea: 'Hermenéutica & Lenguas Bíblicas',
      fecha: 'Junio 2026',
      descargas: 98,
      badge: 'Monografía',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40'
    },
    {
      id: 3,
      titulo: 'Impacto de la Apologética Urbana en Contextos Contemporáneos',
      autor: 'Pr. Carlos Mateo & Equipo Alumni',
      linea: 'Teología Práctica & Pastoral',
      fecha: 'Julio 2026',
      descargas: 210,
      badge: 'Tesis de Grado',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    }
  ];

  const publicacionesFiltradas = publicaciones.filter(
    (p) => lineaInvestigacion === 'Todas' || p.linea.includes(lineaInvestigacion)
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
          🔬 Centro de Investigación
        </span>
        <h1 className="text-3xl font-bold mt-2">Repositorio & Papers Académicos</h1>
        <p className="text-slate-400 text-sm">
          Accede a publicaciones científicas, monografías, tesis y artículos de exégesis teológica desarrollados por nuestra facultad.
        </p>
      </header>

      {/* Métricas del Repositorio */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Artículos Publicados</span>
          <p className="text-2xl font-extrabold text-indigo-400 font-mono">86</p>
          <p className="text-[11px] text-slate-400">Revisados por pares</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Descargas Totales</span>
          <p className="text-2xl font-extrabold text-cyan-400 font-mono">3,420</p>
          <p className="text-[11px] text-cyan-300">Formato PDF abierto</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Líneas Activas</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">4</p>
          <p className="text-[11px] text-slate-400">Grupos de investigación</p>
        </div>
      </div>

      {/* Filtro por Línea de Investigación */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
        <label className="text-xs font-bold text-slate-300">Línea de Investigación:</label>
        <select
          value={lineaInvestigacion}
          onChange={(e) => setLineaInvestigacion(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-400 transition-all"
        >
          <option value="Todas">Todas las líneas</option>
          <option value="Exégesis">Exégesis & Intertextualidad</option>
          <option value="Hermenéutica">Hermenéutica & Lenguas Bíblicas</option>
          <option value="Pastoral">Teología Práctica & Pastoral</option>
        </select>
      </div>

      {/* Lista de Investigaciones */}
      <section className="space-y-4">
        <div className="space-y-3">
          {publicacionesFiltradas.map((pub) => (
            <div
              key={pub.id}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${pub.color}`}>
                    {pub.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{pub.fecha}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100">{pub.titulo}</h3>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">Autor:</strong> {pub.autor}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  🔬 Línea: {pub.linea} | 📥 {pub.descargas} descargas
                </p>
              </div>

              <button
                onClick={() => alert(`Descargando documento PDF: "${pub.titulo}"`)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md w-full sm:w-auto"
              >
                Descargar PDF 📄
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InvestigacionPage() {
  const [lineaFiltro, setLineaFiltro] = useState('Todas');
  const [propuestaEnviada, setPropuestaEnviada] = useState(false);
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    linea: 'Exégesis & Sintaxis Griega',
    resumen: '',
  });

  const publicaciones = [
    {
      id: 'PUB-2026-01',
      titulo: 'El uso del imperfecto de intento en las epístolas paulinas',
      autor: 'Dr. Aarón Ramos',
      linea: 'Exégesis & Sintaxis Griega',
      fecha: 'Junio, 2026',
      descargas: 142,
      badge: 'Paper Académico',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40'
    },
    {
      id: 'TES-2026-08',
      titulo: 'Análisis gramático-histórico de los cánticos del Siervo en Isaías',
      autor: 'Dra. María Fernández',
      linea: 'Estudios del Antiguo Testamento',
      fecha: 'Mayo, 2026',
      descargas: 289,
      badge: 'Tesis de Maestría',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    },
    {
      id: 'PUB-2026-04',
      titulo: 'Impacto de las variantes textuales en el Papiro 66 sobre la cristología de Juan',
      autor: 'Pr. Carlos Mateo',
      linea: 'Crítica Textual',
      fecha: 'Abril, 2026',
      descargas: 98,
      badge: 'Monografía Exegética',
      color: 'border-amber-500 text-amber-400 bg-amber-950/40'
    }
  ];

  const handleProponer = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevoProyecto.titulo && nuevoProyecto.resumen) {
      setPropuestaEnviada(true);
      setTimeout(() => {
        setPropuestaEnviada(false);
        setNuevoProyecto({ titulo: '', linea: 'Exégesis & Sintaxis Griega', resumen: '' });
      }, 3500);
    }
  };

  const publicacionesFiltradas = publicaciones.filter(
    (p) => lineaFiltro === 'Todas' || p.linea === lineaFiltro
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
          🔬 Investigación & Repositorio
        </span>
        <h1 className="text-3xl font-bold mt-2">Centro de Investigación Teológica</h1>
        <p className="text-slate-400 text-sm">
          Explora la producción académica, tesis doctorales, artículos exegéticos revisados por pares y propone nuevas líneas de investigación.
        </p>
      </header>

      {/* Métricas de Investigación */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Publicaciones Indexadas</span>
          <p className="text-2xl font-extrabold text-teal-400 font-mono">150+</p>
          <p className="text-[11px] text-slate-400">Papers & Tesis registradas</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Líneas Activas</span>
          <p className="text-2xl font-extrabold text-cyan-400 font-mono">6</p>
          <p className="text-[11px] text-cyan-300">Áreas de especialización</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Proyectos en Curso</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">18</p>
          <p className="text-[11px] text-slate-400">Investigaciones de posgrado</p>
        </div>
      </div>

      {/* Repositorio de Investigaciones */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            📚 Repositorio Institucional de Investigaciones
          </h2>

          <select
            value={lineaFiltro}
            onChange={(e) => setLineaFiltro(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-teal-400 transition-all"
          >
            <option value="Todas">Todas las líneas</option>
            <option value="Exégesis & Sintaxis Griega">Exégesis & Sintaxis Griega</option>
            <option value="Estudios del Antiguo Testamento">Estudios del Antiguo Testamento</option>
            <option value="Crítica Textual">Crítica Textual</option>
          </select>
        </div>

        <div className="space-y-3">
          {publicacionesFiltradas.map((p) => (
            <div
              key={p.id}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${p.color}`}>
                    {p.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{p.fecha}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100">{p.titulo}</h3>
                <p className="text-xs text-slate-300 font-semibold">Por: {p.autor}</p>
                <p className="text-[11px] text-slate-400 font-mono">🏷️ Línea: {p.linea} | 📥 {p.descargas} descargas</p>
              </div>

              <button
                onClick={() => alert(`Iniciando descarga del PDF para el registro ${p.id}`)}
                className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md w-full sm:w-auto text-center"
              >
                Descargar Paper PDF 📄
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Propuesta de Nuevo Proyecto */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-teal-400">
          📝 Proponer Proyecto de Investigación o Monografía
        </h2>

        <form onSubmit={handleProponer} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Título del Proyecto:</label>
              <input
                type="text"
                required
                value={nuevoProyecto.titulo}
                onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })}
                placeholder="Ej. Análisis semántico del término Dikaiosyne en Romanos"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Línea de Investigación:</label>
              <select
                value={nuevoProyecto.linea}
                onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, linea: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-400 transition-all"
              >
                <option value="Exégesis & Sintaxis Griega">Exégesis & Sintaxis Griega</option>
                <option value="Estudios del Antiguo Testamento">Estudios del Antiguo Testamento</option>
                <option value="Crítica Textual">Crítica Textual</option>
                <option value="Teología Sistemática">Teología Sistemática</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-semibold">Resumen de la Propuesta (Abstract):</label>
            <textarea
              rows={3}
              required
              value={nuevoProyecto.resumen}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, resumen: e.target.value })}
              placeholder="Describe la hipótesis, metodología gramático-histórica y objetivos..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-all"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            Enviar Propuesta al Comité Científico 🚀
          </button>

          {propuestaEnviada && (
            <p className="text-xs text-emerald-400 font-semibold pt-1">
              ✓ Propuesta enviada exitosamente. El comité metodológico evaluará la solicitud.
            </p>
          )}
        </form>
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-teal-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
