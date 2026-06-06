import React from 'react'
import { motion } from 'framer-motion'
import univaries from '../../assets/univaries.png'
import antaragni from '../../assets/antaragni.png'
import code_reviewer from '../../assets/code_reviewer.png'
import social from '../../assets/social.png'
import safenote from '../../assets/safenote.png'
import ochi from '../../assets/ochi.png'
import foodshop from '../../assets/foodshop.png'
import cynthiaugwu from '../../assets/cynthiaugwu.png'
import foodie from '../../assets/foodie.png'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { BiGitBranch } from 'react-icons/bi'
import { TbCar, TbMessageChatbot } from 'react-icons/tb'

const mainProjects = [
  {
    title: 'GITFIX AI',
    subtitle: 'Intelligent Git Conflict Resolver',
    tagline: 'Developer tool that parses Git merge conflict files, uses AI to understand both branch intents, and suggests the semantically correct resolution — not just a diff tool.',
    stack: ['React', 'Node.js', 'OpenAI API', 'Monaco Editor'],
    icon: BiGitBranch,
    accent: 'from-amber-500/20 to-[#EB5939]/20',
    iconColor: 'text-amber-400',
    gradient: 'from-amber-500 via-[#EB5939] to-orange-500',
    live: '#',
    github: 'https://github.com/ramwarhekar02/Gitfix',
    points: [
      'Parses conflict markers (<<<<<<<, =======, >>>>>>>) to extract HEAD vs incoming blocks and structures them for AI analysis.',
      'Context-aware AI prompts resolve conflicts with plain-English explanations; one-click Accept Resolution + manual override.',
      'Side-by-side Monaco diff view; batch conflict mode resolves entire files in one API call with per-block confidence scores.',
    ],
  },
  {
    title: 'VEHIMEET',
    subtitle: 'Full-Stack Vehicle Booking Platform',
    tagline: 'A platform with 3-role architecture (Customer, Partner, Admin), live GPS tracking, Video KYC, and 14-state booking lifecycle — built end-to-end solo.',
    stack: ['React', 'Node.js', 'Socket.IO', 'ZEGOCLOUD'],
    icon: TbCar,
    accent: 'from-blue-500/20 to-purple-500/20',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    live: '#',
    github: 'https://github.com/ramwarhekar02/VehiMeet',
    points: [
      'Designed 14-state booking machine (DRAFT → ASSIGNED → TRIP_COMPLETED) with race-condition-safe transitions and admin override.',
      'Built real-time GPS tracking via Socket.IO: 3–5s partner updates, live Leaflet, Openstreet Map, impossible-jump validation.',
      'Integrated ZEGOCLOUD Video KYC: session creation, room generation, reviewer panel with Verified/Rejected/Reschedule decisions.',
      '30+ REST APIs, role-based dashboards, Redis session state, Cloudinary storage, MongoDB geospatial indexing.',
    ],
  },
  {
    title: 'CODESENSE',
    subtitle: 'AI-Powered Coding IDE',
    tagline: 'LeetCode + VS Code + GitHub Copilot + ChatGPT in one app. Browser-based coding IDE with Monaco Editor, real-time AI suggestions, structured code review, and chat interface.',
    stack: ['React', 'Node.js', 'Monaco Editor', 'Gemini API'],
    icon: TbMessageChatbot,
    image: code_reviewer,
    accent: 'from-[#EB5939]/20 to-purple-500/20',
    iconColor: 'text-[#EB5939]',
    gradient: 'from-[#EB5939] via-orange-500 to-purple-500',
    live: '#',
    github: 'https://github.com/ramwarhekar02/Code_Reviewer.git',
    points: [
      'Integrated Monaco Editor (VS Code engine): syntax highlighting, IntelliSense, multi-language support — JS, Python, Java, C++.',
      'Built debounced (500ms) real-time AI suggestion engine with cursor-aware prompting — inline ghost-text per line, similar to GitHub Copilot.',
      'Engineered structured review output: Summary → Errors → Time/Space Complexity → Brute Force vs Optimal → Improved Code.',
      'ChatGPT-style instruction panel with conversation context; one-click Apply Fix, error underlining, theme toggle, code history.',
    ],
  },
]

