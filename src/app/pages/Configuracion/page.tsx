"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

interface ConfigItem {
  icon: string;
  text: string;
}

interface ConfigSection {
  title: string;
  icon: string;
  items: ConfigItem[];
}

const configSections: ConfigSection[] = [
  {
    title: "Perfil de Usuario",
    icon: "fas fa-user",
    items: [
      { icon: "fas fa-edit", text: "Editar información personal" },
      { icon: "fas fa-key", text: "Cambiar contraseña" },
    ],
  },
  {
    title: "Notificaciones",
    icon: "fas fa-bell",
    items: [
      { icon: "fas fa-envelope", text: "Configurar alertas por correo" },
      { icon: "fas fa-mobile-alt", text: "Configurar notificaciones móviles" },
    ],
  },
  {
    title: "Privacidad",
    icon: "fas fa-lock",
    items: [
      { icon: "fas fa-eye", text: "Visibilidad del perfil" },
      { icon: "fas fa-share-alt", text: "Opciones de compartir" },
    ],
  },
  {
    title: "Configuración del Curso",
    icon: "fas fa-book",
    items: [
      { icon: "fas fa-palette", text: "Personalizar apariencia" },
      { icon: "fas fa-cog", text: "Ajustes de calificación" },
    ],
  },
];

const languages = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "guna", name: "Guna Yala" },
];

const ConfigItem: React.FC<{ item: ConfigItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        padding: "5px",
        borderRadius: "5px",
        backgroundColor: isHovered ? "#e0e0e0" : "transparent",
        transition: "background-color 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i
        className={item.icon}
        style={{ marginRight: "10px", color: "#3498db" }}
      ></i>
      {item.text}
    </div>
  );
};

const ConfiguracionPlataforma: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        margin: 0,
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Head>
        <title>Configuración de Plataforma Educativa</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#333", textAlign: "center" }}>
          Configuración de Plataforma Educativa
        </h1>

        {configSections.map((section, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "#f9f9f9",
              borderRadius: "5px",
            }}
          >
            <h2 style={{ marginTop: 0, color: "#2c3e50" }}>
              <i className={section.icon}></i> {section.title}
            </h2>
            {section.items.map((item, itemIndex) => (
              <ConfigItem key={itemIndex} item={item} />
            ))}
          </div>
        ))}

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2>
            <i className="fas fa-language"></i> Seleccionar Idioma
          </h2>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full h-min flex justify-center items-center p-20">
        <Link href="/pages/dashboard" className="w-full flex justify-center items-center">
          <button className="btn btn-primary btn-block btn-large">
            Regresar
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracionPlataforma;
