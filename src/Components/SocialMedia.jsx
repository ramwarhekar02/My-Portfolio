import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div
      className="fixed z-40 bottom-24 left-3 md:bottom-10 md:left-6 lg:left-10 hidden sm:flex flex-col gap-3 md:gap-4"
      data-scroll-ignore
    >
      <a
        href="https://github.com/ramwarhekar02"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-[#B7AB98] p-2.5 md:p-3 text-lg md:text-xl rounded-full bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/50 hover:text-[#EB5939] hover:border-[#EB5939]/50 hover:bg-zinc-950/70 transition duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ram-warhekar/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-[#B7AB98] p-2.5 md:p-3 text-lg md:text-xl rounded-full bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/50 hover:text-[#EB5939] hover:border-[#EB5939]/50 hover:bg-zinc-950/70 transition duration-300"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialMedia;
