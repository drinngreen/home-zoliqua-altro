import React, { useState } from 'react';
import { Smartphone, Globe, Code, ArrowRight, Sparkles, Zap, Star, CheckCircle2, Rocket } from 'lucide-react';
import QuoteRequestModal from '../components/QuoteRequestModal';

export default function Agency() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedService, setSelectedService] = useState<'app' | 'web'>('app');

  const handleQuoteRequest = (type: 'app' | 'web') => {
    setSelectedService(type);
    setShowQuoteModal(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-purple-500/10 to-transparent animate-gradient" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=2000')] bg-cover bg-center opacity-5" />
        </div>

        {/* Floating elements animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.1
              }}
            >
              {i % 2 === 0 ? <Code size={24} /> : <Smartphone size={24} />}
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-400/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
              <Sparkles size={16} />
              Offerta Limitata: App Personalizzata da €499
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-teal-200 to-purple-300 bg-clip-text text-transparent">
                La Tua App
              </span>
              <span className="block bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                Il Tuo Successo
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Trasforma la tua visione in realtà con app personalizzate 
              che conquistano il mercato.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button
                onClick={() => handleQuoteRequest('app')}
                className="group flex items-center justify-center gap-3 bg-teal-400 text-black px-8 py-4 rounded-full hover:bg-teal-300 transition-all duration-300 text-lg font-medium transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
              >
                <Rocket className="w-5 h-5" />
                Inizia Ora a Soli €499
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => window.location.href = '#services'}
                className="group flex items-center justify-center gap-2 border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full hover:bg-teal-400/10 transition-all duration-300 text-lg font-medium"
              >
                Scopri i Servizi
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              {[
                "✓ Consegna in 30 Giorni",
                "★ 100% Soddisfatti o Rimborsati",
                "♥ Supporto Dedicato"
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-teal-900/20 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Perché Scegliere Noi
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Esperienza Comprovata",
                description: "Oltre 100+ app di successo realizzate per clienti soddisfatti"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Qualità Garantita",
                description: "Sviluppo professionale con le migliori tecnologie del settore"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Time-to-Market Rapido",
                description: "Dalla progettazione al lancio in soli 30 giorni"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-teal-500/5 to-purple-500/5 border border-gray-800 hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-teal-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Servizi Premium
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* App Development */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-teal-500/10 to-purple-500/5 border border-teal-400/20 hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-2">
              <Smartphone className="w-12 h-12 text-teal-400 mb-6" />
              <div className="inline-flex items-center gap-2 bg-teal-400/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Offerta Speciale
              </div>
              <h3 className="text-2xl font-bold mb-4">App Development</h3>
              <p className="text-gray-300 mb-6">
                App native iOS e Android che conquistano il mercato.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Design UI/UX Esclusivo",
                  "Sviluppo Full-Stack",
                  "Backend Scalabile",
                  "Analytics Avanzato",
                  "Pubblicazione Garantita"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-8">
                <div className="text-sm text-gray-400 mb-1">A partire da</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-teal-400">€499</span>
                  <span className="text-gray-400">/progetto</span>
                </div>
              </div>
              <button
                onClick={() => handleQuoteRequest('app')}
                className="w-full bg-teal-400 text-black px-6 py-4 rounded-full hover:bg-teal-300 transition-all duration-300 font-medium transform hover:scale-105"
              >
                Richiedi Preventivo App
              </button>
            </div>

            {/* Web Development */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-teal-500/5 border border-purple-400/20 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2">
              <Globe className="w-12 h-12 text-purple-400 mb-6" />
              <div className="inline-flex items-center gap-2 bg-purple-400/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Full-Stack
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-300 mb-6">
                Soluzioni web innovative e performanti.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Design Responsive",
                  "E-commerce Avanzato",
                  "PWA Integration",
                  "CMS Personalizzato",
                  "SEO Ottimizzato"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-8">
                <div className="text-sm text-gray-400 mb-1">A partire da</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-purple-400">€999</span>
                  <span className="text-gray-400">/progetto</span>
                </div>
              </div>
              <button
                onClick={() => handleQuoteRequest('web')}
                className="w-full bg-purple-400 text-black px-6 py-4 rounded-full hover:bg-purple-300 transition-all duration-300 font-medium transform hover:scale-105"
              >
                Richiedi Preventivo Web
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        productType={selectedService}
      />
    </div>
  );
}