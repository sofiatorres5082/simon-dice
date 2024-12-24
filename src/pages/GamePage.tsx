import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";

import SimonButton from "../components/SimonButton";
import ScoreDisplay from "../components/ScoreDisplay";
import SequenceDisplay from "../components/SequenceDisplay";
import StartButton from "../components/StartButton";
import GameContainer from "../components/GameContainer";

const colorMap: { [key: number]: string } = {
  0: "bg-[#eb80aa]",
  1: "bg-[#ed91cd]",
  2: "bg-[#f0a8d9]",
  3: "bg-[#df5577]",
};

const GamePage = () => {
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
  } = useGameStore();

  // Función para iniciar el juego.
  const handleStartGame = () => {
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

  // Efecto para iniciar el juego automáticamente cuando cambia el estado
  useEffect(() => {
    if (isGameActive) {
      sequence.forEach((num, index) => {
        setTimeout(() => {
          console.log(`Parpadeo del botón: ${num}`);
        }, index * 1000);
      });
    }
  }, [isGameActive, sequence]);

  return (
    <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed overflow-hidden ">
      {/* Puntuación */}
      <div className="mb-10">
        <ScoreDisplay
          score={score}
          isGameActive={isGameActive}
          playerInputLength={playerInput.length}
        />
      </div>

      <div className="flex flex-col justify-center items-center ">
        {/* Botones del juego */}
        <GameContainer>
          {Object.keys(colorMap).map((key) => (
            <SimonButton
              key={key}
              color={colorMap[parseInt(key)]}
              index={parseInt(key)}
              onClick={() => handlePlayerInput(parseInt(key))}
            />
          ))}
          {!isGameActive && (
            <div className="absolute flex items-center justify-center rounded-full z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <StartButton onClick={handleStartGame} />
            </div>
          )}
        </GameContainer>

        <Link
          to="/"
          className="mt-10 font-vividly text-[#ee97af] text-center 
                   text-[clamp(1rem,4vw,1.5rem)] py-0.5 px-4
                   border-4 border-[#ee97af] rounded-full 
                   transform transition-all duration-300 
                   hover:scale-110"
        >
          Volver al Inicio
        </Link>

        {/* Mostrar secuencia de juego */}
        <SequenceDisplay sequence={sequence} isGameActive={isGameActive} />
      </div>
    </div>
  );
};

export default GamePage;
