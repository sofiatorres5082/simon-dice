import React, { useEffect, useState } from "react";

interface MainModalProps {
  title: string;
  closeModal: () => void;
  isClosing: boolean;
  children?: React.ReactNode;
}

const MainModal: React.FC<MainModalProps> = ({
  title,
  closeModal,
  isClosing,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Controla el cierre del modal
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsVisible(false); // Ocultar el modal después de la animación
        closeModal(); // Llamar a closeModal después de que la animación termine
      }, 300); // Tiempo de la animación de cierre
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true); // Asegura que el modal sea visible cuando no está cerrándose
    }
  }, [isClosing, closeModal]);

  return (
    <div
    className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 p-4 sm:p-6 ${
      isClosing ? "animate-fadeOut" : "animate-fadeIn"
    }`}
  >
    {isVisible && (
      <div
        className={`bg-[#292929] rounded-lg p-6 sm:p-10 w-full max-w-[95%] sm:max-w-md border-2 sm:border-4 border-[#eb97af] transform relative ${
          isClosing ? "animate-zoomOut" : "animate-zoomCenter"
        }`}
      >
        {/* Botón de cierre */}
        <button
          className="absolute top-1 sm:top-2 right-1 sm:right-2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center transition-all duration-300"
          onClick={closeModal}
          aria-label="Cerrar"
        >
          <span className="text-[#ee97af] hover:text-[#d3597c] text-2xl sm:text-3xl font-bold">
            &times;
          </span>
        </button>

        {/* Decoraciones */}
        <img
          src="/images/highlight1.png"
          className="absolute block top-[10%] -left-[5%] w-[8%] sm:w-[8%] aspect-square z-10 transform rotate-[-5deg] min-w-[24px]"
        />
        <img
          src="/images/highlight1.png"
          className="absolute block -top-[3%] -right-[4%] w-[7%] sm:w-[8%] aspect-square z-10 transform rotate-[10deg] min-w-[20px]"
        />
        <img
          src="/images/highlight1.png"
          className="absolute block top-[60%] -right-[5%] w-[8%] sm:w-[8%] aspect-square z-10 min-w-[24px]"
        />

        {/* Título */}
        <h2
          className="border-2 border-[#ffd8e3] 
                      font-pedagogique text-white text-center 
                      text-sm xs:text-base sm:text-lg 
                      bg-[#df6c8d] rounded-full 
                      py-0.5 xs:py-1 
                      max-w-[70%] xs:max-w-[65%] sm:max-w-[60%] md:max-w-[50%] 
                      mx-auto tracking-wider select-none"
        >
          {title}
        </h2>

        <div className="mt-6 xs:mt-7 sm:mt-8 px-2 xs:px-3 sm:px-4">
          {children}
        </div>
      </div>
    )}
  </div>
  );
};

export default MainModal;
