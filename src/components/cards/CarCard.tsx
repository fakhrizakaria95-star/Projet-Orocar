"use client";
import { Car } from 'lucide-react';

export default function CarCard({ car }: { car: any }) {
  return (
    <div className="glass-card group p-6 rounded-[2.5rem] transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,95,109,0.2)]">
      <div className="relative h-48 w-full bg-white/5 rounded-[2rem] overflow-hidden flex items-center justify-center">
        <Car size={48} className="text-white/20 group-hover:text-orange-400 transition-colors" />
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase italic">
          Disponible
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-black italic uppercase tracking-tighter">{car.brand} <span className="sunset-text">{car.model}</span></h3>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{car.city}</p>
        
        <div className="mt-6 flex items-end justify-between">
          <div>
            <span className="block text-[10px] font-black text-slate-500 uppercase">Prix / Jour</span>
            <span className="text-2xl font-[1000] italic">{car.price_per_day_supplier} <small className="text-xs uppercase text-orange-400">Mad</small></span>
          </div>
          <button className="sunset-btn p-4 rounded-2xl shadow-lg">
            <Car size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}