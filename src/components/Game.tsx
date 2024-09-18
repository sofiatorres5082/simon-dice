import React, { useEffect, useReducer, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

// Estado inicial para el juego
const initPlay = {
  isDisplay: false,
  score: 0,
  userPlay: false,
};

const initialState = {
  gameStatus: "notStarted",
  play: initPlay,
  sequence: [] as number[],
  userSequence: [] as number[],
};

// Reducer para manejar el estado del juego
function reducer(state, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameStatus: "inProgress",
        play: initPlay,
        userSequence: [],
        score: 0,
      };

    case "RESTART_GAME":
      return {
        ...state,
        gameStatus: "notStarted", // Cambiar el estado del juego a no iniciado
        play: initPlay,
        sequence: [],
        userSequence: [],
        score: 0,
      };

    case "GAME_OVER":
      return {
        ...state,
        gameStatus: "gameOver",
        play: initPlay,
        sequence: [],
        userSequence: [],
      };

    case "SET_SEQUENCE":
      return {
        ...state,
        sequence: [...state.sequence, action.payload],
        play: { ...state.play, isDisplay: true, userPlay: false },
      };

    case "SET_USER_SEQUENCE":
      return {
        ...state,
        userSequence: action.payload,
      };

    case "INCREASE_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };

    case "SET_USER_PLAY":
      return {
        ...state,
        play: { ...state.play, isDisplay: false, userPlay: true },
      };

    default:
      return state;
  }
}

export default function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [flashIndex, setFlashIndex] = useState<number | null>(null);
  const [maxScore, setMaxScore] = useState(0);
  const [difficulty, setDifficulty] = useState(1000);
  const [selectedLevel, setSelectedLevel] = useState("facil");
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showGameOverModal, setGameOverModal] = useState(false);

  // Maneja el inicio del juego
  function startHandle() {
    dispatch({ type: "START_GAME" });
    generateSequence();
  }

  // Genera una nueva secuencia de botones
  function generateSequence() {
    const randomNum = Math.floor(Math.random() * 4);
    dispatch({ type: "SET_SEQUENCE", payload: randomNum });
  }

  // Efecto para mostrar la secuencia de botones
  useEffect(() => {
    if (state.play.isDisplay && state.sequence.length) {
      let i = 0;

      const intervalId = setInterval(() => {
        setFlashIndex(state.sequence[i]);
        setTimeout(() => {
          setFlashIndex(null);
        }, 500);

        i++;

        if (i >= state.sequence.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            dispatch({ type: "SET_USER_PLAY" });
          }, 500);
        }
      }, difficulty);

      return () => clearInterval(intervalId);
    }
  }, [state.play.isDisplay, state.sequence, difficulty]);

  // Efecto para mostrar el modal de fin de juego
  useEffect(() => {
    if (state.gameStatus === "gameOver") {
      setGameOverModal(true);
    }
  }, [state.gameStatus]);

  // Maneja el clic en un botón de la secuencia
  function handleButtonClick(index: number) {
    if (state.play.userPlay) {
      const newUserSequence = [...state.userSequence, index];
      dispatch({ type: "SET_USER_SEQUENCE", payload: newUserSequence });
      checkUserSequence(newUserSequence);
    }
  }

  // Verifica si la secuencia del usuario es correcta
  function checkUserSequence(newUserSequence: number[]) {
    const currentSequence = state.sequence.slice(0, newUserSequence.length);
    if (newUserSequence.every((num, i) => num === currentSequence[i])) {
      if (newUserSequence.length === state.sequence.length) {
        dispatch({ type: "INCREASE_SCORE" });
        if (state.score + 1 > maxScore) {
          setMaxScore(state.score + 1);
        }
        dispatch({ type: "SET_USER_SEQUENCE", payload: [] });
        generateSequence();
      }
    } else {
      dispatch({ type: "GAME_OVER" });
    }
  }

  // Maneja la selección de nivel de dificultad
  function handleLevelSelect(config: string) {
    setSelectedLevel(config);
    switch (config) {
      case "facil":
        setDifficulty(1000);
        break;
      case "medio":
        setDifficulty(700);
        break;
      case "dificil":
        setDifficulty(560);
        break;
      default:
        setDifficulty(1000);
    }
  }

  // Reinicia el juego al cerrar el modal de "Game Over"
  function handleGameOverModalClose() {
    setGameOverModal(false);
    dispatch({ type: "RESTART_GAME" }); // Reinicia el estado del juego
  }

  return (
    <>
      <div className="container">
        <div className="max-score">
          <p>MAXIMA PUNTUACION: {maxScore}</p>
        </div>
        <div className="config">
          <button
            className="config-btn"
            onClick={() => setShowConfigModal(true)}
          >
            Configuracion
          </button>
        </div>
      </div>

      <div className="principal-title-container">
        <h1 className="principal-title">SIMON DICE</h1>
      </div>

      <div className="game">
        <div className="game-board">
          {[0, 1, 2, 3].map((num) => (
            <Button
              key={num}
              index={num}
              flash={flashIndex === num}
              onClick={() => handleButtonClick(num)}
            />
          ))}
        </div>
        <div className="score">{state.score}</div>
      </div>
      <div className="start-button-container">
        {state.gameStatus === "notStarted" && !state.play.score && (
          <button onClick={startHandle} className="startButton">
            Jugar
          </button>
        )}
      </div>

      <Modal
        showModal={showGameOverModal}
        onClose={handleGameOverModalClose} // Usa la función modificada para cerrar el modal
        title={<h2 className="game-over-title">GAME OVER</h2>}
      >
        <div className="puntuacion">
          <p>Tu puntuacion fue: {state.score}</p>
        </div>
        <div className="restart-container">
          <button
            className="restart-button"
            onClick={() => {
              setGameOverModal(false);
              dispatch({ type: "RESTART_GAME" });
              generateSequence();
            }}
          >
            Reiniciar
          </button>
        </div>
      </Modal>

      <Modal
        showModal={showConfigModal}
        onClose={() => setShowConfigModal(false)}
        title={<h2 className="config-title">CONFIGURACION</h2>}
      >
        <div className="config-buttons-container">
          <button
            className={`config-button ${
              selectedLevel === "facil" ? "config-button-active" : ""
            }`}
            onClick={() => handleLevelSelect("facil")}
          >
            Facil
          </button>
          <button
            className={`config-button ${
              selectedLevel === "medio" ? "config-button-active" : ""
            }`}
            onClick={() => handleLevelSelect("medio")}
          >
            Medio
          </button>
          <button
            className={`config-button ${
              selectedLevel === "dificil" ? "config-button-active" : ""
            }`}
            onClick={() => handleLevelSelect("dificil")}
          >
            Dificil
          </button>
        </div>
      </Modal>
    </>
  );
}
