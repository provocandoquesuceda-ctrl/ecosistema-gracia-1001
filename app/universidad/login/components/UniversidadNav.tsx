'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UniversidadNav() {
  const pathname = usePathname();

  // No mostrar la barra en la página de login si se prefiere pantalla limpia
  if (pathname === '/universidad/login') return null;

  const links = [
    { href: '/universidad', label: '🏛️ Campus' },
    { href: '/universidad/dashboard', label: '📊 Panel' },
    { href: '/universidad/progreso', label: '📈 Progreso' },
    { href: '/universidad/biblioteca', label: '📚 Biblioteca' },
    { href: '/universidad/tutor', label: '🤖 Tutor AI' },
    { href: '/universidad/perfil', label: '👤 Perfil' },
  ];

  return (
    <nav className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-6 py-3">
      <div className="max-w-5xl mx-auto flex justify-between items-center flex-wrap gap-3">
        <Link href="/universidad" className="flex items-center gap-2 font-bold text-sm text-white hover:text-amber-400 transition-all">
          <span className="text-lg">🏛️</span>
          <span className="hidden sm:inline">Universidad de la Gracia</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1">
          {links.map((link) => {
            const activo = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                  activo
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
