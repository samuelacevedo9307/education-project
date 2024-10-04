"use client";

const BrainQuiz: React.FC = () => {
  const fullName = localStorage.getItem("fullName");

  return (
    <div className="h-screen w-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="p-10 text-4xl text-white">Hola, {fullName}</h1>
        <div className="w-full h-min flex justify-center items-center p-10">
          <button
            id="btn-before"
            className="btn btn-primary btn-block btn-large mt-10 w-full "
          >
            <a href="https://meet.google.com/pgy-bnbq-seg" className="w-full">
              Ir a la clase
            </a>
          </button>
        </div>
        <div className="w-full h-min flex justify-center items-center p-10">
          <button
            id="btn-before"
            className="btn btn-primary btn-block btn-large mt-10 w-full "
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
