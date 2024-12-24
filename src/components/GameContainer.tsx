import { ReactNode } from "react";

interface GameContainerProps {
  children: ReactNode;
  isGameActive: boolean;
  score: number;
}

const GameContainer = ({
  children,
  isGameActive,
  score,
}: GameContainerProps) => {
  return (
    <div className="relative w-[clamp(280px,95vw,400px)] h-[clamp(280px,95vw,400px)] transition-all duration-300">
      {/* Capa base */}
      <div className="bg-[#414141] absolute inset-0 rounded-3xl">
        {/* Contenedor de los botones */}
        <div className="relative w-full h-full">
          {children}
          <div className="absolute flex items-center justify-center w-28 h-28 rounded-full bg-[#414141] z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {isGameActive ? (
              <span className="text-white text-3xl font-bubblegum">{score}</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameContainer;