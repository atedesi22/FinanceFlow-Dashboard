import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import { useState } from "react";
import Topbar from "../components/Topbar";
import BottomNav from "../components/BottomNav";



const DashboardLayout = () =>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return(
        <>
            <div className="min-h-screen bg-slate-50 flex flex-row">
                {/* Sidebar visible SEULEMENT sur grand écran */}
                <div className="hidden lg:block w-64 h-screen sticky top-0 bg-slate-900">
                    <Sidebar />
                </div>

                <div className="flex-1 flex flex-col min-w-0">
                    <Topbar />
                    
                    {/* Contenu principal avec marge en bas sur mobile pour ne pas être caché par la BottomNav */}
                    <main className="p-4 lg:p-8 mb-20 lg:mb-0 overflow-y-auto">
                    <Outlet />
                    </main>
                </div>

                {/* BottomNav visible SEULEMENT sur mobile */}
                <BottomNav />
            </div>
        </>
    )
}

export default DashboardLayout;