import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";



const data = [
    {name: 'MTN MoMo', value: 450000, color: '#facc15'},
    {name: 'Orange Money', value: 300000, color: '#f97316'},
    {name: 'Factures (ENEO/CDE)', value: 150000, color: '#3b82f6'},
    {name: 'Autres', value: 50000, color: '#94a3b8'}
];

const SpendingAnalysis = () =>{
    return(
        <>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-none h-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Répartition des dépenses</h3>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width='100%' height='100%'>
                        <PieChart>
                            <Pie
                                data={data}
                                cx='50%'
                                cy='50%'
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey='value'
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color}/>
                                ))
                                    
                                }
                            </Pie>
                            <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}/>
                            <Legend verticalAlign="bottom" height={36}/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-6 space-y-3">
                    {data.map((item) => (
                        <div 
                            key={item.name} 
                            className="flex justify-between items-center"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                <span className="text-sm text-slate-500 dark:text-slate-400">{item.name}</span>
                            </div>
                            <span className="font-bold text-slate-900 dark:text-white">
                                {item.value.toLocaleString()} XAF
                            </span>
                        </div>
                    ))
                        
                    }
                </div>
            </div>
        </>
    )
}

export default SpendingAnalysis