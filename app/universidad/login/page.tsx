'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);

    // Simulación de autenticación y redirección
    setTimeout(() => {
      setCargando(false);
      router.push('/universidad/dashboard');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="bg-slate-800/90 border border-slate-700 p-8 rounded-3xl max-w-md w-full space-y-6 shadow-2xl">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-3xl">🏛️</span>
          <h1 className="text-2xl font-bold">Portal del Estudiante</h1>
          <p className="text-slate-400 text-xs">
            Ingresa con tus credenciales de la Universidad de la Gracia y la Verdad
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-medium">Correo Institucional o Matrícula</label>
            <input
              type="email"
              required
              placeholder="estudiante@ecosistemagracia.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300 font-medium">Contraseña</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-slate-700 text-slate-950 font-bold text-xs py-3.5 rounded-xl transition-all shadow-lg mt-2"
          >
            {cargando ? 'Autenticando...' : 'Iniciar Sesión →'}
          </button>
        </form>

        {/* Opciones Adicionales */}
        <div className="border-t border-slate-700/80 pt-4 flex flex-col items-center gap-2 text-xs">
          <Link href="/universidad/inscripcion" className="text-emerald-400 hover:underline">
            ¿Aún no te has matriculado? Aplica a Admisiones
          </Link>
          <Link href="/universidad" className="text-slate-400 hover:text-slate-200 pt-1">
            ← Volver al Portal Académico
          </Link>
        </div>
      </div>
    </main>
  );
}
