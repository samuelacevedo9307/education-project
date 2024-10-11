"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const BrainQuiz: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Estado para saber si el video está reproduciéndose

  const handlePlayPauseVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pausar el video
        setIsPlaying(false); // Cambiar el estado a "no está reproduciéndose"
      } else {
        videoRef.current.muted = false; // Activar sonido
        videoRef.current.play(); // Reproducir el video
        setIsPlaying(true); // Cambiar el estado a "reproduciéndose"
      }
    }
  };

  return (
    <div className="h-screen w-full">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="p-10 text-4xl text-white">Tareas</h1>
        <div>
          {/* Video inicializa en mute */}
          <video
            ref={videoRef}
            src="/assets/video/profe.mp4"
            muted
            loop
            width="600"
            height="600"
            controls={false} // No mostrar controles del video
          />
          <div className="w-full h-min flex justify-center items-center p-5">
            {/* Botón para alternar reproducción y pausa del video */}
            <button
              onClick={handlePlayPauseVideo}
              className="btn btn-primary btn-block btn-large "
            >
              {isPlaying ? "Detener IA" : "Habla con la IA"}
            </button>
          </div>
          <h3 className="text-white text-2xl text-center p-5">
            Ingresa tu tarea aquí
          </h3>
          <input type="file" className="w-full bg-gray" />
        </div>

        <div className="w-full h-min flex justify-center items-center p-10">
          <Link
            href="/pages/dashboard"
            className="btn btn-primary btn-block btn-large mt-10 w-full"
          >
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrainQuiz;
