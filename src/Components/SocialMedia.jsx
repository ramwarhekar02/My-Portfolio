import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io5';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div
      className="fixed z-50 bottom-10 left-10 flex flex-col gap-4"
      data-scroll-ignore 
    >
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#B7AB98] p-3 text-xl hover:text-[#EB5939] transition duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#B7AB98] p-3 text-xl hover:text-[#EB5939] transition duration-300"
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#B7AB98] p-3 text-xl hover:text-[#EB5939] transition duration-300"
      >
        <IoLogoYoutube />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#B7AB98] p-3 text-xl hover:text-[#EB5939] transition duration-300"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialMedia;