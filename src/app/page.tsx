import Link from 'next/link';
import { Search, MapPin, Car } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] flex flex-col items-center justify-center p-6 text-center">
      {/* Navbar Minimaliste */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center max-w-7xl">
        <h1 className="text-2xl font-black italic tracking-tighter">ORO<span className="text-orange-500">CAR</span></h1>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <Link href="/ajouter">Ajouter</Link>
          <Link href="/catalogue">Louer</Link>
          <Link href="/login" className="text-white">Connexion</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl space-y-10">
        <h2 className="text-6xl md:text-8xl font-[1000] italic leading-none tracking-tighter uppercase">
          VOTRE LIBERTÉ <br />
          <span className="bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] bg-clip-text text-transparent">SUR MESURE.</span>
        </h2>

        {/* Barre de Recherche (Style Sophistiqué) */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-2 rounded-[2.5rem] flex flex-col md:flex-row gap-2 shadow-2xl">
          <div className="flex-1 flex items-center gap-4 px-6 py-4">
            <MapPin className="text-orange-500" size={20} />
            <input type="text" placeholder="Quelle ville ?" className="bg-transparent outline-none w-full font-bold uppercase text-xs tracking-widest" />
          </div>
          <button className="bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] px-10 py-5 rounded-[2rem] font-black italic uppercase text-xs tracking-widest text-white hover:scale-105 transition-transform">
            Rechercher
          </button>
        </div>

        <Link href="/ajouter" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-bold uppercase text-[10px] tracking-[0.3em]">
          <Car size={14} /> Devenir Propriétaire
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
        © 2026 OROCAR. Premium Mobility
      </footer>
    </main>
  );
}