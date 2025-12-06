import { useState } from 'react';
import { AppView, Question, QuizSettings } from '../types';
import { generateQuestions } from '../services/geminiService';

export const useQuizGame = () => {
  const [view, setView] = useState<AppView>(AppView.LANDING);
  const [settings, setSettings] = useState<QuizSettings>({ category: 'B', questionCount: 5 });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(false);

  const startSimulation = async () => {
    setView(AppView.LOADING);
    setLoading(true);
    try {
      const generated = await generateQuestions(settings.category, settings.questionCount);
      setQuestions(generated);
      setUserAnswers({});
      setCurrentQuestionIndex(0);
      setView(AppView.QUIZ);
    } catch (error) {
      alert("Erro ao gerar simulado. Tente novamente.");
      setView(AppView.CONFIG);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (optionIndex: number) => {
    const currentQ = questions[currentQuestionIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setView(AppView.RESULTS);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) score++;
    });
    return { score, total: questions.length };
  };

  const restartQuiz = () => {
    setView(AppView.CONFIG);
    setQuestions([]);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
  };

  const goHome = () => {
    setView(AppView.LANDING);
    setQuestions([]);
    setUserAnswers({});
  };

  return {
    view,
    setView,
    settings,
    setSettings,
    questions,
    currentQuestionIndex,
    userAnswers,
    loading,
    actions: {
      startSimulation,
      handleOptionSelect,
      handleNextQuestion,
      handlePreviousQuestion,
      calculateScore,
      restartQuiz,
      goHome
    }
  };
};