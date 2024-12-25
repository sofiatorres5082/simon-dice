import { create } from "zustand";

type GameState = {
  score: number; 
  maxScore: number; 
  sequence: number[]; 
  playerInput: number[]; 
  isGameActive: boolean; 
  startGame: () => void; 
  endGame: () => void; 
  addToSequence: (num: number) => void; 
  addPlayerInput: (num: number) => void; 
  resetInput: () => void; 
  incrementScore: () => void; 
  resetGame: () => void;
};

export const useGameStore = create<GameState>((set) => ({
  score: 0,
  maxScore: parseInt(localStorage.getItem("maxScore") || "0", 10),
  sequence: [],
  playerInput: [],
  isGameActive: false,

  startGame: () =>
    set({ isGameActive: true, score: 0, sequence: [], playerInput: [] }),
  endGame: () =>
    set((state) => {
      if (state.score > state.maxScore) {
        localStorage.setItem("maxScore", state.score.toString());
        return { isGameActive: false, maxScore: state.score };
      }
      return { isGameActive: false };
    }),
  addToSequence: (num) =>
    set((state) => ({ sequence: [...state.sequence, num] })),
  addPlayerInput: (num) =>
    set((state) => ({ playerInput: [...state.playerInput, num] })),
  resetInput: () => set({ playerInput: [] }),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  resetGame: () =>
    set((state) => ({
      ...state,
      score: 0,
      sequence: [],
      playerInput: [],
      isGameActive: false,
    })),
}));
