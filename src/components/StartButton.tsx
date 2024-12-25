import React from "react";
import PlayIcon from "/images/PlayIcon.png";

interface StartButtonProps {
  onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
    <button
    className="relative w-[30%] h-[30%] min-w-[60px] min-h-[60px] sm:min-w-[80px] sm:min-h-[80px] max-w-[140px] max-h-[140px] sm:max-w-[160px] sm:max-h-[160px] aspect-square flex items-center justify-center rounded-full transform transition-all hover:scale-110 active:scale-95"
    onClick={onClick}
  >
    <img src={PlayIcon} alt="Play Icon" className="w-[80%] h-[80%] object-contain" />
  </button>
  );
};

export default StartButton;
