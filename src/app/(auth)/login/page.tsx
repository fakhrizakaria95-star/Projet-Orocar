"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Effet de lumière Sunset en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="glass-card p-10 md:p-14 rounded-[3rem] w-full max-w-md shadow-2xl border border-white/5 relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter mb-2">
            RETOUR AU <span className="sunset-text">SUNSET</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Connectez-vous à votre espace OROCAR
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Champ Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-black ml-4 text-orange-400 uppercase tracking-widest">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="email"
                placeholder="votre@email.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 pl-12 bg-white/5 border border-white/10 rounded-2xl font-bold outline-none focus:border-orange-500 transition-all text-white placeholder:text-white/20"
              />
            </div>
          </div>

          {/* Champ Mot de passe */}
          <div className="space-y-2">
            <label className="text-[10px] font-black ml-4 text-orange-400 uppercase tracking-widest">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="password"
                placeholder="••••••••"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 pl-12 bg-white/5 border border-white/10 rounded-2xl font-bold outline-none focus:border-orange-500 transition-all text-white placeholder:text-white/20"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="sunset-btn w-full py-6 mt-4 text-white rounded-2xl font-[1000] uppercase italic tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? "CONNEXION..." : (
              <>
                <LogIn size={20} />
                SE CONNECTER
              </>
            )}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
            Pas encore de compte ? 
            <Link href="/register" className="text-white hover:text-orange-400 transition-colors ml-2 underline">
              Créer un accès
            </Link>
          </p>
          
          <Link href="/" className="inline-block mt-6 text-[10px] font-black text-slate-600 hover:text-white uppercase tracking-tighter transition-all">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}