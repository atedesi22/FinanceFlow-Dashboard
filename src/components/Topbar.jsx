import { Bell, Menu, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const Topbar = ({onMenuClick}) =>{

    const [theme, setTheme] = useDarkMode();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return(
        <>
        <div className="h-16 bg-white dark:bg-slate-800 border-b border-slate-100 px-6 flex justify-between items-center sticky top-0 z-40">
            <div className="flex items-center gap-2 lg:hidden">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                <span className="font-bold text-slate-900 dark:text-white">FinanceFlow</span>
            </div>
            
            <div className="hidden sm:block text-slate-400">Dashboard / Accueil</div>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme}
                        className="p-2 rounded-4xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-all"
                        >
                        {theme === 'dark' ? <Moon size={20}/> : <Sun size={20}/>}
                    </button>
                    <Bell size={20} className="text-slate-400" />
                <div className="w-8 h-8 bg-slate-200 rounded-full border border-white shadow-sm"></div>
            </div>
        </div>
        </>
    )
}

export default Topbar;