import Link from 'next/link';

export default function ModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl space-y-6 px-6 py-12">
        <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-950/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          Universidad · Gracia 1001
        </span>
        <h1 className="text-3xl font-bold">Becas y Ayuda</h1>
        <p className="text-sm leading-6 text-slate-400">Gestiona información de becas, apoyo financiero y rutas de solicitud dentro del Campus Virtual.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/universidad" className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950">
            Volver al Campus
          </Link>
          <Link href="/gracia" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300">
            Banco Maestro Gracia 1001
          </Link>
        </div>
      </div>
    </main>
  );
}
