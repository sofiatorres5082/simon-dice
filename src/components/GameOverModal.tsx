import React, { useEffect } from "react";

interface GameOverModalProps {
  score: number;
  onClose: () => void;
  onRestart: () => void;
  isClosing: boolean;
}

const GameOverModal: React.FC<GameOverModalProps> = ({
  score,
  onClose,
  onRestart,
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
        className={`bg-[#292929] rounded-lg p-4 sm:p-10 w-full max-w-[95%] sm:max-w-md border-2 sm:border-4 border-[#df6c8d] transform relative ${
          isClosing ? "animate-zoomOut" : "animate-zoomCenter"
        }`}
      >
        <button
          className="absolute top-1 sm:top-2 right-1 sm:right-2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center transition-all duration-300"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <span className="text-[#ee97af] hover:text-[#d3597c] text-2xl sm:text-3xl font-bold">
            &times;
          </span>
        </button>

        <img
          src="/images/star4.png"
          className="absolute block top-[10%] -left-[5%] w-[8%] sm:w-[8%] aspect-square z-10 transform rotate-[-5deg] min-w-[24px]"
        />
        <img
          src="/images/star3.png"
          className="absolute block -top-[3%] -right-[4%] w-[7%] sm:w-[8%] aspect-square z-10 transform rotate-[10deg] min-w-[20px]"
        />
        <img
          src="/images/star5.png"
          className="absolute block top-[60%] -right-[5%] w-[8%] sm:w-[8%] aspect-square z-10 min-w-[24px]"
        />

        <h2 className="font-bubblegum text-[#d3597c] text-center text-lg sm:text-3xl rounded-full py-1 max-w-[80%] sm:max-w-[80%] mx-auto tracking-wider select-none">
          UPS! te equivocaste
        </h2>
        <p className="text-center mt-4 text-sm sm:text-lg text-[#df6c8d] font-pedagogique">
          Tu puntuación:{" "}
          <span className="text-white font-pedagogique">{score}</span>
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={onRestart}
            className="border-2 border-[#ffd8e3] font-pedagogique text-white text-center text-xs sm:text-base bg-[#df6c8d] py-0.5 px-4 max-w-[60%] sm:max-w-[45%] mx-auto tracking-wider rounded-full transform transition-all duration-300 hover:scale-110"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
