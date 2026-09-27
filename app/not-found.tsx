import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-amber-300">GRACIA 1001</p>
        <h1 className="mt-3 text-3xl font-bold">Página no encontrada</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          La dirección solicitada no existe o ya no está disponible.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/gracia" className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950">
            Ir a Gracia 1001
          </Link>
          <Link href="/" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300">
            Inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
