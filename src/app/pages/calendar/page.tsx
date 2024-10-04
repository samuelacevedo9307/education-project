"use client";

const BrainQuiz: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="p-10 text-4xl text-white">Bienvenido</h1>
        <div className="w-full h-full">
          <img
            src="/assets/img/calendar.png"
            alt="calendar"
            className="h-full w-full"
          />
        </div>
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
    </div>
  );
};

export default BrainQuiz;
