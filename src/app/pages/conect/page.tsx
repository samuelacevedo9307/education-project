"use client";

import Link from "next/link";

const BrainQuiz: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="p-10 text-4xl text-white">Hola </h1>
        <div className="w-full h-min flex justify-center items-center p-10">
          <a
            href="https://meet.google.com/pgy-bnbq-seg"
            className="btn btn-primary btn-block btn-large mt-10 w-full"
          >
            Ir a la clase
          </a>
        </div>
        <div className="w-full h-min flex justify-center items-center p-10">
          <Link
            href="/dashboard"
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
