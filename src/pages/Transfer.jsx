import React from 'react';
import TransferForm from '../components/TransferForm'; // Assure-toi que le chemin est correct
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Transfer = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-gray-50 dark:bg-slate-900 min-h-screen pb-24">
      {/* Header de la page */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Transactions</h1>
      </div>

      {/* Appel du formulaire fusionné */}
      <TransferForm />
      
      {/* Petit texte d'info NovaVerse sous le formulaire */}
      <p className="mt-6 text-[10px] text-center text-slate-400 font-medium px-8 italic">
        Les transferts entre comptes NovaVerse sont instantanés et gratuits. Les retraits en kiosque sont soumis aux tarifs en vigueur des opérateurs.
      </p>
    </div>
  );
};

export default Transfer;