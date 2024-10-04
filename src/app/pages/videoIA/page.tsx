"use client";

import Link from "next/link";

const BrainQuiz: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="p-10 text-4xl text-white">Tareas </h1>
        <div>
          <video width="600" height="600" controls>
            <source src="/assets/video/videoia.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
          <input type="file" className="w-fit bg-gray" />
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
