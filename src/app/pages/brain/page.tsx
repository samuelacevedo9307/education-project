// ------------------------------------------------------------------------------------------------
"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link"; // Para usar la navegación en Next.js

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    question: "¿Qué órgano controla el cerebro?",
    options: ["El corazón", "Los pulmones", "Todo el cuerpo", "Los ojos"],
    correctAnswer: 2,
  },
  {
    question: "¿De qué color es el cerebro?",
    options: ["Rojo brillante", "Azul claro", "Gris rosado", "Verde oscuro"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué protege al cerebro?",
    options: ["Un casco", "El cráneo", "El pelo", "Una gorra"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace el cerebro mientras duermes?",
    options: [
      "Se apaga completamente",
      "Sigue trabajando",
      "Sale a pasear",
      "Se vuelve más pequeño",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué necesita el cerebro para funcionar bien?",
    options: [
      "Solo dulces",
      "Mucha televisión",
      "Buena alimentación y descanso",
      "Jugar todo el día",
    ],
    correctAnswer: 2,
  },
];

const Brain: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number>(0); // Tipado explícito para evitar 'null'
  const [loading, setLoading] = useState(false); // Estado para controlar la pantalla de carga
  const handleOptionClick = (questionIndex: number, optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    if (selectedAnswers.includes(null)) {
      alert("Por favor, responde todas las preguntas antes de enviar.");
      return;
    }

    // Nueva lógica que filtra las respuestas null antes de calcular el score
    const newScore = selectedAnswers.reduce((acc: number, answer, index) => {
      if (answer !== null && answer === questions[index].correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0); // 'acc' siempre será un número
    setLoading(true); // Activar pantalla de carga

    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simular un retraso de 2 segundos

    setScore(newScore); // Aseguramos que 'newScore' es un número
    setShowResult(true);
  };

  const handleRetry = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setScore(0);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <h1 className="p-10 text-4xl">
          Calificando con Inteligencia Artificial
        </h1>
      </div>
    );
  }
  return (
    <div className="containQuiz min-h-screen w-full overflow-auto bg-[#ADBBD6]">
      <div className="flex flex-col w-full h-max justify-center items-center">
        <h1 className="p-5 text-4xl text-white">Bienvenido(a)</h1>
        <Link href="/pages/dashboard" className="w-full flex justify-center items-center">
          <button className="btn btn-primary btn-block btn-large">
            Regresar
          </button>
        </Link>
        <div className="h-screen w-10/12 container-materials p-10">
          <iframe
            src="https://dbrain-742f1.firebaseapp.com/"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <Head>
        <title>Cuestionario sobre el Cerebro para Niños</title>
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
                  className={`option ${selectedAnswers[qIndex] === oIndex ? "selected" : ""
                    }`}
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
          <button id="submit" onClick={handleSubmit}>
            Enviar respuestas
          </button>
        ) : (
          <>
            <div id="result">¡Obtuviste {score} de 5 respuestas correctas!</div>
            <button id="retry" onClick={handleRetry}>
              Intentar de nuevo
            </button>
          </>
        )}

        <div className="w-full h-min flex justify-center items-center mt-10">
          <Link href="/pages/dashboard">
            <button
              id="btn-before"
              className="btn btn-primary btn-block btn-large w-full"
            >
              Regresar
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Brain;
