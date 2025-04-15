import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const aboutRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef}>
      <div id="about" className="relative w-full px-2 py-7 bg-[#0D0D0D]">
        <div className="w-full  mx-auto max-w-[1150px] p-4 sm:p-6 md:p-8 " >
          <h1
            ref={headingRef}
            className="text-[#B7AB98] uppercase tracking-widest font-[Nunito_Sans] text-sm sm:text-base md:text-lg py-4"
          >
            About Me
          </h1>
          <div className="w-full  h-full text-start leading-none flex items-center justify-center">
            <p
              ref={paragraphRef}
              className="text-[#B7AB98] text-[6vw] sm:text-[5vw] md:text-[4.5vw] font-bold tracking-tight"
            >
              I' am <span className="text-[#EB5939] hover-cursor-scale">Creative Full-Stack</span> Developer building user-focused web solutions. Expert in MERN stack and reliable freelance partnerships.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:py-10 bg-[#0D0D0D] py-2 px-4 sm:px-6">
        <div>
          <h1 className="text-[#B7AB98] uppercase max-w-[1000px] mx-auto tracking-widest font-[Nunito_Sans] text-sm sm:text-base md:text-lg py-2 md:py-10">
            What I Do
          </h1>

          <div className="w-full pb-20">
            {[
              { title: 'Custom', desc: 'Tailored web solutions for unique business needs.' },
              { title: 'Scalable', desc: 'Built to grow with user and content demands.' },
              { title: 'Secure', desc: 'Protected with secure, best-practice development.' },
              { title: 'AI-Driven', desc: 'Smart features powered by AI integration.' },
              { title: 'Full-Stack', desc: 'End-to-end frontend and backend development.' },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="relative group overflow-hidden border-y border-[#bcb6ac]"
              >
                <span className="absolute inset-x-0 top-1/2 bg-[#EB5939] h-0 group-hover:h-full -translate-y-1/2 transition-all duration-500 ease-in-out origin-center z-0" />

                <div className="relative z-10 max-w-[1150px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-2 sm:gap-y-0 px-4 py-4 sm:px-6">
                  <h1 className="text-[#B7AB98] text-[7vw] sm:text-[5vw] md:text-[4.5vw] font-black uppercase scale-y-150 my-0 group-hover:text-black transition-colors duration-300">
                    {item.title}
                  </h1>
                  <p className="text-[#B7AB98] text-sm sm:text-base max-w-full sm:max-w-[60%] text-left sm:text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:text-black">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
