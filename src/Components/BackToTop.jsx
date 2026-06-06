import React, { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const BackToTop = ({ scrollInstance }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Try locomotive scroll first, fall back to native window scroll
    const checkVisibility = (scrollY) => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const halfScroll = docHeight / 2
      setIsVisible(scrollY > halfScroll)
    }

    if (scrollInstance && scrollInstance.on) {
      const handler = (obj) => {
        const scrollY = obj?.scroll?.y ?? 0
        checkVisibility(scrollY)
      }
      scrollInstance.on('scroll', handler)
      return () => {
        if (scrollInstance.off) scrollInstance.off('scroll', handler)
      }
    } else {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        checkVisibility(scrollTop)
      }
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollInstance])

  const scrollToTop = () => {
    if (scrollInstance && scrollInstance.scrollTo) {
      scrollInstance.scrollTo(0, { duration: 1000 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 group flex flex-col items-center gap-1.5 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full bg-zinc-950 border border-zinc-800/80 hover:border-[#EB5939]/60 flex items-center justify-center backdrop-blur-md shadow-lg shadow-black/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#EB5939]/20">
        {/* Subtle gradient on hover */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EB5939]/0 to-purple-500/0 group-hover:from-[#EB5939]/20 group-hover:to-purple-500/20 transition-all duration-500" />

        <FiArrowUp
          size={18}
          className="relative text-zinc-400 group-hover:text-[#EB5939] group-hover:-translate-y-0.5 transition-all duration-300"
        />
      </div>

      <span className="text-[10px] md:text-[9px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-[#EB5939] font-semibold transition-colors duration-300 hidden xs:inline-block sm:inline-block">
        Back to top
      </span>
    </button>
  )
}

export default BackToTop
