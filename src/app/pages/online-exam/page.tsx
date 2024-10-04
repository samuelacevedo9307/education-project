import React from "react";

interface Examen {
  id: number;
  materia: string;
  estado: "pendiente" | "en-progreso" | "completado";
  countdown: string;
  duracion: string;
  temas: string[];
}

const examenes: Examen[] = [
  {
    id: 1,
    materia: "Matemáticas Avanzadas",
    estado: "pendiente",
    countdown: "Comienza en: 2 días 5 horas",
    duracion: "2 horas",
    temas: ["Cálculo diferencial", "Álgebra lineal"],
  },
  {
    id: 2,
    materia: "Literatura Contemporánea",
    estado: "en-progreso",
    countdown: "En progreso: 1 hora 30 min restantes",
    duracion: "3 horas",
    temas: ["Narrativa del siglo XX", "Poesía moderna"],
  },
  {
    id: 3,
    materia: "Física Cuántica",
    estado: "completado",
    countdown: "Finalizado: hace 2 días",
    duracion: "2.5 horas",
    temas: ["Mecánica cuántica", "Principio de incertidumbre"],
  },
];

const ExamenCard: React.FC<{ examen: Examen }> = ({ examen }) => {
  const getStatusStyle = (estado: string) => {
    switch (estado) {
      case "pendiente":
        return { backgroundColor: "#f1c40f", color: "#34495e" };
      case "en-progreso":
        return { backgroundColor: "#e74c3c", color: "#fff" };
      case "completado":
        return { backgroundColor: "#2ecc71", color: "#fff" };
      default:
        return {};
    }
  };

  const getButtonText = (estado: string) => {
    switch (estado) {
      case "pendiente":
        return "Ver detalles";
      case "en-progreso":
        return "Continuar examen";
      case "completado":
        return "Ver resultados";
      default:
        return "Ver examen";
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <h1 className="p-5 text-4xl text-white">Bienvenido(a)</h1>
      </div>
      <div
        style={{
          backgroundColor: "#3498db",
          color: "#fff",
          padding: "15px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {examen.materia}
      </div>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <span style={{ fontSize: "14px", color: "#7f8c8d" }}>
            {examen.countdown}
          </span>
          <span
            style={{
              padding: "5px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              ...getStatusStyle(examen.estado),
            }}
          >
            {examen.estado.charAt(0).toUpperCase() + examen.estado.slice(1)}
          </span>
        </div>
        <p>Duración: {examen.duracion}</p>
        <p>Temas: {examen.temas.join(", ")}</p>
        <button
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {getButtonText(examen.estado)}
        </button>
      </div>
    </div>
  );
};

export default function ExamenesEnLinea() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        margin: 0,
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1
        style={{ color: "#2c3e50", textAlign: "center", marginBottom: "30px" }}
      >
        Exámenes en Línea
      </h1>
      {examenes.map((examen) => (
        <ExamenCard key={examen.id} examen={examen} />
      ))}
    </div>
  );
}
