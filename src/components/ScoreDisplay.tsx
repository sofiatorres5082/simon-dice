import React, { useEffect } from "react";

interface ScoreDisplayProps {
  maxScore: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ maxScore }) => {
  useEffect(() => {
    console.log("Max score updated:", maxScore);
  }, [maxScore]);

  return (
    <div className="text-center font-pedagogique text-white space-y-2">
      <p className="text-[clamp(1rem, 3vw, 1.5rem)]">
        Máxima puntuación: <span className="text-white">{maxScore}</span>
      </p>
    </div>
  );
};

export default ScoreDisplay;
