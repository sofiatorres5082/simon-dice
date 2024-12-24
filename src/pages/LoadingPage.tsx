interface LoadingPageProps {
    isLoading: boolean;
  }
  
  const LoadingPage: React.FC<LoadingPageProps> = ({ isLoading }) => {
    return (
        <div
      className={`fixed inset-0 bg-[#ee97af] flex justify-center items-center z-50 transition-opacity duration-700 ${
        isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[clamp(80px,15vw,120px)] aspect-square -translate-y-8">
        <img
          src="/images/star2.png"
          alt="loading"
          className="w-full h-full object-contain animate-rotateCenter"
        />
      </div>
    </div>
    );
  };
  
  export default LoadingPage;