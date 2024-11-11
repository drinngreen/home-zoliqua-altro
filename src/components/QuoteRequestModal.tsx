import React, { useState } from 'react';
import { X } from 'lucide-react';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  productType: 'web' | 'app';
  planName?: string;
}

export default function QuoteRequestModal({ isOpen, onClose, productType, planName }: QuoteRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui gestirai l'invio del form
    console.log(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Animated fluid background */}
      <div className="fluid-background" />
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl mx-auto p-8">
        <div className="relative bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-teal-500/20 animate-modalIn">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white
                     transition-colors duration-200"
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
            Richiedi Preventivo {planName ? `- Piano ${planName}` : ''}
          </h2>
          
          <p className="text-gray-300 mb-8">
            {productType === 'web' 
              ? 'Raccontaci del sito web che vorresti realizzare'
              : 'Raccontaci dell\'app che vorresti sviluppare'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white
                           focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white
                           focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  placeholder="mario@esempio.it"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white
                           focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Azienda
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white
                           focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  placeholder="Nome Azienda"
                />
              </div>
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-2">
                Descrivi le tue esigenze *
              </label>
              <textarea
                id="requirements"
                name="requirements"
                required
                value={formData.requirements}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white
                         focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                placeholder={productType === 'web' 
                  ? 'Descrivi il sito web che vorresti realizzare...'
                  : 'Descrivi l\'app che vorresti sviluppare...'}
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
              >
                Annulla
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-teal-400 text-black hover:bg-teal-300 transition-colors"
              >
                Invia Richiesta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}