import React from 'react';
import { AppView } from './types';
import { useQuizGame } from './hooks/useQuizGame';

// Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection, HowItWorksSection, BenefitsSection, PremiumSection, FAQSection } from './components/landing/LandingSections';
import { TestimonialsCarousel } from './components/landing/TestimonialsCarousel';
import { QuizConfig } from './components/quiz/QuizConfig';
import { QuizRunner } from './components/quiz/QuizRunner';
import { QuizResults } from './components/quiz/QuizResults';

const App = () => {
  const { 
    view, 
    setView, 
    settings, 
    setSettings, 
    questions, 
    currentQuestionIndex, 
    userAnswers, 
    actions 
  } = useQuizGame();

  const renderContent = () => {
    switch(view) {
      case AppView.LANDING:
        return (
          <div className="animate-fade-in bg-[#F7F3EE]">
            <HeroSection onStart={() => setView(AppView.CONFIG)} />
            <HowItWorksSection />
            <BenefitsSection onStart={() => setView(AppView.CONFIG)} />
            <PremiumSection />
            <TestimonialsCarousel />
            <FAQSection />
          </div>
        );
      
      case AppView.CONFIG:
        return (
          <QuizConfig 
            settings={settings} 
            setSettings={setSettings} 
            onStart={actions.startSimulation} 
          />
        );

      case AppView.LOADING:
        return (
          <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center flex-col">
            <div className="w-16 h-16 border-4 border-[#E8E0D5] border-t-[#6B4F3A] rounded-full animate-spin mb-6"></div>
            <h2 className="text-xl font-bold text-[#3E2C20]">Gerando seu simulado...</h2>
            <p className="text-[#8C7B6E] mt-2">Nossa IA está selecionando as melhores questões.</p>
          </div>
        );

      case AppView.QUIZ:
        return (
          <QuizRunner
            question={questions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            selectedOption={userAnswers[questions[currentQuestionIndex].id]}
            onSelectOption={actions.handleOptionSelect}
            onNext={actions.handleNextQuestion}
            onPrevious={actions.handlePreviousQuestion}
          />
        );

      case AppView.RESULTS:
        return (
          <QuizResults 
            questions={questions}
            userAnswers={userAnswers}
            onRestart={actions.restartQuiz}
            onHome={actions.goHome}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F7F3EE]">
      <Header onNavigate={setView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      {(view === AppView.LANDING || view === AppView.RESULTS) && <Footer />}
    </div>
  );
};

export default App;