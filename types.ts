export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizSettings {
  category: 'A' | 'B'; // A = Moto, B = Carro
  questionCount: number;
}

export interface QuizResult {
  score: number;
  total: number;
  answers: {
    questionId: string;
    selectedOptionIndex: number;
  }[];
}

export enum AppView {
  LANDING = 'LANDING',
  CONFIG = 'CONFIG',
  LOADING = 'LOADING',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
}
