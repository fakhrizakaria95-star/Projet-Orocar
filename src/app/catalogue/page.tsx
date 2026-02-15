"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import CarCard from '@/components/cards/CarCard';

export default function CataloguePage() {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await supabase.from('vehicles').select('*');
      if (data) setCars(data);
    };
    fetchCars();
  }, []);

  return (
    <div className="pt-32 px-10 pb-20">
      <header className="mb-16">
        <h1 className="text-6xl font-[1000] italic uppercase tracking-tighter">
          NOTRE <span className="sunset-text">FLOTTE</span>
        </h1>
        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm">Le luxe à portée de main</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}