import React from 'react';
import { Question } from '../../types';
import { CheckCircle } from '../Icons';
import { Button } from '../ui/Button';

interface QuizResultsProps {
  questions: Question[];
  userAnswers: { [key: string]: number };
  onRestart: () => void;
  onHome: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ questions, userAnswers, onRestart, onHome }) => {
  let score = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correctIndex) score++;
  });
  
  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= 70;

  return (
    <div className="min-h-screen bg-[#F7F3EE] pt-20 pb-10 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Score */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#E8E0D5] p-8 text-center mb-8 relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-2 ${passed ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <h2 className="text-2xl font-bold text-[#3E2C20] mb-2">Resultado do Simulado</h2>
          <div className="flex items-center justify-center my-6">
            <div className={`w-32 h-32 rounded-full border-8 flex items-center justify-center ${passed ? 'border-green-100 text-green-600 bg-green-50' : 'border-red-100 text-red-600 bg-red-50'}`}>
              <span className="text-4xl font-extrabold">{percentage}%</span>
            </div>
          </div>
          <p className="text-[#5D4E43] mb-6">
            Você acertou <strong className="text-[#3E2C20]">{score}</strong> de <strong className="text-[#3E2C20]">{questions.length}</strong> questões.
            {passed ? " Ótimo trabalho! Você está no caminho certo." : " Continue treinando para garantir sua aprovação."}
          </p>
          <div className="flex justify-center gap-4">
             <Button onClick={onRestart} variant="secondary">Novo Simulado</Button>
             <Button onClick={onHome} variant="ghost">Voltar ao Início</Button>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#3E2C20] ml-2">Gabarito Comentado</h3>
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.correctIndex;
            
            return (
              <div key={q.id} className="bg-white rounded-xl shadow-sm border border-[#E8E0D5] p-6">
                 <div className="flex items-start mb-4">
                   <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                     {idx + 1}
                   </span>
                   <div className="w-full">
                     <h4 className="font-semibold text-[#3E2C20] text-lg mb-2">{q.text}</h4>
                     <div className="space-y-2 mb-4">
                       {q.options.map((opt, optIdx) => {
                         let styles = "p-3 rounded-lg text-sm border ";
                         if (optIdx === q.correctIndex) {
                           styles += "bg-green-50 border-green-200 text-green-800 font-medium"; 
                         } else if (optIdx === userAnswer && !isCorrect) {
                           styles += "bg-red-50 border-red-200 text-red-800 line-through opacity-80"; 
                         } else {
                           styles += "border-transparent text-[#8C7B6E]"; 
                         }
                         
                         return (
                           <div key={optIdx} className={styles}>
                             {opt} {optIdx === q.correctIndex && <CheckCircle className="inline w-4 h-4 ml-2 align-text-bottom"/>}
                           </div>
                         )
                       })}
                     </div>
                     <div className="bg-orange-50 p-4 rounded-lg text-sm text-[#6B4F3A] border border-orange-100">
                       <span className="font-bold block mb-1 text-orange-800">Dica do Instrutor:</span>
                       {q.explanation}
                     </div>
                   </div>
                 </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};