import React, { useState } from 'react';
import { Star, ChevronRight } from '../Icons';

const TESTIMONIALS = [
  { name: "Lucas M.", role: "Aprovado Cat B", text: "Eu reprovei duas vezes por nervosismo. O simulado me ajudou a lembrar das regras de seta na hora H." },
  { name: "Fernanda S.", role: "Aprovada Cat A", text: "As perguntas de moto são muito reais. Aquela do 'pé no chão' caiu igualzinho no meu exame!" },
  { name: "Jorge P.", role: "Aluno", text: "Uso todo dia no ônibus indo para o trabalho. Muito melhor que ficar lendo apostila chata." },
  { name: "Mariana L.", role: "Aprovada Cat B", text: "O feedback imediato me fez entender onde eu estava errando na baliza. Recomendo demais!" }
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3E2C20]">O que dizem quem já treinou</h2>
        
        <div className="relative bg-[#F7F3EE] rounded-xl border border-[#E8E0D5] p-8 md:p-12 shadow-sm">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[#6B4F3A] hover:bg-orange-50 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[#6B4F3A] hover:bg-orange-50 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="text-center animate-fade-in px-8">
            <div className="flex justify-center text-yellow-400 mb-6">
              {[1,2,3,4,5].map(star => <Star key={star} className="w-6 h-6" fill="currentColor" />)}
            </div>
            <p className="text-[#5D4E43] text-xl mb-8 italic leading-relaxed">"{current.text}"</p>
            <div>
              <p className="font-bold text-[#3E2C20] text-lg">{current.name}</p>
              <p className="text-sm text-[#8C7B6E] uppercase font-semibold">{current.role}</p>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-[#6B4F3A] w-6' : 'bg-[#D0C4B4]'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};