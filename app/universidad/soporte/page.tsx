'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SoportePage() {
  const [ticketEnviado, setTicketEnviado] = useState(false);
  const [categoria, setCategoria] = useState('Tecnico');
  const [mensaje, setMensaje] = useState('');
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      pregunta: '¿Cómo descargador mis diplomas en PDF?',
      respuesta: 'Dirígete al módulo de "Mis Certificados". Si has completado las autoevaluaciones del nivel correspondiente, el botón de descarga se activará automáticamente.'
    },
    {
      id: 2,
      pregunta: '¿Qué hago si no puedo acceder a una clase en vivo?',
      respuesta: 'Todas las clases grabadas y materiales auditivos se suben al módulo de "Audioteca" y "Biblioteca" dentro de las 24 horas posteriores a la sesión.'
    },
    {
      id: 3,
      pregunta: '¿Cómo solicito una sesión uno a uno con mi mentor?',
      respuesta: 'Ingresa al módulo de "Mentoría Dual", selecciona la fecha y hora disponible en el calendario de tu mentor asignado y confirma la reserva.'
    }
  ];

  const handleEnviarTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (mensaje.trim()) {
      setTicketEnviado(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-800">
          🛠️ Atención al Estudiante
        </span>
        <h1 className="text-3xl font-bold mt-2">Soporte Técnico & Mesa de Ayuda</h1>
        <p className="text-slate-400 text-sm">
          Resuelve dudas frecuentes o abre un ticket de asistencia para nuestro equipo académico.
        </p>
      </header>

      {/* Sección FAQ */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          ❓ Preguntas Frecuentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => {
            const abierta = faqAbierta === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setFaqAbierta(abierta ? null : faq.id)}
                  className="w-full text-left p-4 font-bold text-xs text-slate-100 flex justify-between items-center hover:bg-slate-800"
                >
                  <span>{faq.pregunta}</span>
                  <span className="text-rose-400 font-mono">{abierta ? '▲' : '▼'}</span>
                </button>
                {abierta && (
                  <div className="p-4 bg-slate-900/80 border-t border-slate-700 text-xs text-slate-300 leading-relaxed">
                    {faq.respuesta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Formulario de Ticket */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          📩 Abrir Ticket de Asistencia
        </h2>

        {!ticketEnviado ? (
          <form onSubmit={handleEnviarTicket} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-400">Tipo de Inconveniente:</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-400 transition-all"
              >
                <option value="Tecnico">Acceso a la Plataforma / Error Técnico</option>
                <option value="Academico">Duda sobre Calificaciones / Evaluaciones</option>
                <option value="Pagos">Matrícula / Admisiones</option>
                <option value="Otro">Otro asunto</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">Detalla tu consulta o problema:</label>
              <textarea
                rows={4}
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Describe qué ocurrió y si ves algún mensaje de error..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md"
            >
              Enviar Ticket a Soporte
            </button>
          </form>
        ) : (
          <div className="bg-rose-950/60 border border-rose-500 p-5 rounded-2xl text-center space-y-2">
            <span className="text-2xl">✅</span>
            <p className="text-xs font-bold text-rose-200">¡Ticket creado con éxito!</p>
            <p className="text-[11px] text-rose-300">
              Hemos asignado el caso #TK-2026-99 a nuestro equipo. Recibirás una notificación en tu correo en menos de 24 horas.
            </p>
          </div>
        )}
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-rose-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
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

export default function SoportePage() {
  const [asunto, setAsunto] = useState('');
  const [categoria, setCategoria] = useState('Acceso y Plataforma');
  const [mensaje, setMensaje] = useState('');
  const [ticketEnviado, setTicketEnviado] = useState(false);

  const faqList = [
    {
      q: '¿Cómo recupero mi contraseña de acceso al campus?',
      a: 'Puedes solicitar un enlace de restablecimiento directamente desde la pantalla de inicio de sesión utilizando tu correo institucional registardo.'
    },
    {
      q: '¿Qué hago si un video de clase no carga correctamente?',
      a: 'Verifica tu conexión a internet, borra la caché del navegador o intenta reproducirlo en una ventana de incognito. Si persiste, abre un ticket aquí mismo.'
    },
    {
      q: '¿Cómo solicito la corrección de una calificación?',
      a: 'Ponte en contacto directo con el docente a través del módulo de Tutorías o envía una solicitud en Secretaría Académica dentro de los primeros 5 días.'
    }
  ];

  const handleCrearTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (asunto && mensaje) {
      setTicketEnviado(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
          🛠️ Mesa de Ayuda
        </span>
        <h1 className="text-3xl font-bold mt-2">Soporte Técnico & Asistencia</h1>
        <p className="text-slate-400 text-sm">
          ¿Tienes algún inconveniente con el acceso, la reproducción de clases o la entrega de archivos? Te ayudamos a resolverlo.
        </p>
      </header>

      {/* FAQs Rápidas */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          ❓ Preguntas Frecuentes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {faqList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-2 flex flex-col justify-between"
            >
              <h3 className="font-bold text-slate-100 text-xs text-cyan-400">{item.q}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de Ticket */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          🎫 Abrir Ticket de Soporte
        </h2>

        {!ticketEnviado ? (
          <form onSubmit={handleCrearTicket} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-400">Categoría del Problema:</label>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-all"
                >
                  <option value="Acceso y Plataforma">Acceso y Contraseña</option>
                  <option value="Reproducción de Video">Problemas de Video / Clases</option>
                  <option value="Biblioteca y Recursos">Acceso a Biblioteca / PDF</option>
                  <option value="Entrega de Tareas">Entrega de Trabajos / Archivos</option>
                  <option value="Otro">Otro Incidente</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">Asunto Breve:</label>
                <input
                  type="text"
                  required
                  value={asunto}
                  onChange={(e) => setAsunto(e.target.value)}
                  placeholder="Ej. Error al subir archivo PDF en Hermenéutica"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">Descripción detallada de la incidencia:</label>
              <textarea
                rows={4}
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Indica el curso, la lección o el mensaje de error exacto que estás experimentando..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-3 rounded-xl transition-all shadow-md"
            >
              Enviar Ticket al Equipo de Soporte →
            </button>
          </form>
        ) : (
          <div className="bg-cyan-950/80 border border-cyan-500 p-5 rounded-2xl text-center space-y-2">
            <span className="text-3xl">🎫</span>
            <p className="text-xs font-bold text-cyan-200">¡Ticket Registrado con Éxito!</p>
            <p className="text-[11px] text-cyan-300">
              Número de Ticket: <strong className="text-white">#TK-2026-892</strong>. Nuestro equipo de soporte técnico revisará tu caso y te responderá al correo en breve.
            </p>
            <button
              onClick={() => {
                setTicketEnviado(false);
                setAsunto('');
                setMensaje('');
              }}
              className="text-[10px] text-cyan-400 underline pt-1 block mx-auto"
            >
              Abrir otro ticket
            </button>
          </div>
        )}
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
