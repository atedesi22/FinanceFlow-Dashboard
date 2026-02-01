export const novaWalletData = {
  balance: 150500, // En XAF
  currency: "XAF",
  vaultStatus: "Protected", // NovaVault est actif
  linkedAccounts: [
    { id: "tk_9928", type: "Mobile Money", provider: "MTN", lastDigits: "6789", isIsolated: true },
    { id: "tk_5643", type: "Orange Money", provider: "ORANGE", lastDigits: "5643", isIsolated: true },
    { id: "tk_4412", type: "Virtual Card", provider: "NovaCard", lastDigits: "4412", isIsolated: true }
  ],
  transactions: [
    {
      id: "nv_tr_001",
      title: "Transfert vers Maman",
      type: "debit",
      amount: 5000,
      category: "Famille",
      method: "NovaChain Internal", // Transaction gratuite interne
      date: "2026-02-01T10:30:00",
      status: "success"
    },
    {
      id: "nv_tr_002",
      title: "Rechargement via Orange Money",
      type: "credit",
      amount: 25000,
      category: "Dépôt",
      method: "OM Gateway",
      date: "2026-01-31T18:15:00",
      status: "success"
    }
  ]
};