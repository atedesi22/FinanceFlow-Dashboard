import React, { useState } from 'react';
import {novaWalletData}  from '../data/novaTransactions';
import { ShieldCheck, Search, ArrowUpRight, ArrowDownLeft, Plus, Filter } from 'lucide-react';
import { PieChart } from 'recharts';

const NovaWallet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Logique de filtrage intelligente
  const filteredTransactions = novaWalletData.transactions.filter(tr => 
    tr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tr.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tr.method.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction pour formater la date proprement
  const formatDateLabel = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return "Aujourd'hui";
    if (date.toDateString() === yesterday.toDateString()) return "Hier";
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  };

  // Filtrage
  const filtered = novaWalletData.transactions.filter(tr =>
    tr.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isLoading, setIsLoading] = useState(false); // Tu passeras à true lors des appels API

// Exemple de ce qui s'affichera pendant que NovaVerse "réfléchit"
if (isLoading) {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="h-48 bg-gray-200 rounded-[2rem]"></div>
      <div className="h-32 bg-gray-200 rounded-[2rem]"></div>
      <div className="space-y-3">
        {[1, 2, 3].map(n => (
          <div key={n} className="h-16 bg-gray-200 rounded-2xl"></div>
        ))}
      </div>
    </div>
  );
}

      const [activeFilter, setActiveFilter] = useState("Semaine"); // État pour le filtre


  return (
    <div className="p-4 bg-white dark:bg-slate-950 min-h-screen rounded-2xl">
      {/* Carte du Solde - L'effet "Banque Virtuelle" */}
      <div className="bg-gradient-to-br dark:from-red-500 from-blue-700 to-indigo-600 p-6 rounded-3xl shadow-xl text-white mb-8">
        <div className="flex justify-between items-start">
          <p className="text-blue-100 text-sm font-medium">Solde NovaVerse</p>
          <span className="bg-green-400/20 text-green-100 text-xs px-2 py-1 rounded-full border border-green-400/30">
            <ShieldCheck size={12} /> NovaVault Active
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
             <Plus size={18} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-2">{novaWalletData.balance.toLocaleString()} <span className="text-lg">XAF</span></h1>
        
        <div className="mt-6 flex gap-4">
          <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-xl text-sm transition">Recharger</button>
          <button className="flex-1 bg-white text-blue-700 font-bold py-2 rounded-xl text-sm shadow-lg">Transférer</button>
        </div>
      </div>

      {/* Section Visualisation - NovaAnalytics */}
      <div className="bg-white dark:bg-slate-900 dark:border-none p-5 rounded-[2rem] shadow-sm mb-8 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-sm font-bold text-gray-800 dark:text-slate-300">Analyse des flux</h3>
            <p className="text-[10px] text-gray-400 font-medium">Répartition par catégorie</p>
          </div>
          <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
            <PieChart size={18} />
          </div>
        </div>

        {/* Graphique à barres horizontales - Simple & Efficace */}
        <div className="space-y-4">
          {/* Catégorie : Santé */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-bold text-gray-600">
              <span>Santé & Bien-être</span>
              <span>45%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>

          {/* Catégorie : Transport */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-bold text-gray-600">
              <span>Transports (Yango/Camtel)</span>
              <span>30%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-orange-400 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>

          {/* Catégorie : Épargne Nova */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-bold text-gray-600">
              <span>Épargne NovaVerse</span>
              <span>25%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 py-2 text-[11px] font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
          Détails complets de l'analyse
        </button>
      </div>


// ... à insérer après le graphique d'analyse
      <div className="flex bg-gray-100 dark:bg-slate-800  p-1 rounded-2xl mb-6">
        {["Jour", "Semaine", "Mois", "Année"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all ${
              activeFilter === filter 
              ? "bg-white text-blue-600 shadow-sm" 
              : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {/* Barre de Recherche & Filtre */}
      {/* <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher..."
            className="w-full p-3 pl-11 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-white p-3 rounded-2xl shadow-sm text-gray-500 hover:text-blue-600 transition">
          <Filter size={20} />
        </button>
      </div> */}

      {/* Liste des Transactions Groupées */}
      {/* <div className="space-y-6"> */}
        {/* Note : Pour simplifier ici, on affiche directement, 
            mais dans un vrai projet on ferait un .reduce() pour grouper par date */}
        {/* <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Transactions Récentes</h2>
        
        <div className="space-y-3">
          {filtered.map(tr => (
            <div key={tr.id} className="bg-white p-4 rounded-3xl flex items-center justify-between hover:bg-blue-50/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-active:scale-90 ${
                  tr.type === 'debit' ? 'bg-orange-50 text-orange-600' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  {tr.type === 'debit' ? <ArrowDownLeft size={22} /> : <ArrowUpRight size={22} />}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{tr.title}</p>
                  <p className="text-[11px] text-gray-400 font-medium">{formatDateLabel(tr.date)} • {tr.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-sm ${tr.type === 'debit' ? 'text-gray-900' : 'text-emerald-600'}`}>
                  {tr.type === 'debit' ? '-' : '+'}{tr.amount.toLocaleString()}
                </p>
                <p className="text-[9px] text-gray-300 font-bold uppercase">{tr.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}



      {/* Section Comptes Isolés (La sécurité dont tu as parlé) */}
      <h2 className="text-lg font-bold text-gray-800 dark:text-slate-100 mb-4">Comptes Sécurisés</h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {novaWalletData.linkedAccounts.map(account => (
          <div key={account.id} className="min-w-[140px] bg-white dark:bg-slate-800 dark:border-none p-4 rounded-2xl shadow-sm border border-gray-100">
             <p className="text-xs text-gray-500 dark:text-slate-100">{account.provider}</p>
             <p className="font-bold text-gray-600">**** {account.lastDigits}</p>
             <div className="mt-2 text-[10px] text-indigo-600 font-semibold italic">Isolé par Token</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-800 dark:text-slate-100 mb-4">Activités</h2>
        
        {/* Barre de recherche NovaVerse */}
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Rechercher une transaction, un service..."
            className="w-full p-4 pl-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-none focus:ring-2 focus:ring-indigo-500 transition"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-gray-300" size={20} />
        </div>

        <div className="space-y-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map(tr => (
              <div key={tr.id} className="bg-white dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${tr.type === 'debit' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                    {tr.type === 'debit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20}/>}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-slate-950">{tr.title}</p>
                    <p className="text-xs text-gray-500">{tr.method} • {new Date(tr.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                   <p className={`font-bold ${tr.type === 'debit' ? 'text-gray-800' : 'text-green-600'}`}>
                     {tr.type === 'debit' ? '-' : '+'}{tr.amount.toLocaleString()}
                   </p>
                   <p className="text-[10px] text-blue-500 font-semibold uppercase tracking-wider">Vérifié</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-400">Aucune transaction trouvée pour "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>

      {/* Historique Unifié */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
           <h2 className="text-lg font-bold text-gray-800 dark:text-slate-100">Activités</h2>
           <button className="text-blue-600 text-sm font-medium">Voir tout</button>
        </div>
        
        <div className="space-y-4">
          {novaWalletData.transactions.map(tr => (
            <div key={tr.id} className="bg-white dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tr.type === 'debit' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                  {tr.type === 'debit' ? '↓' : '↑'}
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-slate-950">{tr.title}</p>
                  <p className="text-xs text-gray-500">{tr.method} • {new Date(tr.date).toLocaleDateString()}</p>
                </div>
              </div>
              <p className={`font-bold ${tr.type === 'debit' ? 'text-red-500' : 'text-green-600'}`}>
                {tr.type === 'debit' ? '-' : '+'}{tr.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NovaWallet;