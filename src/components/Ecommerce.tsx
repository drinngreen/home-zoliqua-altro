import React, { useState } from 'react';
import { ShoppingCart, Gift, Percent, Truck } from 'lucide-react';
import Modal from './Modal';

export default function Ecommerce() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const features = [
    {
      id: 'products',
      icon: <ShoppingCart className="text-teal-400 w-12 h-12 mb-6" />,
      title: "3M+ Prodotti",
      description: "Vasta selezione di prodotti per ogni esigenza",
      modalContent: (
        <div className="space-y-4">
          <p>Il nostro marketplace offre una vastissima gamma di prodotti selezionati, con oltre 3 milioni di articoli disponibili.</p>
          <p>Ogni prodotto viene accuratamente verificato per garantire qualità e affidabilità.</p>
          <p>Catalogo in costante espansione con nuovi prodotti aggiunti quotidianamente.</p>
        </div>
      )
    },
    {
      id: 'cashback',
      icon: <Gift className="text-teal-400 w-12 h-12 mb-6" />,
      title: "Cashback",
      description: "Guadagna su ogni acquisto con il nostro programma cashback",
      modalContent: (
        <div className="space-y-4">
          <p>Sistema di cashback innovativo che ti permette di guadagnare su ogni acquisto.</p>
          <p>Ricevi immediatamente sul tuo wallet fino al 20% dell'importo speso.</p>
          <p>Prelievi istantanei su PayPal, nessun limite minimo di prelievo.</p>
          <p>Programma bonus per acquisti frequenti.</p>
        </div>
      )
    },
    {
      id: 'offers',
      icon: <Percent className="text-teal-400 w-12 h-12 mb-6" />,
      title: "Offerte Esclusive",
      description: "Accedi a sconti e promozioni riservate",
      modalContent: (
        <div className="space-y-4">
          <p>Accedi a promozioni riservate ai membri della nostra piattaforma.</p>
          <p>Sconti speciali, offerte lampo e codici promozionali dedicati.</p>
          <p>Early access ai nuovi prodotti e alle collezioni limitate.</p>
          <p>Sistema VIP con vantaggi crescenti.</p>
        </div>
      )
    },
    {
      id: 'shipping',
      icon: <Truck className="text-teal-400 w-12 h-12 mb-6" />,
      title: "Spedizione Veloce",
      description: "Consegne rapide in tutto il mondo",
      modalContent: (
        <div className="space-y-4">
          <p>Consegne garantite in 24/48h in tutta Italia.</p>
          <p>Tracciamento in tempo reale di ogni spedizione.</p>
          <p>Assicurazione inclusa su tutti gli ordini.</p>
          <p>Reso gratuito entro 30 giorni.</p>
        </div>
      )
    }
  ];

  return (
    <section id="ecommerce" className="py-20 px-6 bg-gradient-to-br from-black to-teal-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">E-commerce</h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Accedi al nostro marketplace con oltre 3.000.000 di prodotti e approfitta del cashback su ogni acquisto
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-xl bg-black/50 border border-gray-800 hover:border-teal-400 transition-all cursor-pointer"
              onClick={() => setActiveModal(feature.id)}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
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