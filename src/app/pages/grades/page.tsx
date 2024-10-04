"use client";

import React from "react";

const evaluaciones = [
  {
    materia: "Matemáticas",
    fecha: "15 de Noviembre, 2024",
    hora: "09:00 AM",
    aula: "Aula 101",
  },
  {
    materia: "Español",
    fecha: "17 de Noviembre, 2024",
    hora: "10:30 AM",
    aula: "Aula 203",
  },
  {
    materia: "Inglés",
    fecha: "20 de Noviembre, 2024",
    hora: "11:00 AM",
    aula: "Laboratorio de Idiomas",
  },
  {
    materia: "Geografía",
    fecha: "22 de Noviembre, 2024",
    hora: "02:00 PM",
    aula: "Aula 305",
  },
  {
    materia: "Historia",
    fecha: "24 de Noviembre, 2024",
    hora: "03:30 PM",
    aula: "Auditorio Principal",
  },
  {
    materia: "Inteligencia Artificial",
    fecha: "27 de Noviembre, 2024",
    hora: "01:00 PM",
    aula: "Laboratorio de Computación",
  },
];

const AgendaEvaluaciones: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col w-full h-fit justify-center items-center">
        <h1 className="p-5 text-4xl text-white">Bienvenido(a)</h1>
      </div>
      <h1 style={{ color: "#fff", textAlign: "center" }}>
        Agenda de Evaluaciones Finales
      </h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "12px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#CCCCCC",
                color: "#333",
              }}
            >
              Materia
            </th>
            <th
              style={{
                padding: "12px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#CCCCCC",
                color: "#333",
              }}
            >
              Fecha
            </th>
            <th
              style={{
                padding: "12px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#CCCCCC",
                color: "#333",
              }}
            >
              Hora
            </th>
            <th
              style={{
                padding: "12px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#CCCCCC",
                color: "#333",
              }}
            >
              Aula
            </th>
          </tr>
        </thead>
        <tbody>
          {evaluaciones.map((evaluacion, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {evaluacion.materia}
              </td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {evaluacion.fecha}
              </td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {evaluacion.hora}
              </td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {evaluacion.aula}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full h-min flex justify-center items-center p-20">
        <button
          id="btn-before"
          className="btn btn-primary btn-block btn-large mt-10  "
        >
          <a href="/pages/dashboard" className="w-full">
            Regresar
          </a>
        </button>
      </div>
    </div>
  );
};

export default AgendaEvaluaciones;
