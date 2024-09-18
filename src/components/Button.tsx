import React from "react";

const colors = ["#f181aa", "#fd92cd", "#f1a8d9", "#df5577"];
const flashColors = ["#f3dee6", "#f8f0f4", "#f8ebf4", "#f3e8ea"];

interface ButtonProps {
  index: number;
  onClick: () => void;
  flash: boolean;
}

export default function Button({ index, onClick, flash }: ButtonProps) {
  return (
    <button
      className="button-board"
      style={{
        backgroundColor: flash ? flashColors[index] : colors[index], // Cambia de color cuando está "flasheando"
        transition: "background-color 0.2s ease", 
      }}
      onClick={onClick}
    ></button>
  );
}
