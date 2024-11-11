import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certificazioni" className="py-20 px-6 bg-black/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Certificazioni e Partnership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Award className="text-teal-400 w-16 h-16" />,
              title: "Zoli Group",
              description: "Certificazione ufficiale del gruppo Zoli"
            },
            {
              icon: <Shield className="text-teal-400 w-16 h-16" />,
              title: "Programma Partner",
              description: "Affiliate su 3 livelli con cashback"
            },
            {
              icon: <Users className="text-teal-400 w-16 h-16" />,
              title: "White Label",
              description: "App personalizzate in concessione"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="section-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-6 animate-float">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}