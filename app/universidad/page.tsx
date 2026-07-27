'use client';

import Link from 'next/link';

export default function UniversidadPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          🏛️ Plataforma Académica
        </span>
        <h1 className="text-3xl font-bold mt-2">Universidad de la Gracia y la Verdad</h1>
        <p className="text-slate-400 text-sm">
          Ecosistema integral de formación teológica, ministerial y liderazgo Cristocéntrico.
        </p>
      </header>

      <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-sm uppercase tracking-wider font-bold text-slate-400">
          🛠️ Módulos e Integraciones del Ecosistema
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/universidad/dashboard"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-amber-500 text-amber-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📊</span> Panel Alumno
          </Link>

          <Link
            href="/universidad/tutor"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-cyan-500 text-cyan-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🤖</span> Tutor Exégesis
          </Link>

          <Link
            href="/universidad/liderazgo-cristocentrico"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-cyan-400 text-cyan-300 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>👑</span> Salud Pastoral
          </Link>

          <Link
            href="/universidad/certificados"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-amber-400 text-amber-300 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🏅</span> Certificados
          </Link>

          <Link
            href="/universidad/mentoria"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-purple-500 text-purple-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>👥</span> Mentoría Dual
          </Link>

          <Link
            href="/universidad/editorial"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-pink-500 text-pink-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>✍️</span> Hub Editorial
          </Link>

          <Link
            href="/universidad/biblioteca"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-emerald-500 text-emerald-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📚</span> Biblioteca
          </Link>

          <Link
            href="/universidad/foro"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-blue-500 text-blue-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>💬</span> Ágora & Foro
          </Link>

          <Link
            href="/universidad/audioteca"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-violet-500 text-violet-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>🎧</span> Audioteca
          </Link>

          <Link
            href="/universidad/evaluacion"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-teal-500 text-teal-400 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>📝</span> Evaluación
          </Link>

          <Link
            href="/universidad/inscripcion"
            className="bg-slate-900 hover:bg-slate-750 p-3.5 rounded-2xl border border-slate-700 hover:border-emerald-400 text-emerald-300 text-xs font-bold transition-all flex items-center gap-2 col-span-2"
          >
            <span>📝</span> Formulario de Inscripción
          </Link>
        </div>
      </section>
    </main>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Mensaje {
  id: number;
  emisor: 'usuario' | 'tutor';
  texto: string;
}

