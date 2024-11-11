import React, { useState } from 'react';
import { Code2, Rocket, Zap, Globe, Palette, Lock } from 'lucide-react';
import Modal from './Modal';

export default function ZoliBuild() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const features = [
    {
      id: 'domain',
      icon: <Globe className="w-6 h-6" />,
      title: "Dominio Personalizzato",
      description: "Incluso dominio .com o .it per il primo anno",
      modalContent: (
        <div className="space-y-4">
          <p>Incluso nel pacchetto:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dominio .com o .it gratuito per il primo anno</li>
            <li>Gestione DNS semplificata</li>
            <li>Email professionali illimitate</li>
            <li>Trasferimento dominio assistito</li>
          </ul>
        </div>
      )
    },
    {
      id: 'template',
      icon: <Palette className="w-6 h-6" />,
      title: "Template Premium",
      description: "Accesso a centinaia di template professionali",
      modalContent: (
        <div className="space-y-4">
          <p>Accesso a template professionali:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Oltre 200 template responsive</li>
            <li>Personalizzazione completa</li>
            <li>Ottimizzati per SEO</li>
            <li>Aggiornamenti continui</li>
          </ul>
        </div>
      )
    },
    {
      id: 'performance',
      icon: <Zap className="w-6 h-6" />,
      title: "Prestazioni Ottimizzate",
      description: "Hosting veloce e sicuro incluso",
      modalContent: (
        <div className="space-y-4">
          <p>Hosting performante:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>SSD ad alte prestazioni</li>
            <li>CDN globale inclusa</li>
            <li>Backup automatici giornalieri</li>
            <li>Uptime garantito 99.9%</li>
          </ul>
        </div>
      )
    },
    {
      id: 'ssl',
      icon: <Lock className="w-6 h-6" />,
      title: "SSL Gratuito",
      description: "Certificato di sicurezza incluso",
      modalContent: (
        <div className="space-y-4">
          <p>Sicurezza avanzata:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Certificato SSL Let's Encrypt</li>
            <li>Rinnovo automatico</li>
            <li>HTTPS forzato</li>
            <li>Protezione dati garantita</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="zoli-build" className="py-24 px-6 bg-gradient-to-b from-black/40 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-teal-400 w-8 h-8" />
              <h2 className="text-4xl font-bold">Zoli Build</h2>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Crea il tuo sito web professionale in pochi minuti. Hosting, dominio e SSL inclusi.
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-bold text-teal-400">€7.99</span>
              <span className="text-gray-400">/mese</span>
            </div>
            <div className="flex gap-4">
              <a href="https://grand-genie-d8d72d.netlify.app" 
                 className="flex items-center gap-2 bg-teal-400 text-black px-6 py-3 rounded-md hover:bg-teal-300 transition-colors">
                <Rocket className="w-5 h-5" />
                Inizia Ora
              </a>
              <button className="flex items-center gap-2 border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-md hover:bg-teal-400/10 transition-colors">
                Scopri di più
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="p-6 rounded-xl bg-black/50 border border-gray-800 hover:border-teal-400 transition-colors cursor-pointer"
                  onClick={() => setActiveModal(feature.id)}
                >
                  <div className="text-teal-400 mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
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