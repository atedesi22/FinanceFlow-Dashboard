import { CreditCard, Droplets, Send, Tv, Wallet, Zap } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import '../index.css'
import MainChart from '../components/MainChart';


const Dashboard = () =>{
    return(
        <>
            <div className="max-w-6xl mx-auto">
                <header className='mb-8'>
                    <h1 className='text-2xl font-bold text-slate-900 dark:text-white'>Bienvenue, Paul Emmanuel 👋</h1>
                    <p className='text-slate-500'>Voici le résumé de vos activités financières aujourd'hui.</p>
                </header>

                {/* Cartes de Statistiques */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* <div className='h-32 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 p-6'> */}
                        <StatsCard
                            title='Solde Total'
                            amount='2 45 000 XAF'
                            trend={12.5}
                            color='bg-blue-600 text-white'
                            icon={<Wallet size={24}/>}
                        />
                    {/* </div> */}
                    <StatsCard 
                        title="Revenus" 
                        amount="850 000 XAF" 
                        trend={8.2} 
                        color="bg-emerald-500 text-white"
                        icon={<Send size={24} />} 
                    />
                    <StatsCard 
                        title="Dépenses" 
                        amount="320 000 XAF" 
                        trend={-4.1} 
                        color="bg-rose-500 text-white"
                        icon={<CreditCard size={24} />} 
                    /> 
                </div>

                {/* Graphiques d'analyses  */}
                <div className='mt-10'>
                    <MainChart/>
                </div>

                {/* Actions Rapides  */}
                <div className='mt-10'>
                    <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>Actions Rapides</h2>
                    <div className='flex gap-4 overflow-x-auto pb-4'>
                        {[
                            {label : 'Transfert', icon : <Send/>, color: 'bg-orange-500'},
                             {label : 'Electricite', icon : <Zap/>, color: 'bg-yellow-500'},
                              {label : 'Television', icon : <Tv/>, color: 'bg-purple-500'},
                               {label : 'Eau', icon : <Droplets/>, color: 'bg-blue-500'},
                                {label : 'Abonnement', icon : <CreditCard/>, color: 'bg-pink-500'},
                        ].map((action, i) => (
                            <button
                                key={i}
                                className='flex flex-col items-center gap-2 min-w-[100px]'
                            >
                                <div className={`${action.color} text-white p-4 rounded-2xl shadow-lg hover:scale-105 active:scale-105 transition-transform`}>{action.icon}</div>
                                <span className='text-sm font-medium text-slate-600'>{action.label}</span>
                            </button>
                        ))}
                        
                    </div>
                </div>

                {/* Tableau des transactions recentes  */}
                <div className='mt-10 bg-white dark:border-none dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 p-6'>
                    <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-6'>Transactions Recentes</h2>
                    <div className='space-y-4'>
                        {[
                            {name : 'Abonnement Netflix', date: '28 Jan 2026', amount: '-7 500 XAF', type: 'service'},
                            {name : 'Depot MTN MoMo', date: '27 Jan 2026', amount: '+ 50 000 XAF', type: 'income'},
                            {name : 'Facture ENEO', date: '26 Jan 2026', amount: '-22 300 XAF', type: 'bill'}
                        ].map((t, i) => (
                            <div 
                                key={i}
                                className='flex justify-between items-center p-3 hover:bg-slate-50 active:bg-slate-50 rounded-xl transition-colors'
                            >
                                <div>
                                    <p className='font-semibold text-slate-800'>{t.name}</p>
                                    <p className='text-xs text-slate-400'>{t.date}</p>
                                </div>
                                <span className={`font-bold ${t.amount.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {t.amount}
                                </span>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;