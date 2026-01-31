import { useState } from 'react';
import { Send, Smartphone, Landmark, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TransferForm = () => {
  const [method, setMethod] = useState('momo'); // momo, om, bank
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTransfert = () => {
    setLoading(true);
    // Simulation d'un delai de reseau de 3sec
    setTimeout(()=>{
      setLoading(false);
      setShowSuccess(true);
    }, 3000);
  }

  const location = useLocation();
  const [recipient, setRecipient] = useState("");

  useEffect(() => {
    // Si on vient d'un clic sur QuickSend, on remplit le champ
    if (location.state && location.state.recipientName) {
      setRecipient(location.state.recipientName);
    }
  }, [location.state]);

  
  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Envoyer de l'argent</h3>
        
        {/* Sélecteur de méthode */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <button 
            onClick={() => setMethod('momo')}
            className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${method === 'momo' ? 'border-yellow-400 bg-yellow-50/50' : 'border-slate-100'}`}
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold mb-2">M</div>
            <span className="text-[10px] font-bold">MTN</span>
          </button>
          <button 
            onClick={() => setMethod('om')}
            className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${method === 'om' ? 'border-orange-500 bg-orange-50/50' : 'border-slate-100'}`}
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-2">O</div>
            <span className="text-[10px] font-bold">Orange</span>
          </button>
          <button 
            onClick={() => setMethod('bank')}
            className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${method === 'bank' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100'}`}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mb-2"><Landmark size={20}/></div>
            <span className="text-[10px] font-bold">Banque</span>
          </button>
        </div>

        {/* Formulaire dynamique */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase ml-1 mb-2">Numéro ou RIB</label>
            <div className="relative">
              <input 
                type="text" 
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder={method === 'bank' ? "Ex: CM21 10001..." : "Ex: 6xx xxx xxx"}
                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600">
                <User size={18} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase ml-1 mb-2">Montant (XAF)</label>
            <input 
              type="number" 
              placeholder="0.00"
              className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-5 text-2xl font-bold text-blue-600 outline-none"
            />
          </div>

          <button 
          onClick={handleTransfert}
          disabled={loading}
          className='w-full bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2'
        >
          {loading ? <Loader2 className='animate-spin'/> : 'Confirmer le transfet'}
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>

          {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none transition-all flex items-center justify-center gap-2 group">
            <span>Confirmer le transfert</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button> */}
        </form>
      </div>

      <div className='relative'>
        {/* <button 
          onClick={handleTransfert}
          disabled={loading}
          className='w-full bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2'
        >
          {loading ? <Loader2 className='animate-spin'/> : 'Confirmer le transfet'}
        </button> */}
        {showSuccess && (
          <div className='fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center p-4 justify-center'>
            <div className='bg-white dark:bg-slate-800 rounded-[32px] p-8 max-w-sm w-full text-center shadow-2xl scale-in-center'>
              <div className='w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                <CheckCircle2 size={48}/>
              </div>
              <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>Transfert réussi !</h3>
              <p className='text-slate-500 dark:text-slate-400 mb-8'>Votre transfert de 50 000 XAF a été envoyé avec succès.</p>
              <button
                onClick={()=> setShowSuccess(false)}
                className='w-full py-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl'
              >Fermer</button>
            </div>
          </div>
        )

          
        }
      </div>
    </>
    
    
  );
};

// Petit composant User rapide pour l'icône de contact
const User = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;

export default TransferForm;