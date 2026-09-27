'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Beneficio = {
  codigo: string;
  titulo: string;
  concepto: string;
  cita: string;
  fundamento_biblico: string | null;
  aplicacion: string | null;
  declaracion: string | null;
  oracion: string | null;
  categoria: string | null;
  estado: string;
};

type Resultado = {
  id: number;
  categoria: string;
  concepto: string;
  cita: string;
  afirmacion: string;
  similarity: number;
};

export default function GraciaPage() {
  const [beneficio, setBeneficio] = useState<Beneficio | null>(null);
  const [consulta, setConsulta] = useState('');
  const [resultados, setResultados] = useState<Resultado[]>([]);
  const [cargando, setCargando] = useState(true);
  const [buscando, setBuscando] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/gracia/beneficios/BENEFICIO-0624')
      .then((r) => r.json())
      .then((data) => {
        if (!data.beneficio) throw new Error(data.error || 'No se pudo cargar el beneficio.');
        setBeneficio(data.beneficio);
      })
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  async function buscar(e?: React.FormEvent) {
    e?.preventDefault();
    if (!consulta.trim()) return;

    setBuscando(true);
    setError('');

    try {
      const response = await fetch('/api/gracia/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consulta }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'No se pudo realizar la búsqueda.');
      setResultados(data.resultados ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'No se pudo realizar la búsqueda.');
    } finally {
      setBuscando(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl space-y-8 px-6 py-10">
        <header className="space-y-3">
          <span className="inline-flex rounded-full border border-amber-500/40 bg-amber-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
            GRACIA 1001 · Banco Maestro
          </span>
          <h1 className="text-4xl font-bold">Encuentra una razón para la Gracia</h1>
          <p className="max-w-3xl text-sm leading-6 text-slate-400">
            Busca por necesidad, tema o pregunta. La experiencia consulta el Banco Maestro y recupera beneficios mediante búsqueda semántica.
          </p>
        </header>

        <form onSubmit={buscar} className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
              placeholder="Ej.: Tengo miedo y necesito recordar quién soy en Cristo"
              className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={buscando}
              className="rounded-2xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 disabled:opacity-50"
            >
              {buscando ? 'Buscando…' : 'Buscar'}
            </button>
          </div>
        </form>

        {error && (
          <div className="rounded-2xl border border-red-500/30 bg-red-950/30 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        {resultados.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Resultados del Banco Maestro</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {resultados.map((r) => (
                <article key={r.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-xs font-semibold text-amber-300">{r.categoria}</p>
                  <h3 className="mt-2 font-bold">{r.concepto}</h3>
                  <p className="mt-1 text-xs text-slate-400">{r.cita}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{r.afirmacion}</p>
                  <p className="mt-3 text-[11px] text-slate-500">Similitud: {r.similarity.toFixed(3)}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900 to-amber-950/20 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-300">Beneficio piloto</p>
          {cargando ? (
            <p className="mt-4 text-sm text-slate-400">Cargando Banco Maestro…</p>
          ) : beneficio ? (
            <>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-700 px-2.5 py-1 text-[11px] text-slate-300">{beneficio.codigo}</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-1 text-[11px] text-emerald-300">{beneficio.estado}</span>
                <span className="rounded-full border border-slate-700 px-2.5 py-1 text-[11px] text-slate-300">{beneficio.categoria}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold">{beneficio.titulo}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{beneficio.concepto}</p>
              <p className="mt-4 text-sm text-amber-200">{beneficio.cita}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/60 p-4">
                  <p className="text-xs font-bold uppercase text-slate-500">Fundamento</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{beneficio.fundamento_biblico}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/60 p-4">
                  <p className="text-xs font-bold uppercase text-slate-500">Aplicación</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{beneficio.aplicacion}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/60 p-4">
                  <p className="text-xs font-bold uppercase text-slate-500">Declaración</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{beneficio.declaracion}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/60 p-4">
                  <p className="text-xs font-bold uppercase text-slate-500">Oración</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{beneficio.oracion}</p>
                </div>
              </div>
            </>
          ) : null}
        </section>

        <footer className="flex flex-wrap gap-3">
          <Link href="/universidad" className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300">
            ← Universidad
          </Link>
          <Link href="/" className="rounded-xl border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300">
            Inicio
          </Link>
        </footer>
      </div>
    </main>
  );
}
