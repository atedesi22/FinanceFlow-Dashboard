import { Bell, ChevronRight, CreditCard, LogOut, ShieldCheck, User } from "lucide-react"
import { useState } from "react";
import SecurityActivity from "../components/SecurityActivity";




const Profile  = () => {
    const menuItems = [
        {icon: <User size={20}/>, label: 'Informations personnelles', sub: 'Nom, email, numéro'},
        {icon: <ShieldCheck onClick={() => setIsChangingPin(true)} size={20}/>, label: 'Sécurité', sub: 'Code PIN, Biométrie'},
        {icon: <CreditCard size={20}/>, label: 'Mes comptes liés', sub: 'MTN, Orange, UBA'},
        {icon: <Bell size={20}/>, label: 'Notifications', sub: 'Alertes de transfert'}
    ];

    const [isChangingPin, setIsChangingPin] = useState(false);
    const [pinStatus, setPinStatus] = useState('');

    const handlePinUpdate = (e) => {
        e.preventDefault();
        setPinStatus('Mise à jour...');
        setTimeout(() => {
            setPinStatus('Code PIN modifié avec succès ! ✅');
            setTimeout(() => {
                setIsChangingPin(false);
                setPinStatus('');
            }, 2000);
        }, 1500);
    };

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
            {!isChangingPin ? (
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
            ) : (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700">
                    <button onClick={() => setIsChangingPin(false)} className="text-sm text-blue-600 mb-4 flex items-center gap-2">
                        ← Retour
                    </button>
                    <h3 className="text-xl font-bold mb-6">Changer mon Code PIN</h3>
                    
                    <form onSubmit={handlePinUpdate} className="space-y-4">
                        <div>
                        <label className="block text-xs font-medium text-slate-500 mb-2 uppercase">Ancien PIN</label>
                        <input type="password" maxLength="4" className="w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 text-center text-2xl tracking-widest" placeholder="****" />
                        </div>
                        <div>
                        <label className="block text-xs font-medium text-slate-500 mb-2 uppercase">Nouveau PIN</label>
                        <input type="password" maxLength="4" className="w-full p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 text-center text-2xl tracking-widest" placeholder="****" />
                        </div>
                        
                        <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none transition-transform active:scale-95">
                        Confirmer le changement
                        </button>
                        {pinStatus && <p className="text-center text-sm font-medium text-emerald-500 mt-4">{pinStatus}</p>}
                    </form>
                </div>
            )}
                
                <SecurityActivity/>
                
                <button className="w-full mt-10 flex items-center justify-center gap-2 p-4 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl transition-all">
                    <LogOut size={20}/>Déconnexion
                </button>
            </div>
        </>
    )
}

export default Profile;