import Link from 'next/link';

export default function Navbar() {
  return (
    <Link href="/universidad" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
      🎓 Universidad
    </Link>
  );
}
