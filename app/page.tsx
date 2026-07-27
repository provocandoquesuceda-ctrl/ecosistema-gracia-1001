'use client';

import Link from 'next/link';

export default function UniversidadPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header Principal */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
            🏛️ Plataforma Académica Central
          </span>
          <Link
            href="/universidad/perfil"
            className="text-xs font-bold text-slate-300 hover:text-amber-400 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5"
          >
            <span>👤</span> Mi Perfil
          </Link>
        </div>
        <h1 className="text-3xl font-bold mt-2">Universidad de la Gracia y la Verdad</h1>
        <p className="text-slate-400 text-sm">
          Ecosistema integral de formación teológica, ministerial y liderazgo Cristocéntrico.
        </p>
      </header>

      {/* Seccion de Inicio Rapido / Onboarding */}
      <section className="bg-gradient-to-r from-emerald-950/50 via-slate-800 to-slate-800 p-6 rounded-3xl border border-emerald-800/60 space-y-3">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div>
            <h2 className="text-base font-bold text-emerald-300">🎉 ¿Nuevo Estudiante o Reingreso?</h2>
            <p className="text-xs text-slate-300">Revisa la guía de inicio rápido o consulta tu cronograma de asignaturas.</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/universidad/bienvenida"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
            >
              Guía de Inicio →
            </Link>
            <Link
              href="/universidad/calendario"
              className="bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
            >
              📅 Ver Calendario
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Categorizado de Módulos */}
      <div className="space-y-6">
        {/* Bloque 1: Progreso & Récord Académico */}
        <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <span>📊</span> Rendimiento & Certificación
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              href="/universidad/dashboard"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-amber-500 text-amber-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>📈</span> Dashboard Alumno
            </Link>

            <Link
              href="/universidad/progreso"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-teal-400 text-teal-300 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>📊</span> Mi Progreso
            </Link>

            <Link
              href="/universidad/evaluacion"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-teal-500 text-teal-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>📝</span> Evaluaciones
            </Link>

            <Link
              href="/universidad/certificados"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-amber-400 text-amber-300 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>🏅</span> Certificados
            </Link>
          </div>
        </section>

        {/* Bloque 2: Recursos de Estudio & Asistencia */}
        <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <span>📚</span> Centro de Estudio & Herramientas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link
              href="/universidad/biblioteca"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-emerald-500 text-emerald-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>📚</span> Biblioteca Digital
            </Link>

            <Link
              href="/universidad/audioteca"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-violet-500 text-violet-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>🎧</span> Audioteca
            </Link>

            <Link
              href="/universidad/tutor"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-cyan-500 text-cyan-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>🤖</span> Tutor Exegético AI
            </Link>
          </div>
        </section>

        {/* Bloque 3: Acompañamiento, Salud Pastoral & Comunidad */}
        <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
            <span>👥</span> Comunidad & Salud Pastoral
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              href="/universidad/mentoria"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-purple-500 text-purple-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>👥</span> Mentoría Dual
            </Link>

            <Link
              href="/universidad/liderazgo-cristocentrico"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-cyan-400 text-cyan-300 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>👑</span> Salud Pastoral
            </Link>

            <Link
              href="/universidad/editorial"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-pink-500 text-pink-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>✍️</span> Hub Editorial
            </Link>

            <Link
              href="/universidad/foro"
              className="bg-slate-900 hover:bg-slate-750 p-4 rounded-2xl border border-slate-700 hover:border-blue-500 text-blue-400 text-xs font-bold transition-all flex items-center gap-2"
            >
              <span>💬</span> Ágora & Foro
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
'use client';

import Link from 'next/link';

