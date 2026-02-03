import React from 'react';
import { Plus, Search, Star } from 'lucide-react';

const Beneficiaries = ({ onSelect }) => {
  const favorites = [
    { id: 1, name: "Maman", op: "Orange", country: "🇨🇲", phone: "677000000", countryCode: "CM" },
    { id: 2, name: "Junior", op: "MTN", country: "🇨🇲", phone: "677000000", countryCode: "CM" },
    { id: 3, name: "Service Wave", op: "Wave", country: "🇸🇳", phone: "677000000", countryCode: "CM" },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Bénéficiaires</h3>
        <button className="text-blue-600 p-1 bg-blue-50 rounded-lg active:scale-90 transition">
          <Plus size={18} />
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {/* Ajouter un nouveau */}
        <button className="flex-shrink-0 w-16 flex flex-col items-center gap-2">
          <div className="w-14 h-14 border-2 border-dashed border-slate-200 rounded-[1.5rem] flex items-center justify-center text-slate-400">
            <Plus size={20} />
          </div>
          <span className="text-[10px] font-bold text-slate-500">Ajouter</span>
        </button>

        {/* Liste des favoris */}
        {favorites.map((contact) => (
          <button 
            key={contact.id}
            onClick={() => onSelect(contact)}
            className="flex-shrink-0 w-16 flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-[1.5rem] shadow-sm border border-slate-50 dark:border-slate-700 flex items-center justify-center text-xl relative group-active:scale-95 transition">
              {contact.name.charAt(0)}
              <span className="absolute -top-1 -right-1 text-[10px] bg-white rounded-full shadow-sm p-0.5">{contact.country}</span>
            </div>
            <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 truncate w-full text-center">
              {contact.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Beneficiaries;