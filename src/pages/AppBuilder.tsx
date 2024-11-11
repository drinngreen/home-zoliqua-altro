import React, { useState } from 'react';
import { Code2, Rocket, Smartphone, Cloud, Zap, Users, Check, MousePointer, Bot, Database, Clock, Wrench } from 'lucide-react';
import QuoteRequestModal from '../components/QuoteRequestModal';

export default function AppBuilder() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleQuoteRequest = (planName: string) => {
    setSelectedPlan(planName);
    setShowQuoteModal(true);
  };

  return (
    <div className="pt-24">
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Piani e Prezzi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Base",
                price: "399",
                highlight: "App semplice",
                features: [
                  "App iOS o Android",
                  "Backend incluso",
                  "5GB spazio",
                  "10.000 utenti/mese",
                  "Statistiche base",
                  "Assistenza email"
                ]
              },
              {
                name: "Pro",
                price: "799",
                highlight: "Il più scelto",
                features: [
                  "App iOS e Android",
                  "Backend avanzato",
                  "20GB spazio",
                  "50.000 utenti/mese",
                  "Analytics completo",
                  "Assistenza prioritaria",
                  "Push notifications"
                ]
              },
              {
                name: "Enterprise",
                price: "1499",
                highlight: "Tutto incluso",
                features: [
                  "App iOS e Android",
                  "Backend personalizzato",
                  "100GB spazio",
                  "Utenti illimitati",
                  "Analytics avanzato",
                  "Supporto dedicato 24/7",
                  "Funzionalità custom"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`p-8 rounded-xl bg-black/50 border ${index === 1 ? 'border-teal-400 scale-105' : 'border-gray-800'} hover:border-teal-400 transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-teal-400 mb-4">{plan.highlight}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-teal-400">€{plan.price}</span>
                  <span className="text-gray-400">/mese</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      <Check className="w-6 h-6 text-teal-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <button 
                    className={`w-full ${index === 1 ? 'bg-teal-400 text-black' : 'bg-gray-800'} px-6 py-4 rounded-full hover:bg-teal-400 hover:text-black transition-all duration-300 text-lg`}
                  >
                    Inizia Ora
                  </button>
                  <button 
                    className="w-full border border-teal-400 text-teal-400 px-6 py-4 rounded-full hover:bg-teal-400/10 transition-all duration-300 text-lg"
                  >
                    Prova Gratuita di 7 Giorni
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Section */}
          <div className="mt-20 p-8 rounded-xl bg-gradient-to-br from-black to-teal-900/50 border border-teal-400">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Soluzioni Custom</h3>
              <p className="text-xl text-gray-300 mb-12">
                Hai esigenze specifiche? Sviluppiamo app su misura per il tuo business
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-black/30">
                  <Database className="w-6 h-6 text-teal-400" />
                  <span>Backend Personalizzato</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-black/30">
                  <Users className="w-6 h-6 text-teal-400" />
                  <span>Team Dedicato</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-black/30">
                  <Bot className="w-6 h-6 text-teal-400" />
                  <span>AI Agent Illimitato</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-black/30">
                  <Wrench className="w-6 h-6 text-teal-400" />
                  <span>Stack Tecnologico Custom</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-black/30">
                  <Zap className="w-6 h-6 text-teal-400" />
                  <span>Assistenza Premium</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-black/30">
                  <Clock className="w-6 h-6 text-teal-400" />
                  <span>Supporto 24/7</span>
                </div>
              </div>

              <button
                onClick={() => handleQuoteRequest('Custom')}
                className="bg-teal-400 text-black px-8 py-4 rounded-full hover:bg-teal-300 transition-all duration-300 text-lg font-medium"
              >
                Richiedi un Preventivo
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuoteRequestModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        productType="app"
        planName={selectedPlan}
      />
    </div>
  );
}