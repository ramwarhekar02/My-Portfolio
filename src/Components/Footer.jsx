import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'
import { useScroll } from '../Context/ScrollContext'

const Footer = () => {
  const { scrollInstance } = useScroll()

  /* =================== LOCOMOTIVE-AWARE SCROLL =================== */
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (!target) return
    if (scrollInstance && scrollInstance.scrollTo) {
      scrollInstance.scrollTo(target, { offset: -20, duration: 1200 })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="relative w-full bg-[#0D0D0D] text-[#B7AB98] overflow-hidden">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EB5939]/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#EB5939]/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1270px] mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10">

        {/* Top: Brand + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-zinc-800/60">
          <div>
            <a
              href="/"
              className="text-5xl md:text-6xl font-black text-white tracking-tighter hover:text-[#EB5939] transition-colors duration-500"
            >
              RW<span className="text-[#EB5939]">.</span>
            </a>
            <p className="text-zinc-500 text-[13px] sm:text-sm mt-3 max-w-md">
              Full-Stack Developer crafting digital experiences with code, creativity, and a passion for clean design.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-[#EB5939] hover:text-white transition-all duration-300"
          >
            Start a Project
            <HiArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>

        {/* Middle: 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-10 sm:py-12">

          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Education', id: 'education' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <HiArrowUpRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Projects */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-5">
              Featured
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'GitFix AI', id: 'projects' },
                { label: 'VehiMeet', id: 'projects' },
                { label: 'CodeSense', id: 'projects' },
                { label: 'Univaries', id: 'projects' },
                { label: 'Antaragni 2025', id: 'projects' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ramwarhekar02@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-[#EB5939] transition-colors duration-300 break-all"
                >
                  ramwarhekar02@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917385756620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-[#25D366] transition-colors duration-300 inline-flex items-center gap-1.5"
                >
                  <FaWhatsapp size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <span className="text-sm text-zinc-400">
                  Pune, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-5">
              Follow
            </h3>
            <div className="flex gap-2">
              <a
                href="https://github.com/ramwarhekar02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-zinc-900 border border-zinc-800/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ram-warhekar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-zinc-900 border border-zinc-800/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#0A66C2] transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://wa.me/917385756620"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg bg-zinc-900 border border-zinc-800/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#25D366] transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>

            {/* Resume button — modern gradient highlight */}
            <a
              href="/Resume26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 4px 14px -4px rgba(235,89,57,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EB5939] via-orange-500 to-purple-600 rounded-full" />
              {/* Top highlight bevel */}
              <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/20 to-transparent" />
              {/* Shine sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full" />
              {/* Content */}
              <span className="relative z-10 flex items-center gap-1.5 text-white text-xs font-semibold uppercase tracking-[0.15em]">
                <span>Resume</span>
                <HiArrowUpRight size={13} className="group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom: Trademark + meta */}
        <div className="border-t border-zinc-800/60 pt-8">
          {/* CENTERED TRADEMARK */}
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-500 font-semibold">
              Ram Warhekar
            </p>
            <p className="text-[10px] tracking-[0.3em] text-zinc-600 mt-1.5">
              ™ — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
