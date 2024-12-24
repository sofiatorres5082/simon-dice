import React from "react";

interface ScoreDisplayProps {
  score: number;
  isGameActive: boolean;
  playerInputLength: number;
  maxScore: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, isGameActive, playerInputLength, maxScore }) => {
  return (
    <div>
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
      <p>
        Puntuación Máxima: <span className="font-bold">{maxScore}</span>
      </p>
    </div>
  );
};

export default ScoreDisplay;