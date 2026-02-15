"use client";
import { useState } from 'react';
import { CAR_BRANDS, MAROC_CITIES } from '@/lib/constants';

export default function AjouterPage() {
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="glass-card p-12 rounded-[4rem] border-white/5 shadow-2xl">
        <div className="mb-12">
          <h2 className="text-5xl font-[1000] italic uppercase tracking-tighter">
            PROPOSEZ VOTRE <span className="sunset-text italic">VÉHICULE</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px] mt-4">Rentabilisez votre passion</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SÉLECTION MARQUE */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 ml-4">Marque</label>
            <select 
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl font-bold text-white outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-slate-900">Choisir une marque</option>
              {Object.keys(CAR_BRANDS).map(brand => (
                <option key={brand} value={brand} className="bg-slate-900">{brand}</option>
              ))}
            </select>
          </div>

          {/* SÉLECTION MODÈLE (Dynamique) */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 ml-4">Modèle</label>
            <select 
              disabled={!selectedBrand}
              className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl font-bold text-white outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer disabled:opacity-20"
            >
              <option value="" className="bg-slate-900">Modèle</option>
              {selectedBrand && (CAR_BRANDS as any)[selectedBrand].map((model: string) => (
                <option key={model} value={model} className="bg-slate-900">{model}</option>
              ))}
            </select>
          </div>

          {/* VILLE */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 ml-4">Ville</label>
            <select className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl font-bold text-white outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer">
              {MAROC_CITIES.map(city => (
                <option key={city} value={city} className="bg-slate-900">{city}</option>
              ))}
            </select>
          </div>

          {/* PRIX */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-orange-500 ml-4">Prix / Jour (MAD)</label>
            <input type="number" placeholder="Ex: 500" className="w-full p-5 bg-white/5 border border-white/10 rounded-3xl font-bold text-white outline-none focus:border-orange-500 transition-all placeholder:text-white/10" />
          </div>

          <button className="sunset-btn md:col-span-2 py-6 rounded-[2.5rem] font-[1000] italic uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(255,95,109,0.3)] mt-6">
            Publier mon annonce
          </button>
        </form>
      </div>
    </div>
  );
}