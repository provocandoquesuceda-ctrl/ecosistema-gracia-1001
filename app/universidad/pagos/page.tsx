'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PagosPage() {
  const [metodoPago, setMetodoPago] = useState('Tarjeta de Crédito / Débito');
  const [procesando, setProcesando] = useState(false);
  const [pagoCompletado, setPagoCompletado] = useState(false);

  const cuotas = [
    {
      id: 'FAC-2026-01',
      concepto: 'Cuota Trimestral - Trimestre 2026-2',
      vencimiento: '15 de Julio, 2026',
      monto: 150.00,
      estado: 'Pendiente',
      color: 'text-amber-400 bg-amber-950/60 border-amber-800'
    },
    {
      id: 'FAC-2026-00',
      concepto: 'Matrícula Académica Inicial & Carnet',
      vencimiento: '01 de Mayo, 2026',
      monto: 75.00,
      estado: 'Pagado',
      color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800'
    }
  ];

  const handlePagar = (e: React.FormEvent) => {
    e.preventDefault();
    setProcesando(true);
    setTimeout(() => {
      setProcesando(false);
      setPagoCompletado(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          💳 Tesorería & Facturación
        </span>
        <h1 className="text-3xl font-bold mt-2">Estado Financiero y Pagos</h1>
        <p className="text-slate-400 text-sm">
          Gestiona tus cuotas académicas, consulta el historial de facturación y descarga tus comprobantes de pago.
        </p>
      </header>

      {/* KPI de Saldo Pendiente */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Saldo Pendiente</span>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">$150.00 USD</p>
          <p className="text-[11px] text-amber-300">Vence: 15 de Julio, 2026</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Total Pagado</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">$75.00 USD</p>
          <p className="text-[11px] text-slate-500">1 Transacción confirmada</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold">Estado de Cuenta</span>
          <p className="text-2xl font-extrabold text-indigo-400 font-mono">Al Día</p>
          <p className="text-[11px] text-slate-500">Sin recargos por mora</p>
        </div>
      </div>

      {/* Historial y Facturas */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          🧾 Detalle de Obligaciones Financieras
        </h2>

        <div className="space-y-3">
          {cuotas.map((c) => (
            <div
              key={c.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">{c.id}</span>
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${c.color}`}>
                    {c.estado}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-100">{c.concepto}</h3>
                <p className="text-xs text-slate-400">Fecha límite: {c.vencimiento}</p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-lg font-extrabold text-white font-mono">${c.monto.toFixed(2)} USD</span>
                {c.estado === 'Pagado' ? (
                  <button
                    onClick={() => alert(`Descargando comprobante de ${c.id}`)}
                    className="bg-slate-900 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-bold text-xs px-3 py-2 rounded-xl transition-all"
                  >
                    Recibo PDF
                  </button>
                ) : (
                  <span className="text-xs text-amber-400 font-semibold bg-amber-950/40 px-3 py-1 rounded-lg border border-amber-900">
                    Por Pagar
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de Pago */}
      <section className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
          💳 Realizar Pago en Línea
        </h2>

        {!pagoCompletado ? (
          <form onSubmit={handlePagar} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-400">Método de Pago:</label>
              <select
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 transition-all"
              >
                <option value="Tarjeta de Crédito / Débito">Tarjeta de Crédito / Débito (Visa, Mastercard)</option>
                <option value="Transferencia Bancaria Directa">Transferencia Bancaria Directa</option>
                <option value="PayPal / Pasarela Internacional">PayPal / Pasarela Internacional</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-slate-400">Monto a Cancelar (USD):</label>
                <input
                  type="text"
                  readOnly
                  value="$150.00 USD"
                  className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-emerald-400 font-mono font-bold cursor-not-allowed"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">Titular de la Cuenta / Tarjeta:</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre como figura en la tarjeta"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={procesando}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              {procesando ? 'Procesando Pago Seguro...' : 'Procesar Pago de $150.00 USD →'}
            </button>
          </form>
        ) : (
          <div className="bg-emerald-950/80 border border-emerald-500 p-5 rounded-2xl text-center space-y-2">
            <span className="text-3xl">✅</span>
            <p className="text-xs font-bold text-emerald-200">¡Pago Procesado Exitosamente!</p>
            <p className="text-[11px] text-emerald-300">
              Se ha emitido el recibo oficial <strong className="text-white">#FAC-2026-01</strong> por un total de <strong className="text-white">$150.00 USD</strong>.
            </p>
            <button
              onClick={() => setPagoCompletado(false)}
              className="text-[10px] text-emerald-400 underline pt-1 block mx-auto"
            >
              Realizar otro pago o consultar estado
            </button>
          </div>
        )}
      </section>

      {/* Volver */}
      <div className="pt-2">
        <Link
          href="/universidad"
          className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          ← Volver a la Universidad
        </Link>
      </div>
    </main>
  );
}
