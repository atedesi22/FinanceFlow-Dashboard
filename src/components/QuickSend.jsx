
const quickContacts = [
    { id: 1, name: 'Maman', img: 'https://ui-avatars.com/api/?name=Maman&bg=fef3c7&color=b45309' },
    { id: 2, name: 'Petit Frère', img: 'https://ui-avatars.com/api/?name=PF&bg=dcfce7&color=15803d' },
    { id: 3, name: 'Loyer', img: 'https://ui-avatars.com/api/?name=Loyer&bg=dbeafe&color=1d4ed8' },
    { id: 4, name: 'Boutique', img: 'https://ui-avatars.com/api/?name=Boutique&bg=f1f5f9&color=475569' },
];

const QuickSend = () =>{
    return(
        <>
            <div className="mt-10">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Envoi rapide</h3>
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                    {/* Le bouton "Ajouter" */}
                    <button className="flex-shrink-0 w-16 h-16 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
                    <span className="text-2xl">+</span>
                    </button>

                    {/* Liste des favoris  */}
                    {quickContacts.map((contact) => (
                        <div key={contact.id} className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-transparent group-hover:ring-blue-500 transition-all p-0.5">
                            <img src={contact.img} alt={contact.name} className="w-full h-full rounded-[14px] object-cover" />
                            </div>
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{contact.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default QuickSend;