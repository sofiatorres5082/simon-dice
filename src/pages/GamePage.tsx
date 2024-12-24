import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";

import SimonButton from "../components/SimonButton";
import ScoreDisplay from "../components/ScoreDisplay";
import StartButton from "../components/StartButton";
import GameContainer from "../components/GameContainer";

interface GamePageProps {
  onBack: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ onBack }) => {
  const {
    score,
    sequence,
    playerInput,
    isGameActive,
    startGame,
    endGame,
    addToSequence,
    addPlayerInput,
    resetInput,
    incrementScore,
    resetGame,
  } = useGameStore();

  const [activeButton, setActiveButton] = useState<number | null>(null);

  // Función para iniciar el juego.
  const handleStartGame = () => {
    resetGame(); // Reinicia el juego antes de iniciar una nueva partida
    startGame();
    setTimeout(() => {
      addToSequence(Math.floor(Math.random() * 4));
    }, 100);
  };

  // Función para manejar el input del jugador
  const handlePlayerInput = (num: number) => {
    addPlayerInput(num);
    const newPlayerInput = [...playerInput, num];

    if (
      newPlayerInput[newPlayerInput.length - 1] !==
      sequence[newPlayerInput.length - 1]
    ) {
      endGame();
      return;
    }

    if (newPlayerInput.length === sequence.length) {
      incrementScore();
      resetInput();
      setTimeout(() => {
        addToSequence(Math.floor(Math.random() * 4));
      }, 1000);
    }
  };

  useEffect(() => {
    resetGame(); // Reiniciar el juego cuando el componente se monte
  }, []);

  // Efecto para iniciar el juego automáticamente cuando cambia el estado
  useEffect(() => {
    if (isGameActive) {
      const timers: NodeJS.Timeout[] = [];

      sequence.forEach((num, index) => {
        const timer = setTimeout(() => {
          setActiveButton(num);
          setTimeout(() => {
            setActiveButton(null);
          }, 500);
        }, index * 1000);
        timers.push(timer);
      });

      // Limpia los temporizadores cuando el efecto se desmonta o cambia
      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [isGameActive, sequence]);

  return (
    <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed overflow-hidden">
      {/* Puntuación */}
      <div className="mb-10">
        <ScoreDisplay
          score={score}
          isGameActive={isGameActive}
          playerInputLength={playerInput.length}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {/* Botones del juego */}
        <GameContainer isGameActive={isGameActive} score={score}>
          <SimonButton
            color="bg-[#ee99b1]"
            index={0}
            onClick={() => handlePlayerInput(0)}
            isActive={activeButton === 0}
          />
          <SimonButton
            color="bg-[#b299ee]"
            index={1}
            onClick={() => handlePlayerInput(1)}
            isActive={activeButton === 1}
          />
          <SimonButton
            color="bg-[#da99ee]"
            index={2}
            onClick={() => handlePlayerInput(2)}
            isActive={activeButton === 2}
          />
          <SimonButton
            color="bg-[#9f99ee]"
            index={3}
            onClick={() => handlePlayerInput(3)}
            isActive={activeButton === 3}
          />
          {!isGameActive && (
            <div className="absolute flex items-center justify-center rounded-full z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <StartButton onClick={handleStartGame} />
            </div>
          )}
        </GameContainer>

        <button
          onClick={onBack}
          className="mt-10 font-vividly text-[#ee97af] text-center text-[clamp(1rem,4vw,1.5rem)] py-0.5 px-4 border-4 border-[#ee97af] rounded-full transform transition-all duration-300 hover:scale-110"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default GamePage;
