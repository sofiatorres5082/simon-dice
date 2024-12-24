import React from "react";

interface SimonButtonProps {
  color: string;
  index: number;
  onClick: () => void;
}

const SimonButton: React.FC<SimonButtonProps> = ({ color, index, onClick }) => {
  const borderRadius = [
    "rounded-3xl",
    "rounded-3xl",
    "rounded-3xl",
    "rounded-3xl",
  ];

  const positions = [
    { top: "5%", left: "5%" },
    { top: "5%", right: "5%" },
    { bottom: "5%", right: "5%" },
    { bottom: "5%", left: "5%" },
  ];

  return (
    <button
      className={`absolute w-[42%] h-[42%] ${color} ${borderRadius[index]} hover:brightness-110 transition-all duration-200`}
      style={positions[index]}
      onClick={onClick}
    ></button>
  );
};

export default SimonButton;
