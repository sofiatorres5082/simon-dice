import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed flex flex-col overflow-hidden justify-center items-center">
      {/* Logo Simon Dice */}
      <div className="w-[300px] md:w-[450px]">
        <img src="/images/SimonDiceLogo.png" alt="logo" />
      </div>

      {/* Botones */}
      <div className="flex flex-col space-y-4 mt-6 w-56">
        <Link
          to="/game"
          className="bg-[#f3cdf8] font-vividly text-[#7e656e] text-center text-2xl border-4 border-[#947781] rounded-full transform transition-all hover:scale-110"
        >
          jugar
        </Link>
        <button
          className="bg-[#f3cdf8] font-vividly text-[#7e656e] text-center text-2xl border-4 border-[#947781] rounded-full transform transition-all hover:scale-110"
          onClick={() => alert("Configuración en progreso...")}
        >
          Configuracion
        </button>
        <button
          className="bg-[#f3cdf8] font-vividly text-[#7e656e] text-center text-2xl border-4 border-[#947781] rounded-full transform transition-all hover:scale-110"
          onClick={() => alert("Modal como jugar.")}
        >
          Como jugar
        </button>
      </div>
    </div>
  );
};

export default MainPage;
