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
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FinanzasUniversidadPage() {
  const [modalPago, setModalPago] = useState(false);
  const [procesando, setProcesando] = useState(false);
  const [pagoExitoso, setPagoExitoso] = useState(false);

  const balanceActual = 150.00; // Balance pendiente en USD

  const historialPagos = [
    { id: 'TXN-9021', concepto: 'Matrícula Cuatrimestre Sep-Dic', monto: 120.00, fecha: '15 Jul, 2026', estado: 'Completado' },
    { id: 'TXN-8814', concepto: 'Certificación y Récord de Notas', monto: 25.00, fecha: '10 Jun, 2026', estado: 'Completado' },
    { id: 'TXN-8750', concepto: 'Cuota Mensual - Junio', monto: 150.00, fecha: '05 Jun, 2026', estado: 'Completado' },
  ];

  const handlePagar = (e: React.FormEvent) => {
    e.preventDefault();
    setProcesando(true);
    
    // Simular el tiempo de procesamiento con el banco / pasarela
    setTimeout(() => {
      setProcesando(false);
      setPagoExitoso(true);
      
      // Cerrar éxito después de unos segundos
      setTimeout(() => {
        setPagoExitoso(false);
        setModalPago(false);
      }, 3500);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto space-y-8 relative">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
            💳 Finanzas & Tesorería
          </span>
          <h1 className="text-3xl font-bold mt-2">Estado de Cuenta</h1>
          <p className="text-slate-400 text-sm">
            Gestiona tus pagos de colegiatura, revisa tus facturas y mantén tu cuenta al día.
          </p>
        </div>
      </header>

      {/* Resumen de Cuenta */}
      <section className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left w-full md:w-auto">
          <h2 className="text-xs text-slate-400 font-bold uppercase tracking-wider">Balance Pendiente</h2>
          <p className="text-4xl font-bold text-white">${balanceActual.toFixed(2)} <span className="text-lg text-slate-500 font-normal">USD</span></p>
          <p className="text-xs text-rose-400 font-medium pt-1">Vence el 05 de Agosto, 2026</p>
        </div>

        <button
          onClick={() => setModalPago(true)}
          className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-md shadow-emerald-900/50 flex items-center justify-center gap-2"
        >
          <span>Pagar Ahora</span>
          <span>→</span>
        </button>
      </section>

      {/* Historial de Transacciones */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          🧾 Historial de Pagos Recientes
        </h3>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/50 border-b border-slate-700 text-slate-400 uppercase">
                <tr>
                  <th className="px-4 py-3 font-semibold">ID Ref.</th>
                  <th className="px-4 py-3 font-semibold">Concepto</th>
                  <th className="px-4 py-3 font-semibold">Fecha</th>
                  <th className="px-4 py-3 font-semibold">Monto</th>
                  <th className="px-4 py-3 font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 text-slate-200">
                {historialPagos.map((pago) => (
                  <tr key={pago.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-[10px] text-slate-400">{pago.id}</td>
                    <td className="px-4 py-3 font-medium">{pago.concepto}</td>
                    <td className="px-4 py-3 text-slate-400">{pago.fecha}</td>
                    <td className="px-4 py-3 font-bold text-emerald-400">${pago.monto.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <span className="bg-emerald-950/50 text-emerald-400 border border-emerald-800/50 px-2 py-1 rounded text-[10px] font-bold">
                        {pago.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

      {/* Modal de Pago (Overlay) */}
      {modalPago && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-3xl max-w-md w-full shadow-2xl space-y-6">
            {!pagoExitoso ? (
              <>
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <h3 className="text-lg font-bold text-white">Procesar Pago</h3>
                  <button onClick={() => setModalPago(false)} className="text-slate-500 hover:text-white transition-colors">
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-xl flex justify-between items-center text-sm">
                    <span className="text-slate-400">Total a Pagar:</span>
                    <span className="font-bold text-xl text-emerald-400">${balanceActual.toFixed(2)}</span>
                  </div>

                  <form onSubmit={handlePagar} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400 font-semibold">Número de Tarjeta</label>
                      <input type="text" required placeholder="0000 0000 0000 0000" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold">Expiración</label>
                        <input type="text" required placeholder="MM/YY" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-slate-400 font-semibold">CVC</label>
                        <input type="password" required placeholder="123" maxLength={4} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono" />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={procesando}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-sm px-4 py-3 rounded-xl transition-all mt-2"
                    >
                      {procesando ? 'Procesando transacción...' : 'Confirmar Pago'}
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="text-6xl mb-2">✅</div>
                <h3 className="text-xl font-bold text-emerald-400">¡Pago Exitoso!</h3>
                <p className="text-sm text-slate-400">Tu colegiatura ha sido cubierta exitosamente. El recibo ha sido enviado a tu correo.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
