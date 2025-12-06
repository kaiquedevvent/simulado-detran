import React from 'react';
import { Question } from '../../types';
import { ChevronRight } from '../Icons';

interface QuizRunnerProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption?: number;
  onSelectOption: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onNext,
  onPrevious
}) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-[#F7F3EE] pt-20 pb-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-semibold text-[#8C7B6E] mb-2 uppercase tracking-wide">
            <span>Questão {currentIndex + 1} de {totalQuestions}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-[#E8E0D5] rounded-full overflow-hidden">
            <div className="h-full bg-green-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#E8E0D5] overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-[#3E2C20] mb-6 leading-relaxed">
              {question.text}
            </h3>

            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => onSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start group ${
                      isSelected 
                        ? 'border-orange-500 bg-orange-50 text-[#3E2C20]' 
                        : 'border-[#E8E0D5] hover:border-orange-300 hover:bg-[#FDFBF7] text-[#5D4E43]'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mr-4 flex items-center justify-center mt-0.5 ${
                      isSelected ? 'border-orange-500' : 'border-[#D0C4B4] group-hover:border-orange-300'
                    }`}>
                      {isSelected && <div className="w-3 h-3 bg-orange-500 rounded-full"></div>}
                    </div>
                    <span className="text-base font-medium">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="bg-[#FAF9F6] p-6 border-t border-[#E8E0D5] flex justify-between items-center">
             <button 
               onClick={onPrevious}
               disabled={currentIndex === 0}
               className="text-[#8C7B6E] font-semibold hover:text-[#3E2C20] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
             >
               Anterior
             </button>
             
             <button 
               onClick={onNext}
               disabled={selectedOption === undefined}
               className="bg-[#6B4F3A] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#5A4230] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center shadow-md border-b-4 border-[#4A3627]"
             >
               {currentIndex === totalQuestions - 1 ? 'Finalizar' : 'Próxima'}
               {currentIndex < totalQuestions - 1 && <ChevronRight className="ml-2 w-4 h-4" />}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};