const otherProjects = [
  {
    title: 'Univaries E-Commerce',
    desc: 'A robust full-stack MERN e-commerce platform with dedicated Admin and User dashboards. Features secure JWT authentication, encrypted credentials via bcrypt, and well-structured RESTful APIs for seamless product, user, and order management.',
    image: univaries,
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'TailwindCSS', 'JWT', 'Mongoose'],
    live: 'https://univaries-ecom-web.vercel.app/',
    github: 'https://github.com/ramwarhekar02/Univaries-Ecom-Web.git',
  },
  {
    title: 'Antaragni 2025',
    desc: 'A dynamic event-focused web platform built for one of the most anticipated cultural festivals. Features interactive event schedules, online registrations, performer highlights, and real-time updates with smooth animations.',
    image: antaragni,
    tags: ['ReactJS', 'TailwindCSS', 'Framer Motion', 'Hostinger'],
    github: 'https://github.com/ramwarhekar02/Antaragni2025.git',
  },
  {
    title: 'BuzzTalk | Social Media App',
    desc: 'A social media application with user registration, login, post creation, likes, and profile picture uploads using EJS templating.',
    image: social,
    tags: ['MongoDB', 'EJS', 'NodeJS', 'ExpressJS'],
    github: 'https://github.com/ramwarhekar02/Social-Media-App.git',
  },
  {
    title: 'SafeNote | Notes App',
    desc: 'A task management application for creating, viewing, editing, and managing text-based tasks stored as files on the server.',
    image: safenote,
    tags: ['TailwindCSS', 'EJS', 'NodeJS', 'ExpressJS'],
    live: 'https://safenote.onrender.com/',
    github: 'https://github.com/ramwarhekar02/Notepad.git',
  },
  {
    title: 'Ochi Portfolio',
    desc: 'A modern interactive portfolio webpage using React, Framer Motion, and Locomotive Scroll for smooth scrolling effects.',
    image: ochi,
    tags: ['ReactJS', 'TailwindCSS', 'Framer Motion', 'Locomotive Scroll'],
    live: 'https://interactiveportfoliosite.netlify.app/',
    github: 'https://github.com/ramwarhekar02/Modern-Interactive-Portfolio-Webpage.git',
  },
  {
    title: 'Foodshop | Delivery App',
    desc: 'A sleek and responsive food delivery application UI with dynamic hero section, menu carousel, and restaurant listings.',
    image: foodshop,
    tags: ['ReactJS', 'TailwindCSS', 'Vite'],
    live: 'https://foodshopy.netlify.app/',
    github: 'https://github.com/ramwarhekar02/Swiggy.git',
  },
  {
    title: 'Cynthia Ugwu Clone',
    desc: 'A visually stunning portfolio clone featuring bold typography, smooth animations, and interactive sections.',
    image: cynthiaugwu,
    tags: ['ReactJS', 'TailwindCSS', 'Framer Motion', 'GSAP'],
    live: 'https://ramwarhekar02.github.io/Website-Clown---Cynthia-Ugwu---Awarded-Website---lvl1/',
    github: 'https://github.com/ramwarhekar02/Website-Clown---Cynthia-Ugwu---Awarded-Website---lvl1.git',
  },
  {
    title: 'Foodie | Responsive Web',
    desc: 'A responsive web application for a food and restaurant service with hero section, navigation, and call-to-action.',
    image: foodie,
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://ramwarhekar02.github.io/Food-App/',
    github: 'https://github.com/ramwarhekar02/Food-App.git',
  },
]

