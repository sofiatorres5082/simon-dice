import { create } from "zustand";

type GameState = {
  score: number; // Puntuación actual del jugador.
  sequence: number[]; // Secuencia generada por el juego.
  playerInput: number[]; // Input del jugador.
  isGameActive: boolean; // ¿El juego está en curso?
  startGame: () => void; // Función para iniciar el juego.
  endGame: () => void; // Función para terminar el juego.
  addToSequence: (num: number) => void; // Agregar número a la secuencia.
  addPlayerInput: (num: number) => void; // Agregar input del jugador.
  resetInput: () => void; // Limpiar el input del jugador.
  incrementScore: () => void; // Incrementar la puntuación.
};

// Creamos el store usando el tipo `GameState`.
export const useGameStore = create<GameState>((set) => ({
  // Estado inicial del juego.
  score: 0,
  sequence: [],
  playerInput: [],
  isGameActive: false,

  // Funciones para manipular el estado.
  startGame: () =>
    set({ isGameActive: true, score: 0, sequence: [], playerInput: [] }),
  endGame: () => set({ isGameActive: false }),
  addToSequence: (num) =>
    set((state) => ({ sequence: [...state.sequence, num] })),
  addPlayerInput: (num) =>
    set((state) => ({ playerInput: [...state.playerInput, num] })),
  resetInput: () => set({ playerInput: [] }),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
}));
