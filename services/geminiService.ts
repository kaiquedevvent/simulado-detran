import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

// Fallback questions in case API Key is missing or fails (ensures app utility)
const FALLBACK_QUESTIONS: Question[] = [
  {
    id: "fb-1",
    text: "Ao iniciar a baliza, qual deve ser sua primeira ação antes de movimentar o veículo?",
    options: [
      "Engatar a marcha ré imediatamente",
      "Sinalizar com a seta para o lado da vaga",
      "Olhar apenas pelo retrovisor interno",
      "Acelerar para ganhar tempo"
    ],
    correctIndex: 1,
    explanation: "A sinalização é fundamental para comunicar sua intenção aos outros usuários da via e é um dos primeiros pontos avaliados."
  },
  {
    id: "fb-2",
    text: "Durante o percurso, o examinador pede para você virar à direita. O que você NÃO deve fazer?",
    options: [
      "Sinalizar com antecedência",
      "Reduzir a velocidade",
      "Observar os retrovisores",
      "Entrar na curva em ponto morto (neutro)"
    ],
    correctIndex: 3,
    explanation: "Dirigir com o carro desengrenado (ponto morto) prejudica o controle do veículo e é considerado falta média ou grave dependendo do contexto."
  },
  {
    id: "fb-3",
    text: "Qual é a distância máxima permitida do meio-fio ao finalizar o estacionamento (baliza)?",
    options: [
      "50 cm",
      "10 cm",
      "1 metro",
      "Não há limite, desde que dentro da faixa"
    ],
    correctIndex: 0,
    explanation: "O veículo deve estar posicionado no sentido do fluxo, paralelo à calçada e a uma distância não superior a 50 centímetros do meio-fio."
  }
];

export const generateQuestions = async (category: 'A' | 'B', count: number): Promise<Question[]> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn("API Key not found. Using fallback questions.");
    return new Promise((resolve) => {
      setTimeout(() => resolve(FALLBACK_QUESTIONS.slice(0, count)), 1500);
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Gere ${count} questões de múltipla escolha para um simulado de PROVA PRÁTICA de direção do Detran Brasil, Categoria ${category} (${category === 'A' ? 'Moto' : 'Carro'}). 
    Foque em situações práticas, regras de circulação, faltas eliminatórias (ex: deixar o motor apagar, não usar seta, pé no chão para moto) e mecânica básica exigida na prova.
    As perguntas devem ser difíceis e educativas.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING, description: "O enunciado da pergunta." },
              options: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Exatamente 4 opções de resposta."
              },
              correctIndex: { type: Type.INTEGER, description: "Índice da resposta correta (0-3)." },
              explanation: { type: Type.STRING, description: "Explicação detalhada do porquê a resposta está correta e dicas para a prova prática." }
            },
            required: ["id", "text", "options", "correctIndex", "explanation"]
          }
        }
      }
    });

    if (response.text) {
      const questions = JSON.parse(response.text) as Question[];
      return questions;
    }
    
    throw new Error("Empty response from Gemini");

  } catch (error) {
    console.error("Gemini generation failed:", error);
    return FALLBACK_QUESTIONS.slice(0, count);
  }
};
