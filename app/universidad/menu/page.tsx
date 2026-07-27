'use client';

import Link from 'next/link';

export default function MenuUniversidadPage() {
  const secciones = [
    {
      categoria: '📚 Gestión Académica & Aprendizaje IA',
      modulos: [
        { titulo: 'Aulas & Clases Virtuales', desc: 'Acceso a materias, contenidos y entregas', href: '/universidad', icono: '📖', color: 'border-blue-500/40 text-blue-400' },
        { titulo: 'Tutor Virtual IA', desc: 'Asistencia en investigación y exégesis', href: '/universidad/ia-tutor', icono: '🤖', color: 'border-purple-500/40 text-purple-400' },
        { titulo: 'Biblioteca & Recursos', desc: 'Consulta de manuscritos y libros digitales', href: '/universidad/biblioteca', icono: '🏛️', color: 'border-cyan-500/40 text-cyan-400' },
        { titulo: 'Evaluación Docente', desc: 'Encuestas confidenciales de calidad pedagógica', href: '/universidad/evaluacion-docente', icono: '📊', color: 'border-fuchsia-500/40 text-fuchsia-400' },
        { titulo: 'Calendario Académico', desc: 'Cronograma de entregas, exámenes y eventos', href: '/universidad/calendario', icono: '📅', color: 'border-amber-500/40 text-amber-400' },
      ],
    },
    {
      categoria: '📢 Institucional & Servicios Estudiantiles',
      modulos: [
        { titulo: 'Tablón de Anuncios', desc: 'Circulares, alertas y noticias oficiales', href: '/universidad/anuncios', icono: '📢', color: 'border-amber-500/40 text-amber-300' },
        { titulo: 'Finanzas & Tesorería', desc: 'Estado de cuenta, pagos e historial', href: '/universidad/finanzas', icono: '💳', color: 'border-emerald-500/40 text-emerald-400' },
        { titulo: 'Becas & Ayuda Financiera', desc: 'Postulación a programas de financiamiento', href: '/universidad/becas', icono: '🎓', color: 'border-emerald-500/40 text-emerald-300' },
        { titulo: 'Vida Estudiantil', desc: 'Capellanía, voluntariado y consejería', href: '/universidad/vida-estudiantil', icono: '🕊️', color: 'border-rose-500/40 text-rose-400' },
        { titulo: 'Trámites & Certificados', desc: 'Récords de notas y certificaciones QR', href: '/universidad/tramites', icono: '📜', color: 'border-teal-500/40 text-teal-400' },
      ],
    },
    {
      categoria: '⚙️ Plataforma & Control',
      modulos: [
        { titulo: 'Administración & Auditoría', desc: 'Control ejecutivo y logs de actividad', href: '/universidad/admin', icono: '📊', color: 'border-rose-500/40 text-rose-400' },
        { titulo: 'Ajustes & Seguridad', desc: 'Configuración de datos personales y 2FA', href: '/universidad/configuracion', icono: '⚙️', color: 'border-sky-500/40 text-sky-400' },
        { titulo: 'Mesa de Ayuda', desc: 'Atención a incidencias y tickets', href: '/universidad/soporte', icono: '🛠️', color: 'border-orange-500/40 text-orange-400' },
        { titulo: 'Admisiones & Registro', desc: 'Solicitudes e inscripción de nuevo ingreso', href: '/universidad/registro', icono: '📝', color: 'border-emerald-500/40 text-emerald-300' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
          🧭 Directorio General (14 Módulos)
        </span>
        <h1 className="text-3xl font-bold mt-2">Centro de Accesos Universitarios</h1>
        <p className="text-slate-400 text-sm">
          Mapa completo e interconectado de todos los servicios, módulos administrativos y herramientas académicas del Campus.
        </p>
      </header>

      <div className="space-y-8">
        {secciones.map((sec, i) => (
          <section key={i} className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {sec.categoria}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sec.modulos.map((mod, j) => (
                <Link
                  key={j}
                  href={mod.href}
                  className={`bg-slate-800/80 p-5 rounded-3xl border ${mod.color} hover:bg-slate-800 transition-all flex flex-col justify-between space-y-3 group`}
                >
                  <div className="space-y-2">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{mod.icono}</div>
                    <h3 className="text-sm font-bold text-slate-100 group-hover:text-white">{mod.titulo}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{mod.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold font-mono uppercase tracking-wider pt-2 border-t border-slate-700/60 block text-right">
                    Ir al módulo →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

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
