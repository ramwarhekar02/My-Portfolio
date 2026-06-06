import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScroll as useLocoScroll } from '../Context/ScrollContext'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const { scrollInstance } = useLocoScroll()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)

  /* =================== ACTIVE SECTION + SCROLL PROGRESS =================== */
  useEffect(() => {
    const updateActive = () => {
      rafRef.current = null
      const triggerY = window.innerHeight * 0.28
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentY = scrollInstance?.scroll?.y ?? window.scrollY
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, currentY / docHeight)) : 0
      setProgress(ratio)
      setScrolled(currentY > 30)

      let current = NAV_ITEMS[0].id
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= triggerY) {
          current = NAV_ITEMS[i].id
          break
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(updateActive)
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    if (scrollInstance && scrollInstance.on) {
      scrollInstance.on('scroll', onScroll)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (scrollInstance && scrollInstance.off) {
        scrollInstance.off('scroll', onScroll)
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [scrollInstance])

  /* =================== CLOSE MOBILE ON RESIZE =================== */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* =================== SMOOTH SCROLL HANDLER =================== */
  const handleClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.getElementById(id)
    if (!target) return
    if (scrollInstance && scrollInstance.scrollTo) {
      scrollInstance.scrollTo(target, { offset: -20, duration: 1200 })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* =================== DESKTOP FLOATING PILL =================== */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 md:pt-6 px-3 sm:px-4"
      >
        <motion.nav
          animate={{
            backgroundColor: scrolled
              ? 'rgba(13, 13, 13, 0.82)'
              : 'rgba(13, 13, 13, 0.55)',
            borderColor: scrolled
              ? 'rgba(235, 89, 57, 0.28)'
              : 'rgba(82, 82, 91, 0.35)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative flex items-center gap-1 md:gap-2 pl-3 pr-3 md:pl-2 md:pr-2 py-2.5 md:py-2.5 rounded-full border backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
        >
          {/* ===== LOGO ===== */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, 'home')}
            className="group relative flex items-center gap-2.5 pr-3 md:pr-4 md:mr-1 md:border-r border-zinc-800/60"
            aria-label="Home"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EB5939] via-orange-500 to-purple-600" />
              <div className="absolute inset-[2px] rounded-full bg-[#0D0D0D] flex items-center justify-center">
                <span className="text-[11px] font-black tracking-tighter text-white">
                  RW
                </span>
              </div>
              <span className="absolute inset-0 rounded-full bg-[#EB5939] opacity-0 group-hover:opacity-25 group-hover:scale-150 transition-all duration-700 blur-md" />
            </div>
            <div className="hidden lg:flex flex-col leading-none">
              <span className="text-[9px] uppercase tracking-[0.22em] text-zinc-500 font-semibold">
                Ram Warhekar
              </span>
              <span className="font-mono text-[11px] leading-tight flex items-center gap-[1px]">
                <span className="text-zinc-500">{`<`}</span>
                <span className="text-zinc-100 font-semibold tracking-wide">Developer</span>
                <span className="text-zinc-500">{`/>`}</span>
                <span className="ml-1 w-[5px] h-[11px] bg-[#EB5939] animate-pulse" />
              </span>
            </div>
          </a>

          {/* ===== DESKTOP LINKS ===== */}
          <ul className="relative hidden md:flex items-center">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className="relative block px-3.5 py-2 text-[12px] uppercase tracking-[0.16em] font-semibold transition-colors duration-300"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EB5939]/20 to-purple-500/15 border border-[#EB5939]/40 shadow-[0_0_18px_-4px_rgba(235,89,57,0.5)]"
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* ===== CTA (DESKTOP) ===== */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="hidden md:flex group relative items-center gap-1.5 px-4 py-2 ml-1 rounded-full overflow-hidden border border-[#EB5939]/40 hover:border-[#EB5939] transition-all duration-300 hover:shadow-[0_0_22px_-4px_rgba(235,89,57,0.5)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#EB5939] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-[11px] uppercase tracking-[0.18em] font-bold text-white">
              Hire Me
            </span>
            <svg
              className="relative w-3 h-3 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>

          {/* ===== MOBILE HAMBURGER ===== */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden relative w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center border border-zinc-700/60 active:scale-95 transition-transform"
          >
            <div className="w-4 h-3.5 relative flex flex-col justify-between">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-full h-[1.5px] bg-[#B7AB98] rounded-full origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-full h-[1.5px] bg-[#B7AB98] rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-full h-[1.5px] bg-[#B7AB98] rounded-full origin-center"
              />
            </div>
          </button>

          {/* ===== SCROLL PROGRESS BAR ===== */}
          <div className="absolute -bottom-px left-0 right-0 h-[1.5px] rounded-full overflow-hidden">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-[#EB5939] via-orange-400 to-purple-500"
              style={{ scaleX: progress }}
            />
          </div>
        </motion.nav>
      </motion.div>

      {/* =================== MOBILE FULL-SCREEN MENU =================== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0D0D0D]/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#EB5939]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

            <ul className="relative flex flex-col items-start gap-1">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = active === item.id
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.08 + idx * 0.05, duration: 0.4 }}
                    className="w-full"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      className="group flex items-center gap-4 py-2.5 px-4"
                    >
                      <span className="text-[10px] tracking-[0.3em] text-zinc-600 font-bold w-6">
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-2xl uppercase tracking-[0.18em] font-black transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-zinc-500 group-hover:text-white'
                        }`}
                      >
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="mobile-dot"
                          className="ml-1 w-1.5 h-1.5 rounded-full bg-[#EB5939]"
                        />
                      )}
                    </a>
                  </motion.li>
                )
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-10 flex flex-col items-center gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#EB5939] to-orange-500 text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#EB5939]/30"
              >
                Hire Me
              </a>
              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 mt-1">
                Available for freelance · full-time
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
