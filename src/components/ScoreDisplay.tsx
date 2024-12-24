import React from "react";

interface ScoreDisplayProps {
  score: number;
  isGameActive: boolean;
  playerInputLength: number;
  maxScore: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  isGameActive,
  playerInputLength,
  maxScore,
}) => {
  return (
    <div className="text-center font-pedagogique text-white space-y-2">
      <p className="text-[clamp(1rem, 3vw, 1.5rem)]">
        máxima puntuación: <span className="text-white">{maxScore}</span>
      </p>
    </div>
  );
};

export default ScoreDisplay;
