import { ArrowRight, Car, Droplet, GraduationCap, Lightbulb, Search, Tv, Wifi } from "lucide-react";
import { useState } from "react"
import ServicePayment from '../components/ServicePayement';

const NovaHub = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedService, setSelectedService] = useState(null); // État pour le service sélectionné

    const services = [
    { id: 1, name: 'Électricité', icon: <Lightbulb size={24} />, color: 'bg-amber-500', provider: 'ENEO', category: 'Utilités' },
    { id: 2, name: 'Eau', icon: <Droplet size={24} />, color: 'bg-blue-500', provider: 'Camwater', category: 'Utilités' },
    { id: 3, name: 'TV & Loisirs', icon: <Tv size={24} />, color: 'bg-purple-600', provider: 'Canal+, Startimes', category: 'Divertissement' },
    { id: 4, name: 'Internet', icon: <Wifi size={24} />, color: 'bg-cyan-500', provider: 'Camtel, Orange, MTN', category: 'Telecom' },
    { id: 5, name: 'Éducation', icon: <GraduationCap size={24} />, color: 'bg-emerald-600', provider: 'Frais de Scolarité', category: 'Formation' },
    { id: 6, name: 'Transport', icon: <Car size={24} />, color: 'bg-slate-700', provider: 'Bus, Train, Vol', category: 'Voyage' },
  ];

  // Si un service est sélectionné, on affiche l'écran de paiement à la place de la grille
  if (selectedService) {
    return (
      <ServicePayment 
        service={selectedService} 
        onBack={() => setSelectedService(null)} 
      />
    );
  }

//   Filtrage pour la barre de recherche 
const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return(
    <>
        <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-2xl min-h-screen pb-28">
            {/* Header & Search */}
            <div className="mt-4 mb-8">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 italic tracking-tighter">NovaHub</h1>
                <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text"
                    placeholder="Rechercher un service (ex: ENEO...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                />
                </div>
            </div>

            {/* Grid de Services */}
            <div className="grid grid-cols-2 gap-4">
                {filteredServices.map((service) => (
                <button 
                    key={service.id}
                    onClick={() => setSelectedService(service)} // On déclenche la sélection ici
                    className="group bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-start hover:border-blue-500 transition-all active:scale-95 text-left"
                >
                    <div className={`${service.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                    {service.icon}
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{service.category}</p>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{service.name}</h3>
                    <div className="mt-4 flex items-center justify-between w-full">
                    <span className="text-[10px] text-slate-500 italic">{service.provider}</span>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                    </div>
                </button>
                ))}
            </div>

            {/* Suggestion pour le stage : "Smart Alert" */}
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-[2.5rem]">
                <div className="flex gap-4 items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <p className="text-xs font-medium text-blue-800 dark:text-blue-300 uppercase tracking-widest">Alerte Facture</p>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Votre facture **ENEO** de Février arrive bientôt. Voulez-vous programmer un paiement automatique ?
                </p>
            </div>
        </div>
    </>
  )
};

export default NovaHub;