import React from 'react'
import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import javascript from '../../../assets/javascript.png'
import tailwind from '../../../assets/tailwind.png'
import reactjs from '../../../assets/reactjs.png'
import redux from '../../../assets/redux.png'
import expressjs from '../../../assets/expressjs.png'
import nodejs from '../../../assets/nodejs.png'
import mongodb from '../../../assets/mongodb.png'
import mongoose from '../../../assets/mongoose.png'
import github from '../../../assets/github.png'
import git from '../../../assets/git.png'
import postman from '../../../assets/postman.png'
import mongodbCompass from '../../../assets/mongodbCompass.png'
import vscode from '../../../assets/vscode.png'
import chrome from '../../../assets/chrome.png'
import rectPro from '../../../assets/rectPro.jpg'

const SkillsImages = [
  [html, css, javascript, tailwind, reactjs],
  [redux, expressjs, nodejs, mongoose],
  [mongodb, github]
]

const ToolsImage = [
  [git, postman, mongodbCompass, vscode, chrome],
]

const Work = () => {
  return (
    <div className='w-full min-h-screen bg-[radial-gradient(circle,_#130F40_10%,_#12100E_90%)]'>
      <div className='relative w-full max-w-[1400px] mx-auto px-6 md:px-12 py-10 lg:py-20 flex flex-col lg:flex-row items-center justify-center gap-10'>
        {/* Skills Section */}
        <div className='w-full max-w-2xl'>
          <h1 className='text-[#B7AB98] uppercase tracking-widest font-[Nunito_Sans] text-lg py-4 text-center'>Skills</h1>
          <div>
            <div className="flex flex-col items-center py-4 gap-6">
              {SkillsImages.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap gap-6 justify-center">
                  {row.map((icon, iconIndex) => (
                    <img key={iconIndex} className='w-16 h-16 md:w-20 md:h-20 hover:shadow-xl hover:shadow-white transition duration-300' src={icon} alt={`skill-${rowIndex}-${iconIndex}`} />
                  ))}
                </div>
              ))}
            </div>
            <h1 className='text-[#B7AB98] uppercase tracking-widest font-[Nunito_Sans] text-lg py-4 text-center'>Tools</h1>
            <div className="flex flex-col items-center py-4 gap-6">
              {ToolsImage.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap gap-6 justify-center">
                  {row.map((icon, iconIndex) => (
                    <img key={iconIndex} className='w-16 h-16 md:w-20 md:h-20 hover:shadow-xl hover:shadow-white transition duration-300' src={icon} alt={`tool-${rowIndex}-${iconIndex}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SVG & Profile Image Section */}
        <div className='relative w-full max-w-3xl'>
          <div className='relative w-full flex justify-center items-center'>
            <svg
              viewBox="0 0 578 440"
              focusable="false"
              style={{ animation: 'float 4s ease-in-out infinite' }}
              className="w-[90%] max-w-[500px] md:max-w-[80vh]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="blob"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="#FF0080"
              ></path>
            </svg>

            <style>
              {`
                @keyframes float {
                  0%, 100% {
                    transform: translateY(0) scale(1);
                  }
                  50% {
                    transform: translateY(-10px) scale(1.05);
                  }
                }
              `}
            </style>

            <div className='absolute top-1/2 left-1/2 w-[75%] sm:w-[70%] md:w-[400px] lg:w-[530px] -translate-x-1/2 -translate-y-1/2 z-50'>
              <img className='rounded-xl w-full' src={rectPro} alt="Profile Showcase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
  