import { TrendingDown, TrendingUp } from "lucide-react";



const StatsCard = ({ title, amount, trend, icon, color}) =>{
    const isPositive = trend > 0;

    return(
        <>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-sm active:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-opacity-100`}>
                        {icon}
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {isPositive ? <TrendingUp size={16}/> : <TrendingDown siz={16}/>}
                        {Math.abs(trend)}%
                    </div>
                </div>

                <div>
                    <p className="text-slate-500 text-sm font-medium">{title}</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{amount}</h3>
                </div>
            </div>
        </>
    )
}

export default StatsCard;