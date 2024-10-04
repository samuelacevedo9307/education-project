"use client";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-max justify-center items-center">
      <h1 className="p-5 text-4xl text-white">Bienvenido(a)</h1>
      <button className="btn btn-primary btn-block btn-large">
        <a href="/pages/dashboard" className="w-full">
          Siguiente
        </a>
      </button>
      <div className="h-screen w-full container-materials p-10">
        <iframe
          src="https://readyplayer.me/avatar?id=66ff29ccaacffe0b867f372d"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
