import React, { useEffect } from "react";

interface ModalProps {
  title: string;
  content: { label: string; value: string; icon?: string }[];
  onClose: () => void;
  isClosing: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  onClose,
  isClosing,
}) => {
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <div
    className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 p-4 sm:p-6 ${
      isClosing ? "animate-fadeOut" : "animate-fadeIn"
    }`}
  >
    <div
      className={`bg-[#292929] rounded-lg p-4 sm:p-6 w-full max-w-[95%] sm:max-w-md border-2 sm:border-4 border-[#df6c8d] transform relative ${
        isClosing ? "animate-zoomOut" : "animate-zoomCenter"
      }`}
    >
      {/* Botón de cierre */}
      <button
        className="absolute top-1 sm:top-2 right-1 sm:right-2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center transition-all duration-300"
        onClick={onClose}
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
      <h2 className="border-2 border-white font-pedagogique text-white text-center text-sm sm:text-base bg-[#df6c8d] rounded-full py-1 max-w-[60%] sm:max-w-[45%] mx-auto tracking-wider select-none">
        {title}
      </h2>

      {/* Contenido: Reglas */}
      <div className="space-y-3 sm:space-y-4 mt-4">
        {content.map((item, index) => (
          <div key={index} className="flex items-start gap-2 sm:gap-3">
            {item.icon && (
              <img 
                src={item.icon} 
                alt="Icon" 
                className="w-5 h-5 sm:w-7 sm:h-7 mt-0.5" 
              />
            )}
            <div>
              <p className="font-pedagogique text-sm sm:text-[15px] text-[#df6c8d] select-none leading-snug">
                {item.label}
              </p>
              <p className="font-pedagogique text-sm sm:text-[15px] text-white select-none leading-snug">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Modal;
