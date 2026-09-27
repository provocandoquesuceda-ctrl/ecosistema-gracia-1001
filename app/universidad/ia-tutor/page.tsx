'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

type Mensaje = { id: number; emisor: 'usuario' | 'tutor'; texto: string };
type Fuente = { id: number; concepto: string; cita: string; afirmacion: string; similarity?: number };

export default function TutorIAPage() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { id: 1, emisor: 'tutor', texto: 'Hola. Soy el Tutor de Gracia 1001. Puedes preguntarme por una necesidad, un pasaje bíblico o un tema relacionado con la gracia.' },
  ]);
  const [input, setInput] = useState('');
  const [edad, setEdad] = useState('General');
  const [fuentes, setFuentes] = useState<Fuente[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  async function enviar(e: FormEvent) {
    e.preventDefault();
    const mensaje = input.trim();
    if (!mensaje || cargando) return;

    setMensajes((prev) => [...prev, { id: Date.now(), emisor: 'usuario', texto: mensaje }]);
    setInput('');
    setError('');
    setCargando(true);

    try {
      const response = await fetch('/api/devocional', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje, edad }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'No se pudo obtener una respuesta.');

      setMensajes((prev) => [
        ...prev,
        { id: Date.now() + 1, emisor: 'tutor', texto: data.respuesta || 'No se recibió una respuesta del tutor.' },
      ]);
      setFuentes(data.fuentes || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo conectar con el tutor.');
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl space-y-6 px-6 py-10">
        <header className="space-y-3">
          <span className="inline-flex rounded-full border border-cyan-500/40 bg-cyan-950/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            Tutor IA · Gracia 1001
          </span>
          <h1 className="text-3xl font-bold">Tutor de Gracia y Exégesis</h1>
          <p className="max-w-3xl text-sm leading-6 text-slate-400">
            Consulta el contenido del ecosistema. Cuando existen beneficios relevantes, el tutor los recupera desde el Banco Maestro antes de responder.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <div className="max-h-[520px] space-y-3 overflow-y-auto pr-1">
              {mensajes.map((m) => (
                <div key={m.id} className={'flex ' + (m.emisor === 'usuario' ? 'justify-end' : 'justify-start')}>
                  <div className={'max-w-2xl rounded-2xl px-4 py-3 text-sm leading-6 ' + (m.emisor === 'usuario'
                    ? 'rounded-br-none bg-cyan-400 text-slate-950'
                    : 'rounded-bl-none border border-slate-700 bg-slate-950 text-slate-200')}>
                    {m.texto}
                  </div>
                </div>
              ))}

              {cargando && (
                <div className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-xs text-cyan-300">
                  Consultando el conocimiento disponible…
                </div>
              )}
            </div>

            <form onSubmit={enviar} className="mt-5 flex flex-col gap-2 sm:flex-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ej.: ¿Qué significa ser hijo de Dios cuando tengo miedo?"
                className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-cyan-400"
              />
              <button type="submit" disabled={cargando} className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 disabled:opacity-50">
                {cargando ? 'Consultando…' : 'Consultar'}
              </button>
            </form>

            {error && <p className="mt-3 text-xs text-red-300">{error}</p>}
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Grupo de edad</label>
              <select value={edad} onChange={(e) => setEdad(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm">
                <option>General</option>
                <option>Jóvenes</option>
                <option>Adultos</option>
                <option>Nuevos Creyentes</option>
              </select>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Fuentes recuperadas</h2>
              {fuentes.length === 0 ? (
                <p className="mt-3 text-xs leading-5 text-slate-500">Las fuentes aparecerán aquí cuando la consulta encuentre beneficios relacionados.</p>
              ) : (
                <div className="mt-3 space-y-3">
                  {fuentes.map((fuente) => (
                    <div key={fuente.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-3">
                      <p className="text-xs font-semibold text-cyan-300">{fuente.concepto}</p>
                      <p className="mt-1 text-[11px] text-slate-500">{fuente.cita}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-300">{fuente.afirmacion}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </section>

        <Link href="/gracia" className="inline-flex rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300">
          ← Banco Maestro Gracia 1001
        </Link>
      </div>
    </main>
  );
}
