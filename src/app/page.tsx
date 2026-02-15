"use client";

import Link from 'next/link';
import { VILLES } from '@/lib/constants'; // On importe la nouvelle liste

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans flex flex-col">
      {/* Barre de Navigation */}
      <header className="flex justify-between items-center px-12 py-8 w-full">
        <div className="text-2xl font-black tracking-widest italic text-white">OROCAR</div>
        <nav className="flex items-center gap-8 text-white">
          <Link href="/ajouter" className="text-sm font-bold hover:text-orange-500 transition uppercase">Ajouter</Link>
          <Link href="/catalogue" className="text-sm font-bold hover:text-orange-500 transition uppercase">Louer</Link>
          <Link href="/auth" className="text-sm font-bold border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition uppercase">
            Connexion
          </Link>
        </nav>
      </header>

      {/* Section Principale */}
      <section className="flex-1 flex flex-col justify-center items-center px-12 -mt-20">
        <h1 className="text-7xl md:text-8xl font-black leading-none mb-12 italic tracking-tighter text-center text-white">
          VOTRE LIBERTÉ <br />
          <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
            SUR MESURE.
          </span>
        </h1>

        {/* Barre de Recherche Dynamique */}
        <div className="flex bg-zinc-900/50 backdrop-blur-md p-2 rounded-full shadow-2xl border border-zinc-800">
          <div className="flex items-center bg-white rounded-full px-6 mr-3">
            <span className="text-black text-xl mr-2">📍</span>
            <select 
              className="p-4 w-64 text-black outline-none font-bold bg-transparent appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Quelle ville ?</option>
              {/* On boucle sur les 40 villes du Maroc */}
              {VILLES.map((ville) => (
                <option key={ville.id} value={ville.nom} className="text-black">
                  {ville.nom}
                </option>
              ))}
            </select>
          </div>
          
          <button className="bg-gradient-to-r from-orange-400 to-rose-400 text-white font-black px-10 rounded-full hover:scale-105 transition-all uppercase tracking-wide">
            Rechercher
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 flex flex-col items-center w-full">
        <Link href="/contact" className="text-zinc-500 text-sm font-bold hover:text-white transition uppercase">
          Devenir Propriétaire
        </Link>
        <p className="text-zinc-700 text-[10px] mt-4 tracking-[0.2em]">
          © 2026 OROCAR. PREMIUM MOBILITY
        </p>
      </footer>
    </main>
  );
}