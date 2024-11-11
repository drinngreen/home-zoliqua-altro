import React, { useState } from 'react';
import { Code2, ShoppingBag, MessageSquare, Building2 } from 'lucide-react';
import Modal from './Modal';

export default function Solutions() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const solutions = [
    {
      id: 'zolibuild',
      icon: <Code2 size={32} />,
      name: 'Zoli Build',
      description: 'Crea siti web professionali a partire da €7.99/mese',
      price: 'Da €7.99/mese',
      modalContent: (
        <div className="space-y-4">
          <p>Website builder professionale all-in-one:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hosting SSD incluso</li>
            <li>Dominio gratuito primo anno</li>
            <li>SSL gratuito</li>
            <li>Template premium</li>
            <li>Supporto prioritario</li>
          </ul>
          <p>Ideale per PMI e professionisti.</p>
        </div>
      )
    },
    {
      id: 'zoliapp',
      icon: <ShoppingBag size={32} />,
      name: 'Zoli App',
      description: 'App illimitate per il tuo business',
      price: 'Da €299/mese',
      modalContent: (
        <div className="space-y-4">
          <p>Piattaforma di sviluppo app:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>App native iOS e Android</li>
            <li>PWA supportate</li>
            <li>Pubblicazione assistita</li>
            <li>Analytics integrato</li>
          </ul>
          <p>Soluzione completa per la presenza mobile.</p>
        </div>
      )
    },
    {
      id: 'zolichat',
      icon: <MessageSquare size={32} />,
      name: 'Zoli Chat AI',
      description: 'Intelligenza artificiale per il tuo business',
      price: 'Da €49/mese',
      modalContent: (
        <div className="space-y-4">
          <p>Intelligenza artificiale per il business:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chatbot personalizzabile</li>
            <li>Machine Learning avanzato</li>
            <li>Integrazione multi-canale</li>
            <li>Analisi conversazioni</li>
          </ul>
          <p>Automatizza il customer service.</p>
        </div>
      )
    },
    {
      id: 'marketplace',
      icon: <Building2 size={32} />,
      name: 'Marketplace',
      description: 'Centinaia di app esterne integrate',
      price: 'Prezzi variabili',
      modalContent: (
        <div className="space-y-4">
          <p>Ecosistema di app integrate:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>+300 app professionali</li>
            <li>Integrazioni native</li>
            <li>Cashback su ogni acquisto</li>
            <li>Supporto multilingua</li>
          </ul>
          <p>La più grande piattaforma di app business.</p>
        </div>
      )
    }
  ];

  return (
    <section id="soluzioni" className="py-20 px-6 bg-gradient-to-br from-black to-teal-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Le Nostre Soluzioni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="p-8 rounded-xl bg-black/50 border border-gray-800 hover:border-teal-400 transition-all hover:transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setActiveModal(solution.id)}
            >
              <div className="text-teal-400 mb-6">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{solution.name}</h3>
              <p className="text-gray-400 mb-4">{solution.description}</p>
              <p className="text-teal-400 font-semibold">{solution.price}</p>
            </div>
          ))}
        </div>

        {solutions.map((solution) => (
          <Modal
            key={solution.id}
            isOpen={activeModal === solution.id}
            onClose={() => setActiveModal(null)}
            title={solution.name}
          >
            {solution.modalContent}
          </Modal>
        ))}
      </div>
    </section>
  );
}