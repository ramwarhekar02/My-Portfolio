import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import SocialMedia from './Components/SocialMedia'
import Footer from './Components/Footer'
import CustomCursor from './Components/CustomCursor'
import BackToTop from './Components/BackToTop'
import LocomotiveScroll from 'locomotive-scroll'
import { ScrollProvider } from './Context/ScrollContext'

const App = () => {
  const location = useLocation()
  const scrollRef = useRef(null)
  const [scrollInstance, setScrollInstance] = useState(null)

  useEffect(() => {
    let scroll = null
    let resizeTimeout = null
    let loadTimeout = null

    const initScroll = () => {
      const scrollContainer = document.querySelector('[data-scroll-container]')
      if (!scrollContainer) return

      try {
        scroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
          lerp: 0.08,
          multiplier: 1,
          reloadOnContextChange: true,
          touchMultiplier: 1.5,
          resetNativeScroll: true,
          smartphone: {
            smooth: true,
            lerp: 0.05,
          },
          tablet: {
            smooth: true,
            lerp: 0.05,
          },
        })

        scrollRef.current = scroll
        setScrollInstance(scroll)

        // Broadcast the instance so other components (e.g. Navbar) can listen
        window.dispatchEvent(new CustomEvent('locomotive-scroll-ready', { detail: scroll }))

        // Force scroll to top on init
        scroll.scrollTo(0, { duration: 0, disableLerp: true })

        // Update after a tick
        requestAnimationFrame(() => {
          if (scroll) {
            scroll.update()
            scroll.scrollTo(0, { duration: 0, disableLerp: true })
          }
        })
      } catch (err) {
        console.warn('LocomotiveScroll init error:', err)
      }
    }

    const timeoutId = setTimeout(initScroll, 200)

    // Update after all resources loaded
    const handleLoad = () => {
      loadTimeout = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.currentEl = null
          scrollRef.current.update()
        }
      }, 300)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.update()
        }
      }, 200)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(loadTimeout)
      if (resizeTimeout) clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleLoad)
      if (scrollRef.current) {
        scrollRef.current.destroy()
        scrollRef.current = null
      }
      scroll = null
      setScrollInstance(null)
    }
  }, [location.pathname])

  return (
    <ScrollProvider value={{ scrollInstance, setScrollInstance }}>
      <CustomCursor />
      <Navbar />
      <SocialMedia />
      <BackToTop scrollInstance={scrollInstance} />
      <div data-scroll-container>
        <Outlet />
        <Footer />
      </div>
    </ScrollProvider>
  )
}

export default App
