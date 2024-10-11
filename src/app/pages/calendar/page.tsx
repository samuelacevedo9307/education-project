"use client";
import Link from "next/link";
const BrainQuiz: React.FC = () => {
  return (
    <div className="h-full bg-[#353535]">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="p-10 text-4xl text-white">Bienvenido (a) al calendario</h1>
        <div className="w-full ">
          <img
            src="/assets/img/calendar.png"
            alt="calendar"
            className="h-full w-full p-10"
          />
        </div>
        <div className="w-full h-min flex justify-center items-center p-20">
        <Link href="/pages/dashboard" className="w-full flex justify-center items-center m-10">
          <button className="btn btn-primary btn-block btn-large">
            Regresar
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default BrainQuiz;
