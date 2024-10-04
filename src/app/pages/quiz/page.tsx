"use client";

import React, { useState } from 'react';
import Head from 'next/head';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    question: "¿Qué órgano controla el cerebro?",
    options: ["El corazón", "Los pulmones", "Todo el cuerpo", "Los ojos"],
    correctAnswer: 2
  },
  {
    question: "¿De qué color es el cerebro?",
    options: ["Rojo brillante", "Azul claro", "Gris rosado", "Verde oscuro"],
    correctAnswer: 2
  },
  {
    question: "¿Qué protege al cerebro?",
    options: ["Un casco", "El cráneo", "El pelo", "Una gorra"],
    correctAnswer: 1
  },
  {
    question: "¿Qué hace el cerebro mientras duermes?",
    options: ["Se apaga completamente", "Sigue trabajando", "Sale a pasear", "Se vuelve más pequeño"],
    correctAnswer: 1
  },
  {
    question: "¿Qué necesita el cerebro para funcionar bien?",
    options: ["Solo dulces", "Mucha televisión", "Buena alimentación y descanso", "Jugar todo el día"],
    correctAnswer: 2
  }
];

const BrainQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (questionIndex: number, optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    if (selectedAnswers.includes(null)) {
      alert('Por favor, responde todas las preguntas antes de enviar.');
      return;
    }

    const newScore = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    setScore(newScore);
    setShowResult(true);
  };

  const handleRetry = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className='containQuiz min-h-screen w-full overflow-auto'>
      <Head>
        <h2 className=''>Cuestionario sobre el Cerebro para Niños</h2>
      </Head>

      <main className="main min-h-screen w-full overflow-auto">
        <h2 className="title">Cuestionario sobre el Cerebro para Niños</h2>

        {questions.map((q, qIndex) => (
          <div key={qIndex} className="question">
            <p>{q.question}</p>
            <div className="options">
              {q.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  className={`option ${selectedAnswers[qIndex] === oIndex ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(qIndex, oIndex)}
                  disabled={showResult}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        {!showResult ? (
          <button id="submit" onClick={handleSubmit}>Enviar respuestas</button>
        ) : (
          <>
            <div id="result">¡Obtuviste {score} de 5 respuestas correctas!</div>
            <button id="retry" onClick={handleRetry}>Intentar de nuevo</button>
          </>
        )}
        <div className='w-fuyll h-min flex justify-center items-center'>

        <button id="btn-before" className='btn btn-primary btn-block btn-large mt-10 w-full'><a href="/pages/dashboard" className='w-full'>Regresar</a></button>
        </div>
      </main>
    </div>
  );
};

export default BrainQuiz;
