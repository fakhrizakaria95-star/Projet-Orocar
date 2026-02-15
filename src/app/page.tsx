"use client";

import Link from 'next/link';
import { VILLES } from '@/lib/constants';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white font-sans flex flex-col">
      
      {/* Barre de Navigation */}
      <header className="relative z-50 flex justify-between items-center px-12 py-8 w-full">
        <div className="text-2xl font-black tracking-widest italic">OROCAR</div>
        
        <nav className="flex items-center gap-6">
          {/* On force le curseur pointer et un z-index pour éviter qu'un élément invisible bloque le clic */}
          <Link href="/ajouter" 
            className="relative z-50 text-[10px] font-bold px-5 py-2.5 rounded-full border border-orange-500/30 hover:bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-300 uppercase tracking-widest cursor-pointer">
            Ajouter votre véhicule
          </Link>
          
          <Link href="/catalogue" 
            className="relative z-50 text-[10px] font-bold px-5 py-2.5 rounded-full border border-orange-500/30 hover:bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-300 uppercase tracking-widest cursor-pointer">
            Je recherche un véhicule
          </Link>
          
          <Link href="/auth" 
            className="relative z-50 text-[10px] font-bold bg-white text-black px-6 py-2.5 rounded-full hover:bg-gradient-to-r from-orange-400 to-rose-400 hover:text-white transition-all duration-300 uppercase cursor-pointer">
            Connexion
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center px-12 -mt-20">
        <h1 className="text-7xl md:text-8xl font-black leading-none mb-12 italic tracking-tighter text-center">
          VOTRE LIBERTÉ <br />
          <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
            SUR MESURE.
          </span>
        </h1>

        {/* Barre de Recherche */}
        <div className="flex bg-zinc-900/50 backdrop-blur-md p-2 rounded-full shadow-2xl border border-zinc-800">
          <div className="flex items-center bg-white rounded-full px-6 mr-3">
            <span className="text-black text-xl mr-2">📍</span>
            <select 
  className="p-4 w-64 text-black outline-none font-bold bg-transparent appearance-none cursor-pointer"
  defaultValue="" // C'est ici qu'on définit la valeur par défaut
>
  <option value="" disabled>Quelle ville ?</option>
  {VILLES.map((ville: any) => (
    <option key={ville.id} value={ville.nom}>
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
        <Link href="/contact" className="text-zinc-500 text-[9px] font-bold hover:text-white transition uppercase tracking-[0.4em]">
          Devenir Propriétaire
        </Link>
      </footer>
    </main>
  );
}