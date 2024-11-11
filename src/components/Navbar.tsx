import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="px-6 py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="logo-container">
          <Logo className="h-6 w-auto" />
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/web-builder" className="hover:text-teal-400 transition-colors">Website Builder</Link>
          <Link to="/app-builder" className="hover:text-teal-400 transition-colors">App Builder</Link>
          <Link to="/#marketplace" className="hover:text-teal-400 transition-colors">Marketplace</Link>
          <Link to="/#certificazioni" className="hover:text-teal-400 transition-colors">Certificazioni</Link>
          <div className="flex gap-4">
            <a href="/login" className="flex items-center gap-2 text-teal-400">
              <User size={18} /> Accedi
            </a>
            <a href="https://grand-genie-d8d72d.netlify.app" 
               className="bg-teal-400 text-black px-4 py-1.5 rounded-full hover:bg-teal-300 transition-all duration-300 hover:scale-105 text-sm">
              Inizia Ora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}