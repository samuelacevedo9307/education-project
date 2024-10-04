"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register: React.FC = () => {
  const [fullName, setFullName] = useState(''); // Estado para guardar el nombre completo
  const [cedula, setCedula] = useState(''); // Estado para guardar el documento
  const [email, setEmail] = useState(''); // Estado para guardar el correo
  const [password, setPassword] = useState(''); // Estado para guardar la contraseña
  const [loading, setLoading] = useState(false); // Estado para controlar la pantalla de carga
  const router = useRouter(); // Instancia de useRouter para redirección

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    setLoading(true); // Activar pantalla de carga

    setTimeout(() => {
      // Guardar la información en localStorage
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('cedula', cedula);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      // Redireccionar al dashboard
      router.push('/pages/avatar');
    }, 2000); // Simular un retraso de 2 segundos
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <h1 className='p-10 text-4xl'>Registrando...</h1>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <div className="login">
        <div className='h-full w-full flex flex-col justify-center items-center'>
          <img src="/assets/img/Genius.png" alt="logo" className='w-44 h-40'/>
        </div>
        <h1 className='p-10 text-4xl'>Registro</h1>
        <form method="post" className='form-register' onSubmit={handleRegister}>
          <label className='p-2'>Documento de identidad</label>
          <input
            type="number"
            name="cedula"
            placeholder="Documento"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)} // Actualiza el estado al escribir en el input
            required
          />
          <label className='p-2'>Nombre Completo</label>
          <input
            type="text"
            name="fullName"
            placeholder="Nombre"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} // Actualiza el estado al escribir en el input
            required
          />
          <label className='p-2'>Correo Electronico</label>
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado al escribir en el input
            required
          />
          <label className='p-2'>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado al escribir en el input
            required
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Registrar
          </button>
          <p className='underline-offset-0 p-5 text-white font-medium'>
            ¿Ya tienes cuenta? <a href="/" className='pl-2 cursor-pointer font-bold'>Ir al login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
