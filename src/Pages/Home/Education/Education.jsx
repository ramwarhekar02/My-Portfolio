import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { GraduationCap, BookOpen, Trophy, Medal, Sparkles, Users, Target, Crown } from 'lucide-react'

const educationData = [
  {
    degree: 'BTech in Computer Science Engineering',
    institution: 'GHRCE, Nagpur',
    duration: '2022 – 2026',
    grade: 'CGPA: 7.49',
    icon: GraduationCap,
    color: 'from-[#EB5939] to-orange-500',
  },
  {
    degree: 'HSC in Computer Science',
    institution: 'Iinsight Jr College, Nagpur',
    duration: '2020 – 2022',
    grade: 'CGPA: 9.47',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
  },
]

const achievements = [
  {
    title: 'Best Project – Web Domain',
    subtitle: 'AI Odyssey Hackathon · Winner',
    description:
      'Led the development of an innovative full-stack AI application as part of a team, competing against 40+ teams. Recognized for technical depth, design execution, and real-world problem solving.',
    highlight: '1st Place',
    icon: Trophy,
    accent: 'from-amber-400 to-[#EB5939]',
    iconColor: 'text-amber-400',
    stats: [
      { label: 'Teams', value: '40+' },
      { label: 'Category', value: 'Web' },
    ],
  },
  {
    title: 'Runner-Up',
    subtitle: 'Department Project Competition',
    description:
      'Secured the runner-up position among 20 groups from the department with a successful end-to-end project — standing out for execution quality, presentation, and impact.',
    highlight: '2nd Place',
    icon: Medal,
    accent: 'from-zinc-300 to-zinc-500',
    iconColor: 'text-zinc-300',
    stats: [
      { label: 'Groups', value: '20' },
      { label: 'Position', value: '2nd' },
    ],
  },
]

const EducationCard = ({ edu, index }) => {
  const Icon = edu.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline dot — desktop only */}
      <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#EB5939] z-20 ring-4 ring-[#0D0D0D]">
        <div
          className="absolute inset-0 rounded-full bg-[#EB5939]"
          style={{
            animation: 'pulseRingSmall 2s ease-out infinite',
          }}
        />
      </div>

      {/* Card — full width on mobile, alternating on desktop */}
      <div
        className={`relative w-full md:w-[calc(50%-3rem)] glass rounded-2xl p-5 sm:p-6 md:p-8 border border-zinc-800/50 hover:border-[#EB5939]/40 transition-all duration-500 ml-0 ${
          index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
        }`}
        style={{
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered
            ? '0 20px 60px rgba(235, 89, 57, 0.15)'
            : '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Gradient glow on hover */}
        <div
          className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
        />

        {/* Icon header */}
        <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3 mb-4">
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg shrink-0`}
            style={{
              animation: 'float 5s ease-in-out infinite',
            }}
          >
            <Icon size={20} className="text-white sm:hidden" />
            <Icon size={22} className="text-white hidden sm:block" />
          </div>
          <span className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold rounded-full bg-zinc-800/60 text-[#B7AB98] border border-zinc-700/50">
            {edu.duration}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#EB5939] transition-colors duration-300">
          {edu.degree}
        </h3>
        <p className="text-[#B7AB98] mt-2 text-xs sm:text-sm md:text-base flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-[#EB5939] shrink-0" />
          <span>{edu.institution}</span>
        </p>

        {/* Grade bar */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${edu.color} rounded-full transition-all duration-1000`}
              style={{
                width: isHovered
                  ? parseFloat(edu.grade.split(': ')[1]) * 10 + '%'
                  : '0%',
                transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </div>
          <span className="text-[#EB5939] font-bold text-sm whitespace-nowrap">
            {edu.grade}
          </span>
        </div>
      </div>
    </div>
  )
}

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer gradient border glow on hover */}
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${achievement.accent} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-700 -z-10`}
      />

      <div
        className="relative h-full rounded-2xl bg-zinc-950 border border-zinc-800/60 hover:border-zinc-700 p-5 sm:p-6 md:p-8 transition-all duration-500 overflow-hidden"
        style={{
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Corner badge */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
          <div
            className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold ${achievement.iconColor}`}
          >
            {achievement.highlight}
          </div>
        </div>

        {/* Icon */}
        <div className="relative mb-5 sm:mb-6">
          <div
            className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${achievement.accent} opacity-20 blur-xl`}
          />
          <div
            className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${achievement.accent} p-[1px]`}
          >
            <div className="w-full h-full rounded-2xl bg-zinc-950 flex items-center justify-center">
              <Icon size={22} className={`${achievement.iconColor} sm:hidden`} />
              <Icon size={26} className={`${achievement.iconColor} hidden sm:block`} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pr-16 sm:pr-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-2">
            {achievement.subtitle}
          </p>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-[#EB5939] transition-colors duration-300 mb-3">
            {achievement.title}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>

        {/* Stats footer */}
        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-zinc-800/60 flex items-center gap-5 sm:gap-6 flex-wrap">
          {achievement.stats.map((stat, i) => (
            <div key={i}>
              <p className={`text-base sm:text-lg font-black ${achievement.iconColor} leading-none`}>
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Education = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('.edu-header, .edu-card-anim, .achievement-anim', { opacity: 1, y: 0 })
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

          gsap.from('.edu-header', {
            opacity: 0,
            y: isMobile ? 20 : 50,
            duration: isMobile ? 0.45 : 1,
            ease: 'power3.out',
          })
          gsap.from('.edu-card-anim', {
            opacity: 0,
            y: isMobile ? 25 : 60,
            stagger: isMobile ? 0.1 : 0.25,
            duration: isMobile ? 0.5 : 1,
            delay: isMobile ? 0.1 : 0.3,
            ease: 'power3.out',
          })
          gsap.from('.achievement-anim', {
            opacity: 0,
            y: isMobile ? 20 : 50,
            stagger: isMobile ? 0.08 : 0.2,
            duration: isMobile ? 0.45 : 0.9,
            delay: isMobile ? 0.15 : 0.5,
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
      id="education"
      className="relative w-full py-16 sm:py-20 md:py-28 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] bg-[#EB5939]/10 rounded-full blur-[80px] sm:blur-[120px] animate-float-reverse pointer-events-none" />

      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 edu-header">
          <p className="text-[#B7AB98] uppercase tracking-[0.3em] text-xs sm:text-sm md:text-base font-medium">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mt-3">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#EB5939] to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#EB5939]/60 via-purple-500/40 to-transparent" />

          <div className="space-y-6 sm:space-y-8 md:space-y-16">
            {educationData.map((edu, i) => (
              <div key={i} className="edu-card-anim">
                <EducationCard edu={edu} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20 sm:mt-24 md:mt-28">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 achievement-anim">
            <p className="text-[#B7AB98] uppercase tracking-[0.3em] text-xs sm:text-sm font-medium">
              Recognition
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 text-white">
              Achievements
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 max-w-md mx-auto px-2">
              Milestones earned through collaboration, persistence, and shipping work that stands out.
            </p>
            <div className="w-12 h-px bg-zinc-700 mx-auto mt-5" />
          </div>

          {/* Achievement cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            {achievements.map((ach, i) => (
              <div key={i} className="achievement-anim">
                <AchievementCard achievement={ach} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
