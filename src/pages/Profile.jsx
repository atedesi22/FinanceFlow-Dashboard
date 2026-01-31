import { Bell, ChevronRight, CreditCard, LogOut, ShieldCheck, User } from "lucide-react"




const Profile  = () => {
    const menuItems = [
        {icon: <User size={20}/>, label: 'Informations personnelles', sub: 'Nom, email, numéro'},
        {icon: <ShieldCheck size={20}/>, label: 'Sécurité', sub: 'Code PIN, Biométrie'},
        {icon: <CreditCard size={20}/>, label: 'Mes comptes liés', sub: 'MTN, Orange, UBA'},
        {icon: <Bell size={20}/>, label: 'Notifications', sub: 'Alertes de transfert'}
    ];

    return(
        <>
            <div className="p-4 lg:p-8 max-w-2xl mx-auto">
                {/* Header du profil  */}
                <div className="text-center mb-10">
                    <div className=" w-24 h-24 bg-blue-600 rounded-3xl mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-blue-200 dark:shadow-none">
                        PE
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Atedesi Bohole Paul Emmanuel</h2>
                    <p className="text-slate-500 text-sm italic">Utilisateur Vérifié ✅</p>
                </div>
                
            

            {/* Menu Options */}
                <div className="space-y-4">
                    {menuItems.map((item, index) => (
                        <button 
                            key={index}
                            className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all group"
                            >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-600 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors">
                                    {item.icon}
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-slate-900 dark:text-white">{item.label}</p>
                                    <p className="text-xs text-slate-500">{item.sub}</p>
                                </div>
                            </div>
                            <ChevronRight size={18} className="text-slate-400"/>
                        </button>
                    ))}
                </div>
                
                <button className="w-full mt-10 flex items-center justify-center gap-2 p-4 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl transition-all">
                    <LogOut size={20}/>Déconnexion
                </button>
            </div>
        </>
    )
}

export default Profile;