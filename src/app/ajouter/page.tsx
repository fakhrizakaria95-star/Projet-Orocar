"use client";

import Link from 'next/link';
import { VILLES } from '../../lib/constants'; // Chemin relatif direct

export default function AjouterPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center">
      {/* Header avec lien de retour fonctionnel */}
      <header className="w-full flex justify-between items-center px-12 py-8">
        <Link href="/" className="text-2xl font-black tracking-widest italic text-white hover:opacity-80 transition">
          OROCAR
        </Link>
        <Link href="/" className="text-[10px] font-bold text-zinc-500 hover:text-white transition uppercase tracking-widest">
          Annuler
        </Link>
      </header>

      <div className="w-full max-w-2xl px-6 py-12">
        <h1 className="text-4xl font-black mb-2 italic uppercase">Ajouter votre véhicule</h1>
        <p className="text-zinc-400 mb-10 font-medium tracking-tight">Remplissez les détails pour commencer à louer.</p>

        <form className="space-y-8">
          {/* Section Localisation */}
          <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800 space-y-6">
            <h2 className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em]">1. Localisation</h2>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-zinc-500 ml-1 uppercase">Ville</label>
              <select className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 focus:border-orange-500 outline-none transition font-bold text-sm text-white appearance-none cursor-pointer">
                <option value="" disabled selected>Où est garé le véhicule ?</option>
                {VILLES && VILLES.map((ville: any) => (
                  <option key={ville.id} value={ville.nom} className="bg-zinc-900 text-white">
                    {ville.nom}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Section Véhicule */}
          <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800 space-y-6">
            <h2 className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em]">2. Informations</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Marque (ex: BMW)" className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 focus:border-orange-500 outline-none transition text-sm text-white" />
              <input type="text" placeholder="Modèle (ex: M4)" className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 focus:border-orange-500 outline-none transition text-sm text-white" />
            </div>
            <input type="number" placeholder="Prix par jour (DH)" className="w-full bg-zinc-800 p-4 rounded-xl border border-zinc-700 focus:border-orange-500 outline-none transition font-bold text-orange-400 text-sm" />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-rose-500 p-5 rounded-2xl font-black text-white hover:scale-[1.01] transition-all shadow-2xl shadow-orange-500/20 uppercase tracking-[0.2em] text-sm">
            Publier mon annonce
          </button>
        </form>
      </div>
    </main>
  );
}