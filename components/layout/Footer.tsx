import React from 'react';
import { Car } from '../Icons';

export const Footer: React.FC = () => (
  <footer className="bg-[#5A4230] border-t border-[#4A3627] py-12 text-white mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
           <div className="flex items-center font-bold text-lg mb-2">
              <Car className="w-5 h-5 mr-2 text-orange-400"/> Simulado Prático
           </div>
           <p className="text-sm text-orange-100/70">Prepare-se para vencer.</p>
        </div>
        <div className="flex space-x-6 text-sm text-orange-100/70">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
      <div className="mt-8 border-t border-[#6B4F3A] pt-8 text-center md:text-left">
         <p className="text-xs text-orange-100/50 max-w-2xl">
           Aviso Legal: Este site é uma ferramenta independente de estudo e não possui afiliação com o Detran (Departamento Estadual de Trânsito) ou qualquer órgão governamental. Os simulados são para fins educativos.
         </p>
      </div>
    </div>
  </footer>
);