'use client';

import Link from 'next/link';

export default function UniversidadHubPage() {
  const metricas = [
    { titulo: 'Asignaturas Activas', valor: '4 Cursos', badge: 'En Curso', color: 'text-blue-400 border-blue-800 bg-blue-950/50' },
    { titulo: 'Promedio Acumulado', valor: '94.8 / 100', badge: 'Honor', color: 'text-emerald-400 border-emerald-800 bg-emerald-950/50' },
    { titulo: 'Créditos Aprobados', valor: '48 / 120', badge: '40% Avance', color: 'text-purple-400 border-purple-800 bg-purple-950/50' },
    { titulo: 'Estado Finanzas', valor: '$150.00 USD', badge: 'Pendiente', color: 'text-rose-400 border-rose-800 bg-rose-950/50' },
  ];

  const anunciosDestacados = [
    { id: '1', titulo: 'Inicio de Matrícula para el Próximo Trimestre', fecha: '26 Jul', cat: 'Académico' },
    { id: '2', titulo: 'Mantenimiento Programado del Campus Virtual', fecha: '20 Jul', cat: 'Sistemas' },
  ];

  const accesosDirectos = [
    { titulo: 'Tutor Virtual IA', desc: 'Consultas exegeticas e investigación', href: '/universidad/ia-tutor', icono: '🤖', color: 'border-purple-500/40 text-purple-400' },
    { titulo: 'Finanzas & Pagos', desc: 'Estado de cuenta y colegiatura', href: '/universidad/finanzas', icono: '💳', color: 'border-emerald-500/40 text-emerald-400' },
    { titulo: 'Tablón de Anuncios', desc: 'Circulares y avisos oficiales', href: '/universidad/anuncios', icono: '📢', color: 'border-amber-500/40 text-amber-300' },
    { titulo: 'Portal Docente', desc: 'Gestión de clases y notas', href: '/universidad/docentes', icono: '👨‍🏫', color: 'border-violet-500/40 text-violet-400' },
    { titulo: 'Evaluación Docente', desc: 'Encuestas de calidad', href: '/universidad/evaluacion-docente', icono: '📊', color: 'border-fuchsia-500/40 text-fuchsia-400' },
    { titulo: 'Calendario Académico', desc: 'Fechas límite y exámenes', href: '/universidad/calendario', icono: '📅', color: 'border-amber-500/40 text-amber-400' },
    { titulo: 'Becas & Ayuda', desc: 'Solicitud de financiamiento', href: '/universidad/becas', icono: '🎓', color: 'border-emerald-500/40 text-emerald-300' },
    { titulo: 'Vida Estudiantil', desc: 'Capellanía y grupos', href: '/universidad/vida-estudiantil', icono: '🕊️', color: 'border-rose-500/40 text-rose-400' },
    { titulo: 'Trámites & Certificados', desc: 'Récord de notas y QR', href: '/universidad/tramites', icono: '📜', color: 'border-teal-500/40 text-teal-400' },
    { titulo: 'Administración', desc: 'Control ejecutivo y auditoría', href: '/universidad/admin', icono: '📊', color: 'border-rose-500/40 text-rose-400' },
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
            href="/universidad/finanzas"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
          >
            💳 Pagos
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

      {/* Sección de Anuncios Destacados */}
      <section className="bg-slate-800/60 p-5 rounded-3xl border border-amber-500/30 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <span>📢</span> Comunicados Oficiales Recientes
          </h2>
          <Link href="/universidad/anuncios" className="text-xs text-amber-300 hover:underline">
            Ver todos los avisos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {anunciosDestacados.map((a) => (
            <Link
              key={a.id}
              href="/universidad/anuncios"
              className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700/80 hover:border-amber-500/50 transition-all flex justify-between items-center"
            >
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                  {a.cat}
                </span>
                <p className="text-xs font-bold text-slate-200">{a.titulo}</p>
              </div>
              <span className="text-[10px] text-slate-400 font-mono ml-2 shrink-0">{a.fecha}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Grid de Módulos */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            🧩 Módulos & Servicios del Campus (14 Activos)
          </h2>
          <Link href="/universidad/menu" className="text-xs text-blue-400 hover:underline">
            Ver directorio extendido →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
        <span>Campus Virtual v3.5 — 14 Módulos Operativos Unificados.</span>
        <Link href="/" className="text-slate-400 hover:text-white transition-all font-semibold">
          ← Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
