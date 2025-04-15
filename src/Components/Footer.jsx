import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0D0D0D] text-[#B7AB98] py-16" data-scroll-section>
      <div className="max-w-[1270px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h1 className="text-3xl font-black text-[#EB5939]">RW</h1>
            <p className="text-sm mt-4">
              I am a passionate Full-Stack Developer specializing in building creative, scalable, and user-focused web solutions. Let's build something amazing together!
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-[#EB5939] mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#EB5939] transition duration-300 text-sm">About Me</a>
              </li>
              {/* <li>
                <a href="#work" className="hover:text-[#EB5939] transition duration-300 text-sm">My Work</a>
              </li> */}
              <li>
                <a href="#projects" className="hover:text-[#EB5939] transition duration-300 text-sm">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#EB5939] transition duration-300 text-sm">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-[#EB5939] mb-4">Resume</h2>
            <p className="text-sm mb-4">
              Want to know more about my experience and skills? Check out my resume below.
            </p>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#EB5939] text-white font-bold uppercase rounded-md hover:bg-[#B7432E] transition duration-300"
            >
              View Resume
            </a>
          </div>

        </div>

        <div className="w-full h-[1px] bg-[#B7AB98] my-8 opacity-20"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex gap-4">
            <a href="https://github.com/ramwarhekar02" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#EB5939] transition duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ram-warhekar/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#EB5939] transition duration-300">
              <FaLinkedinIn />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#EB5939] transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#EB5939] transition duration-300">
              <FaInstagram />
            </a> */}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm">
              Email: <a href="mailto:ramwarhekar02@gmail.com" className="hover:text-[#EB5939] transition duration-300">ramwarhekar02@gmail.com</a>
            </p>
            {/* <p className="text-sm">
              Phone: <a href="tel:+1234567890" className="hover:text-[#EB5939] transition duration-300">+123 456 7890</a>
            </p> */}
          </div>

          <p className="text-sm text-center md:text-right">
            © {new Date().getFullYear()} Ram Warhekar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
