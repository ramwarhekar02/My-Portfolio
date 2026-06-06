import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Briefcase, TrendingUp, Code2, Sparkles } from 'lucide-react'

const experienceData = [
  {
    company: 'PMPS GLOBAL, Pune',
    role: 'Software Application Development Intern',
    duration: 'Jun 2025 – Dec 2025',
    icon: Briefcase,
    color: 'from-[#EB5939] to-orange-500',
    projects: [
      {
        name: 'Medialens – Media & News Analytics Platform',
        points: [
          { icon: TrendingUp, text: 'Architected real-time dashboards for campaign monitoring and competitor analysis, reducing manual reporting time by ~45%.' },
          { icon: Sparkles, text: 'Integrated AI sentiment analysis pipelines, improving brand insight accuracy and enabling sub-5s alert responses to emerging trends.' },
          { icon: Code2, text: 'Optimized React visualizations via lazy loading and memoization, cutting dashboard load time by 30%.' },
        ],
      },
      {
        name: 'Finagle – Algo Trading Platform',
        points: [
          { icon: TrendingUp, text: 'Built interactive financial charts and portfolio tracking UI with WebSocket streams, serving live data to user.' },
          { icon: Code2, text: 'Developed market trend analysis modules, reducing user click-to-insight time by ~35%.' },
        ],
      },
    ],
  },
  {
    company: 'DELISHUSH, Noida',
    role: 'Software Developer Intern (Frontend)',
    duration: 'May 2025 – Jun 2025',
    icon: Code2,
    color: 'from-purple-500 to-pink-500',
    projects: [
      {
        name: 'PigoPi – SaaS Startup Website',
        points: [
          { icon: Code2, text: 'Delivered full frontend of PigoPi.com from scratch; optimized for Core Web Vitals (LCP < 2.5s, CLS < 0.1).' },
          { icon: Sparkles, text: 'Built reusable Tailwind component library, reducing future feature development time by ~40%.' },
        ],
      },
    ],
  },
]

const ExperienceCard = ({ exp, index }) => {
  const Icon = exp.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline dot with pulse */}
      <div className="absolute left-0 md:left-1/2 top-5 sm:top-6 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#EB5939] z-20 ring-4 ring-[#0D0D0D] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
        <div
          className="absolute inset-0 rounded-full bg-[#EB5939]"
          style={{ animation: 'pulseRingSmall 2s ease-out infinite' }}
        />
      </div>

      {/* Main card */}
      <div
        className={`relative w-full md:w-[calc(50%-3rem)] glass rounded-2xl p-5 sm:p-6 md:p-8 border border-zinc-800/50 hover:border-[#EB5939]/40 transition-all duration-500 ml-10 sm:ml-12 md:ml-0 ${
          index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
        }`}
        style={{
          transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: isHovered
            ? '0 25px 60px rgba(235, 89, 57, 0.18)'
            : '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Gradient glow on hover */}
        <div
          className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
        />

        {/* Header */}
        <div className="flex flex-wrap items-start gap-3 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-zinc-800/60">
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg shrink-0`}
            style={{ animation: 'float 5s ease-in-out infinite' }}
          >
            <Icon size={20} className="text-white sm:hidden" />
            <Icon size={22} className="text-white hidden sm:block" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#B7AB98] text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium">
              {exp.company}
            </p>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#EB5939] transition-colors duration-300 mt-1">
              {exp.role}
            </h3>
            <span className="inline-block mt-2 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full bg-zinc-800/60 text-[#EB5939] border border-[#EB5939]/20">
              {exp.duration}
            </span>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-5 sm:space-y-6">
          {exp.projects.map((proj, pi) => (
            <div key={pi}>
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#B7AB98] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB5939] shrink-0" />
                <span>{proj.name}</span>
              </h4>
              <ul className="space-y-2.5">
                {proj.points.map((point, idx) => {
                  const PIcon = point.icon
                  return (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-[#B7AB98] leading-relaxed group/item"
                    >
                      <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#EB5939]/10 border border-[#EB5939]/20 flex items-center justify-center mt-0.5 group-hover/item:bg-[#EB5939]/30 transition-colors duration-300">
                        <PIcon size={11} className="text-[#EB5939] sm:hidden" />
                        <PIcon size={12} className="text-[#EB5939] hidden sm:block" />
                      </div>
                      <span className="group-hover/item:text-white transition-colors duration-300">
                        {point.text}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Experience = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('.exp-header, .exp-card-anim', { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isMobile: '(max-width: 767px)',
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isMobile } = context.conditions

          gsap.from('.exp-header', {
            opacity: 0,
            y: isMobile ? 20 : 50,
            duration: isMobile ? 0.45 : 1,
            ease: 'power3.out',
          })
          gsap.from('.exp-card-anim', {
            opacity: 0,
            y: isMobile ? 25 : 60,
            stagger: isMobile ? 0.1 : 0.25,
            duration: isMobile ? 0.5 : 1,
            delay: isMobile ? 0.1 : 0.3,
            ease: 'power3.out',
          })
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      id="experience"
      className="relative w-full py-16 sm:py-20 md:py-28 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] bg-[#EB5939]/10 rounded-full blur-[80px] sm:blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-float-reverse pointer-events-none" />

      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 exp-header">
          <p className="text-[#B7AB98] uppercase tracking-[0.3em] text-xs sm:text-sm md:text-base font-medium">
            Where I've Worked
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mt-3">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#EB5939] to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line on desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#EB5939]/60 via-purple-500/40 to-transparent" />
          {/* Vertical left line on mobile */}
          <div className="md:hidden absolute left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-[#EB5939]/60 via-purple-500/40 to-transparent" />

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {experienceData.map((exp, i) => (
              <div key={i} className="exp-card-anim">
                <ExperienceCard exp={exp} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
