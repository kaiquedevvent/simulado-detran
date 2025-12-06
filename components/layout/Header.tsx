import React, { useState } from 'react';
import { Car, Menu } from '../Icons';
import { AppView } from '../../types';

interface HeaderProps {
  onNavigate: (view: AppView) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Vantagens", href: "#vantagens" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#6B4F3A] text-white shadow-md border-b border-[#5A4230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Area */}
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate(AppView.LANDING)}>
            <div className="bg-white/10 p-2 rounded-lg mr-2 group-hover:bg-white/20 transition-colors">
              <Car className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">Simulado Prático</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-orange-50 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => onNavigate(AppView.CONFIG)}
              className="bg-white text-[#6B4F3A] hover:bg-orange-50 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              Começar Simulado
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-orange-100 hover:text-white">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#5A4230] border-t border-[#4A3627] px-4 pt-2 pb-4 space-y-2 shadow-lg animate-fade-in">
           {navLinks.map(link => (
             <a 
              key={link.label}
              href={link.href} 
              className="block text-orange-50 py-2 hover:bg-[#6B4F3A] rounded px-2" 
              onClick={() => setMobileMenuOpen(false)}
             >
               {link.label}
             </a>
           ))}
           <button 
              onClick={() => { setMobileMenuOpen(false); onNavigate(AppView.CONFIG); }}
              className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold shadow-md"
            >
              Começar Simulado
            </button>
        </div>
      )}
    </nav>
  );
};