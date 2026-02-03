import React, { useState, useEffect } from 'react';
import { DownloadCloud, X } from 'lucide-react';

const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
//   const [showBanner, setShowBanner] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Empêche Chrome d'afficher la bannière par défaut
      e.preventDefault();
      // On garde l'événement pour plus tard
      setDeferredPrompt(e);
      setShowBanner(true);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowBanner(false);
      }
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-50">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-5 shadow-2xl border border-white/20 flex items-center justify-between animate-bounce-subtle">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
            <DownloadCloud className="text-white" size={24} />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Installer NovaVerse</h4>
            <p className="text-blue-100 text-[10px]">Accès rapide & Mode hors-ligne</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleInstall}
            className="bg-white text-blue-700 px-4 py-2 rounded-xl text-xs font-black shadow-lg active:scale-95 transition"
          >
            INSTALLER
          </button>
          <button onClick={() => setShowBanner(false)} className="text-white/50 p-1">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;