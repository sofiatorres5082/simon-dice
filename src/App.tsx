import { Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

const MainPage = lazy(() => import("./pages/MainPage"));
const GamePage = lazy(() => import("./pages/GamePage"));
const LoadingPage = lazy(() => import("./pages/LoadingPage"));

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/game");
    }, 1500); 
  };

  const handleBackToMain = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div>
    {isLoading && <LoadingPage />}
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<MainPage onStart={handleStart} />} />
        <Route path="/game" element={<GamePage onBack={handleBackToMain} />} />
      </Routes>
    </Suspense>
  </div>
  );
}

export default App;