// Project icon header for non-image main projects
const ProjectHeaderArt = ({ project }) => {
  const Icon = project.icon
  return (
    <div className={`relative h-44 md:h-52 overflow-hidden bg-gradient-to-br ${project.accent}`}>
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient blob */}
      <div
        className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl`}
      />
      <div
        className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl`}
      />

      {/* Centered icon with gradient ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div
            className={`absolute -inset-6 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl`}
          />
          <div
            className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px]`}
          >
            <div className="w-full h-full rounded-2xl bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center">
              <Icon size={36} className="text-white md:hidden" />
              <Icon size={44} className="text-white hidden md:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Stack tags floating */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 2).map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-black/40 backdrop-blur-sm text-white/80 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Live indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EB5939] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EB5939]"></span>
        </span>
        <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">
          Featured
        </span>
      </div>
    </div>
  )
}

const MainProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Subtle gradient border on hover */}
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-700 -z-10`}
      />

      {/* Header */}
      {project.image ? (
        <div className="relative h-44 md:h-52 overflow-hidden">
          <img
            className="w-full h-full object-cover transition-all duration-700 ease-out"
            src={project.image}
            alt={project.title}
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          {/* Stack tags floating */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 2).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-black/40 backdrop-blur-sm text-white/80 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EB5939] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EB5939]"></span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/80 font-semibold">
              Featured
            </span>
          </div>
        </div>
      ) : (
        <ProjectHeaderArt project={project} />
      )}

      {/* Content */}
      <div className="p-6 md:p-7">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <Icon size={16} className={project.iconColor} />
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                {project.subtitle}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#EB5939] transition-colors duration-300 tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[#B7AB98] text-sm leading-relaxed mb-5">
          {project.tagline}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-5" />

        {/* Key points */}
        <ul className="space-y-2.5 mb-5">
          {project.points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-300 leading-relaxed"
            >
              <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#EB5939]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Footer: stack + actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800/60">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2 shrink-0">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-9 md:h-9 rounded-md bg-zinc-900 hover:bg-[#EB5939] border border-zinc-800 hover:border-[#EB5939] flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="Live demo"
                title="Live"
              >
                <FiExternalLink size={16} className="md:hidden" />
                <FiExternalLink size={14} className="hidden md:block" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-9 md:h-9 rounded-md bg-zinc-900 hover:bg-white border border-zinc-800 hover:border-white flex items-center justify-center text-zinc-400 hover:text-black transition-all duration-300"
              aria-label="Source code"
              title="Code"
            >
              <FiGithub size={16} className="md:hidden" />
              <FiGithub size={14} className="hidden md:block" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-40 md:h-44">
        <img
          className="w-full h-full object-cover transition-all duration-700 ease-out"
          src={project.image}
          alt={project.title}
          style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
      </div>

      <div className="p-4 md:p-5">
        <h4 className="text-white font-bold text-sm md:text-base group-hover:text-[#EB5939] transition-colors duration-300 truncate">
          {project.title}
        </h4>
        <p className="text-zinc-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800/60">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-zinc-900 text-zinc-500 border border-zinc-800/60">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-3 mt-3 pt-3 border-t border-zinc-800/60">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-[#EB5939] transition-colors duration-300 font-medium">
              <FiExternalLink size={12} /> Live
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition-colors duration-300 font-medium">
            <FiGithub size={12} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="relative w-full bg-[#0D0D0D] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EB5939]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-[1300px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* ========== MAIN PROJECTS ========== */}
        <div>
          <div className="text-center mb-14 md:mb-16">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mt-3 tracking-tight">
              <span className="text-white">Main </span>
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-16 h-px bg-zinc-700 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {mainProjects.map((project, index) => (
              <MainProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* ========== MORE PROJECTS ========== */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
              Additional Work
            </p>
            <h3 className="text-2xl md:text-4xl font-bold mt-3 text-white tracking-tight">
              More Projects
            </h3>
            <div className="w-12 h-px bg-zinc-700 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/ramwarhekar02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02]"
          >
            <FiGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
