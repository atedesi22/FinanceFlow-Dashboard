import { CreditCard, Droplets, Send, Tv, Wallet, Zap } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import '../index.css'
import MainChart from '../components/MainChart';
import TransactionList from '../components/TransactionList';
import SpendingAnalysis from '../components/SpendingAnalysis';
import { useState } from 'react';
import QuickSend from '../components/QuickSend';
import { useNavigate } from 'react-router-dom';
import PWAInstaller from '../components/PWAInstaller';
import NovaHub from './NovaHub'; // Importe ton nouveau fichier


const Dashboard = () =>{
    const [period, setPeriod] = useState('Semaine');

    const periods = ['Aujourd\'hui', 'Semaine', 'Mois'];

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('home');

    return(
        <>
        
            <div className="max-w-6xl mx-auto">
                
                
                <header className='mb-8'>
                    <h1 className='text-2xl font-bold text-slate-900 dark:text-white'>Bienvenue, Paul Emmanuel 👋</h1>
                    <p className='text-slate-500'>Voici le résumé de vos activités financières aujourd'hui.</p>
                </header>
                

                {/* Sélecteur de période stylé */}
                <div className='flex bg-slate-100 dark:bg-slate-800 p-2 rounded-2xl w-fit mb-4'>
                    {periods.map((p) => (
                        <button
                            key={p}
                            onClick={() => setPeriod(p)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${period === p ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 dark:active:text-slate-300'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>

                {/* Cartes de Statistiques */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                    <div onClick={() => navigate('/wallet')} 
                        className="cursor-pointer active:scale-95 transition-transform">
                        <StatsCard
                            title='Solde Total'
                            amount='2 450 000 XAF'
                            trend={12.5}
                            color='bg-blue-600 text-white'
                            icon={<Wallet size={24}/>}
                            
                        />
                    </div>
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

                <div className='space-y-5 mt-10'>
                        <div className='bg-gradient-to-br dark:from-red-500  from-blue-600 to-indigo-700 p-6 rounded-3xl text-white shadow-xl'>
                            <p className='text-blue-100 text-sm opacity-80'>Solde Total disponible</p>
                            <h2 className='text-3xl font-bold mt-1'>2 450 000 XAF</h2>
                            <div className='mt-8 flex justify-between items-end'>
                                <div className='text-sm lg:text-2xl'> **** **** **** 4482</div>
                                <div className='font-bold'>VISA</div>
                            </div>
                        </div>
                </div>

                {/* Actions Rapides  */}
                <div className='mt-10'>
                    <h2 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>Actions Rapides</h2>
                    <div className='flex gap-4 overflow-x-auto pb-4'>
                        {[
                            {label : 'Transfert', path:'transfert', icon : <Send/>, color: 'bg-orange-500'},
                             {label : 'Electricite', path:'/hub', icon : <Zap/>, color: 'bg-yellow-500'},
                              {label : 'Television', path:'/hub', icon : <Tv/>, color: 'bg-purple-500'},
                               {label : 'Eau', path:'/hub', icon : <Droplets/>, color: 'bg-blue-500'},
                                {label : 'Abonnement',path:'/hub', icon : <CreditCard/>, color: 'bg-pink-500'},
                        ].map((action, i) => (
                            <button
                                key={i}
                                onClick={() => navigate(action.path)} // Utilise navigate ici !
                                className='flex flex-col items-center gap-2 min-w-[100px]'
                            >
                                <a href={action.path}>
                                    <div className={`${action.color} text-white p-4 rounded-2xl shadow-lg hover:scale-105 active:scale-105 transition-transform`}>{action.icon}</div>
                                    <span className='text-sm font-medium text-slate-600'>{action.label}</span>
                                </a>
                                
                            </button>
                        ))}
                        
                    </div>
                </div>

                {/* Graphiques d'analyses  */}
                <div className='mt-10'>
                    <MainChart/>
                </div>

                {/* Contact Favoris  */}
                <QuickSend/>

                {/* Transactions  */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
                    <div className='lg:col-span-2'>
                        <TransactionList/> 
                    </div>
                    <SpendingAnalysis/>
                    
                </div>

                <PWAInstaller/>
            </div>
        </>
    )
}

export default Dashboard;