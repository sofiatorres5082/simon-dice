import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";

import SimonButton from "../components/SimonButton";
import ScoreDisplay from "../components/ScoreDisplay";
import StartButton from "../components/StartButton";
import GameContainer from "../components/GameContainer";
import LoadingPage from "./LoadingPage";

interface GamePageProps {
  onBack: () => void;
  setIsLoading: (isLoading: boolean) => void;
}

const GamePage: React.FC<GamePageProps> = ({ onBack, setIsLoading }) => {
  const {
    score,
    maxScore,
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simular preparación de la página del juego
    const prepareGame = async () => {
      setIsLoading(true); // Activamos la pantalla de carga
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de carga
      setIsReady(true);
      setIsLoading(false); // Desactivamos la pantalla de carga
    };

    prepareGame();
  }, [setIsLoading]);

  const handleStartGame = () => {
    resetGame();
    startGame();
    setTimeout(() => {
      addToSequence(Math.floor(Math.random() * 4));
    }, 100);
  };

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
    resetGame();
  }, []);

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

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [isGameActive, sequence]);

 if (!isReady) {
    return <LoadingPage isLoading={!isReady} />;
  }
  
  return (
    <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed overflow-hidden">
      {/* Puntuación */}
      <div className="absolute top-0 left-0 m-4">
        <ScoreDisplay
          score={score}
          isGameActive={isGameActive}
          playerInputLength={playerInput.length}
          maxScore={maxScore}
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center pt-20">
        <div className="flex flex-col items-center gap-10 w-full max-w-md px-4">
          {/* Contenedor del juego */}
          <GameContainer isGameActive={isGameActive} score={score}>
            {/* Botones del juego */}
            {[0, 1, 2, 3].map((num) => (
              <SimonButton
                key={num}
                color={
                  [
                    "bg-[#ee94b2]",
                    "bg-[#e05b7a]",
                    "bg-[#ea7e9c]",
                    "bg-[#e25d90]",
                  ][num]
                }
                index={num}
                onClick={() => handlePlayerInput(num)}
                isActive={activeButton === num}
              />
            ))}

            {!isGameActive && (
              <div className="absolute flex items-center justify-center w-[15%] h-[15%] sm:w-[20%] sm:h-[20%] min-w-[30px] min-h-[30px] sm:min-w-[50px] sm:min-h-[50px] max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] rounded-full z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <StartButton onClick={handleStartGame} />
              </div>
            )}
          </GameContainer>

          <button
            onClick={onBack}
            className="font-vividly text-[#ee97af] text-[clamp(1rem,4vw,1.5rem)]
            py-1 px-8 border-4 border-[#ee97af] rounded-full
            transform transition-all duration-300
            hover:scale-110 active:scale-95
            md:hover:scale-105"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
