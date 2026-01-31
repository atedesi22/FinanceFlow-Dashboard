// src/components/BottomNav.jsx
import { Home, Send, PieChart, User } from "lucide-react";
import { useLocation } from "react-router-dom";

const BottomNav = () => {
    const location = useLocation();
    return (
        <div className="lg:hidden bg-white fixed bottom-0 left-0 right-0  dark:border-none dark:bg-slate-950 border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50">
            <a href="/" className="flex flex-col items-center text-blue-600">
                <Home size={24} />
                <span className="text-[10px] font-medium">Accueil</span>
            </a>
            <a href="transfert" className="flex flex-col items-center text-slate-400">
                <Send size={24} />
                <span className="text-[10px] font-medium">Transfert</span>
            </a>
            <a className="flex flex-col items-center text-slate-400">
                <PieChart size={24} />
                <span className="text-[10px] font-medium">Stats</span>
            </a>
            <a href='/profile' className="flex flex-col items-center text-slate-400">
                <User size={24} />
                <span className="text-[10px] font-medium">Profil</span>
            </a>
        </div>
    );
};

export default BottomNav;