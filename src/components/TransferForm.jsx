import { useEffect, useState } from 'react';
import { Landmark, ChevronRight, CheckCircle2, Loader2, User, Store, Smartphone, ShieldCheck } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TransferForm = () => {
  const [type, setType] = useState('send'); // 'send' ou 'withdraw' (Retrait)
  const [method, setMethod] = useState('momo'); 
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.recipientName) {
      setRecipient(location.state.recipientName);
    }
  }, [location.state]);

  const handleTransfert = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <>
      {/* Switcher Envoi / Retrait */}
      <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl mb-6">
        <button 
          onClick={() => setType('send')}
          className={`flex-1 py-3 rounded-xl font-bold text-xs transition-all ${type === 'send' ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm' : 'text-slate-500'}`}
        >
          Envoi d'argent
        </button>
        <button 
          onClick={() => setType('withdraw')}
          className={`flex-1 py-3 rounded-xl font-bold text-xs transition-all ${type === 'withdraw' ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm' : 'text-slate-500'}`}
        >
          Retrait Kiosque
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {type === 'send' ? 'Détails de l\'envoi' : 'Code Marchand'}
          </h3>
          {type === 'withdraw' && (
            <span className="bg-blue-50 text-blue-600 text-[10px] px-3 py-1 rounded-full font-bold flex items-center gap-1">
               <ShieldCheck size={12} /> Sécurisé
            </span>
          )}
        </div>
        
        {/* Sélecteur de méthode (MoMo / OM / Bank) */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <button 
            onClick={() => setMethod('momo')}
            className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${method === 'momo' ? 'border-yellow-400 bg-yellow-50/50' : 'border-slate-50'}`}
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold mb-2 shadow-sm">M</div>
            <span className="text-[10px] font-bold">MTN</span>
          </button>
          <button 
            onClick={() => setMethod('om')}
            className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${method === 'om' ? 'border-orange-500 bg-orange-50/50' : 'border-slate-50'}`}
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-2 shadow-sm">O</div>
            <span className="text-[10px] font-bold">Orange</span>
          </button>
          <button 
            onClick={() => setMethod('bank')}
            className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${method === 'bank' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-50'}`}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mb-2 shadow-sm"><Landmark size={20}/></div>
            <span className="text-[10px] font-bold">Banque</span>
          </button>
        </div>

        {/* Formulaire dynamique */}
        <div className="space-y-5">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase ml-1 mb-2">
              {type === 'send' ? (method === 'bank' ? 'RIB Bancaire' : 'Numéro du destinataire') : 'Code Agent / Marchand'}
            </label>
            <div className="relative">
              <input 
                type="text" 
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder={type === 'send' ? (method === 'bank' ? "CM21 10001..." : "6xx xxx xxx") : "Entrez le code du kiosque"}
                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400">
                {type === 'send' ? <User size={20} /> : <Store size={20} />}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase ml-1 mb-2">Montant (XAF)</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-5 text-3xl font-black text-blue-600 outline-none"
            />
          </div>

          <button 
            onClick={handleTransfert}
            disabled={loading || !amount || !recipient}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-100 disabled:opacity-50 disabled:shadow-none'
          >
            {loading ? <Loader2 className='animate-spin'/> : (type === 'send' ? 'Confirmer l\'envoi' : 'Lancer le retrait')}
            {!loading && <ChevronRight size={20} />}
          </button>
        </div>
      </div>

      {/* Modal de Succès */}
      {showSuccess && (
        <div className='fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex items-center p-4 justify-center'>
          <div className='bg-white dark:bg-slate-800 rounded-[40px] p-8 max-w-sm w-full text-center shadow-2xl'>
            <div className='w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6'>
              <CheckCircle2 size={56}/>
            </div>
            <h3 className='text-2xl font-black text-slate-900 dark:text-white mb-2'>
               {type === 'send' ? 'Envoi réussi !' : 'Retrait prêt !'}
            </h3>
            <p className='text-slate-500 dark:text-slate-400 mb-8'>
              Votre transaction de <span className="font-bold text-slate-900 dark:text-white">{amount} XAF</span> a été traitée par NovaVerse.
            </p>
            <button
              onClick={()=> { setShowSuccess(false); setAmount(""); setRecipient(""); }}
              className='w-full py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-2xl'
            >Terminer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TransferForm;