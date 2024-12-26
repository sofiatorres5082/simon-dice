import React from 'react';
import './ErrorPage.css';

const ErrorPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[url('/images/SimonDiceBackground.png')] bg-cover bg-center bg-fixed flex flex-col overflow-hidden justify-center items-center">
            <h1 className="font-pedagogique text-[#ee97af] ">Oops! Página no encontrada.</h1>
        </div>
    );
};

export default ErrorPage;