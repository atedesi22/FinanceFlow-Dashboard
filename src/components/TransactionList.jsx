import { ArrowUpRight, ArrowDownLeft, Smartphone, Zap } from 'lucide-react';

const transactions = [
  { id: 1, name: "Dépôt MTN MoMo", date: "Aujourd'hui, 14:30", amount: "+ 50 000", type: "income", category: "mobile", status: "Terminé" },
  { id: 2, name: "Facture Eneo", date: "Hier, 09:15", amount: "- 12 500", type: "expense", category: "bill", status: "Terminé" },
  { id: 3, name: "Transfert à Paul", date: "28 Janv, 18:45", amount: "- 5 000", type: "expense", category: "transfer", status: "En attente" },
  { id: 4, name: "Retrait Orange Money", date: "27 Janv, 11:20", amount: "- 20 000", type: "expense", category: "mobile", status: "Terminé" },
];

const TransactionList = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Transactions récentes</h3>
        <button className="text-blue-600 font-semibold text-sm hover:underline">Voir tout</button>
      </div>

      <div className="space-y-4">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}>
                {t.category === 'mobile' ? <Smartphone size={20} /> : t.category === 'bill' ? <Zap size={20} /> : <ArrowUpRight size={20} />}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.date}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`font-bold ${t.type === 'income' ? 'text-emerald-500' : 'text-red-500 dark:text-white'}`}>
                {t.amount} XAF
              </p>
              <p className={`text-[10px] font-medium px-2 py-0.5 rounded-full inline-block ${t.status === 'En attente' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                {t.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;