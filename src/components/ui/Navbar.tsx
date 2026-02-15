"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl flex items-center justify-between px-10 z-[100]">
      <Link href="/" className="text-2xl font-[1000] italic uppercase tracking-tighter">
        OROCAR<span className="sunset-text">.</span>
      </Link>
      
      <div className="flex gap-8 items-center font-bold uppercase text-[11px] tracking-widest">
        <Link href="/ajouter" className="hover:text-orange-400 transition-colors">Ajouter</Link>
        <Link href="/catalogue" className="hover:text-orange-400 transition-colors">Louer</Link>
        <Link href="/login" className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
          Connexion
        </Link>
      </div>
    </nav>
  );
}