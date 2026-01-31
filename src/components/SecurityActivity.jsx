import { Monitor, Smartphone, MapPin, Clock } from 'lucide-react';

const SecurityActivity = () => {
  const activities = [
    { 
      device: "Samsung Galaxy S23", 
      location: "Douala, CM", 
      time: "Actif maintenant", 
      icon: <Smartphone size={18} />,
      current: true 
    },
    { 
      device: "Chrome sur Ubuntu", 
      location: "Yaoundé, CM", 
      time: "Hier à 22:15", 
      icon: <Monitor size={18} />,
      current: false 
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-2">
        Sécurité du compte
      </h3>
      <div className="bg-white dark:bg-slate-800 rounded-[32px] border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm">
        {activities.map((act, index) => (
          <div 
            key={index} 
            className={`p-4 flex items-center justify-between ${index !== activities.length - 1 ? 'border-b border-slate-50 dark:border-slate-700' : ''}`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl ${act.current ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30' : 'bg-slate-50 text-slate-400 dark:bg-slate-900'}`}>
                {act.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{act.device}</p>
                  {act.current && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-bold uppercase">
                      Ce poste
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin size={12} /> {act.location}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock size={12} /> {act.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button className="w-full p-4 text-sm text-blue-600 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
          Se déconnecter de tous les autres appareils
        </button>
      </div>
    </div>
  );
};

export default SecurityActivity;