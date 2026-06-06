import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ContactForm = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})
  const [focusedField, setFocusedField] = useState(null)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (formData.name.trim().length < 2) newErrors.name = 'Name too short'

    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'

    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      reply_to: formData.email,
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        console.error('Error text:', error?.text)
        console.error('Error status:', error?.status)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  const inputClasses = (field) =>
    `w-full bg-transparent text-white placeholder-zinc-600 outline-none transition-all duration-300 ${
      focusedField === field ? 'pl-1' : ''
    } ${errors[field] ? 'text-red-300' : ''}`

  return (
    <div
      id="contact"
      className="relative w-full bg-[#0D0D0D] py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#EB5939]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
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

      <div className="relative w-full max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mt-3 tracking-tight">
            <span className="text-white">Get in </span>
            <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-px bg-zinc-700 mx-auto mt-5" />
          <p className="text-zinc-400 mt-5 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Have a project in mind, a question, or just want to say hello? Drop me a message — I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* LEFT: Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Email card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ramwarhekar02@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-zinc-950 border border-zinc-800/60 hover:border-[#EB5939]/40 transition-all duration-500"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#EB5939]/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiMail size={20} className="text-[#EB5939]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                  Email
                </p>
                <p className="text-white text-sm font-medium truncate group-hover:text-[#EB5939] transition-colors duration-300">
                  ramwarhekar02@gmail.com
                </p>
              </div>
            </a>

            {/* Location card */}
            <div className="group flex items-center gap-4 p-5 rounded-2xl bg-zinc-950 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-500">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <FiMapPin size={20} className="text-blue-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                  Based in
                </p>
                <p className="text-white text-sm font-medium">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Response time card */}
            <div className="group flex items-center gap-4 p-5 rounded-2xl bg-zinc-950 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-500">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                  Availability
                </p>
                <p className="text-white text-sm font-medium">
                  Open for freelance work
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/917385756620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800/60 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp size={18} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-xs text-zinc-400 group-hover:text-white font-semibold transition-colors duration-300">WhatsApp</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ram-warhekar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800/60 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                >
                  <FiLinkedin size={16} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-xs text-zinc-400 group-hover:text-white font-semibold transition-colors duration-300">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/60 overflow-hidden"
            >
              {/* Subtle gradient glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#EB5939]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-5">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-2">
                    Your Name
                  </label>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/60 border transition-all duration-300 ${
                      errors.name
                        ? 'border-red-500/50'
                        : focusedField === 'name'
                        ? 'border-[#EB5939]/60'
                        : 'border-zinc-800'
                    }`}
                  >
                    <FiUser size={16} className={`shrink-0 transition-colors duration-300 ${focusedField === 'name' || formData.name ? 'text-[#EB5939]' : 'text-zinc-600'}`} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John Doe"
                      disabled={status === 'sending'}
                      className={inputClasses('name')}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                      >
                        <FiAlertCircle size={11} /> {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-2">
                    Your Email
                  </label>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/60 border transition-all duration-300 ${
                      errors.email
                        ? 'border-red-500/50'
                        : focusedField === 'email'
                        ? 'border-[#EB5939]/60'
                        : 'border-zinc-800'
                    }`}
                  >
                    <FiMail size={16} className={`shrink-0 transition-colors duration-300 ${focusedField === 'email' || formData.email ? 'text-[#EB5939]' : 'text-zinc-600'}`} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@example.com"
                      disabled={status === 'sending'}
                      className={inputClasses('email')}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                      >
                        <FiAlertCircle size={11} /> {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-2">
                    Your Message
                  </label>
                  <div
                    className={`flex items-start gap-3 px-4 py-3 rounded-xl bg-zinc-900/60 border transition-all duration-300 ${
                      errors.message
                        ? 'border-red-500/50'
                        : focusedField === 'message'
                        ? 'border-[#EB5939]/60'
                        : 'border-zinc-800'
                    }`}
                  >
                    <FiMessageSquare size={16} className={`shrink-0 mt-0.5 transition-colors duration-300 ${focusedField === 'message' || formData.message ? 'text-[#EB5939]' : 'text-zinc-600'}`} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      rows="5"
                      disabled={status === 'sending'}
                      className={`${inputClasses('message')} resize-none`}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-1.5">
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-xs text-red-400 flex items-center gap-1"
                        >
                          <FiAlertCircle size={11} /> {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <span className="text-[10px] text-zinc-600 ml-auto">
                      {formData.message.length} chars
                    </span>
                  </div>
                </div>

                {/* Status messages */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm"
                    >
                      <FiCheckCircle size={16} />
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
                    >
                      <FiAlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="relative w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.01]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#EB5939] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 bg-gradient-to-r from-[#EB5939] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference" />
                </button>

                <p className="text-center text-[11px] text-zinc-600">
                  Your message goes directly to my inbox. I usually respond within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
