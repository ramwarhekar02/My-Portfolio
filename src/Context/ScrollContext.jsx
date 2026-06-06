import React, { createContext, useContext, useState, useEffect } from 'react'

const ScrollContext = createContext(null)

export const ScrollProvider = ({ children }) => {
  const [scrollInstance, setScrollInstance] = useState(null)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handler = (e) => {
      if (e.detail) setScrollInstance(e.detail)
    }
    window.addEventListener('locomotive-scroll-ready', handler)
    return () => window.removeEventListener('locomotive-scroll-ready', handler)
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollInstance, activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  const ctx = useContext(ScrollContext)
  if (!ctx) return { scrollInstance: null, activeSection: 'home', setActiveSection: () => {} }
  return ctx
}

export default ScrollContext
