import React from "react";

interface SequenceDisplayProps {
  sequence: number[];
  isGameActive: boolean;
}

const SequenceDisplay: React.FC<SequenceDisplayProps> = ({ sequence, isGameActive }) => {
  return (
    <div className="mt-6">
      <p>
        Secuencia:{" "}
        {isGameActive
          ? sequence.map((num, index) => (
              <span
                key={index}
                className={`mx-2 px-2 py-1 rounded bg-gray-700 text-sm`}
              >
                {["Rojo", "Verde", "Azul", "Amarillo"][num]}
              </span>
            ))
          : "El juego no está activo."}
      </p>
    </div>
  );
};

export default SequenceDisplay;