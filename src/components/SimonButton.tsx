import React, { useState } from "react";

interface SimonButtonProps {
  color: string;
  index: number;
  onClick: () => void;
  isActive: boolean;
}

const SimonButton: React.FC<SimonButtonProps> = ({
  color,
  index,
  onClick,
  isActive,
}) => {
  const [isPressed, setIsPressed] = useState(false); 

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

  const btnFlash = [
    "bg-[#f189c1] shadow-[0_0_120px_rgb(241,137,193)]",
    "bg-[#e05b7a] shadow-[0_0_120px_rgb(224,91,122)]",
    "bg-[#ea7e9c] shadow-[0_0_120px_rgb(234,126,156)]",
    "bg-[#e25d90] shadow-[0_0_120px_rgb(226,93,144)]",
  ];

  const handleClick = () => {
    setIsPressed(true); 
    onClick(); 

    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <button
      className={`absolute w-[42%] h-[42%] ${color} ${borderRadius[index]} 
        ${
          isActive || isPressed 
            ? `${btnFlash[index]} brightness-125 scale-105 opacity-90`
            : ""
        } 
        hover:brightness-110 transition-all duration-300`}
      style={positions[index]}
      onClick={handleClick}
    ></button>
  );
};

export default SimonButton;

