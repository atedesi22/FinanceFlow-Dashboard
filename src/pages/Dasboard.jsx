import { Wallet } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import '../index.css'


const Dashboard = () =>{
    return(
        <>
            <div>
                <header className='mb-8'>
                    <h1 className='text-2xl font-bold text-slate-900'>Bienvenue, Paul Emmanuel 👋</h1>
                    <p className='text-slate-500'>Voici le résumé de vos activités financières aujourd'hui.</p>
                </header>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* <div className='h-32 bg-white rounded-2xl shadow-sm border border-slate-100 p-6'> */}
                        <StatsCard
                            title='Solde Total'
                            amount='2 45 000 XAF'
                            trend={12.5}
                            color='bg-blue-600 text-white'
                            icon={<Wallet size={24}/>}
                        />
                    {/* </div> */}
                    <div className='h-32 bg-white rounded-2xl shadow-sm border border-slate-100 p-6'>Card 2</div>
                    <div className='h-32 bg-white rounded-2xl shadow-sm border border-slate-100 p-6'>Card 3</div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;