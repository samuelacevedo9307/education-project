"use client";
import React, { useState } from "react";

const Slider: React.FC = () => {
  // Array de las rutas de las imágenes
  const images = [
    "/assets/icons/indi1.png",
    "/assets/icons/indi2.png",
    "/assets/icons/indi3.png",
    "/assets/icons/indi4.png",
  ];

  // Estado para controlar la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Estado para controlar si la imagen ha sido seleccionada
  const [selected, setSelected] = useState(false);

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Función para ir a la imagen siguiente
  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Función para seleccionar la imagen
  const handleSelect = () => {
    setSelected(true); // Cuando se selecciona, cambia el estado
  };

  return (
    <div className="flex flex-col w-full h-5/5 justify-center items-center">
      <h1 className="p-5 text-4xl text-white">Escoge tu avatar</h1>
      <button className="btn btn-primary btn-block btn-large">
        <a href="/pages/dashboard" className="w-full">
          Regresar
        </a>
      </button>

      <div className="h-max w-full container-materials p-10 flex items-center justify-center">
        {/* Botón para la imagen anterior*/}
        {!selected && (
          <button onClick={prevSlide}>
            <img
              src="/assets/icons/prev-arrow.png"
              alt="flechaAtras"
              className="w-12 h-12" // Tamaño pequeño de la flecha
            />
          </button>
        )}

        {/* Imagen actual del slider */}
        <img
          src={images[currentIndex]}
          alt="icon"
          className={`w-h-96 h-96 cursor-pointer ${
            selected ? "w-72 h-64 " : ""
          }`} // Aplica el tamaño más pequeño si está seleccionada
          onClick={handleSelect}
        />

        {/* Botón para la imagen siguiente  */}
        {!selected && (
          <button onClick={nextSlide}>
            <img
              src="/assets/icons/next-arrow.png"
              alt="flechaDelante"
              className="w-12 h-12" // Tamaño pequeño de la flecha
            />
          </button>
        )}
      </div>

      {/* Botón de seleccionar*/}
      {!selected && (
        <div className="w-2/3 flex justify-center items-center">
          <button
            className="btn btn-primary btn-block btn-large"
            onClick={handleSelect}
          >
            Seleccionar
          </button>
        </div>
      )}

      <div className="contain-info-indi w-4/5 flex flex-col justify-center items-center p-20">
        <h2 className="text-white text-2xl font-bold mb-4">
          Los Guna Yala: Guardianes del Mar
        </h2>
        <h2 className="text-white text-2xl font-bold mb-4">
          Por que nuestros pueblos indígenas también merecen tener oportunidades
        </h2>
        <img
          src="/assets/img/img-guna.jpeg"
          alt="imgGuna"
          className="p-10 h-2/4 w-2/4"
        />
        {/* Audio */}
        <audio controls className="mt-4 mb-10">
          <source
            src="/assets/video/cancion-guna.mp3"
            type="audio/mpeg"
            className=""
          />
          Tu navegador no soporta la reproducción de audio.
        </audio>
        <p className="text-white">
          Los Guna Yala, también conocidos como Kuna, son un pueblo indígena que
          habita en el archipiélago de San Blas, en Panamá. Famosos por sus
          coloridas molas, estas artesanías textiles son un símbolo de su rica
          cultura.
        </p>
        <br />
        <p className="text-white">
          Los Guna Yala mantienen una estrecha relación con el mar, del cual
          obtienen su sustento a través de la pesca y la recolección de
          mariscos. Su cosmovisión se centra en el equilibrio entre la
          naturaleza y los seres humanos.
        </p>
        <br />
        <ul className="list-disc text-white">
          <li>**Molas:** Un arte textil único y ancestral.</li>
          <li>**Comarcas:** Gobernanza autónoma en sus territorios.</li>
          <li>
            **Conservación:** Compromiso con la protección del medio ambiente.
          </li>
        </ul>
      </div>

      <video
        src="/assets/video/lenguage.mp4"
        autoPlay
        loop
        muted
        className="fixed bottom-1 right-5 w-52 h-52 object-cover"
        playsInline
      />
    </div>
  );
};

export default Slider;