export default function TutorPage() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 1,
      emisor: 'tutor',
      texto: '¡Hola! Soy tu Tutor Exegético. ¿Qué pasaje o concepto bíblico deseas analizar hoy desde la perspectiva de la Gracia?'
    }
  ]);
  const [input, setInput] = useState('');
  const [cargando, setCargando] = useState(false);

  const sugerencias = [
    'Exégesis de Gálatas 2:20',
    'Significado de "Logizomai" en Romanos 4',
    'Diferencia entre Ley y Gracia en Juan 1:17'
  ];

  const handleEnviar = (consultaText?: string) => {
    const q = consultaText || input;
    if (!q.trim()) return;

    const userMsg: Mensaje = { id: Date.now(), emisor: 'usuario', texto: q };
    setMensajes((prev) => [...prev, userMsg]);
    if (!consultaText) setInput('');
    setCargando(true);

    // Simulación de respuesta exegética
    setTimeout(() => {
      const tutorMsg: Mensaje = {
        id: Date.now() + 1,
        emisor: 'tutor',
        texto: `Análisis para "${q}": En el texto original, este pasaje resalta la obra completada de Cristo. No depende del esfuerzo ritual humano, sino de la posición del creyente incorporado en Su justicia.`
      };
      setMensajes((prev) => [...prev, tutorMsg]);
      setCargando(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
          🤖 Asistente Virtual
        </span>
        <h1 className="text-3xl font-bold mt-2">Tutor Inteligente de Exégesis</h1>
        <p className="text-slate-400 text-sm">
          Resuelve dudas hermenéuticas, gramaticales y contextuales de las Escrituras en tiempo real.
        </p>
      </header>

      {/* Caja de Chat */}
      <div className="bg-slate-800/80 rounded-3xl border border-slate-700/80 p-6 space-y-4 flex flex-col justify-between min-h-[400px]">
        {/* Historial */}
        <div className="space-y-3 overflow-y-auto max-h-[350px] pr-2">
          {mensajes.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.emisor === 'usuario' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-lg p-4 rounded-2xl text-xs leading-relaxed ${
                  m.emisor === 'usuario'
                    ? 'bg-amber-500 text-slate-950 font-medium rounded-br-none'
                    : 'bg-slate-900 border border-slate-700 text-slate-200 rounded-bl-none'
                }`}
              >
                {m.texto}
              </div>
            </div>
          ))}

          {cargando && (
            <div className="flex justify-start">
              <div className="bg-slate-900 border border-slate-700 text-cyan-400 p-3 rounded-2xl text-xs font-mono animate-pulse">
                Analizando texto y contexto gramatical...
              </div>
            </div>
          )}
        </div>

        {/* Sugerencias rápidas */}
        <div className="pt-2 border-t border-slate-700 space-y-2">
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
            Sugerencias de Consulta:
          </p>
          <div className="flex flex-wrap gap-2">
            {sugerencias.map((s, i) => (
              <button
                key={i}
                onClick={() => handleEnviar(s)}
                className="bg-slate-900 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-[11px] px-3 py-1.5 rounded-xl transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Formulario de Entrada */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEnviar();
          }}
          className="flex gap-2 pt-2"
        >
          <input
            type="text"
            placeholder="Escribe tu consulta exegética o pasaje bíblico..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shrink-0"
          >
            Consultar
          </button>
        </form>
      </div>

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
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VidaEstudiantilPage() {
  const [agendado, setAgendado] = useState(false);
  const [cita, setCita] = useState({
    capellan: 'Pr. Samuel Reyes (Capellán General)',
    fecha: '',
    motivo: '',
  });

  const gruposComunidad = [
    {
      id: 'GRP-01',
      nombre: 'Círculo de Oración & Intercesión',
      horario: 'Todos los Martes - 07:00 UTC',
      lider: 'Min. David Castro',
      modalidad: 'Virtual / Zoom',
      integrantes: 45,
      color: 'border-rose-500 text-rose-400 bg-rose-950/40',
    },
    {
      id: 'GRP-02',
      nombre: 'Taller de Lectura Patrística & Clásica',
      horario: 'Jueves - 19:00 UTC',
      lider: 'Dra. Elena Gómez',
      modalidad: 'Híbrida',
      integrantes: 28,
      color: 'border-indigo-500 text-indigo-400 bg-indigo-950/40',
    },
    {
      id: 'GRP-03',
      nombre: 'Voluntariado & Alcance Social Urbano',
      horario: 'Sábados (Semanales)',
      lider: 'Pr. Lucas Morales',
      modalidad: 'Presencial / Campo',
      integrantes: 62,
      color: 'border-amber-500 text-amber-400 bg-amber-950/40',
    },
  ];

  const handleAgendar = (e: React.FormEvent) => {
    e.preventDefault();
    if (cita.fecha && cita.motivo) {
      setAgendado(true);
      setTimeout(() => {
        setAgendado(false);
        setCita({ capellan: 'Pr. Samuel Reyes (Capellán General)', fecha: '', motivo: '' });
      }, 4000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-800">
          🕊️ Capellanía & Comunidad
        </span>
        <h1 className="text-3xl font-bold mt-2">Vida Estudiantil & Cuidado Pastoral</h1>
        <p className="text-slate-400 text-sm">
          Fortalece tu vida espiritual y comunitaria. Participa en grupos de oración, solicita consejería pastoral o integrador a programas de voluntariado.
        </p>
      </header>

      {/* Devocional del Día */}
      <section className="bg-gradient-to-r from-slate-800 via-rose-950/30 to-slate-800 p-6 rounded-3xl border border-rose-500/30 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider">
            📖 Devocional Académico del Día
          </span>
          <span className="text-xs text-slate-400 font-mono">27 de Julio, 2026</span>
        </div>
        <h2 className="text-base font-bold text-slate-100">
          "La renovación del entendimiento en la labor teológica"
        </h2>
        <p className="text-xs text-slate-300 italic leading-relaxed">
          «No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento...» — Romanos 12:2
        </p>
      </section>

      {/* Grupos de Comunidad */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          👥 Grupos de Comunidad & Voluntariado
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gruposComunidad.map((g) => (
            <div
              key={g.id}
              className="bg-slate-800/80 p-5 rounded-3xl border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-all"
            >
              <div className="space-y-2">
                <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${g.color}`}>
                  {g.modalidad}
                </span>
                <h3 className="text-sm font-bold text-slate-100">{g.nombre}</h3>
                <p className="text-xs text-slate-300 font-medium">Líder: {g.lider}</p>
                <p className="text-[11px] text-slate-400 font-mono">🕒 {g.horario}</p>
                <p className="text-[11px] text-slate-500 font-mono">👥 {g.integrantes} miembros activos</p>
              </div>

              <button
                onClick={() => alert(`Te has unido exitosamente al grupo ${g.nombre}`)}
                className="bg-slate-900 hover:bg-slate-700 text-rose-400 border border-rose-500/30 font-bold text-xs py-2 rounded-xl transition-all w-full text-center"
              >
                Unirme a la Comunidad
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Solicitud de Consejería Pastoral */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-rose-400">
          🤝 Solicitud de Consejería & Capellanía Confidencial
        </h2>

        <form onSubmit={handleAgendar} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Seleccionar Capellán / Consejero:</label>
              <select
                value={cita.capellan}
                onChange={(e) => setCita({ ...cita, capellan: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-400 transition-all"
              >
                <option value="Pr. Samuel Reyes (Capellán General)">Pr. Samuel Reyes (Capellán General)</option>
                <option value="Dra. Ruth Martínez (Consejería Estudiantil)">Dra. Ruth Martínez (Consejería Estudiantil)</option>
                <option value="Min. Isaac Peña (Mentoría Vocacional)">Min. Isaac Peña (Mentoría Vocacional)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-semibold">Fecha Deseada:</label>
              <input
                type="date"
                required
                value={cita.fecha}
                onChange={(e) => setCita({ ...cita, fecha: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-400 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-semibold">Motivo o Área de Consejería (Confidencial):</label>
            <textarea
              rows={3}
              required
              value={cita.motivo}
              onChange={(e) => setCita({ ...cita, motivo: e.target.value })}
              placeholder="Describe brevemente tus inquietudes vocacionales, espirituales o personales..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-all"
            />
          </div>

          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            Agendar Cita de Consejería 🗓️
          </button>

          {agendado && (
            <p className="text-xs text-emerald-400 font-semibold pt-1">
              ✓ Solicitud enviada confidencialmente. El equipo de capellanía se pondrá en contacto contigo para confirmar el horario.
            </p>
          )}
        </form>
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
