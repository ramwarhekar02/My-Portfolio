import React, { useState } from 'react';

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    window.location.href = '/'; 
  };

  return (
    <div className="w-full h-screen bg-[#0D0D0D] flex flex-col justify-center items-center text-center text-[#B7AB98]">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader border-t-[#EB5939]"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      ) : (
        <button
          onClick={handleStart}
          className="px-6 py-3 bg-[#EB5939] text-white font-bold uppercase rounded-full hover:bg-[#B7432E] transition duration-300"
        >
          Start
        </button>
      )}

      <style>
        {`
          .loader {
            width: 80px;
            height: 80px;
            border: 8px solid #B7AB98;
            border-radius: 50%;
            border-top-color: #EB5939;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPage;