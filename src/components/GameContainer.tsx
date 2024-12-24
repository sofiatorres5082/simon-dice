import { ReactNode } from "react";

interface GameContainerProps {
  children: ReactNode;
}

const GameContainer = ({ children }: GameContainerProps) => {
  return (
    <div className="relative w-[clamp(280px,95vw,400px)] h-[clamp(280px,95vw,400px)] transition-all duration-300">
      {/* Capa base */}
      <div className="bg-[#414141] absolute inset-0 rounded-3xl ">
        {/* Contenedor de los botones */}
        <div className="relative w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default GameContainer;
