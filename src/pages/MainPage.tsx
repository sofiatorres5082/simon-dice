import React, { useState, useCallback } from "react";
import { useGameStore } from "../store/gameStore";
import Modal from "../components/Modal";
import CustomSelect from "../components/CustomSelect";

interface MainPageProps {
  onStart: () => void;
}

interface ModalContent {
  title: string;
  content: { label: string; value: string; icon?: string }[];
  type: "config" | "howToPlay";
}

const MainPage: React.FC<MainPageProps> = ({ onStart }) => {
  const { gameLevel, setGameLevel } = useGameStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const levelOptions = [
    { value: "facil", label: "Fácil" },
    { value: "medio", label: "Medio" },
    { value: "dificil", label: "Difícil" },
  ];

  const handleLevelChange = (level: string) => {
    setGameLevel(level);
    setModalContent((prevContent) => ({
      ...prevContent!,
      content: prevContent!.content.map((item) =>
        item.label === "Nivel de juego" ? { ...item, value: level } : item
      ),
    }));
  };

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsModalOpen(false);
    }, 300);
  }, []);

  const openConfigModal = () => {
    setModalContent({
      title: "Configuración",
      content: [
        {
          label: "Nivel de juego",
          value: gameLevel,
          icon: "/images/star3.png",
        },
      ],
      type: "config",
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
      type: "howToPlay",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-[100dvh] bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed flex flex-col overflow-hidden justify-center items-center">
      {/* Estrellas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Estrellas lado izquierdo - mezcladas */}
        <img
          src="/images/star3.png"
          className="absolute w-6 h-6 md:w-8 md:h-8 animate-starFloat top-[2%] left-[1%] md:left-[2%] lg:left-[4%]"
        />
        <img
          src="/images/star3.png"
          className="absolute w-8 h-8 md:w-10 md:h-10 animate-starPulse top-[15%] left-[20%] md:left-[25%] lg:left-[28%]"
        />
        <img
          src="/images/star3.png"
          className="absolute w-5 h-5 md:w-6 md:h-6 animate-infiniteFloat1 top-[35%] left-[2%] md:left-[3%] lg:left-[5%]"
        />
        <img
          src="/images/star3.png"
          className="absolute w-7 h-7 md:w-8 md:h-8 animate-starFloat top-[55%] left-[15%] md:left-[18%] lg:left-[22%]"
        />
        <img
          src="/images/star3.png"
          className="absolute w-6 h-6 md:w-7 md:h-7 animate-starPulse top-[85%] left-[1%] md:left-[4%] lg:left-[6%]"
        />

        {/* Nuevas estrellas intermedias izquierda */}
        <img
          src="/images/star2.png"
          className="absolute w-4 h-4 md:w-5 md:h-5 animate-starTwinkle top-[25%] left-[8%] md:left-[12%] lg:left-[15%]"
        />
        <img
          src="/images/star2.png"
          className="absolute w-5 h-5 md:w-6 md:h-6 animate-starSpin top-[70%] left-[25%] md:left-[28%] lg:left-[32%]"
        />

        {/* Estrellas lado derecho - mezcladas */}
        <img
          src="/images/star3.png"
          className="absolute w-10 h-10 md:w-12 md:h-12 animate-starFloat top-[4%] right-[2%] md:right-[4%] lg:right-[6%]"
        />
        <img
          src="/images/star3.png"
          className="absolute w-8 h-8 md:w-9 md:h-9 animate-starPulse top-[22%] right-[18%] md:right-[22%] lg:right-[25%]"
        />
        <img
          src="/images/star3.png"
          className="absolute w-6 h-6 md:w-8 md:h-8 animate-starTwinkle top-[45%] right-[1%] md:right-[3%] lg:right-[5%]"
        />
        <img
          src="/images/star3.png"
          className="absolute w-8 h-8 md:w-10 md:h-10 animate-starFloat top-[60%] right-[22%] md:right-[25%] lg:right-[28%]"
        />
        <img
          src="/images/star3.png"
          className="absolute w-5 h-5 md:w-6 md:h-6 animate-starPulse top-[90%] right-[2%] md:right-[4%] lg:right-[7%]"
        />

        {/* Nuevas estrellas intermedias derecha */}
        <img
          src="/images/star2.png"
          className="absolute w-4 h-4 md:w-5 md:h-5 animate-starTwinkle top-[30%] right-[12%] md:right-[15%] lg:right-[18%]"
        />
        <img
          src="/images/star2.png"
          className="absolute w-5 h-5 md:w-6 md:h-6 animate-starSpin top-[75%] right-[15%] md:right-[18%] lg:right-[20%]"
        />
      </div>

      {/* Contenedor central con logo y botones */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-col items-center justify-center z-10">
        {/* Logo Simon Dice */}
        <div className="w-[85%] max-w-[450px] min-w-[250px] transition-all duration-300 mb-8">
          <img
            src="/images/SimonDiceLogo.png"
            alt="logo"
            className="w-full h-auto"
          />
        </div>

        {/* Contenedor de botones */}
        <div className="flex flex-col space-y-4 w-[80%] max-w-[220px] transition-all duration-300">
          <button
            onClick={onStart}
            className="bg-[#ee97af] font-pedagogique text-white text-center text-[clamp(0.5rem,3vw,1rem)] py-1 border-4 border-white rounded-full transform transition-all duration-300 hover:scale-110"
          >
            Jugar
          </button>
          <button
            className="font-pedagogique text-[#ee97af] text-center 
                     text-[clamp(0.5rem,3vw,1rem)] py-1
                     border-4 border-[#ee97af] rounded-full 
                     transform transition-all duration-300 
                     hover:scale-110"
            onClick={openConfigModal}
          >
            Configuracion
          </button>
          <button
            className="font-pedagogique text-[#ee97af] text-center 
                     text-[clamp(0.5rem,3vw,1rem)] py-1
                     border-4 border-[#ee97af] rounded-full 
                     transform transition-all duration-300 
                     hover:scale-110"
            onClick={openHowToPlayModal}
          >
            Como jugar
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={closeModal}
          isClosing={isClosing}
        >
          {modalContent.type === "config" && (
            <div className="p-4 flex justify-center">
              <CustomSelect
                value={gameLevel}
                onChange={handleLevelChange}
                options={levelOptions}
              />
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default MainPage;