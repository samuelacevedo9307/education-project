"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifica si el usuario no está registrado
    const fullName = localStorage.getItem("fullName");
    if (!fullName) {
      router.push("/pages/register"); // Redirige a la página de registro si no hay nombre completo
    }
  }, [router]);

  // Obtén el nombre completo del localStorage para mostrarlo
  const fullName = localStorage.getItem("fullName");

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="p-5 text-4xl text-white">Bienvenido(a), {fullName}</h1>
      <button className="btn btn-primary btn-block btn-large">
        <a href="/pages/dashboard" className="w-full">
          Siguiente
        </a>
      </button>
      <div className=" h-screen w-full container-materials p-10">
        <iframe
          src="https://readyplayer.me/avatar?id=66ff29ccaacffe0b867f372d"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