export default function UniversidadHubPage() {
  const modulos = [
    {
      titulo: 'Portal Académico & Cursos',
      descripcion: 'Clases activas, calificaciones, avance curricular y entrega de tareas.',
      href: '/universidad/academico',
      icono: '📖',
      color: 'border-blue-500/40 hover:border-blue-400 text-blue-400',
    },
    {
      titulo: 'Biblioteca Digital',
      descripcion: 'Comentarios, léxicos, manuscritos y recursos de investigación exegética.',
      href: '/universidad/biblioteca',
      icono: '📚',
      color: 'border-cyan-500/40 hover:border-cyan-400 text-cyan-400',
    },
    {
      titulo: 'Gestión Financiera & Pagos',
      descripcion: 'Colegiaturas, historial de pagos, becas y descarga de recibos.',
      href: '/universidad/finanzas',
      icono: '💳',
      color: 'border-emerald-500/40 hover:border-emerald-400 text-emerald-400',
    },
    {
      titulo: 'Prácticas & Servicio Social',
      descripcion: 'Registro de horas de practicum, pastoreo e informes de supervisión.',
      href: '/universidad/practicas',
      icono: '🛠️',
      color: 'border-orange-500/40 hover:border-orange-400 text-orange-400',
    },
    {
      titulo: 'Centro de Notificaciones',
      descripcion: 'Alertas en tiempo real, anuncios institucionales y avisos académicos.',
      href: '/universidad/notificaciones',
      icono: '🔔',
      color: 'border-purple-500/40 hover:border-purple-400 text-purple-400',
    },
    {
      titulo: 'Red Alumni & Bolsa de Trabajo',
      descripcion: 'Directorio de egresados, red de mentores y convocatorias pastorales.',
      href: '/universidad/alumni',
      icono: '🎓',
      color: 'border-amber-500/40 hover:border-amber-400 text-amber-400',
    },
    {
      titulo: 'Titulación & Certificados',
      descripcion: 'Solicitud de títulos, récords de notas y verificador digital seguro.',
      href: '/universidad/titulacion',
      icono: '📜',
      color: 'border-indigo-500/40 hover:border-indigo-400 text-indigo-400',
    },
    {
      titulo: 'Centro de Investigación',
      descripcion: 'Repositorio de papers, monografías y proyectos de tesis revisados.',
      href: '/universidad/investigacion',
      icono: '🔬',
      color: 'border-teal-500/40 hover:border-teal-400 text-teal-400',
    },
    {
      titulo: 'Mesa de Ayuda & Soporte',
      descripcion: 'Tickets de asistencia técnica, consultas y preguntas frecuentes.',
      href: '/universidad/soporte',
      icono: '🎟️',
      color: 'border-rose-500/40 hover:border-rose-400 text-rose-400',
    },
    {
      titulo: 'Perfil & Seguridad',
      descripcion: 'Credencial digital, datos personales, clave y autenticación 2FA.',
      href: '/universidad/perfil',
      icono: '👤',
      color: 'border-sky-500/40 hover:border-sky-400 text-sky-400',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-6xl mx-auto space-y-8">
      {/* Header Central */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
          🏛️ Portal Campus Virtual
        </span>
        <h1 className="text-3xl font-bold mt-2">Plataforma Teológica Universitario</h1>
        <p className="text-slate-400 text-sm">
          Bienvenido al centro neurálgico de aprendizaje, investigación y gestión académica. Selecciona un área para comenzar.
        </p>
      </header>

      {/* Grid de Módulos */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modulos.map((m, idx) => (
          <Link
            key={idx}
            href={m.href}
            className={`bg-slate-800/80 p-6 rounded-3xl border ${m.color} hover:bg-slate-800 transition-all group flex flex-col justify-between space-y-4 shadow-lg`}
          >
            <div className="space-y-3">
              <div className="text-3xl">{m.icono}</div>
              <h2 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                {m.titulo}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                {m.descripcion}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-bold">
              <span>Ingresar al módulo</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer informativo */}
      <footer className="bg-slate-800/40 p-6 rounded-3xl border border-slate-800/80 text-center text-xs text-slate-500 font-mono">
        Sistema Académico Integrado • Universidad Teológica Digital © 2026
      </footer>
    </main>
  );
}
'use client';

import Link from 'next/link';

export default function UniversidadHubPage() {
  const metricas = [
    { titulo: 'Asignaturas Activas', valor: '4 Cursos', badge: 'En Curso', color: 'text-blue-400 border-blue-800 bg-blue-950/50' },
    { titulo: 'Promedio Acumulado', valor: '94.8 / 100', badge: 'Honor', color: 'text-emerald-400 border-emerald-800 bg-emerald-950/50' },
    { titulo: 'Créditos Aprobados', valor: '48 / 120', badge: '40% Avance', color: 'text-purple-400 border-purple-800 bg-purple-950/50' },
    { titulo: 'Beca Activa', valor: '30% Cobertura', badge: 'Ministerial', color: 'text-amber-400 border-amber-800 bg-amber-950/50' },
  ];

  const accesosDirectos = [
    { titulo: 'Portal Docente', desc: 'Gestión de clases y notas', href: '/universidad/docentes', icono: '👨‍🏫', color: 'border-violet-500/40 text-violet-400' },
    { titulo: 'Evaluación Docente', desc: 'Encuestas de calidad', href: '/universidad/evaluacion-docente', icono: '📊', color: 'border-fuchsia-500/40 text-fuchsia-400' },
    { titulo: 'Calendario Académico', desc: 'Fechas límite y exámenes', href: '/universidad/calendario', icono: '📅', color: 'border-amber-500/40 text-amber-400' },
    { titulo: 'Becas & Ayuda', desc: 'Solicitud de financiamiento', href: '/universidad/becas', icono: '🎓', color: 'border-emerald-500/40 text-emerald-400' },
    { titulo: 'Vida Estudiantil', desc: 'Capellanía y grupos', href: '/universidad/vida-estudiantil', icono: '🕊️', color: 'border-rose-500/40 text-rose-400' },
    { titulo: 'Trámites & Certificados', desc: 'Récord de notas y QR', href: '/universidad/tramites', icono: '📜', color: 'border-teal-500/40 text-teal-400' },
    { titulo: 'Ajustes & Seguridad', desc: 'Perfil, clave y 2FA', href: '/universidad/configuracion', icono: '⚙️', color: 'border-sky-500/40 text-sky-400' },
    { titulo: 'Soporte Técnico', desc: 'Mesa de ayuda y tickets', href: '/universidad/soporte', icono: '🛠️', color: 'border-orange-500/40 text-orange-400' },
    { titulo: 'Directorio Completo', desc: 'Mapa de la universidad', href: '/universidad/menu', icono: '🧭', color: 'border-indigo-500/40 text-indigo-400' },
    { titulo: 'Admisiones & Registro', desc: 'Solicitud de nuevo ingreso', href: '/universidad/registro', icono: '📝', color: 'border-emerald-500/40 text-emerald-300' },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-6xl mx-auto space-y-8">
      {/* Header General */}
      <header className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
            🏛️ Campus Virtual Unificado
          </span>
          <h1 className="text-3xl font-bold mt-2">Portal Universitario</h1>
          <p className="text-slate-400 text-sm">
            Bienvenido a la plataforma de gestión académica, ministerial e institucional.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/universidad/registro"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
          >
            + Nueva Admisión
          </Link>
          <Link
            href="/universidad/configuracion"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
          >
            ⚙️ Ajustes
          </Link>
        </div>
      </header>

      {/* Métricas Principales */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricas.map((m, i) => (
          <div key={i} className="bg-slate-800/80 p-5 rounded-3xl border border-slate-700/80 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400 font-semibold">{m.titulo}</span>
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${m.color}`}>
                {m.badge}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{m.valor}</p>
          </div>
        ))}
      </section>

      {/* Grid de Módulos */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            🧩 Módulos & Servicios del Campus
          </h2>
          <Link href="/universidad/menu" className="text-xs text-blue-400 hover:underline">
            Ver directorio extendido →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {accesosDirectos.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`bg-slate-800/80 p-4 rounded-2xl border ${item.color} hover:bg-slate-800 transition-all flex flex-col justify-between space-y-3 group`}
            >
              <div className="space-y-1.5">
                <div className="text-2xl group-hover:scale-110 transition-transform">{item.icono}</div>
                <h3 className="text-xs font-bold text-slate-100 group-hover:text-white">{item.titulo}</h3>
                <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
              </div>
              <span className="text-[9px] font-bold font-mono uppercase tracking-wider text-slate-500 group-hover:text-slate-300 pt-2 border-t border-slate-700/50 block">
                Acceder →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Volver al Sistema General */}
      <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
        <span>Campus Virtual v2.5 — Todos los módulos operativos.</span>
        <Link href="/" className="text-slate-400 hover:text-white transition-all font-semibold">
          ← Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
