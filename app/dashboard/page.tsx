'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function DashboardPage() {
  const [metricas, setMetricas] = useState({
    usuarios: 0,
    beneficios: 0,
    cargando: true,
  });

  useEffect(() => {
    async function cargarMetricas() {
      try {
        // Conteo de usuarios en la tabla perfiles
        const { count: countUsuarios } = await supabase
          .from('perfiles')
          .select('*', { count: 'exact', head: true });

        // Conteo de beneficios en la base de datos
        const { count: countBeneficios } = await supabase
          .from('beneficios_gracia')
          .select('*', { count: 'exact', head: true });

        setMetricas({
          usuarios: countUsuarios || 0,
          beneficios: countBeneficios || 0,
          cargando: false,
        });
      } catch (error) {
        console.error('Error al cargar métricas:', error);
        setMetricas((prev) => ({ ...prev, cargando: false }));
      }
    }

    cargarMetricas();
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 gap-4">
        <div>
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            Ecosistema Gracia 1001
          </span>
          <h1 className="text-3xl font-bold mt-1">¡Bienvenido de nuevo! 👋</h1>
          <p className="text-slate-400 text-sm">
            Tu centro de control de contenidos, usuarios y crecimiento.
          </p>
        </div>
        <Link
          href="/registro"
          className="text-xs bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl border border-slate-700 transition-all text-slate-300"
        >
          Mi Perfil / Configuración
        </Link>
      </header>

      {/* Tarjetas de Analítica & Métricas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <p className="text-xs text-slate-400 font-medium">Usuarios Registrados</p>
          <p className="text-2xl font-bold text-indigo-400">
            {metricas.cargando ? '...' : metricas.usuarios}
          </p>
          <p className="text-[10px] text-slate-500">Sincronizado con Supabase</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <p className="text-xs text-slate-400 font-medium">Beneficios en BD (Vectores)</p>
          <p className="text-2xl font-bold text-emerald-400">
            {metricas.cargando ? '...' : metricas.beneficios}
          </p>
          <p className="text-[10px] text-slate-500">Catálogo de la Gracia</p>
        </div>

        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-1">
          <p className="text-xs text-slate-400 font-medium">Estado del Sistema</p>
          <div className="flex items-center gap-2 pt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-200">100% Operativo</span>
          </div>
          <p className="text-[10px] text-slate-500">Vercel & Next.js App Router</p>
        </div>
      </section>

      {/* Sección Mi Progreso */}
      <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-indigo-300">🌱 Curso: Primeros Pasos</h2>
          <span className="text-xs bg-indigo-950 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800 font-medium">
            33% Completado
          </span>
        </div>
        <p className="text-slate-300 text-sm">
          Aprende los fundamentos de la gracia y la nueva identidad que Dios tiene para ti.
        </p>
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-700">
          <div className="bg-indigo-500 h-full w-1/3"></div>
        </div>
        <div className="pt-2">
          <Link
            href="/cursos/primeros-pasos"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg"
          >
            Ir al Curso y Evaluar ➔
          </Link>
        </div>
      </section>

      {/* Herramientas Principales */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800 flex items-center justify-center text-xl">
              🤖
            </div>
            <h3 className="text-lg font-bold">Asistente Devocional IA</h3>
            <p className="text-slate-400 text-sm">
              Consulta promesas y devocionales adaptados exactamente a tu situación con la potencia del RAG vectorial.
            </p>
          </div>
          <Link
            href="/"
            className="w-full text-center bg-slate-900 hover:bg-slate-950 border border-slate-700 text-indigo-400 font-semibold text-sm py-3 rounded-xl transition-all"
          >
            Abrir Chatbot 💬
          </Link>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800 flex items-center justify-center text-xl">
              ✍️
            </div>
            <h3 className="text-lg font-bold">Panel Editorial Multicanal</h3>
            <p className="text-slate-400 text-sm">
              Genera copys reflexivos automáticos para tus redes sociales (Instagram, Web y WhatsApp).
            </p>
          </div>
          <Link
            href="/editorial"
            className="w-full text-center bg-slate-900 hover:bg-slate-950 border border-slate-700 text-indigo-400 font-semibold text-sm py-3 rounded-xl transition-all"
          >
            Ir a Editorial 📢
          </Link>
        </div>
      </section>
    </main>
  );
}