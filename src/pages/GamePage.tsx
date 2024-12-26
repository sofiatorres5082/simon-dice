import { useCallback, useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";

import SimonButton from "../components/SimonButton";
import ScoreDisplay from "../components/ScoreDisplay";
import StartButton from "../components/StartButton";
import GameContainer from "../components/GameContainer";
import LoadingPage from "./LoadingPage";
import GameOverModal from "../components/GameOverModal";

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
    gameLevel,
  } = useGameStore();

  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isShowingSequence, setIsShowingSequence] = useState(false);

  useEffect(() => {
    const prepareGame = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsReady(true);
      setIsLoading(false);
    };

    prepareGame();
  }, [setIsLoading]);

  const handleStartGame = () => {
    resetGame();
    startGame();
    setIsGameOver(false);
    setTimeout(() => {
      addToSequence(Math.floor(Math.random() * 4));
    }, 100);
  };

  const handlePlayerInput = (num: number) => {
    if (!isGameActive || isShowingSequence) return;

    addPlayerInput(num);
    const newPlayerInput = [...playerInput, num];

    if (
      newPlayerInput[newPlayerInput.length - 1] !==
      sequence[newPlayerInput.length - 1]
    ) {
      endGame();
      setIsGameOver(true);
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

  const closeModal = () => {
    setIsClosing(false);
    setIsGameOver(false);
  };

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  }, []);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (isGameActive) {
      setIsShowingSequence(true);
      const timers: NodeJS.Timeout[] = [];

      const delay =
        gameLevel === "facil" ? 1500 : gameLevel === "medio" ? 1000 : 500;

      sequence.forEach((num, index) => {
        const timer = setTimeout(() => {
          setActiveButton(num);
          setTimeout(
            () => {
              setActiveButton(null);
              if (index === sequence.length - 1) {
                setIsShowingSequence(false);
              }
            },
            gameLevel === "dificil" ? 300 : 500
          );
        }, index * delay);
        timers.push(timer);
      });

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [isGameActive, sequence, gameLevel]);

  if (!isReady) {
    return <LoadingPage isLoading={!isReady} />;
  }

  return (
    <div className="min-h-[100dvh] bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed overflow-hidden">
      {isGameOver && (
        <GameOverModal
          score={score}
          onClose={handleClose}
          onRestart={handleStartGame}
          isClosing={isClosing}
        />
      )}
      <div className="absolute top-0 left-0 m-4">
        <ScoreDisplay maxScore={maxScore} />
      </div>
      <div className="max-w-4xl mx-auto flex flex-col items-center pt-20">
        <div className="flex flex-col items-center gap-10 w-full max-w-md px-4">
          <GameContainer isGameActive={isGameActive} score={score}>
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
              <div className="absolute flex items-center justify-center w-[15%] h-[15%] rounded-full z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <StartButton onClick={handleStartGame} />
              </div>
            )}
          </GameContainer>
          <button
            onClick={onBack}
            className="font-pedagogique text-[#ee97af] border-4 border-[#ee97af] rounded-full transform transition-all duration-300 hover:scale-110 py-1.5 px-4"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
