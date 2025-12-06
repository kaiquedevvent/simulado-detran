import React, { useState } from 'react';
import { AppView } from '../../types';
import { Button } from '../ui/Button';
import { ArrowRight, Star, BrainCircuit, CheckCircle, Trophy } from '../Icons';

interface LandingProps {
  onStart: () => void;
}

export const HeroSection: React.FC<LandingProps> = ({ onStart }) => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center bg-orange-100 text-orange-800 border border-orange-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
        <Star className="w-3 h-3 mr-2 fill-orange-500 text-orange-500" /> Nova Metodologia 2024
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#3E2C20] tracking-tight mb-6 leading-tight">
        Passe na prova prática <br className="hidden md:block"/>
        <span className="text-orange-600">sem gastar aulas extras</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-[#5D4E43] mb-10 leading-relaxed">
        Treine situações reais da prova, entenda as faltas eliminatórias e chegue no dia do exame com confiança total. Simples, rápido e direto ao ponto.
      </p>
      <div className="flex justify-center">
        <Button onClick={onStart} variant="secondary" className="text-lg px-8 py-4 rounded-xl" icon={<ArrowRight className="w-5 h-5"/>}>
          Gerar Simulado Grátis
        </Button>
      </div>
      <p className="mt-4 text-sm text-[#8C7B6E]">Não precisa de cadastro • Totalmente gratuito</p>
    </div>
  </section>
);

export const HowItWorksSection: React.FC = () => (
  <section id="como-funciona" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#3E2C20] mb-4">Como funciona</h2>
        <p className="text-[#5D4E43] max-w-xl mx-auto">Nossa inteligência artificial cria cenários baseados nos critérios reais de avaliação do Detran.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { icon: <BrainCircuit className="w-10 h-10 text-orange-500"/>, title: "1. Escolha o Foco", desc: "Selecione categoria A (Moto) ou B (Carro) e quantas questões quer resolver." },
          { icon: <CheckCircle className="w-10 h-10 text-green-500"/>, title: "2. Treine Situações", desc: "Responda perguntas sobre baliza, percurso, setas e regras eliminatórias." },
          { icon: <Trophy className="w-10 h-10 text-yellow-500"/>, title: "3. Receba Feedback", desc: "Veja sua nota na hora com explicações detalhadas de cada erro." }
        ].map((step, idx) => (
          <div key={idx} className="bg-[#F7F3EE] p-8 rounded-2xl border border-[#E8E0D5] hover:border-orange-200 transition-colors text-center">
            <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm mb-6 border border-[#E8E0D5]">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-[#3E2C20] mb-3">{step.title}</h3>
            <p className="text-[#5D4E43] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const BenefitsSection: React.FC<LandingProps> = ({ onStart }) => (
  <section id="vantagens" className="py-20 bg-[#6B4F3A] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Por que treinar conosco?</h2>
          <div className="space-y-6">
            {[
              "Feedback imediato para cada resposta.",
              "Foco nas falhas que mais reprovam.",
              "Economize dinheiro evitando reprovações.",
              "Treine pelo celular, onde quiser."
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="bg-green-500/20 p-2 rounded-full mr-4 border border-green-500/30">
                  <CheckCircle className="text-green-400 w-5 h-5"/>
                </div>
                <span className="text-lg text-orange-50">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button onClick={onStart} variant="ghost" className="bg-white text-[#6B4F3A] hover:bg-orange-50 shadow-lg">
              Começar agora
            </Button>
          </div>
        </div>
        <div className="relative">
           <div className="absolute -inset-4 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
           <div className="relative bg-[#5A4230] p-8 rounded-2xl border border-[#4A3627] shadow-2xl">
             <div className="flex items-center mb-6">
               <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-4 border-2 border-red-200">!</div>
               <div>
                 <p className="text-sm text-orange-200">Pergunta Exemplo</p>
                 <p className="font-semibold text-white">O que causa reprovação imediata na baliza?</p>
               </div>
             </div>
             <div className="space-y-3">
               <div className="p-3 bg-[#4A3627] rounded border border-[#3E2C20] text-sm text-orange-100/60">Esquecer a seta de saída</div>
               <div className="p-3 bg-green-900/30 border border-green-500/50 rounded text-sm font-semibold text-green-400 flex justify-between">
                 Subir no meio-fio
                 <CheckCircle className="w-4 h-4"/>
               </div>
               <div className="p-3 bg-[#4A3627] rounded border border-[#3E2C20] text-sm text-orange-100/60">Demorar mais de 3 minutos</div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export const PremiumSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setEmailSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#E8E0D5]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Em Breve</span>
        <h2 className="text-3xl font-bold text-[#3E2C20] mb-4">Plano Premium</h2>
        <p className="text-[#5D4E43] mb-8 max-w-lg mx-auto">
          Estamos desenvolvendo guias em PDF, histórico de evolução e simulados ilimitados personalizados para sua dificuldade.
        </p>
        
        {!emailSubmitted ? (
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              required
              placeholder="Seu melhor e-mail" 
              className="flex-1 px-4 py-3 rounded-lg border border-[#D0C4B4] bg-white focus:ring-2 focus:ring-[#6B4F3A] outline-none text-[#3E2C20] placeholder-[#8C7B6E]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="primary">Me avise</Button>
          </form>
        ) : (
          <div className="bg-green-100 border border-green-200 text-green-800 px-6 py-3 rounded-lg inline-flex items-center">
            <CheckCircle className="w-5 h-5 mr-2"/> Email cadastrado com sucesso!
          </div>
        )}
      </div>
    </section>
  );
};

export const FAQSection: React.FC = () => (
  <section id="faq" className="py-20 bg-[#F7F3EE]">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#3E2C20]">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {[
          { q: "Isso substitui a autoescola?", a: "Não. A autoescola é obrigatória. Nossa ferramenta é um complemento de estudo para reforçar seu aprendizado teórico-prático." },
          { q: "É gratuito?", a: "Sim, a versão atual de simulados é 100% gratuita." },
          { q: "As questões são iguais ao Detran?", a: "São baseadas nas regras oficiais do CTB e nos manuais de examinadores, mas não são cópias exatas. Servem para treinar o raciocínio." }
        ].map((faq, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-[#E8E0D5]">
            <h3 className="font-bold text-lg text-[#3E2C20] mb-2">{faq.q}</h3>
            <p className="text-[#5D4E43]">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);