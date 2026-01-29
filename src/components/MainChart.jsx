// import { AreaChart } from "lucide-react"
// import { data } from "react-router-dom"
import { AreaChart , Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


const data = [
    {name: 'Lun', revenus: 40000, depenses: 24000},
    {name: 'Mar', revenus: 30000, depenses: 13980},
    {name: 'Mer', revenus: 20000, depenses: 98000},
    {name: 'Jeu', revenus: 27800, depenses: 39000},
    {name: 'Ven', revenus: 18900, depenses: 48000},
    {name: 'Sam', revenus: 23900, depenses: 38000},
    {name: 'Dim', revenus: 34900, depenses: 43000},
]

const MainChart = () => {
    return(
        // <>
        //     <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 h-[400px]">
        //         <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-6'>Flux de tresorerie (XAF)</h2>
        //         <ResponsiveContainer width='100%' height='100%'>
        //             <AreaChart data={data} margi={{ top:10, right:30, left:0, bottom:0}}/>
        //             {/* <defs>
        //                 <linearGradient id='colorRev' x1='0' y1='0' x2='0' y2='1'>
        //                     <stop offset='5%' stopColor="#2563eb" stopOpacity={0.1}/>
        //                     <stop offset='95%' stopColor="#2563eb" stopOpacity={0}/>
        //                 </linearGradient>
        //             </defs> */}
        //             <CartesianGrid strokeDasharray='3 3' vertical={false} stroke="#f1f5f9"/>
        //             <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}}/>
        //             <YAxis hide/>
        //             <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}/>
        //             <Area type="monotone" dataKey="revenus" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
        //             <Area type="monotone" dataKey="depenses" stroke="#f43f5e" strokeWidth={3} fill="none" />
        //         </ResponsiveContainer>
                
        //     </div>
        // </>

        <>
            <div className="bg-white dark:border-none dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 h-[400px] w-full">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Flux de Trésorerie (XAF)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#94a3b8', fontSize: 12}} 
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          {/* On utilise une couleur solide pour l'instant pour éviter l'erreur de gradient */}
          <Area 
            type="monotone" 
            dataKey="revenus" 
            stroke="#2563eb" 
            strokeWidth={3} 
            fill="#3b82f6" 
            fillOpacity={0.1} 
          />
          <Area 
            type="monotone" 
            dataKey="depenses" 
            stroke="#f43f5e" 
            strokeWidth={3} 
            fill="none" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
        </>
    )
};
export default MainChart;