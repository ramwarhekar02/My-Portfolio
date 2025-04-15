import React from 'react';

const Banner = () => {
  return (
    <div className='relative w-full h-screen bg-[radial-gradient(circle,_#130F40_10%,_#12100E_90%)] select-none'>
      <div className='relative w-full h-full max-w-[1400px] mx-auto'>
        <div className='absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center leading-none'>
          <h1 className='text-[#B7AB98] uppercase font-semibold font-[Nunito_Sans] text-xl py-4 hover-cursor-scale md:text-xl lg:text-2xl'>
            Hey There, I am
          </h1>
          <h1 className='text-[8vw] text-[#EB5939] font-[Nunito_Sans] font-black uppercase hover-cursor-scale md:text-[5vw] lg:text-[8vw]'>
            Ram Warhekar
          </h1>
          <h1 className='text-[6vw] text-[#B7AB98] font-[Nunito_Sans] font-black hover-cursor-scale md:text-[3vw] lg:text-[4vw]'>
            MERN STACK
          </h1>
          <h1 className='text-[5vw] text-[#B7AB98] font-[Nunito_Sans] font-black md:text-[3vw] lg:text-[3vw]'>
            DEVELOPER
          </h1>

          {/* Button group */}
          <div className='flex justify-center gap-4 mt-7 flex-wrap'>
            <a 
              href="#contact"
              className='text-[#B7AB98] px-6 py-3 rounded-4xl border md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-3 lg:text-base transition duration-300 hover:bg-[#B7AB98] hover:text-[#12100E]'
            >
              Get in Touch
            </a>
            <a 
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#B7AB98] px-6 py-3 rounded-4xl border md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-3 lg:text-base transition duration-300 hover:border-none hover:bg-[#EB5939] hover:text-white'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
