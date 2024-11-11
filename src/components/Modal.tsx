import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('animate-in');
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Animated fluid background */}
      <div className="fluid-background" />
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative w-full h-full p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 z-50 bg-black/20 text-white hover:text-teal-400
                     transition-colors duration-200 p-2 rounded-full backdrop-blur-sm
                     hover:bg-black/40"
          >
            <X size={24} />
          </button>

          {/* Modal content */}
          <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-teal-500/20 animate-modalIn">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              {title}
            </h2>

            <div className="prose prose-invert prose-teal max-w-none">
              <div className="text-gray-200">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}