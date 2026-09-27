'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FinanzasPage() {
  const [pagado, setPagado] = useState(false);

  const pagos = [
    {
      id: 'REC-2026-01',
      concepto: 'Matrícula Trimestre III - 2026',
      monto: '$150.00 USD',
      fecha: '15 de Julio, 2026',
      estado: 'Completado',
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800'
    },
    {
      id: 'REC-2026-02',
      concepto: 'Cuota de Materiales & Biblioteca Digital',
      monto: '$35.00 USD',
      fecha: '01 de Julio, 2026',
      estado: 'Completado',
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800'
    }
  ];

  const handlePagarCuota = () => {
    setPagado(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
          💳 Gestión Financiera
        </span>
        <h1 className="text-3xl font-bold mt-2">Estado de Cuenta & Colegiatura</h1>
        <p className="text-slate-400 text-sm">
          Consulta tu plan de estudio, historial de pagos y descarga tus comprobantes oficiales.
        </p>
      </header>

      {/* Resumen de Plan */}
      <div className="bg-slate-800/90 p-6 rounded-3xl border border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
            Plan Activo
          </span>
          <h2 className="text-xl font-bold text-slate-100">Beca Parcial de Liderazgo (50%)</h2>
          <p className="text-xs text-slate-400">Próximo vencimiento: 15 de Agosto, 2026</p>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Balance Pendiente</p>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">{pagado ? '$0.00 USD' : '$75.00 USD'}</p>
        </div>
      </div>

      {/* Botón de Pago si hay saldo */}
      {!pagado && (
        <div className="bg-slate-800 p-6 rounded-3xl border border-amber-500/30 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
            🔔 Cuota Pendiente de Agosto
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Puedes realizar tu abono de la cuota mensual mediante tarjeta de crédito/débito o transferencia directa.
          </p>
          <button
            onClick={handlePagarCuota}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
          >
            Pagar Cuota ($75.00 USD) →
          </button>
        </div>
      )}

      {pagado && (
        <div className="bg-emerald-950/60 border border-emerald-500 p-4 rounded-2xl text-center text-xs text-emerald-200 font-bold">
          ✓ Al día. No tienes cuotas pendientes para este período.
        </div>
      )}

      {/* Historial de Transacciones */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">
          📄 Historial de Transacciones
        </h2>

        <div className="space-y-3">
          {pagos.map((p) => (
            <div
              key={p.id}
              className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.color}`}>
                    {p.estado}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{p.id}</span>
                </div>
                <h3 className="font-bold text-slate-200 text-sm">{p.concepto}</h3>
                <p className="text-[11px] text-slate-400">Fecha: {p.fecha}</p>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <span className="font-bold font-mono text-slate-100 text-sm">{p.monto}</span>
                <button className="bg-slate-900 hover:bg-slate-700 text-emerald-400 border border-slate-700 text-[11px] font-bold px-3 py-1.5 rounded-xl transition-all">
                  Descargar Recibo 📥
                </button>
              </div>
            </div>
          ))}
        </div>
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
