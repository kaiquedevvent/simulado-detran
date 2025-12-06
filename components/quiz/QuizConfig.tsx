import React from 'react';
import { QuizSettings } from '../../types';
import { Car, Bike, ArrowRight } from '../Icons';
import { Button } from '../ui/Button';

interface QuizConfigProps {
  settings: QuizSettings;
  setSettings: (settings: QuizSettings) => void;
  onStart: () => void;
}

export const QuizConfig: React.FC<QuizConfigProps> = ({ settings, setSettings, onStart }) => {
  return (
    <div className="min-h-screen bg-[#F7F3EE] flex flex-col pt-20">
       <div className="flex-1 max-w-lg mx-auto w-full px-4 py-8 flex flex-col justify-center">
         <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#E8E0D5]">
           <h2 className="text-2xl font-bold text-center mb-6 text-[#3E2C20]">Configure seu Simulado</h2>
           
           <div className="space-y-6">
             {/* Category Selection */}
             <div>
               <label className="block text-sm font-medium text-[#5D4E43] mb-3">Escolha a Categoria</label>
               <div className="grid grid-cols-2 gap-4">
                 <button 
                  onClick={() => setSettings({...settings, category: 'B'})}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${settings.category === 'B' ? 'border-orange-500 bg-orange-50 text-orange-800' : 'border-[#E8E0D5] hover:border-orange-200 text-[#8C7B6E]'}`}
                 >
                   <Car className="w-8 h-8 mb-2" />
                   <span className="font-bold">Carro (B)</span>
                 </button>
                 <button 
                  onClick={() => setSettings({...settings, category: 'A'})}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${settings.category === 'A' ? 'border-orange-500 bg-orange-50 text-orange-800' : 'border-[#E8E0D5] hover:border-orange-200 text-[#8C7B6E]'}`}
                 >
                   <Bike className="w-8 h-8 mb-2" />
                   <span className="font-bold">Moto (A)</span>
                 </button>
               </div>
             </div>

             {/* Question Count */}
             <div>
               <label className="block text-sm font-medium text-[#5D4E43] mb-3">Quantidade de Questões</label>
               <div className="grid grid-cols-3 gap-3">
                 {[5, 10, 20].map(count => (
                   <button
                    key={count}
                    onClick={() => setSettings({...settings, questionCount: count})}
                    className={`py-3 rounded-lg border font-medium transition-all ${settings.questionCount === count ? 'bg-[#6B4F3A] text-white border-[#6B4F3A]' : 'bg-white text-[#5D4E43] border-[#E8E0D5] hover:border-[#6B4F3A]'}`}
                   >
                     {count}
                   </button>
                 ))}
               </div>
             </div>

             <Button 
               onClick={onStart} 
               variant="secondary" 
               fullWidth 
               className="mt-4 py-4 rounded-xl text-lg"
               icon={<ArrowRight />}
             >
               Gerar Simulado
             </Button>
           </div>
         </div>
       </div>
    </div>
  );
};