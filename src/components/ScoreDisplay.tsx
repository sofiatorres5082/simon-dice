import React from "react";

interface ScoreDisplayProps {
  score: number;
  isGameActive: boolean;
  playerInputLength: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, isGameActive, playerInputLength }) => {
  return (
    <p>
      {isGameActive ? (
        <>
          Puntaje: <span className="font-bold">{score}</span>
        </>
      ) : (
        <>
          {playerInputLength === 0
            ? "¡Preparate para jugar!"
            : "Juego terminado. Puntaje final:"}{" "}
          <span className="font-bold">{score}</span>
        </>
      )}
    </p>
  );
};

export default ScoreDisplay;