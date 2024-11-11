import React, { useState } from 'react';
import { Store, Package, Zap, CreditCard } from 'lucide-react';
import Modal from './Modal';

export default function Marketplace() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const features = [
    {
      id: 'appstore',
      icon: <Store className="text-teal-400 w-12 h-12 mb-6" />,
      title: "App Store",
      description: "Oltre 300 applicazioni professionali pronte all'uso per ogni esigenza aziendale",
      modalContent: (
        <div className="space-y-4">
          <p>Oltre 300 applicazioni professionali selezionate per ogni esigenza aziendale.</p>
          <p>Categorie:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gestione aziendale</li>
            <li>Marketing e vendite</li>
            <li>Produttività e collaborazione</li>
            <li>Analisi e reporting</li>
          </ul>
          <p>Tutte le app sono testate e certificate dal nostro team.</p>
        </div>
      )
    },
    {
      id: 'integrated',
      icon: <Package className="text-teal-400 w-12 h-12 mb-6" />,
      title: "Servizi Integrati",
      description: "Integrazione seamless con i principali servizi cloud e piattaforme di business",
      modalContent: (
        <div className="space-y-4">
          <p>Integrazione seamless con i principali servizi cloud e piattaforme di business:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Workspace</li>
            <li>Microsoft 365</li>
            <li>Salesforce</li>
            <li>AWS e altri servizi cloud</li>
          </ul>
          <p>Setup automatizzato e supporto dedicato per le configurazioni.</p>
        </div>
      )
    },
    {
      id: 'quick',
      icon: <Zap className="text-teal-400 w-12 h-12 mb-6" />,
      title: "Installazione Rapida",
      description: "Implementazione immediata con un solo click, senza configurazioni complesse",
      modalContent: (
        <div className="space-y-4">
          <p>Processo di installazione ottimizzato:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Configurazione one-click</li>
            <li>Nessuna conoscenza tecnica richiesta</li>
            <li>Setup guidato per tutte le funzionalità</li>
            <li>Migrazione dati assistita</li>
          </ul>
          <p>Operatività immediata garantita.</p>
        </div>
      )
    },
    {
      id: 'payments',
      icon: <CreditCard className="text-teal-400 w-12 h-12 mb-6" />,
      title: "Pagamenti Flessibili",
      description: "Opzioni di pagamento personalizzate e gestione semplificata delle licenze",
      modalContent: (
        <div className="space-y-4">
          <p>Gestione licenze e pagamenti semplificata:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pagamenti mensili o annuali</li>
            <li>Fatturazione automatica</li>
            <li>Gestione multi-account</li>
            <li>Upgrade/downgrade flessibile</li>
          </ul>
          <p>Supporto multi-valuta e metodi di pagamento.</p>
        </div>
      )
    }
  ];

  return (
    <section id="marketplace" className="py-20 px-6 bg-gradient-to-br from-black to-teal-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Marketplace</h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Accedi a centinaia di app e servizi esterni integrati per potenziare il tuo business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-xl bg-black/50 border border-gray-800 hover:border-teal-400 transition-all cursor-pointer"
              onClick={() => setActiveModal(feature.id)}
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {features.map((feature) => (
          <Modal
            key={feature.id}
            isOpen={activeModal === feature.id}
            onClose={() => setActiveModal(null)}
            title={feature.title}
          >
            {feature.modalContent}
          </Modal>
        ))}
      </div>
    </section>
  );
}