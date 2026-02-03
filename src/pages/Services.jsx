

const services = [
    { id: 1, name: 'Électricité', icon: <Lightbulb />, color: 'bg-orange-500', provider: 'ENEO' },
    { id: 2, name: 'Eau', icon: <Droplets />, color: 'bg-blue-500', provider: 'Camwater' },
    { id: 3, name: 'Télévision', icon: <Tv />, color: 'bg-purple-600', provider: 'Canal+' },
    { id: 4, name: 'Internet', icon: <Wifi />, color: 'bg-cyan-500', provider: 'Camtel' },
    { id: 5, name: 'Éducation', icon: <GraduationCap />, color: 'bg-green-600', provider: 'Scolarité' },
    { id: 6, name: 'Transport', icon: <Car />, color: 'bg-slate-700', provider: 'Tickets' },
];

const Services = () => {
    return (
        <div className="p-4 bg-gray-50 dark:bg-slate-900 min-h-screen pb-24">
            <h1 className="text-2xl font-black text-slate-900 dark:text-white mt-4 mb-2">NovaHub</h1>
            <p className="text-slate-500 text-sm mb-6">Tout ce dont vous avez besoin, au même endroit.</p>

            {/* Grille des Services  */}
            <div className="grid grid-cols-2 gap-4">
                {services.map((service) =>{
                    <div 
                        key={service.id}
                        className="bg-white dark:bg-slate-800 p-5 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 active:scale-95 transition-all"
                    >
                        <div className={`${service.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                            {service.icon}
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white">{service.name}</h3>
                        <p className=" text-[10px] text-slate-400 uppercase tracking-widest">{service.provider}</p>
                    </div>
                })}
            </div>

            {/* Banniere Promotionnelle  */}
            <div className="mt-8 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-1">Bientot : NovaMarket</h3>
                    <p className="text-blue-100 text-xs">Vendez vos produits et gerez votre boutique de facons independante du systeme en le modifiant a votre guise</p>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            </div>
        </div>
    )
}