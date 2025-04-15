  import React from 'react'
  import univaries from '../../assets/univaries.png'
  import antaragni from '../../assets/antaragni.png'
  import code_reviewer from '../../assets/code_reviewer.png'
  import social from '../../assets/social.png'
  import safenote from '../../assets/safenote.png'
  import ochi from '../../assets/ochi.png'
  import foodshop from '../../assets/foodshop.png'
  import cynthiaugwu from '../../assets/cynthiaugwu.png'
  import foodie from '../../assets/foodie.png'
  import stonepaperscissor from '../../assets/stonepaperscissor.png'
  import bubblegame from '../../assets/bubblegame.png'

  const Projects = () => {
    return (
      <div id="projects" className='w-full bg-[#1e1e1e]'>
        {/* Main Project */}
        <div className='w-full max-w-5xl py-10 px-4 mx-auto'>
          <h1 className='text-xl md:text-[2vw] uppercase text-center text-[#B7AB98] font-[Nunito_Sans] font-bold'>My Main Project</h1>
          <div className="w-full h-1 bg-[#EB5939] rounded-full relative max-w-[100px] mx-auto mt-1">
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#EB5939] rounded-full top-1/2 -translate-y-1/2"></div>
          </div>

          <div className='pt-10'>
            <img className='rounded-xl shadow-lg shadow-blue-950 w-full' src={univaries} alt="" />
            <div className='text-center mt-5 shadow p-5 md:p-10'>
              <h1 className='text-xl uppercase text-white font-bold'>UNIVARIES ECOMMERCE WEBSITE</h1>
              <p className='text-white pt-5 font-[Nunito_Sans] text-base md:text-lg shadow-lg shadow-blue-950 p-4 md:p-5'>
                Univaries is a robust, full-stack MERN e-commerce platform featuring dedicated Admin and User dashboards. It delivers secure, token-based authentication using JWT and encrypted credentials via bcrypt. The app integrates well-structured RESTful APIs for seamless product, user, and order management. Designed with Tailwind CSS, it ensures a highly responsive, accessible, and visually engaging user experience across all devices.
              </p>
              <div className='flex flex-wrap justify-center items-center gap-3 mt-10'>
                {["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "JWT", "Mongoose", "Postman"].map((tech, index) => (
                  <span key={index} className='px-4 py-2 bg-gradient-to-r from-[#130F40] to-black text-white font-black rounded-full text-sm md:text-base'>
                    {tech}
                  </span>
                ))}
              </div>
              <p className='text-[#B7AB98] italic text-base md:text-lg font-[Nunito_Sans] font-bold mt-5 cursor-pointer'>
                Do you want to learn more about this PRODUCT?
              </p>
              <h1 className='text-base md:text-lg mt-4 text-blue-400'>
                <a href='https://univaries-ecom-web.vercel.app/' className='underline mx-2'>Visit Here</a> | <a href='https://github.com/ramwarhekar02/Univaries-Ecom-Web.git' className='underline mx-2'>Github</a> | <a href='#' className='underline mx-2'>Contact Me</a>
              </h1>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className='w-full max-w-[1250px] px-4 py-10 mx-auto'>
          <h1 className='text-xl md:text-[2vw] uppercase text-center text-[#B7AB98] font-[Nunito_Sans] font-bold'>Other Projects</h1>
          <div className="w-full h-1 bg-[#EB5939] rounded-full relative max-w-[100px] mx-auto mt-1">
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#EB5939] rounded-full top-1/2 -translate-y-1/2"></div>
          </div>

          {/* Project Cards */}
          <div className='w-full flex flex-col md:flex-row flex-wrap gap-7 mx-auto mt-10'>
            {/* CARD 1 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={antaragni} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'>ANTARGNI | My First live Project</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                Antargni Website is a dynamic, event-focused web platform built using React.js, Tailwind CSS, and Framer Motion to showcase and manage one of the most anticipated cultural festivals. It features interactive event schedules, online registrations, performer highlights, and real-time updates.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["ReactJS", "Tailwind CSS", "Framer Motion", "Hostinger"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://antaragni.co.in/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 rounded-full font-semibold text-center'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Antaragni2025.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-white py-2 text-center rounded-full font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={code_reviewer} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'>CODESENSE | AI Powered Code Reviewer</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                Code Reviewer is an AI-powered web app built with React.js, Tailwind CSS, and integrated with the Gemini LLM API. Users can input code snippets to get instant feedback, bug detection, and optimization tips. With a clean, responsive UI, it streamlines debugging.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["ReactJS", "Tailwind CSS", "Mongoose", "Gemini", "ExpressJs"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://code-reviewer-ebon.vercel.app/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 rounded-full text-center font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Code_Reviewer.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-white py-2 text-center rounded-full font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 3 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={social} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'>BUZZTALK | Simple Social Media App</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                This is a Social Media Application built using Node.js, Express.js, MongoDB, and EJS as the templating engine. The app allows users to register, log in, create posts, edit posts, like posts, and upload profile pictures. It provides a simple and interactive interface for users to share their thoughts and interact with others.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["MongoDB", "EJS", "NodeJS", "Mongoose", "ExpressJs"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://github.com/ramwarhekar02/Social-Media-App.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 text-center rounded-full font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Social-Media-App.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-white py-2 text-center rounded-full font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 4 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={safenote} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'>SAFENOTE | Notes Management App</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                This is a simple task management application called SafeNote, built using Node.js, Express.js, and EJS for server-side rendering. It allows users to create, view, edit, and manage text-based tasks stored as files on the server. The application uses Tailwind CSS for styling and provides a clean, responsive user interface.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["TailwindCSS", "EJS", "NodeJS", "ExpressJs"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://safenote.onrender.com/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 rounded-full text-center font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Notepad.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-white py-2 text-center rounded-full font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 5 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={ochi} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'>PORTFOLIO | Modern Interactive Portfolio Webpage</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                This project is a modern interactive portfolio webpage built using React and Vite. It is designed to showcase a creative agency's services, projects, and achievements in a visually appealing and interactive manner. The project utilizes Tailwind CSS for styling, motion/react for animations, and Locomotive Scroll for smooth scrolling effects.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["TailwindCSS", "ReactJS", "Vite", "Framer Motion", "Locomotive Scroll"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://interactiveportfoliosite.netlify.app/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 rounded-full text-center font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Modern-Interactive-Portfolio-Webpage.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-center text-white py-2 rounded-full font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 6 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={foodshop} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'>Foodshop | Food Delivery Application</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                FoodShop is a sleek and responsive food delivery application UI developed using React and Tailwind CSS. It offers a seamless user experience with features like a dynamic hero section, menu carousel, restaurant listings, filtering options, and an elegant footer, making it ideal for modern food ordering platforms and services.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["TailwindCSS", "ReactJS", "Vite"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://foodshopy.netlify.app/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 rounded-full text-center font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Swiggy.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-white py-2 text-center rounded-full font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 7 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={cynthiaugwu} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'>CYNTHIA UGWU | Interactive Animated Website</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                This portfolio website for Cynthia Ugwu showcases her work as a Toronto-based product designer. It features bold typography, smooth animations, and interactive sections highlighting her projects, availability for freelance work, and design philosophy. The site emphasizes creativity, functionality, and user engagement, offering a visually appealing and professional online presence.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["TailwindCSS", "ReactJS", "Framer Motion", "GSAP", "Locomotive Scroll"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://ramwarhekar02.github.io/Website-Clown---Cynthia-Ugwu---Awarded-Website---lvl1/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] text-center to-[#000000] text-white py-2 rounded-full font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Website-Clown---Cynthia-Ugwu---Awarded-Website---lvl1.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] text-center to-[#D2A813] text-white py-2 rounded-full font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 8 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={foodie} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'>FOODIE | Responsive Web App</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                The "Foodie" project is a responsive web application designed for a food and restaurant service. It features a navigation bar with links to key sections like "Home," "About," "History," and "Contacts," along with a shopping cart icon and a "Log In" button. The homepage includes a visually appealing hero section with a tagline, description. and call-to-action button for ordering food.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["Html", "Css", "Javascript"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://ramwarhekar02.github.io/Food-App/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 rounded-full text-center font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Food-App.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-white py-2 rounded-full text-center font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 9 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={stonepaperscissor } alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'> THE GAME | Stone Paper Scissor</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                This project is a "Stone Paper Scissor" game built with HTML, CSS, and JavaScript. It features an interactive UI where users play against the computer, with dynamic score updates, visual feedback for choices, and responsive design for an engaging gameplay experience.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["Html", "Css", "Javascript"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://ramwarhekar02.github.io/Stone-Paper-Scissor-Game/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 text-center rounded-full font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Stone-Paper-Scissor-Game.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-white py-2 text-center rounded-full font-semibold'>Github</a>
              </div>
            </div>

            {/* CARD 10 */}
            <div className='w-full md:w-[48%] rounded-md bg-zinc-900 p-6'>
              <img className='rounded-md shadow-md shadow-blue-950 w-full' src={bubblegame} alt="" />
              <h1 className='pt-4 text-lg font-bold text-[#EB5939] text-center'> THE GAME | Bubble Game</h1>
              <p className='text-base md:text-lg text-white px-2 md:px-6 text-justify'>
                This Game is a responsive Bubble Game styled with CSS. It features a clean layout, interactive hover effects for bubbles, a green-and-white theme, smooth animations, fun sound effects, and a simple interface. The design adapts to screens, ensuring a great user experience.
              </p>
              <h1 className='text-lg text-center py-3 uppercase font-bold text-[#B7AB98]'>Stack</h1>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                {["Html", "Css", "Javascript"].map((tech, i) => (
                  <span key={i} className='text-white font-black rounded-full'>{tech}</span>
                ))}
              </div>
              <div className='flex flex-col md:flex-row items-center mt-5 gap-2'>
                <a href='https://ramwarhekar02.github.io/Bubble-Game/' className='w-full md:w-1/2 bg-gradient-to-r from-[#2234AE] to-[#000000] text-white py-2 rounded-full text-center font-semibold'>Visit</a>
                <a href='https://github.com/ramwarhekar02/Bubble-Game.git' className='w-full md:w-1/2 bg-gradient-to-r from-[#D2A813] to-[#D2A813] text-white py-2 rounded-full text-center font-semibold'>Github</a>
              </div>
            </div>    
          </div>
          
        </div>

        
      </div>
    )
  }

  export default Projects
