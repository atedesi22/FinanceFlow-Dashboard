// src/components/BottomNav.jsx
import { Home, Send, PieChart, User } from "lucide-react";

const BottomNav = () => {
    return (
        <div className="lg:hidden bg-white fixed bottom-0 left-0 right-0  dark:border-none dark:bg-slate-950 border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50">
            <button className="flex flex-col items-center text-blue-600">
                <Home size={24} />
                <span className="text-[10px] font-medium">Accueil</span>
            </button>
            <button className="flex flex-col items-center text-slate-400">
                <Send size={24} />
                <span className="text-[10px] font-medium">Transfert</span>
            </button>
            <button className="flex flex-col items-center text-slate-400">
                <PieChart size={24} />
                <span className="text-[10px] font-medium">Stats</span>
            </button>
            <button className="flex flex-col items-center text-slate-400">
                <User size={24} />
                <span className="text-[10px] font-medium">Profil</span>
            </button>
        </div>
    );
};
export default BottomNav;