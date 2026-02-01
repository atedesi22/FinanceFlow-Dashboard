import React from 'react';
import { PieChart, TrendingUp, ArrowUpRight, ArrowDownLeft, Calendar } from 'lucide-react';

const Stats = () => {
  return (
    <div className="p-4 bg-white dark:bg-slate-950 min-h-screen pb-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-300">Statistiques</h1>
        <button className="bg-white dark:bg-slate-700 p-2 rounded-xl shadow-sm text-gray-400">
          <Calendar size={20} />
        </button>
      </div>

      {/* Carte Récapitulative Mensuelle */}
      <div className="bg-white dark:bg-slate-800 dark:border-none p-6 rounded-[2rem] shadow-sm mb-6 border border-gray-100">
        <p className="text-gray-400 text-xs font-medium uppercase">Dépenses totales (Février)</p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-300 mt-1">450 000 XAF</h2>
        <div className="flex items-center gap-2 mt-2 text-red-500 font-bold text-xs">
          <TrendingUp size={14} /> +12% par rapport au mois dernier
        </div>
      </div>

      {/* Flux Entrant vs Sortant */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-emerald-50 p-4 rounded-3xl border border-emerald-100">
          <div className="text-emerald-600 mb-2"><ArrowUpRight size={20}/></div>
          <p className="text-[10px] text-emerald-700 font-bold uppercase">Entrées</p>
          <p className="text-lg font-bold text-emerald-900">800k</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-3xl border border-orange-100">
          <div className="text-orange-600 mb-2"><ArrowDownLeft size={20}/></div>
          <p className="text-[10px] text-orange-700 font-bold uppercase">Sorties</p>
          <p className="text-lg font-bold text-orange-900">350k</p>
        </div>
      </div>

      {/* Top Catégories (On peut réutiliser la logique de barres du Wallet ici) */}
      <h3 className="text-sm font-bold text-gray-800 dark:text-slate-300 mb-4">Top Dépenses</h3>
      <div className="space-y-4 bg-white dark:bg-blue-600 p-6 rounded-[2rem] shadow-sm">
         {/* ... Insérer ici les barres de progression codées précédemment ... */}
         <p className="text-center text-xs text-blue-600  dark:text-slate-300 font-bold">Voir l'analyse complète NovaVerse</p>
      </div>
    </div>
  );
};

export default Stats;