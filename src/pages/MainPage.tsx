import React from "react";

interface MainPageProps {
  onStart: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed flex flex-col overflow-hidden justify-center items-center">
      {/* Logo Simon Dice - con transición suave */}
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
          onClick={() => alert("Configuración en progreso...")}
        >
          Configuracion
        </button>
        <button
          className="font-pedagogique text-[#ee97af] text-center 
                   text-[clamp(1rem, 4vw, 1.25rem)] py-1
                   border-4 border-[#ee97af] rounded-full 
                   transform transition-all duration-300 
                   hover:scale-110"
          onClick={() => alert("Modal como jugar.")}
        >
          Como jugar
        </button>
      </div>
    </div>
  );
};

export default MainPage;
