import React, { useState } from 'react';
import { Code, Cpu, Database, Cloud, Shield, Users } from 'lucide-react';
import Modal from './Modal';

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      id: 'web',
      icon: <Code size={32} />,
      title: 'Sviluppo Web',
      description: 'Soluzioni web personalizzate e scalabili per ogni esigenza',
      modalContent: (
        <div className="space-y-4">
          <p>Sviluppiamo soluzioni web su misura utilizzando le più moderne tecnologie:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Applicazioni web progressive (PWA)</li>
            <li>Single Page Applications (SPA)</li>
            <li>E-commerce personalizzati</li>
            <li>CMS su misura</li>
            <li>Ottimizzazione SEO</li>
            <li>Integrazione API</li>
          </ul>
          <p>Ogni progetto è sviluppato seguendo le best practice del settore e garantendo massime performance.</p>
        </div>
      )
    },
    {
      id: 'ai',
      icon: <Cpu size={32} />,
      title: 'Intelligenza Artificiale',
      description: 'Integrazione di AI avanzata per automatizzare i processi',
      modalContent: (
        <div className="space-y-4">
          <p>Implementiamo soluzioni di AI all'avanguardia:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Machine Learning per analisi predittive</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Chatbot intelligenti</li>
            <li>Automazione dei processi</li>
            <li>Sistemi di raccomandazione</li>
          </ul>
          <p>Trasforma il tuo business con l'intelligenza artificiale.</p>
        </div>
      )
    },
    {
      id: 'data',
      icon: <Database size={32} />,
      title: 'Gestione Dati',
      description: 'Soluzioni di database e analisi dati su misura',
      modalContent: (
        <div className="space-y-4">
          <p>Gestione e analisi dati professionali:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Progettazione database ottimizzati</li>
            <li>Data warehousing</li>
            <li>Business Intelligence</li>
            <li>Big Data Analytics</li>
            <li>ETL e data integration</li>
            <li>Reporting avanzato</li>
          </ul>
          <p>Trasforma i tuoi dati in valore aziendale concreto.</p>
        </div>
      )
    },
    {
      id: 'cloud',
      icon: <Cloud size={32} />,
      title: 'Cloud Solutions',
      description: 'Servizi cloud scalabili e sicuri',
      modalContent: (
        <div className="space-y-4">
          <p>Soluzioni cloud enterprise:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Migrazione al cloud</li>
            <li>Cloud ibrido e multi-cloud</li>
            <li>Containerizzazione</li>
            <li>Orchestrazione Kubernetes</li>
            <li>Serverless computing</li>
            <li>Disaster recovery</li>
          </ul>
          <p>Infrastrutture cloud affidabili e performanti.</p>
        </div>
      )
    },
    {
      id: 'security',
      icon: <Shield size={32} />,
      title: 'Sicurezza',
      description: 'Protezione avanzata per i tuoi dati e applicazioni',
      modalContent: (
        <div className="space-y-4">
          <p>Sicurezza informatica a 360°:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Penetration testing</li>
            <li>Security assessment</li>
            <li>Implementazione GDPR</li>
            <li>Crittografia avanzata</li>
            <li>Monitoraggio 24/7</li>
            <li>Incident response</li>
          </ul>
          <p>Proteggi il tuo business con soluzioni di sicurezza all'avanguardia.</p>
        </div>
      )
    },
    {
      id: 'consulting',
      icon: <Users size={32} />,
      title: 'Consulenza',
      description: 'Supporto esperto per la trasformazione digitale',
      modalContent: (
        <div className="space-y-4">
          <p>Consulenza strategica IT:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Digital transformation</li>
            <li>IT Strategy</li>
            <li>Process optimization</li>
            <li>Technology assessment</li>
            <li>Project management</li>
            <li>Training e formazione</li>
          </ul>
          <p>Accompagniamo la tua azienda nel percorso di innovazione digitale.</p>
        </div>
      )
    }
  ];

  return (
    <section id="servizi" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">I Nostri Servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 rounded-xl bg-black/50 border border-gray-800 hover:border-teal-400 transition-all duration-300 cursor-pointer hover:scale-105"
              style={{ animationDelay: `${services.indexOf(service) * 100}ms` }}
              onClick={() => setActiveModal(service.id)}
            >
              <div className="text-teal-400 mb-6 animate-float">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {services.map((service) => (
          <Modal
            key={service.id}
            isOpen={activeModal === service.id}
            onClose={() => setActiveModal(null)}
            title={service.title}
          >
            {service.modalContent}
          </Modal>
        ))}
      </div>
    </section>
  );
}