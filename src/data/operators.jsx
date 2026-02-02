import { Landmark } from "lucide-react";




export const countryConfigs = {
 CM: { 
  
  name: "Cameroun", flag: "🇨🇲", currency: "XAF", 
  
  operators: [
    { id: 'momo', name: 'MTN', color: 'bg-yellow-400' },
    { id: 'om', name: 'Orange', color: 'bg-orange-500' },
    { id: 'bank', name: 'Banque', color: 'bg-blue-600', icon: <Landmark size={20}/> },
    { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true },
  ]},

SN: { 
  
  name: "Sénégal", flag: "🇸🇳", currency: "XOF", 
  
  operators: [
  { id: 'wave', name: 'Wave', color: 'bg-cyan-400' },
  { id: 'om', name: 'Orange', color: 'bg-orange-500' },
  { id: 'free', name: 'Free', color: 'bg-red-600' },
  { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true }, // Gratuit
]},

CI: { 
  
  name: "Côte d'Ivoire", flag: "🇨🇮", currency: "XOF", 
  
  operators: [
  { id: 'wave', name: 'Wave', color: 'bg-cyan-400' },
  { id: 'momo', name: 'MTN', color: 'bg-yellow-400' },
  { id: 'moov', name: 'Moov', color: 'bg-blue-500' },
  { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true }, // Gratuit
]},

CO: { 
  
  name: "Congo", flag: "🇨🇲", currency: "XAF",
  
  operators: [
  { id: 'momo', name: 'MTN', color: 'bg-yellow-400' },
  { id: 'om', name: 'Orange', color: 'bg-orange-500' },
  { id: 'bank', name: 'Banque', color: 'bg-blue-600', icon: <Landmark size={20}/> },
  { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true }, // Gratuit
]},

GA: { 
  
  name: "Gabon", flag: "🇸🇳", currency: "US",
  
  operators: [
  { id: 'wave', name: 'Wave', color: 'bg-cyan-400' },
  { id: 'om', name: 'Orange', color: 'bg-orange-500' },
  { id: 'free', name: 'Free', color: 'bg-red-600' },
  { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true }, // Gratuit
]},

NIG: { 
  
  name: "Nigeria", flag: "🇨🇮", currency: "NA",
  
  operators: [
  { id: 'wave', name: 'Wave', color: 'bg-cyan-400' },
  { id: 'momo', name: 'MTN', color: 'bg-yellow-400' },
  { id: 'moov', name: 'Moov', color: 'bg-blue-500' },
  { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true }, // Gratuit
]},

USA: { 
  
  name: "Etats Unis", flag: "🇨🇲", currency: "US"
  
  , operators: [
  { id: 'momo', name: 'MTN', color: 'bg-yellow-400' },
  { id: 'om', name: 'Orange', color: 'bg-orange-500' },
  { id: 'bank', name: 'Banque', color: 'bg-blue-600', icon: <Landmark size={20}/> },
  { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true }, // Gratuit
]},

CAN: { 
  
  name: "Canada", flag: "🇸🇳", currency: "CAN",
  
  operators: [
  { id: 'wave', name: 'Wave', color: 'bg-cyan-400' },
  { id: 'om', name: 'Orange', color: 'bg-orange-500' },
  { id: 'free', name: 'Free', color: 'bg-red-600' },
  { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true }, // Gratuit
]},

FRA: { 
  
  name: "France", flag: "🇸🇳", currency: "EUR",
  
  operators: [
  { id: 'wave', name: 'Wave', color: 'bg-cyan-400' },
  { id: 'om', name: 'Orange', color: 'bg-orange-500' },
  { id: 'free', name: 'Free', color: 'bg-red-600' },
  { id: 'nova', name: 'NovaBank', color: 'bg-blue-600', feePercent: 0.5, isInternal: true }, // Gratuit
]},
};