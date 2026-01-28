import { ArrowDownLeft, ArrowRight, ArrowUpRight, LayoutDashboard, LogOut, Settings, Wallet } from "lucide-react";
import '../index.css'

const Sidebar = () =>{
    const menuItems = [
        {icon: <LayoutDashboard size={20}/>, label: 'Dashoard', actrive:true},
        {icon: <Wallet size={20}/>, label: 'Dashoard', actrive:false},
        {icon: <ArrowUpRight size={20}/>, label: 'Dashoard', actrive:false},
        {icon: <ArrowDownLeft size={20}/>, label: 'Dashoard', actrive:false},
        {icon: <Settings size={20}/>, label: 'Dashoard', actrive:false},
    ];
    return(
        <>
            <div className="flex items-center mb-10 px-2">
                <div className="w-8 h-8 bg-blue-600 rounded-4xl flex items-center justify-center font-bold">F</div>
                <h1 className="text-xl font-bold">FinanceFlow</h1>
            </div>

            <nav className="flex-1">

                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="{`flex items-center gap-3 p-3 rounded-4xl cursor-pointer transition-all mb-2 ${item.active ? 'bg-blue-600' : 'hover:bg-slate-800'}`}"
                    >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                    </div>
                ))}
            </nav>

            <div>
                <div className="flex items-center gap-3 p-3 hover:bg-red-500/10 text-red-400 rounded-xl cursor-pointer transition-all">
                    <LogOut size={20}/>
                    <span className="font-medimu,">Deconnexion</span>
                </div>
            </div>
        </>
    )
}

export default Sidebar;