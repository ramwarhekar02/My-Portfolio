import React, { useRef, useState, useEffect } from 'react'
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

const allSkills = [
  { src: html, name: 'HTML', category: 'frontend' },
  { src: css, name: 'CSS', category: 'frontend' },
  { src: javascript, name: 'JavaScript', category: 'frontend' },
  { src: tailwind, name: 'Tailwind', category: 'frontend' },
  { src: reactjs, name: 'React', category: 'frontend' },
  { src: redux, name: 'Redux', category: 'frontend' },
  { src: expressjs, name: 'Express', category: 'backend' },
  { src: nodejs, name: 'Node.js', category: 'backend' },
  { src: mongoose, name: 'Mongoose', category: 'backend' },
  { src: mongodb, name: 'MongoDB', category: 'backend' },
  { src: github, name: 'GitHub', category: 'devops' },
  { src: git, name: 'Git', category: 'devops' },
  { src: postman, name: 'Postman', category: 'devops' },
  { src: mongodbCompass, name: 'Compass', category: 'devops' },
  { src: vscode, name: 'VS Code', category: 'devops' },
  { src: chrome, name: 'Chrome', category: 'devops' },
]

// 3D free-floating skill icon
const FloatingSkill = ({ src, name, index, total }) => {
  // Calculate position in a scattered 3D-like pattern
  const angle = (index / total) * Math.PI * 2
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const radius = isMobile ? 26 + (index % 3) * 4 : 38 + (index % 3) * 6
  const x = 50 + Math.cos(angle) * radius
  const y = 50 + Math.sin(angle) * radius
  const z = (index % 5) * 20 - 40

  const delay = index * 0.12
  const floatDuration = 3 + (index % 4) * 0.7

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) translateZ(${z}px)`,
        animation: `float ${floatDuration}s ease-in-out ${delay}s infinite`,
        zIndex: 10 + (index % 3),
      }}
    >
      <div
        className="group relative cursor-pointer"
        style={{
          animation: `spin3d ${10 + (index % 3) * 2}s linear ${index * 0.3}s infinite`,
        }}
      >
        {/* Glow halo */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#EB5939]/40 to-purple-500/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Outer ring */}
        <div
          className="absolute -inset-2 rounded-full border border-[#EB5939]/20 group-hover:border-[#EB5939]/60 transition-colors duration-500"
          style={{
            animation: `spin3d ${15 + (index % 3) * 3}s linear infinite reverse`,
          }}
        />

        {/* Icon container with 3D perspective */}
        <div className="relative w-12 h-12 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
          style={{
            boxShadow: '0 8px 32px rgba(235, 89, 57, 0.15)',
            transformStyle: 'preserve-3d',
          }}
        >
          <img
            src={src}
            alt={name}
            className="w-7 h-7 md:w-10 md:h-10 object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
          />
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
          <div className="glass-strong px-3 py-1 rounded-md">
            <span className="text-[10px] uppercase tracking-wider text-[#EB5939] font-bold">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 3D Orbiting sphere icon
const OrbitingSkill = ({ src, name, index, total, radius, duration, reverse }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        marginLeft: `-${radius}px`,
        marginTop: `-${radius}px`,
        animation: `${reverse ? 'orbitReverse' : 'orbit'} ${duration}s linear infinite`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="absolute"
        style={{
          left: '50%',
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="group relative cursor-pointer"
          style={{
            animation: `${reverse ? 'orbit' : 'orbitReverse'} ${duration}s linear infinite reverse`,
          }}
        >
          <div className="absolute -inset-2 bg-[#EB5939]/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-10 h-10 md:w-14 md:h-14 glass rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{ boxShadow: '0 4px 20px rgba(235, 89, 57, 0.2)' }}
          >
            <img
              src={src}
              alt={name}
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const Work = () => {
  const containerRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [mouseOnCard, setMouseOnCard] = useState(false)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setTilt({ x: x * 12, y: y * -12 })
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleEnter = () => setMouseOnCard(true)
    const handleLeave = () => {
      setMouseOnCard(false)
      setTilt({ x: 0, y: 0 })
    }
    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0D0D0D]">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#EB5939]/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float-reverse pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] animate-float-reverse pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#EB5939]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 py-10 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#B7AB98] uppercase tracking-[0.3em] text-sm md:text-base font-medium">
            My Arsenal
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mt-3">
            <span className="text-gradient">Skills & Tools</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#EB5939] to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        {/* 3D Free Skills Universe */}
        <div
          ref={containerRef}
          className="relative w-full h-[480px] sm:h-[560px] md:h-[700px] mx-auto"
          style={{
            perspective: '1500px',
            perspectiveOrigin: '50% 50%',
            transform: mouseOnCard
              ? `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
              : 'rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.2s ease-out',
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Central core - 3D rotating ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transformStyle: 'preserve-3d' }}>
            {/* Inner pulsing core */}
            <div
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#EB5939]/30 via-purple-500/20 to-[#EB5939]/30 blur-2xl"
              style={{ animation: 'glowPulse 3s ease-in-out infinite' }}
            />

            {/* 3D rotating rings */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className="absolute rounded-full border"
                  style={{
                    width: `${ring * 90}px`,
                    height: `${ring * 90}px`,
                    borderColor: `rgba(235, 89, 57, ${0.3 - ring * 0.08})`,
                    borderWidth: '1px',
                    transform: `rotateX(${ring * 25}deg) rotateY(${ring * 20}deg)`,
                    animation: `spin3d ${10 + ring * 3}s linear infinite ${ring % 2 === 0 ? 'reverse' : ''}`,
                    transformStyle: 'preserve-3d',
                  }}
                />
              ))}
            </div>

            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <div
                className="glass-strong rounded-full px-6 py-3 md:px-8 md:py-4"
                style={{
                  boxShadow: '0 0 60px rgba(235, 89, 57, 0.4)',
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <p className="text-[#EB5939] text-xs md:text-sm font-black uppercase tracking-[0.3em] text-center whitespace-nowrap">
                  Tech Stack
                </p>
                <p className="text-[#B7AB98] text-[10px] md:text-xs text-center mt-1">
                  {allSkills.length}+ Tools
                </p>
              </div>
            </div>
          </div>

          {/* Orbiting skill sphere - Layer 1 (outer) */}
          <div className="absolute top-1/2 left-1/2" style={{ transformStyle: 'preserve-3d' }}>
            <div
              className="absolute"
              style={{
                width: 'min(85vw, 600px)',
                height: 'min(85vw, 600px)',
                marginLeft: 'calc(min(85vw, 600px) / -2)',
                marginTop: 'calc(min(85vw, 600px) / -2)',
                transform: 'rotateX(70deg)',
                animation: 'spin3d 25s linear infinite',
                transformStyle: 'preserve-3d',
              }}
            >
              {allSkills.slice(0, 8).map((skill, i) => (
                <div
                  key={`orbit1-${i}`}
                  className="absolute top-0 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(calc(min(85vw, 600px) / -2)) rotateX(${-70}deg) translateY(calc(min(85vw, 600px) / 2))`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="group cursor-pointer" style={{ animation: `float ${3 + (i % 3)}s ease-in-out ${i * 0.2}s infinite` }}>
                    <div className="absolute -inset-2 bg-[#EB5939]/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-10 h-10 md:w-14 md:h-14 glass rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                      style={{ boxShadow: '0 4px 24px rgba(235, 89, 57, 0.2)' }}
                    >
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orbiting skill sphere - Layer 2 (tilted opposite) */}
          <div className="absolute top-1/2 left-1/2" style={{ transformStyle: 'preserve-3d' }}>
            <div
              className="absolute"
              style={{
                width: 'min(70vw, 500px)',
                height: 'min(70vw, 500px)',
                marginLeft: 'calc(min(70vw, 500px) / -2)',
                marginTop: 'calc(min(70vw, 500px) / -2)',
                transform: 'rotateX(-70deg) rotateZ(45deg)',
                animation: 'spin3d 30s linear infinite reverse',
                transformStyle: 'preserve-3d',
              }}
            >
              {allSkills.slice(8).map((skill, i) => (
                <div
                  key={`orbit2-${i}`}
                  className="absolute top-0 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(calc(min(70vw, 500px) / -2)) rotateX(${70}deg) rotateZ(-45deg) translateY(calc(min(70vw, 500px) / 2))`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="group cursor-pointer" style={{ animation: `float ${3 + (i % 3)}s ease-in-out ${i * 0.25}s infinite` }}>
                    <div className="absolute -inset-2 bg-purple-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-10 h-10 md:w-14 md:h-14 glass rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                      style={{ boxShadow: '0 4px 24px rgba(168, 85, 247, 0.2)' }}
                    >
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Free-floating skill icons (scattered in 3D space) */}
          {allSkills.map((skill, i) => (
            <FloatingSkill
              key={`float-${i}`}
              src={skill.src}
              name={skill.name}
              index={i}
              total={allSkills.length}
            />
          ))}

          {/* Central glow pulse rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div
              className="w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-[#EB5939]/20"
              style={{
                animation: 'pulseRing 3s ease-out infinite',
                transformStyle: 'preserve-3d',
              }}
            />
            <div
              className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-purple-500/20"
              style={{
                animation: 'pulseRing 3s ease-out infinite 1s',
                transformStyle: 'preserve-3d',
              }}
            />
            <div
              className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-[#EB5939]/20"
              style={{
                animation: 'pulseRing 3s ease-out infinite 2s',
                transformStyle: 'preserve-3d',
              }}
            />
          </div>
        </div>

        {/* Category badges below the 3D scene */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {['Frontend', 'Backend', 'DevOps & Tools'].map((cat, i) => (
            <div
              key={cat}
              className="glass rounded-full px-5 py-2 hover:border-[#EB5939]/40 transition-all duration-300 hover:scale-105"
              style={{
                animation: `float ${3 + i}s ease-in-out ${i * 0.3}s infinite`,
              }}
            >
              <p className="text-[#B7AB98] text-xs uppercase tracking-[0.2em] font-bold">
                {cat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
