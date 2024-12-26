import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

const MainPage = lazy(() => import("./pages/MainPage"));
const GamePage = lazy(() => import("./pages/GamePage"));
const LoadingPage = lazy(() => import("./pages/LoadingPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(false);
  }, [location]);

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 800);
  };

  return (
    <div>
      <LoadingPage isLoading={isLoading} />
      <Suspense fallback={<LoadingPage isLoading={isLoading} />}>
        <Routes>
          <Route
            path="/"
            element={<MainPage onStart={() => handleNavigation("/game")} />}
          />
          <Route
            path="/game"
            element={
              <GamePage
                onBack={() => handleNavigation("/")}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
