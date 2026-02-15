"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { 
  Car, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  ChevronLeft, 
  Fuel, 
  Gauge 
} from 'lucide-react';

export default function VehiculeDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .eq('id', id)
        .single();

      if (data) setCar(data);
      setLoading(false);
    };
    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030712]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#030712] text-white">
        <h2 className="text-2xl font-black uppercase italic mb-4">Véhicule introuvable</h2>
        <button onClick={() => router.back()} className="text-orange-500 font-bold uppercase text-xs tracking-widest">Retour</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Bouton Retour */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-all font-bold uppercase text-[10px] tracking-[0.3em] mb-12"
        >
          <ChevronLeft size={16} /> Retour au catalogue
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLONNE GAUCHE : VISUEL */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[3.5rem] aspect-[4/3] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <Car size={160} className="text-white/5 relative z-10" />
              <div className="absolute top-8 left-8 flex gap-2">
                <span className="px-4 py-2 bg-orange-500 rounded-full text-[10px] font-[1000] uppercase italic shadow-2xl">Premium</span>
              </div>
            </div>

            {/* Caractéristiques rapides */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center space-y-2">
                <Fuel className="text-orange-500 mx-auto" size={20} />
                <p className="text-[10px] font-black uppercase text-slate-500">Hybride</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center space-y-2">
                <Gauge className="text-orange-500 mx-auto" size={20} />
                <p className="text-[10px] font-black uppercase text-slate-500">Auto</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center space-y-2">
                <Calendar className="text-orange-500 mx-auto" size={20} />
                <p className="text-[10px] font-black uppercase text-slate-500">2024</p>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : INFOS & BOOKING */}
          <div className="space-y-10">
            <header>
              <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.4em] mb-4">
                <MapPin size={14} /> {car.city}, Maroc
              </div>
              <h1 className="text-7xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-[0.8] mb-4">
                {car.brand} <br />
                <span className="bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] bg-clip-text text-transparent italic">{car.model}</span>
              </h1>
            </header>

            <p className="text-slate-400 leading-relaxed font-medium">
              Profitez d'une expérience de conduite inégalée avec ce véhicule. 
              Entièrement révisé, ce modèle allie confort et puissance pour vos déplacements à {car.city}.
            </p>

            {/* Barre de Prix & Action */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Tarif Exclusive</p>
                <p className="text-5xl font-[1000] italic leading-none text-white">
                  {car.price_per_day_supplier} 
                  <span className="text-sm text-orange-400 ml-2 uppercase">Mad/Jour</span>
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] px-12 py-6 rounded-[2rem] font-[1000] uppercase italic text-xs tracking-[0.3em] text-white shadow-lg active:scale-95 transition-all">
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}