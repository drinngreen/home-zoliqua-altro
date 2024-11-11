import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Hero() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8">
            <div className="logo-container mb-12">
              <Logo className="h-12 w-auto mx-auto animate-float" />
            </div>
            <h2 className="text-6xl font-light leading-tight mb-8 transition-all duration-700">
              <span className="inline-block transform hover:-translate-y-2 transition-transform duration-300">Trasforma</span>{' '}
              <span className="inline-block transform hover:-translate-y-2 transition-transform duration-300 delay-100">la</span>{' '}
              <span className="inline-block transform hover:-translate-y-2 transition-transform duration-300 delay-200">Tua</span>{' '}
              <span className="bg-gradient-to-r from-teal-400 to-teal-200 text-transparent bg-clip-text inline-block transform hover:-translate-y-2 transition-transform duration-300 delay-300">Visione</span>{' '}
              <span className="bg-gradient-to-r from-teal-200 to-white text-transparent bg-clip-text inline-block transform hover:-translate-y-2 transition-transform duration-300 delay-400">Digitale</span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 transform transition-all duration-500 hover:scale-105 font-light">
              Soluzioni software complete per il tuo business: dalle app web alle applicazioni mobile, 
              fino ai sistemi gestionali personalizzati.
            </p>

            <div className="flex justify-center gap-6 transform transition-all duration-500">
              <Link to="/agency" 
                className="group flex items-center gap-2 bg-teal-400 text-black px-6 py-3 rounded-full hover:bg-teal-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 text-sm font-medium">
                <span>Agency</span>
                <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button className="group flex items-center gap-2 border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-full hover:bg-teal-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 text-sm font-medium">
                Demo Gratuita
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      </div>
    </>
  );
}