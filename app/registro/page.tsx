import Link from 'next/link';

export default function RegistroPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-2xl space-y-6 px-6 py-12">
        <span className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-950/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
          Registro · Gracia 1001
        </span>
        <h1 className="text-3xl font-bold">Registro de acceso</h1>
        <p className="text-sm leading-6 text-slate-400">
          El registro académico existente se encuentra dentro del Campus Virtual.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/universidad/registro" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950">
            Ir al registro académico
          </Link>
          <Link href="/gracia" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300">
            Explorar Gracia 1001
          </Link>
        </div>
      </div>
    </main>
  );
}
