"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [cedula, setCedula] = useState(""); // Estado para guardar el documento
  const [password, setPassword] = useState(""); // Estado para guardar la contraseña
  const [loading, setLoading] = useState(false); // Estado para controlar la pantalla de carga
  const router = useRouter(); // Instancia de useRouter para redirección

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    setLoading(true); // Activar pantalla de carga

    setTimeout(() => {
      // Obtener los datos almacenados en localStorage
      const storedCedula = localStorage.getItem("cedula");
      const storedPassword = localStorage.getItem("password");

      // Validar los datos ingresados
      if (cedula === storedCedula && password === storedPassword) {
        router.push("/pages/avatar"); // Redirigir al avatar si los datos coinciden
      } else {
        alert("Documento o contraseña incorrectos");
        setLoading(false); // Desactivar la pantalla de carga si hay error
      }
    }, 2000); // Simular un retraso de 2 segundos
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <h1 className="p-10 text-4xl">Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="h-40 w-auto">
        <img
          src="/assets/img/Genius.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="login">
        <form
          method="post"
          className="form-login flex flex-col justify-center items-center"
          onSubmit={handleLogin}
        >
          <label className="p-2">Documento de identidad</label>
          <input
            type="number"
            name="cedula"
            placeholder="Documento"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)} // Actualiza el estado al escribir en el input
            required
          />
          <label className="p-2">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado al escribir en el input
            required
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Ingresar
          </button>
          <p className="underline-offset-0 p-5 text-white font-medium">
            ¿Aun no tienes cuenta?{" "}
            <a href="/pages/register" className="pl-2 cursor-pointer font-bold">
              Registrarse
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
