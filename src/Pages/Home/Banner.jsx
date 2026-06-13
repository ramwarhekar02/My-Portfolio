import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { HiArrowDown, HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { useScroll } from '../../Context/ScrollContext'

const Banner = () => {
  const containerRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)
  const [ripples, setRipples] = useState([])
  const { scrollInstance } = useScroll()

  const createRipple = (e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const newRipple = { x, y, size, id: Date.now() }
    setRipples((prev) => [...prev, newRipple])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 700)
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    createRipple(e)
    const target = document.getElementById('contact')
    if (!target) return
    if (scrollInstance && scrollInstance.scrollTo) {
      scrollInstance.scrollTo(target, { offset: -20, duration: 1200 })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // ============ MOUSE TRACKING FOR 3D TILT ============
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), { stiffness: 80, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]), { stiffness: 80, damping: 20 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(isTouchDevice)
    if (isTouchDevice) return

    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative w-full h-screen bg-[radial-gradient(circle_at_center,_#1a1430_0%,_#0D0D0D_60%)] select-none overflow-hidden"
      style={{ perspective: '1400px', perspectiveOrigin: '50% 50%' }}
    >
      {/* =================== BACKGROUND ORBS =================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-72 h-72 bg-[#EB5939]/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-16 right-8 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EB5939]/[0.06] rounded-full blur-[150px] animate-glow" />
      </div>

      {/* =================== PERSPECTIVE GRID FLOOR =================== */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(235,89,57,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(235,89,57,0.15) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
          transform: 'perspective(700px) rotateX(62deg)',
          transformOrigin: 'center top',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.9) 70%, black 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.9) 70%, black 100%)',
        }}
      />

      {/* =================== ROTATING 3D RINGS (SIMPLIFIED) =================== */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)', transformStyle: 'preserve-3d' }}
      >
        {/* Ring 1: large horizontal disc */}
        <div
          className="absolute top-1/2 left-1/2 w-[520px] h-[520px] md:w-[720px] md:h-[720px] rounded-full border border-[#EB5939]/15"
          style={{
            transform: 'translate(-50%, -50%) rotateX(72deg)',
            animation: 'spinSlow 60s linear infinite',
          }}
        />
        {/* Ring 2: larger, opposite spin */}
        <div
          className="absolute top-1/2 left-1/2 w-[680px] h-[680px] md:w-[880px] md:h-[880px] rounded-full border border-purple-500/12 border-dashed"
          style={{
            transform: 'translate(-50%, -50%) rotateX(78deg) rotateZ(20deg)',
            animation: 'spinSlowReverse 75s linear infinite',
          }}
        />
      </div>

      {/* =================== RIGHT BOTTOM CORNER MOVING ELEMENTS =================== */}
      <div className="absolute bottom-8 right-3 md:bottom-14 md:right-8 w-24 h-24 md:w-32 md:h-32 pointer-events-none z-10">
        {/* Figure-8 orbiting dot (orange) */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#EB5939] shadow-[0_0_6px_#EB5939]"
          style={{ marginLeft: -2, marginTop: -2 }}
          animate={{ x: [0, 16, 0, -16, 0], y: [0, -12, 0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Circular orbiting dot (purple) */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-0.5 h-0.5 rounded-full bg-purple-400 shadow-[0_0_5px_#a855f7]"
          style={{ marginLeft: -1, marginTop: -1 }}
          animate={{ x: [0, 20, 0, -20, 0], y: [-20, 0, 20, 0, -20] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Rotating diamond (orange outline) */}
        <motion.div
          className="absolute top-2 right-2 w-1.5 h-1.5 border border-[#EB5939]/70"
          style={{ transform: 'rotate(45deg)' }}
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Pulsing cross (purple) */}
        <motion.div
          className="absolute bottom-3 left-3 w-2 h-2"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute top-1/2 left-0 w-full h-px bg-purple-400 -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-purple-400 -translate-x-1/2" />
        </motion.div>

        {/* Floating square outline (white) */}
        <motion.div
          className="absolute top-1/2 right-1.5 w-1 h-1 border border-white/40"
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Blinking micro dot */}
        <motion.div
          className="absolute bottom-1.5 right-7 w-0.5 h-0.5 rounded-full bg-white/70"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Drifting tiny line */}
        <motion.div
          className="absolute top-1/3 left-1.5 w-1.5 h-px bg-[#EB5939]/60"
          animate={{ x: [0, 8, 0, -4, 0], y: [0, -4, 0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* =================== MAIN CONTENT (3D TILT) =================== */}
      <motion.div
        className="relative w-full h-full max-w-[1400px] mx-auto flex flex-col justify-center items-center px-6"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: isTouch ? 0 : rotateX,
          rotateY: isTouch ? 0 : rotateY,
        }}
      >
        <div className="text-center">
          {/* === GREETING === */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-[#B7AB98] uppercase font-semibold font-[Nunito_Sans] text-sm md:text-base lg:text-lg tracking-[0.25em]"
          >
            Hey there, I am
          </motion.p>

          {/* === NAME (3D DEPTH) === */}
          <motion.h1
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[11vw] md:text-[8.5vw] lg:text-[9.5vw] font-[Nunito_Sans] font-black uppercase leading-[0.9] mt-2 md:mt-3 tracking-tight text-[#EB5939]"
            style={{
              textShadow:
                '0 0 40px rgba(235,89,57,0.4), 0 25px 50px rgba(235,89,57,0.3), 0 0 80px rgba(235,89,57,0.15)',
            }}
          >
            Ram Warhekar
          </motion.h1>

          {/* === ROLE TAG (modern accent-line style) === */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85, ease: 'easeOut' }}
            className="flex items-center justify-center gap-3 md:gap-4 mt-5 md:mt-7"
          >
            {/* Left accent line with gradient */}
            <div className="relative w-10 md:w-16 h-px overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EB5939] to-transparent" />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                style={{ animation: 'shimmer 3s linear infinite', backgroundSize: '200% 100%' }}
              />
            </div>

            {/* Tag text */}
            <span className="text-xs md:text-sm lg:text-base font-semibold tracking-[0.25em] uppercase text-zinc-400 whitespace-nowrap">
              Full Stack Developer
            </span>

            {/* Right accent line */}
            <div className="relative flex-1 max-w-[120px] h-px overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-l from-zinc-700 to-transparent" />
            </div>
          </motion.div>

          {/* === BUTTONS (TWO VERY DIFFERENT STYLES — COMPACT) === */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex justify-center items-center gap-3 md:gap-4 mt-8 md:mt-10 flex-wrap"
          >
            {/* ===== BUTTON 1: GLASSMORPHISM WITH CLICK RIPPLE ===== */}
            <motion.a
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="group relative px-5 py-2.5 md:px-6 md:py-3 rounded-full overflow-hidden cursor-pointer"
              style={{ boxShadow: '0 0 0 1px rgba(82,82,91,0.5), 0 4px 16px -8px rgba(0,0,0,0.5)' }}
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md rounded-full" />

              {/* Animated gradient border on hover */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  padding: '1px',
                  background: 'linear-gradient(135deg, #EB5939, #c084fc, #EB5939)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease infinite',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Static border (default state) */}
              <div className="absolute inset-0 rounded-full border border-zinc-700/60 group-hover:border-transparent transition-colors duration-500" />

              {/* Outer glow on hover */}
              <div className="absolute -inset-1 rounded-full bg-[#EB5939] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />

              {/* Text + arrow */}
              <span className="relative z-10 flex items-center gap-1.5 text-zinc-200 group-hover:text-white font-medium uppercase tracking-[0.2em] text-xs md:text-xs transition-colors duration-300">
                <span>Get in Touch</span>
                <HiArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>

              {/* Click ripples */}
              <AnimatePresence>
                {ripples.map((ripple) => (
                  <motion.span
                    key={ripple.id}
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 1, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute rounded-full bg-[#EB5939] pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: ripple.size,
                      height: ripple.size,
                    }}
                  />
                ))}
              </AnimatePresence>
            </motion.a>

            {/* ===== BUTTON 2: 3D GRADIENT WITH BOUNCING ARROW ===== */}
            <motion.a
              href="/Ram_Warhekar_26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ y: 1, scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="group relative px-5 py-2.5 md:px-6 md:py-3 rounded-full overflow-hidden cursor-pointer"
              style={{
                boxShadow:
                  '0 6px 18px -4px rgba(235,89,57,0.55), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EB5939] via-orange-500 to-purple-600 rounded-full" />

              {/* Top highlight (3D bevel) */}
              <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent" />

              {/* Shine sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-1.5 text-white font-semibold uppercase tracking-[0.2em] text-xs md:text-xs">
                <span>Resume</span>
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex"
                >
                  <HiArrowDown className="w-3 h-3" />
                </motion.span>
              </span>

              {/* Bottom inner shadow (3D depth) */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-full bg-gradient-to-t from-black/20 to-transparent" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* =================== SCROLL INDICATOR =================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#B7AB98]/50 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="relative w-[1px] h-10 bg-zinc-800/60 overflow-hidden">
            <motion.div
              animate={{ y: [-40, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-transparent via-[#EB5939] to-transparent"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Banner
