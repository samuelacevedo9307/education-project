import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <h2>Inicia sesión</h2>
      <div>
        <input type="text" placeholder="Cédula o correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <Link href="/dashboard">
          <button>Iniciar</button>
        </Link>
        <p style={{ textDecoration: 'underline' }}>
          ¿Has olvidado tu contraseña?
        </p>
        <span>
          <Link href="/register">Ir a registro</Link>
        </span>
      </div>
    </div>
  );
}
