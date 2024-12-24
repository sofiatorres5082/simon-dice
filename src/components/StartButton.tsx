import React from "react";
import PlayIcon from "/images/PlayIcon.png";

interface StartButtonProps {
  onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
    <button
      className="absolute w-24 h-24 flex items-center justify-center rounded-full transform transition-all hover:scale-110"
      onClick={onClick}
    >
      <img src={PlayIcon} alt="Play Icon" className="w-20 h-20" />
    </button>
  );
};

export default StartButton;