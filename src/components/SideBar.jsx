import { LayoutDashboard, Wallet, ArrowUpRight, ArrowDownLeft, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true, path:'/' },
    { icon: <Wallet size={20} />, label: 'Mes Comptes', active: false, path:'/' },
    { icon: <ArrowUpRight size={20} />, label: 'Revenus', active: false, path:'/' },
    { icon: <ArrowDownLeft size={20} />, label: 'Dépenses', active: false, path:'/' },
    { icon: <Settings size={20} />, label: 'Paramètres', active: false, path:'/' },
  ];

  return (
    <div className="h-screen w-64 top-0  bg-slate-900 text-white flex flex-col p-4 z-50">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">F</div>
        <h1 className="text-xl font-bold">FinanceFlow</h1>
      </div>

      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all mb-2 ${item.active ? 'bg-blue-600' : 'hover:bg-slate-800'}`}
          >
            <Link to={item.path} className='flex gap-2'>
              {item.icon}
            <span className="font-medium">{item.label}</span>
            </Link>
            
          </div>
        ))}
      </nav>

      <div className="border-t border-slate-800 pt-4">
        <div className="flex items-center gap-3 p-3 hover:bg-red-500/10 text-red-400 rounded-xl cursor-pointer transition-all">
          <LogOut size={20} />
          <span className="font-medium">Déconnexion</span>
        </div>
      </div>
    </div>
  );
};



export default Sidebar;


