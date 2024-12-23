import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";

const colorMap: { [key: number]: string } = {
  0: "bg-red-500",
  1: "bg-green-500",
  2: "bg-blue-500",
  3: "bg-yellow-500",
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

    // Verificar si el jugador ha fallado
    if (
      newPlayerInput[newPlayerInput.length - 1] !==
      sequence[newPlayerInput.length - 1]
    ) {
      endGame();
      return;
    }

    // Si el jugador ha completado la secuencia correctamente
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
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-3xl font-bold text-white mb-6">Juego Simon Dice</h1>

      {/* Estado del juego y puntuacion */}
      {isGameActive ? (
        <p>
          Puntaje: <span className="font-bold">{score}</span>
        </p>
      ) : (
        <p>
          {playerInput.length === 0
            ? "¡Preparate para jugar!"
            : "Juego terminado. Puntaje final:"}{" "}
          <span className="font-bold">{score}</span>
        </p>
      )}

      {/* Botones del juego */}
      <div className="relative w-64 h-64 rounded-full bg-gray-800 flex items-center justify-center">
        {["Red", "Green", "Blue", "Yellow"].map((_color, index) => (
          <button
            key={index}
            className={`absolute w-1/2 h-1/2 ${colorMap[index]} text-white`}
            style={{
              transformOrigin: "center",
              transform: `rotate(${index * 90}deg) translate(50%) rotate(-${
                index * 90
              }deg)`,
            }}
            onClick={() => handlePlayerInput(index)}
          ></button>
        ))}
      </div>
      {/* Botón de comenzar */}
      {!isGameActive && (
        <button
          className="absolute w-16 h-16 bg-white text-gray-800 text-center text-sm rounded-full transform transition-all hover:scale-110"
          onClick={handleStartGame}
        >
          Comenzar
        </button>
      )}

      <Link
        to="/"
        className="mt-4 bg-[#f3cdf8] font-vividly text-[#947781] text-center text-2xl border-4 border-[#947781] rounded-full transform transition-all hover:scale-110 py-2"
      >
        Volver al Inicio
      </Link>

      {/* Mostrar secuencia de juego */}
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
    </div>
  );
};

export default GamePage;
