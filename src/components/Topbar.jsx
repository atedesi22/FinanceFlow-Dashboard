import { Bell, Menu } from "lucide-react";


const Topbar = ({onMenuClick}) =>{
    return(
        <>
        <div className="h-16 bg-white border-b border-slate-100 px-6 flex justify-between items-center sticky top-0 z-40">
            <div className="flex items-center gap-2 lg:hidden">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                <span className="font-bold text-slate-900">FinanceFlow</span>
            </div>
            
            <div className="hidden sm:block text-slate-400">Dashboard / Accueil</div>

            <div className="flex items-center gap-4">
                <Bell size={20} className="text-slate-400" />
                <div className="w-8 h-8 bg-slate-200 rounded-full border border-white shadow-sm"></div>
            </div>
        </div>
        </>
    )
}

export default Topbar;