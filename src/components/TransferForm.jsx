import { useEffect, useState } from 'react';
import { Landmark, ChevronRight, CheckCircle2, Loader2, User, Store, Smartphone, ShieldCheck, Globe, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { countryConfigs } from '../data/operators';

const TransferForm = () => {
  const [country, setCountry] = useState('CM');
  const [type, setType] = useState('send'); 
  const [method, setMethod] = useState('momo'); 
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  
  const location = useLocation();

  // Reset de la méthode quand on change de pays
  useEffect(() => {
    setMethod(countryConfigs[country].operators[0].id);
  }, [country]);

  const handleTransfert = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 2000);
  };

  const renderOperators = () => {
    const ops = countryConfigs[country].operators;
    return ops.map(op => (
      <button
        key={op}
        onClick={() => setMethod(op.toLowerCase())}
        className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${method === op.toLowerCase() ? 'border-blue-500 bg-blue-50/50' : 'border-slate-50'}`}
      >

        {/* Ici tu pourras mettre les logos Wave, MTN, etc. */}
        <div className='w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-[10px]'>{op}</div>
        <span className='text-[10px] font-bold mt-2'>{op}</span>
      </button>
    ))
  }

  const [showCountryModal, setShowCountryModal] = useState(false);
const [searchCountry, setSearchCountry] = useState("");

// 2. Filtrage des pays selon la recherche
const filteredCountries = Object.keys(countryConfigs).filter(code => 
  countryConfigs[code].name.toLowerCase().includes(searchCountry.toLowerCase()) ||
  code.toLowerCase().includes(searchCountry.toLowerCase())
);

// // 1. Trouver l'opérateur sélectionné pour avoir son taux de frais
// const selectedOp = countryConfigs[country].operators.find(op => op.id === method);

// // 2. Calculer les frais (Montant * (Taux / 100))
// const calculatedFees = amount ? (parseFloat(amount) * (selectedOp.feesPercent / 100)) : 0.5;

// // 3. Calculer le total à débiter
// const totalToPay = amount ? (parseFloat(amount) + calculatedFees) : 0.5;


const NOVA_GLOBAL_FEES = {
  INTERNAL: 0.5,           // NovaVerse à NovaVerse (Partout dans le monde)
  MOBILE_CASH_OUT: 4,  // Tout retrait via Mobile Money (Cameroun, Sénégal, CI, etc.)
  MOBILE_TRANSFER: 4,  // Tout envoi vers un numéro Mobile tiers (hors Nova)
  BANK_GLOBAL: 4,      // Toutes les banques (Virement sortant)
  DEPOSIT_FREE: 4,        // Toujours gratuit d'entrer de l'argent dans NovaVault
}

  // 1. On s'assure que selectedOp existe, sinon on prend un objet vide par défaut
const selectedOp = countryConfigs[country].operators.find(op => op.id === method) || {};

// 2. On récupère le taux de frais (on s'assure que c'est un nombre)
const getEffectiveFee = () => {
  if (selectedOp.isInternal) return NOVA_GLOBAL_FEES.INTERNAL;
  
  if (type === 'withdraw') {
    return method === 'bank' 
      ? NOVA_GLOBAL_FEES.BANK_GLOBAL 
      : NOVA_GLOBAL_FEES.MOBILE_CASH_OUT;
  } 
  
  return method === 'bank' 
    ? NOVA_GLOBAL_FEES.BANK_GLOBAL 
    : NOVA_GLOBAL_FEES.MOBILE_TRANSFER;
};

const currentFeeRate = getEffectiveFee() || 0;

// 3. CORRECTION DU NaN : On transforme amount en nombre et on gère le cas vide
const cleanAmount = amount === "" ? 0 : parseFloat(amount);

// 4. Calculs finaux sécurisés
const calculatedFees = cleanAmount * (currentFeeRate / 100);
const totalToPay = cleanAmount + calculatedFees;


  return (
    <>

      {/* Bouton de sélection actuel */}
      <button 
        onClick={() => setShowCountryModal(true)}
        className="w-full flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-2xl mb-6 shadow-sm border border-slate-100 dark:border-slate-700 active:scale-[0.98] transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{countryConfigs[country].flag}</span>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Pays de destination</p>
            <p className="font-bold text-slate-900 dark:text-white">{countryConfigs[country].name}</p>
          </div>
        </div>
        <ChevronRight className="text-slate-300" size={20} />
      </button>

      {/* MODAL DE SÉLECTION DE PAYS */}
      {showCountryModal && (
        <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowCountryModal(false)} />
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-slate-800 w-full max-w-lg h-[80vh] sm:h-auto sm:max-h-[600px] rounded-t-[2.5rem] sm:rounded-[2.5rem] overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
            
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-50 dark:border-slate-700">
              <h3 className="text-xl font-black mb-4">Choisir un pays</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Rechercher un pays..."
                  className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none font-medium"
                  value={searchCountry}
                  onChange={(e) => setSearchCountry(e.target.value)}
                />
              </div>
            </div>

            {/* Liste des pays */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((code) => (
                  <button 
                    key={code}
                    onClick={() => {
                      setCountry(code);
                      setShowCountryModal(false);
                      setSearchCountry("");
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                      country === code ? 'bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{countryConfigs[code].flag}</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">{countryConfigs[code].name}</span>
                    </div>
                    {country === code && <CheckCircle2 className="text-blue-600" size={20} />}
                  </button>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-slate-400 font-medium">Aucun pays trouvé</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
              {type === 'send' ? 'Détails' : 'Code Agent'}
            </h3>
            <span className="bg-blue-50 text-blue-600 text-[10px] px-3 py-1 rounded-full font-bold flex items-center gap-1">
              <Globe size={12} /> {countryConfigs[country].currency}
            </span>
          </div>
          {/* Les opérateurs s'affichent ici dynamiquement */}
        <div className="grid grid-cols-3 gap-3 mb-8">
            {countryConfigs[country].operators.map((op) => (
              <button 
                key={op.id}
                onClick={() => setMethod(op.id)}
                className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${
                  method === op.id ? 'border-blue-500 bg-blue-50/50' : 'border-slate-50'
                }`}
              >
                <div className={`w-10 h-10 ${op.color} rounded-full flex items-center justify-center text-white font-bold mb-2 shadow-sm uppercase`}>
                  {op.icon ? op.icon : op.name.charAt(0)}
                </div>
                <span className="text-[10px] font-bold">{op.name}</span>
              </button>
            ))}
        </div>

          {/* Formulaire dynamique */}
          <div className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase ml-1 mb-2">
                {type === 'send' ? 'Destinataire' : 'Code Kiosque'}
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder={type === 'send' ? "Numéro ou ID Nova" : "Ex: 15487"}
                  className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-blue-500 outline-none transition-all font-bold"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400">
                  {type === 'send' ? <User size={20} /> : <Store size={20} />}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase ml-1 mb-2">Montant</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-4 px-5 text-3xl font-black text-blue-600 outline-none"
              />
            </div>

            {/* {amount > 0.5 && (
              <div>
                <div className='flex justify-between items-center text-xs font-medium'>
                  <span className='text-slate-500'>Montant net : </span>
                  <span className='text-slate-900 dark:text-white'>{parseFloat(amount).toLocaleString()} {countryConfigs[country].currency}</span>
                </div>
                <div className='flex justify-between items-center text-xs font-medium'>
                  <span className='text-slate-500'>Frais NovaVerse ({selectedOp.feesPercent}%)</span>
                  <span className={`${selectedOp.feesPercent === 0.5 ? 'text-emerald-500' : 'text-slate-900 dark:text-white'}`}>
                    {selectedOp.feesPercent === 0.5 ? 'GRATUIT' : `${calculatedFees.toLocaleString()} ${countryConfigs[country].currency}`}
                  </span>
                </div>
                <div className='pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center font-black'>
                  <span className='text-slate-900 dark:text-white text-sm'>Total à débiter</span>
                  <span className='text-blue-600 text-lg'>{totalToPay.toLocaleString()} {countryConfigs[country].currency}</span>
                </div>
              </div>
            )}
             */}
             {cleanAmount > 0 && (
                <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Montant net</span>
                    <span className="font-bold">{cleanAmount.toLocaleString()} {countryConfigs[country].currency}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Frais ({currentFeeRate}%)</span>
                    <span className="font-bold text-red-500">+{calculatedFees.toLocaleString()} {countryConfigs[country].currency}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center font-black">
                    <span className="text-sm">Total à débiter</span>
                    <span className="text-blue-600 text-lg">{totalToPay.toLocaleString()} {countryConfigs[country].currency}</span>
                  </div>
                </div>
              )}

            <button 
              onClick={handleTransfert}
              disabled={loading || !amount || !recipient}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-100 dark:shadow-blue-950'
            >
              {loading ? <Loader2 className='animate-spin'/> : (type === 'send' ? 'Confirmer l\'envoi' : 'Lancer le retrait')}
              {!loading && <ChevronRight size={20} />}
            </button>
        </div>
      </div>

        {/* Modal de Succès */}
      {showSuccess && (
        <div className='fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex items-center p-4 justify-center'>
          <div className='bg-white dark:bg-slate-800 rounded-[40px] p-8 max-w-sm w-full text-center'>
            <div className='w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6'>
              <CheckCircle2 size={48}/>
            </div>
            <h3 className='text-2xl font-black mb-2'>Réussi !</h3>
            <p className='text-slate-500 text-sm mb-8'>
              Transfert de <span className="font-bold text-slate-900">{amount} {countryConfigs[country].currency}</span> effectué vers {countryConfigs[country].name}.
            </p>
            <button
              onClick={()=> { setShowSuccess(false); setAmount(""); setRecipient(""); }}
              className='w-full py-4 bg-slate-900 text-white font-bold rounded-2xl'
            >Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TransferForm;