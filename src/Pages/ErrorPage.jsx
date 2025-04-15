import React from 'react';

const ErrorPage = () => {
  return (
    <div className="w-full h-screen bg-[#0D0D0D] flex flex-col justify-center items-center text-center text-[#B7AB98]">
      <h1 className="text-[8vw] font-black text-[#EB5939]">404</h1>
      <p className="text-lg md:text-2xl mt-4">Oops! The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="mt-8 px-6 py-3 bg-[#EB5939] text-white font-bold uppercase rounded-full hover:bg-[#B7432E] transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;