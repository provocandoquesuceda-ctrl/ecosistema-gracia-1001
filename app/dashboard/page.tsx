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
'use client';

import Link from 'next/link';

export default function DashboardAlumnoPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
          📊 Panel de Control Académico
        </span>
        <h1 className="text-3xl font-bold mt-2">Bienvenido, Estudiante de la Gracia</h1>
        <p className="text-slate-400 text-sm">
          Tu resumen de actividades, avance por trimestre y próximos compromisos en la universidad.
        </p>
      </header>

      {/* Metricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 block font-medium">Progreso General</span>
          <span className="text-2xl font-bold text-emerald-400 mt-1 block">65%</span>
          <span className="text-[10px] text-slate-500">Trimestre 2 Activo</span>
        </div>
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 block font-medium">Créditos Aprobados</span>
          <span className="text-2xl font-bold text-cyan-400 mt-1 block">24 / 48</span>
          <span className="text-[10px] text-slate-500">Horas Lectivas</span>
        </div>
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 block font-medium">Certificados Emitidos</span>
          <span className="text-2xl font-bold text-amber-400 mt-1 block">2</span>
          <span className="text-[10px] text-slate-500">Nivel 1 & 2</span>
        </div>
        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 block font-medium">Próxima Mentoría</span>
          <span className="text-sm font-bold text-purple-400 mt-2 block">Martes, 6:00 PM</span>
          <span className="text-[10px] text-slate-500">Dr. Aarón Ramos</span>
        </div>
      </div>

      {/* Accesos Rápidos */}
      <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
        <h3 className="text-base font-bold text-slate-100">🚀 Rutas de Aprendizaje Directas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link
            href="/universidad/tutor"
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 transition-all text-left space-y-1 block"
          >
            <span className="text-lg">🤖</span>
            <h4 className="font-bold text-xs text-cyan-300">Tutor de Exégesis</h4>
            <p className="text-[11px] text-slate-400">Resuelve dudas teológicas con el asistente en vivo.</p>
          </Link>

          <Link
            href="/universidad/especializaciones"
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 transition-all text-left space-y-1 block"
          >
            <span className="text-lg">🎯</span>
            <h4 className="font-bold text-xs text-emerald-300">Especializaciones</h4>
            <p className="text-[11px] text-slate-400">Profundiza en tu área de llamado (Familia, Salud, Negocios).</p>
          </Link>

          <Link
            href="/universidad/certificados"
            className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 transition-all text-left space-y-1 block"
          >
            <span className="text-lg">🏅</span>
            <h4 className="font-bold text-xs text-amber-300">Mis Certificados</h4>
            <p className="text-[11px] text-slate-400">Descarga o imprime tus títulos por nivel completado.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
