import { useEffect, useState } from 'react';

const LoadingPage = () => {
    const [fadeClass, setFadeClass] = useState('opacity-100');

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeClass('opacity-0');
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-[#ee97af] flex justify-center items-center z-50 transition-opacity duration-1000 ${fadeClass} animate-fadeIn`}
        >
            <img
                src="/images/star2.png"
                alt="loading"
                className="w-24 mb-24 animate-rotateCenter"
            />
        </div>
    );
};

export default LoadingPage;