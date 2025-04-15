import React from 'react';

const Banner = () => {
  return (
    <div className='relative w-full h-screen bg-[radial-gradient(circle,_#130F40_10%,_#12100E_90%)] select-none'>
      <div className='relative w-full h-full max-w-[1400px] mx-auto'>
        <div className='absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center leading-none'>
          <h1 className='text-[#B7AB98] uppercase font-semibold font-[Nunito_Sans] text-lg py-4 hover-cursor-scale md:text-xl lg:text-2xl'>Hey There, I am</h1>
          <h1 className='text-[6vw] text-[#EB5939] font-[Nunito_Sans] font-black uppercase hover-cursor-scale md:text-[5vw] lg:text-[4vw]'>Ram Warhekar</h1>
          <h1 className='text-[4vw] text-[#B7AB98] font-[Nunito_Sans] font-black hover-cursor-scale md:text-[3vw] lg:text-[2.5vw]'>MERN STACK</h1>
          <h1 className='text-[4vw] text-[#B7AB98] font-[Nunito_Sans] font-black md:text-[3vw] lg:text-[2.5vw]'>DEVELOPER</h1>
          <button className='text-[#B7AB98] px-6 py-3 cursor-pointer rounded-4xl border mt-7 md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-3 lg:text-base'>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );  
};

export default Banner;
