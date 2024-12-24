import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed flex flex-col overflow-hidden justify-center items-center">
      {/* Logo Simon Dice - con transición suave */}
      <div className="w-[70%] max-w-[450px] min-w-[250px] transition-all duration-300">
        <img 
          src="/images/SimonDiceLogo.png" 
          alt="logo"
          className="w-full h-auto" 
        />
      </div>

      {/* Contenedor de botones */}
      <div className="flex flex-col space-y-4 mt-6 w-[80%] max-w-[220px] transition-all duration-300">
        <Link
          to="/game"
          className="bg-[#ee97af] font-vividly text-white text-center 
                   text-[clamp(1rem,4vw,1.5rem)] py-0.5 
                   border-4 border-white rounded-full 
                   transform transition-all duration-300 
                   hover:scale-110"
        >
          jugar
        </Link>
        <button
          className="font-vividly text-[#ee97af] text-center 
                   text-[clamp(1rem,4vw,1.5rem)] py-0.5
                   border-4 border-[#ee97af] rounded-full 
                   transform transition-all duration-300 
                   hover:scale-110"
          onClick={() => alert("Configuración en progreso...")}
        >
          Configuracion
        </button>
        <button
          className="font-vividly text-[#ee97af] text-center 
                   text-[clamp(1rem,4vw,1.5rem)] py-0.5
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
