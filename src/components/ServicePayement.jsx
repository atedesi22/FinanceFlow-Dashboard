import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react"



const ServicePayement = ({service, onBack}) => {
    const [step, setStep] = useState(1); // Les differentes etaptes de validations du paiement du service 1: info 2: confirmation 3: succes
    const [billId, setBillId] =useState('');

    const handleNext = () => setStep(step + 1);

    return(
        <div className="fixed inset-0 bg-white dark:bg-slate-900 z-50 p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button onClick={onBack} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                <ArrowLeft size={20} className="dark:text-white" />
                </button>
                <h2 className="font-black text-xl dark:text-white">{service.name}</h2>
            </div>

            {step === 1 &&(
                <div className="animate-in slide-in-from-right duration-300">
                    <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl`}>
                        {service.icon}
                    </div>
                    <p className="text-slate-500 mb-6">Entrez votre numéro de compte ou de compteur **{service.provider}** pour récupérer la facture.</p>
                    
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2 ml-2">Numéro Client / Référence</label>
                    <input 
                        type="text"
                        placeholder="Ex: 201045587..."
                        value={billId}
                        onChange={(e) => setBillId(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-5 px-6 text-lg font-bold mb-8 dark:text-white focus:ring-2 focus:ring-blue-500"
                    />

                    <button 
                        onClick={handleNext}
                        className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black shadow-lg shadow-blue-200 dark:shadow-none active:scale-95 transition-all"
                    >
                        VÉRIFIER LA FACTURE
                    </button>
                    </div>
                )
            }

            {step === 2 &&(
                <div className="animate-in slide-in-from-right duration-300">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] p-8 mb-8 border border-dashed border-slate-300 dark:border-slate-600">
                        <p className="text-center text-slate-400 text-xs uppercase font-bold mb-4">Détails de la facture</p>
                        <div className="flex justify-between mb-4">
                            <span className="text-slate-500">Abonné</span>
                            <span className="font-bold dark:text-white text-right">PAUL EMMANUEL ATEDESI</span>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <span className="text-slate-500">Période</span>
                            <span className="font-bold dark:text-white">Janvier 2026</span>
                        </div>
                        <div className="h-[1px] bg-slate-200 dark:bg-slate-700 my-4"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-900 dark:text-white font-black text-xl">Total</span>
                            <span className="text-blue-600 font-black text-2xl">24 500 XAF</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-8 px-4">
                        <ShieldCheck size={20} className="text-emerald-500"/>
                        <p className="text-[10px] text-slate-500 leading-tight">Paiement sécurisé par le protocole NovaVerse. Les fonds seront déduits de votre NovaVault.</p>
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-5 rounded-[2rem] font-black active:scale-95 transition-all"
                    >
                        CONFIRMER LE PAIEMENT
                    </button>
                </div>
            ) }

            {step === 3 && (
                <div className="flex-1 flex flex-col items-center justify-center animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={48} className="text-emerald-500"/>
                    </div>
                    <h2 className="text-2xl font-black mb-2 dark:text-white text-center">Paiement reussi</h2>
                    <p>Votre facture {service.provider} a ete reglee avec succes. Un recu a ete genere</p>

                    <button
                        onClick={onBack}
                        className="w-full border-2 border-slate-200 dark:border-slate-700 py-4 rounded-2xl font-bold dark:text-white"
                    >RETOURNER AU HUB</button>
                </div>
            )}
        </div>
    )
}

export default ServicePayement;