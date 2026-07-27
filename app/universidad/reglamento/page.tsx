'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReglamentoPage() {
  const [seccionActiva, setSeccionActiva] = useState<string>('etica');

  const secciones = [
    {
      id: 'etica',
      titulo: 'Código de Ética e Integridad Académica',
      icono: '⚖️',
      contenido: [
        {
          subtitulo: '1. Honestidad Intelectual y Plagio',
          texto: 'Todo trabajo, ensayo o investigación presentado por el estudiante debe ser de su propia autoría. El uso de fuentes primarias o secundarias sin la debida citación (formato Turabian/APA) constituirá una falta grave.'
        },
        {
          subtitulo: '2. Uso Responsable de Herramientas Tecnológicas',
          texto: 'Se fomenta el uso de software de análisis léxico y bibliotecas digitales como apoyo. No obstante, la exégesis y reflexión bíblica deben reflejar el trabajo analítico personal del estudiante.'
        }
      ]
    },
    {
      id: 'academico',
      titulo: 'Criterios de Acreditación y Evaluaciones',
      icono: '🎓',
      contenido: [
        {
          subtitulo: '1. Promedio Mínimo de Aprobación',
          texto: 'Para acreditar cualquier asignatura del programa, el estudiante debe obtener una calificación final mínima de 70/100 puntos (Grado B-).'
        },
        {
          subtitulo: '2. Asistencia y Participación en Clases Sincrónicas',
          texto: 'Se requiere un mínimo del 80% de asistencia o visualización de las grabaciones de clases en vivo para mantener el derecho a evaluación final.'
        }
      ]
    },
    {
      id: 'derechos',
      titulo: 'Derechos y Deberes del Estudiante',
      icono: '🛡️',
      contenido: [
        {
          subtitulo: '1. Acompañamiento y Retroalimentación',
          texto: 'El estudiante tiene derecho a recibir retroalimentación clara y oportuna por parte del cuerpo docente en un plazo no mayor a 5 días hábiles tras la entrega.'
        },
        {
          subtitulo: '2. Respecto y Fraternidad Ministerial',
          texto: 'Se exige un trato fraternal y respetuoso en los foros de discusión, el Ágora Teológica y las sesiones en vivo, guardando la unidad del Espíritu.'
        }
      ]
    }
  ];

  const seccionActual = secciones.find((s) => s.id === seccionActiva) || secciones[0];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📜 Normativa Institucional
        </span>
        <h1 className="text-3xl font-bold mt-2">Reglamento Académico & Manual del Estudiante</h1>
        <p className="text-slate-400 text-sm">
          Consulta los marcos normativos, estándares de integridad intelectual y principios de convivencia ministerial de la universidad.
        </p>
      </header>

      {/* Navegación por pestañas */}
      <div className="flex flex-wrap gap-2">
        {secciones.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setSeccionActiva(sec.id)}
            className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all border flex items-center gap-2 ${
              seccionActiva === sec.id
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            <span>{sec.icono}</span>
            <span>{sec.titulo}</span>
          </button>
        ))}
      </div>

      {/* Contenido de la sección */}
      <section className="bg-slate-800/90 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-6 shadow-xl">
        <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
          <span className="text-3xl">{seccionActual.icono}</span>
          <h2 className="text-lg font-bold text-slate-100">{seccionActual.titulo}</h2>
        </div>

        <div className="space-y-6">
          {seccionActual.contenido.map((art, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-sm font-bold text-amber-400">{art.subtitulo}</h3>
              <p className="text-xs text-slate-300 leading-relaxed text-justify bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                {art.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <span>Última revisión: <strong className="text-slate-200">Julio 2026</strong></span>
          <button
            onClick={() => alert('Descargando Reglamento Académico Completo en PDF...')}
            className="bg-slate-900 hover:bg-slate-700 text-amber-400 border border-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition-all"
          >
            Descargar Manual Completo (PDF) 📄
          </button>
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
