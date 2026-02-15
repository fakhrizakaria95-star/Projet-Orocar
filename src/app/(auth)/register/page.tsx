"use client";
import Link from 'next/link';
import { UserPlus, Mail, Lock, User } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-card p-12 rounded-[3.5rem] w-full max-w-md relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"></div>
        
        <div className="text-center mb-10">
          <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter mb-2">CRÉER UN <span className="sunset-text">ACCÈS</span></h2>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">Rejoignez la communauté OROCAR</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
            <input placeholder="NOM COMPLET" className="w-full p-5 pl-12 bg-white/5 border border-white/10 rounded-2xl font-bold text-xs outline-none focus:border-orange-500 transition-all" />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
            <input placeholder="EMAIL" type="email" className="w-full p-5 pl-12 bg-white/5 border border-white/10 rounded-2xl font-bold text-xs outline-none focus:border-orange-500 transition-all" />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
            <input placeholder="MOT DE PASSE" type="password" className="w-full p-5 pl-12 bg-white/5 border border-white/10 rounded-2xl font-bold text-xs outline-none focus:border-orange-500 transition-all" />
          </div>

          <button className="sunset-btn w-full py-6 rounded-2xl font-[1000] uppercase italic tracking-[0.2em] mt-4 flex items-center justify-center gap-3">
            <UserPlus size={18} /> S'inscrire
          </button>
        </div>

        <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
          Déjà inscrit ? <Link href="/login" className="text-orange-400 underline ml-2">Connexion</Link>
        </p>
      </div>
    </div>
  );
}