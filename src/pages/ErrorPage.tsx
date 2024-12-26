import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed flex flex-col overflow-hidden justify-center items-center p-4">
            <h1 className="font-pedagogique text-[#ee97af] text-center text-[clamp(15rem, 40vw, 12rem)]">Oops! Página no encontrada.</h1>
        </div>
    );
};

export default ErrorPage;