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
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AlumniPage() {
  const [categoria, setCategoria] = useState('Todas');

  const publicacionesEgresados = [
    {
      id: 1,
      titulo: 'Análisis Crítico de la Teología del Pacto en el Siglo XVII',
      autor: 'Lic. Samuel E. Castillo (Promoción 2024)',
      tipo: 'Artículo Científico / Exégesis',
      fecha: 'Junio 2026',
      badge: 'Publicación',
      color: 'border-amber-500 text-amber-400 bg-amber-950/40'
    },
    {
      id: 2,
      titulo: 'Cátedra de Griego Básico para Comunidades Rurales',
      autor: 'Pr. Josué Daniel Vega (Promoción 2025)',
      tipo: 'Bolsa de Proyectos Ministeriales',
      fecha: 'Julio 2026',
      badge: 'Proyecto',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    },
    {
      id: 3,
      titulo: 'Coordinador de Formación Teológica Local',
      autor: 'Seminario Bíblico Metropolitano',
      tipo: 'Oportunidad / Vacante Docente',
      fecha: 'Julio 2026',
      badge: 'Vacante',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40'
    }
  ];

  const itemsFiltrados = publicacionesEgresados.filter(
    (item) => categoria === 'Todas' || item.badge === categoria
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          🎓 Comunidad Alumni
        </span>
        <h1 className="text-3xl font-bold mt-2">Red de Egresados & Bolsa Ministerial</h1>
        <p className="text-slate-400 text-sm">
          Espacio de vinculación profesional, publicaciones académicas y mentoría para los graduados de la Universidad de la Gracia.
        </p>
      </header>

      {/* Tarjetas de Métricas de la Red */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Graduados Registrados</span>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">312</p>
          <p className="text-[11px] text-slate-400">En 14 países</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Oportunidades Activas</span>
          <p className="text-2xl font-extrabold text-cyan-400 font-mono">15</p>
          <p className="text-[11px] text-cyan-300">Vacantes y proyectos</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Publicaciones Alumni</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">48</p>
          <p className="text-[11px] text-slate-400">Artículos y monografías</p>
        </div>
      </div>

      {/* Filtro por Categoría */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
        <label className="text-xs font-bold text-slate-300">Filtrar por Tipo de Contenido:</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-400 transition-all"
        >
          <option value="Todas">Mostrar Todo</option>
          <option value="Publicación">Publicaciones Académicas</option>
          <option value="Proyecto">Proyectos Ministeriales</option>
          <option value="Vacante">Oportunidades & Vacantes</option>
        </select>
      </div>

      {/* Lista de Publicaciones / Vacantes */}
      <section className="space-y-4">
        <div className="space-y-3">
          {itemsFiltrados.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${item.color}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.fecha}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100">{item.titulo}</h3>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">Fuente / Autor:</strong> {item.autor}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  📌 {item.tipo}
                </p>
              </div>

              <button
                onClick={() => alert(`Accediendo al detalle de: ${item.titulo}`)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md w-full sm:w-auto"
              >
                Ver Detalle →
              </button>
            </div>
          ))}
        </div>
      </section>

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
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AlumniPage() {
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');
  const [postulado, setPostulado] = useState<number | null>(null);

  const vacantes = [
    {
      id: 1,
      titulo: 'Docente Titular de Griego Koiné',
      institucion: 'Instituto Bíblico Central',
      ubicación: 'Remoto / En línea',
      tipo: 'Académica',
      fecha: '24 de Julio, 2026',
      badge: 'Tiempo Parcial',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40'
    },
    {
      id: 2,
      titulo: 'Pastor Principal / Líder de Comunidad',
      institucion: 'Iglesia Gracia & Verdad',
      ubicación: 'Santo Domingo, RD',
      tipo: 'Pastoral',
      fecha: '20 de Julio, 2026',
      badge: 'Tiempo Completo',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    },
    {
      id: 3,
      titulo: 'Coordinador de Proyectos de Impacto Social',
      institucion: 'Red Misionera Internacional',
      ubicación: 'Híbrido',
      tipo: 'Misionera',
      fecha: '15 de Julio, 2026',
      badge: 'Proyecto',
      color: 'border-amber-500 text-amber-400 bg-amber-950/40'
    }
  ];

  const egresadosDestacados = [
    {
      nombre: 'Dra. María Fernández',
      promocion: 'Clase 2022 - Lic. en Teología',
      rol: 'Autora & Investigadora Exegética',
      ubicacion: 'Guatemala'
    },
    {
      nombre: 'Pr. Carlos Mateo',
      promocion: 'Clase 2020 - Maestría en Pastoral',
      rol: 'Pastor Principal & Mentor Alumni',
      ubicacion: 'República Dominicana'
    }
  ];

  const vacantesFiltradas = vacantes.filter(
    (v) => filtroCategoria === 'Todas' || v.tipo === filtroCategoria
  );

  const handlePostular = (id: number) => {
    setPostulado(id);
    setTimeout(() => setPostulado(null), 3000);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          🎓 Portal Alumni
        </span>
        <h1 className="text-3xl font-bold mt-2">Red de Egresados & Convocatorias</h1>
        <p className="text-slate-400 text-sm">
          Impulsamos el desarrollo profesional y ministerial de nuestros graduados mediante una red global de mentoría y vacantes exclusivas.
        </p>
      </header>

      {/* Métricas Alumni */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Graduados Registrados</span>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">1,240+</p>
          <p className="text-[11px] text-slate-400">En 18 países</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Vacantes Activas</span>
          <p className="text-2xl font-extrabold text-cyan-400 font-mono">12</p>
          <p className="text-[11px] text-cyan-300">Convocatorias abiertas</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Mentores Alumni</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">45</p>
          <p className="text-[11px] text-slate-400">Disponibles para asesoría</p>
        </div>
      </div>

      {/* Bolsa de Trabajo Ministerial */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            💼 Bolsa de Trabajo & Convocatorias
          </h2>

          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-all"
          >
            <option value="Todas">Todas las categorías</option>
            <option value="Académica">Académicas / Docencia</option>
            <option value="Pastoral">Pastoral & Liderazgo</option>
            <option value="Misionera">Proyectos & Misión</option>
          </select>
        </div>

        <div className="space-y-3">
          {vacantesFiltradas.map((v) => (
            <div
              key={v.id}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${v.color}`}>
                    {v.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{v.fecha}</span>
                </div>

                <h3 className="text-base font-bold text-slate-100">{v.titulo}</h3>
                <p className="text-xs text-slate-300 font-semibold">{v.institucion}</p>
                <p className="text-[11px] text-slate-400 font-mono">📍 {v.ubicación} | Área: {v.tipo}</p>
              </div>

              <button
                onClick={() => handlePostular(v.id)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md w-full sm:w-auto text-center"
              >
                {postulado === v.id ? '✓ Postulación Enviada' : 'Postular Candidatura 🚀'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Red de Mentores y Destacados */}
      <section className="bg-slate-800/50 p-6 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">
          🌟 Destacados de la Red Alumni
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {egresadosDestacados.map((item, idx) => (
            <div key={idx} className="bg-slate-900/70 p-4 rounded-2xl border border-slate-700/60 space-y-1">
              <h3 className="text-sm font-bold text-slate-100">{item.nombre}</h3>
              <p className="text-xs text-amber-400 font-medium">{item.promocion}</p>
              <p className="text-[11px] text-slate-400">{item.rol}</p>
              <p className="text-[10px] text-slate-500 font-mono">📍 {item.ubicacion}</p>
            </div>
          ))}
        </div>
      </section>

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
