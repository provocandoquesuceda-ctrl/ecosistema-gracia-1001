'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DocentesPage() {
  const [filtroEspecialidad, setFiltroEspecialidad] = useState('Todas');

  const docentes = [
    {
      id: 1,
      nombre: 'Dr. Aarón Ramos',
      cargo: 'Decano de Estudios Bíblicos & Profesor Titular',
      especialidad: 'Exégesis & Griego Koiné',
      grado: 'Ph.D. en Antiguo y Nuevo Testamento',
      correo: 'aaron.ramos@universidad.edu',
      horario: 'Lunes y Miércoles, 15:00 - 18:00 UTC-4',
      badge: 'Decanatura',
      color: 'border-blue-500 text-blue-400 bg-blue-950/40'
    },
    {
      id: 2,
      nombre: 'Dra. Elena Morales',
      cargo: 'Profesora Senior de Hermenéutica Teológica',
      especialidad: 'Hermenéutica & Análisis Textual',
      grado: 'Th.M. en Teología Sistemática',
      correo: 'elena.morales@universidad.edu',
      horario: 'Martes y Jueves, 14:00 - 17:00 UTC-4',
      badge: 'Investigación',
      color: 'border-purple-500 text-purple-400 bg-purple-950/40'
    },
    {
      id: 3,
      nombre: 'Pr. Carlos Mateo',
      cargo: 'Director del Departamento de Teología Pastoral',
      especialidad: 'Eclesiología & Salud Ministerial',
      grado: 'D.Min. en Liderazgo Pastoral',
      correo: 'carlos.mateo@universidad.edu',
      horario: 'Viernes, 10:00 - 13:00 UTC-4',
      badge: 'Pastoral',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    }
  ];

  const docentesFiltrados = docentes.filter(
    (d) => filtroEspecialidad === 'Todas' || d.especialidad.includes(filtroEspecialidad)
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
          👨‍🏫 Claustro Académico
        </span>
        <h1 className="text-3xl font-bold mt-2">Cuerpo Docente & Autoridades</h1>
        <p className="text-slate-400 text-sm">
          Conoce a nuestro equipo de profesores, investigadores y teólogos dedicados a la formación académica rigurosa y ministerial.
        </p>
      </header>

      {/* Filtro por Áreas */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
        <label className="text-xs font-bold text-slate-300">Filtrar por Área de Especialidad:</label>
        <select
          value={filtroEspecialidad}
          onChange={(e) => setFiltroEspecialidad(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-400 transition-all"
        >
          <option value="Todas">Todas las áreas</option>
          <option value="Exégesis">Exégesis & Lenguas Bíblicas</option>
          <option value="Hermenéutica">Hermenéutica & Filosofía</option>
          <option value="Eclesiología">Teología Pastoral & Eclesiología</option>
        </select>
      </div>

      {/* Tarjetas de Profesores */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {docentesFiltrados.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${doc.color}`}>
                    {doc.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{doc.grado}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100">{doc.nombre}</h3>
                <p className="text-xs font-semibold text-blue-400">{doc.cargo}</p>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">Especialidad:</strong> {doc.especialidad}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  🕒 Atención: {doc.horario}
                </p>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => alert(`Enviando correo a ${doc.correo}`)}
                  className="bg-slate-900 hover:bg-slate-700 text-blue-400 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all text-center"
                >
                  Contactar ✉️
                </button>
                <Link
                  href="/universidad/tutorias"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md text-center"
                >
                  Agendar Tutoría →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

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
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DocentesPage() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState('Sintaxis & Exégesis del Griego II');
  const [notaEstudiante, setNotaEstudiante] = useState({ id: '', nota: '', observaciones: '' });
  const [notaGuardada, setNotaGuardada] = useState(false);

  const cursosImpartidos = [
    {
      id: 'GRI-202',
      nombre: 'Sintaxis & Exégesis del Griego II',
      estudiantes: 28,
      horario: 'Mar y Jue - 18:00 UTC',
      entregasPendientes: 5,
    },
    {
      id: 'HER-101',
      nombre: 'Principios de Hermenéutica Bíblica',
      estudiantes: 42,
      horario: 'Lun y Mié - 20:00 UTC',
      entregasPendientes: 12,
    },
  ];

  const estudiantesCurso = [
    { id: 'UGR-9041', nombre: 'Juan Pérez', entrega: 'Ensayo Exegético Cap. 3', estado: 'Pendiente' },
    { id: 'UGR-8812', nombre: 'María Rodríguez', entrega: 'Ensayo Exegético Cap. 3', estado: 'Calificado (95/100)' },
    { id: 'UGR-7731', nombre: 'Carlos Gómez', entrega: 'Ensayo Exegético Cap. 3', estado: 'Pendiente' },
  ];

  const handleGuardarNota = (e: React.FormEvent) => {
    e.preventDefault();
    if (notaEstudiante.id && notaEstudiante.nota) {
      setNotaGuardada(true);
      setTimeout(() => {
        setNotaGuardada(false);
        setNotaEstudiante({ id: '', nota: '', observaciones: '' });
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/80 px-3 py-1 rounded-full border border-violet-800">
          👨‍🏫 Gestión Docente
        </span>
        <h1 className="text-3xl font-bold mt-2">Portal del Profesor</h1>
        <p className="text-slate-400 text-sm">
          Administra tus asignaturas, califica trabajos académicos, registra asistencias y publica comunicados para tus clases.
        </p>
      </header>

      {/* Cursos Asignados */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          📚 Asignaturas Asignadas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cursosImpartidos.map((curso) => (
            <div
              key={curso.id}
              onClick={() => setCursoSeleccionado(curso.nombre)}
              className={`p-5 rounded-3xl border transition-all cursor-pointer space-y-3 ${
                cursoSeleccionado === curso.nombre
                  ? 'bg-slate-800 border-violet-500 shadow-lg shadow-violet-950/50'
                  : 'bg-slate-800/50 border-slate-700/80 hover:border-slate-600'
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-violet-400 bg-violet-950/60 px-2.5 py-0.5 rounded border border-violet-800 font-bold">
                  {curso.id}
                </span>
                {curso.entregasPendientes > 0 && (
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                    {curso.entregasPendientes} por calificar
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-100">{curso.nombre}</h3>
                <p className="text-xs text-slate-400 mt-1">👥 {curso.estudiantes} Estudiantes matriculados</p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">🗓️ {curso.horario}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Listado y Calificación de Estudiantes */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-5">
        <div className="border-b border-slate-700 pb-3">
          <span className="text-[10px] text-violet-400 font-mono uppercase font-bold">Asignatura Activa</span>
          <h2 className="text-base font-bold text-slate-100">{cursoSeleccionado}</h2>
        </div>

        {/* Tabla de entregas */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            📝 Entregas Recientes de Estudiantes
          </h3>

          <div className="space-y-2">
            {estudiantesCurso.map((e) => (
              <div
                key={e.id}
                className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-100">{e.nombre}</span>
                    <span className="text-[10px] font-mono text-slate-400">({e.id})</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{e.entrega}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold text-slate-300">{e.estado}</span>
                  <button
                    onClick={() => setNotaEstudiante({ ...notaEstudiante, id: e.id })}
                    className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition-all"
                  >
                    Calificar ✍️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario de Evaluación */}
        {notaEstudiante.id && (
          <form onSubmit={handleGuardarGuardarNota => handleGuardarNota(e)} className="bg-slate-900/90 p-4 rounded-2xl border border-violet-500/50 space-y-3 pt-4">
            <h4 className="text-xs font-bold text-violet-300">
              Ingresar Calificación para {notaEstudiante.id}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-300 font-semibold block mb-1">Puntaje (0-100):</label>
                <input
                  type="number"
                  required
                  min="0"
                  max="100"
                  value={notaEstudiante.nota}
                  onChange={(ev) => setNotaEstudiante({ ...notaEstudiante, nota: ev.target.value })}
                  placeholder="Ej. 92"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-violet-400"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-300 font-semibold block mb-1">Retroalimentación / Comentarios:</label>
                <input
                  type="text"
                  value={notaEstudiante.observaciones}
                  onChange={(ev) => setNotaEstudiante({ ...notaEstudiante, observaciones: ev.target.value })}
                  placeholder="Excelente uso del léxico exegético..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-violet-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
            >
              Guardar Nota Oficial
            </button>
          </form>
        )}

        {notaGuardada && (
          <p className="text-xs text-emerald-400 font-semibold pt-1">
            ✓ Calificación registrada y notificada al estudiante.
          </p>
        )}
      </section>

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
