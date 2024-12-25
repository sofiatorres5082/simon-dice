import React, { useState, useCallback } from "react";
import Modal from "../components/Modal";

interface MainPageProps {
  onStart: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onStart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: { label: string; value: string; icon?: string }[];
  } | null>(null);

  const openConfigModal = () => {
    setModalContent({
      title: "Configuración",
      content: [
        { label: "Opción 1", value: "Valor de opción 1" },
        { label: "Opción 2", value: "Valor de opción 2" },
      ],
    });
    setIsModalOpen(true); 
  };

  const openHowToPlayModal = () => {
    setModalContent({
      title: "Cómo jugar",
      content: [
        {
          label: "Paso 1",
          icon: "/images/star3.png",
          value: "Presta atención a la secuencia de colores",
        },
        {
          label: "Paso 2",
          icon: "/images/star4.png",
          value: "Repite la secuencia correctamente",
        },
        {
          label: "Paso 3",
          icon: "/images/star5.png",
          value: "Cada ronda añade un nuevo color",
        },
      ],
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(false);
    setIsModalOpen(false);
  };

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300); 
  }, []);

  return (
    <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed flex flex-col overflow-hidden justify-center items-center">
      {/* Logo Simon Dice */}
      <div className="w-[85%] max-w-[450px] min-w-[250px] transition-all duration-300">
        <img
          src="/images/SimonDiceLogo.png"
          alt="logo"
          className="w-full h-auto"
        />
      </div>

      {/* Contenedor de botones */}
      <div className="flex flex-col space-y-4 mt-6 w-[80%] max-w-[220px] transition-all duration-300">
        <button
          onClick={onStart}
          className="bg-[#ee97af] font-pedagogique text-white text-center text-[clamp(1rem, 4vw, 1.25rem)] py-1 border-4 border-white rounded-full transform transition-all duration-300 hover:scale-110"
        >
          Jugar
        </button>
        <button
          className="font-pedagogique text-[#ee97af] text-center 
                   text-[clamp(1rem, 4vw, 1.25rem)] py-1
                   border-4 border-[#ee97af] rounded-full 
                   transform transition-all duration-300 
                   hover:scale-110"
          onClick={openConfigModal}
        >
          Configuracion
        </button>
        <button
          className="font-pedagogique text-[#ee97af] text-center 
                   text-[clamp(1rem, 4vw, 1.25rem)] py-1
                   border-4 border-[#ee97af] rounded-full 
                   transform transition-all duration-300 
                   hover:scale-110"
          onClick={openHowToPlayModal}
        >
          Como jugar
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={handleClose}
          isClosing={isClosing}
        />
      )}
    </div>
  );
};

export default MainPage;
