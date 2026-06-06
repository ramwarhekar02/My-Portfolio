import React from 'react'
import Banner from './Banner'
import About from './About/About'
import Education from './Education/Education'
import Work from './Work/Work'
import Experience from './Experience/Experience'
import Projects from '../Projects/Projects'
import Form from '../../Components/Form'
import useDocumentTitle from '../../Hooks/useDocumentTitle'

const Home = () => {
  useDocumentTitle(
    null,
    'Ram Warhekar — MERN Stack Developer. Hire me for AI-powered React, Node.js, and full-stack web applications. Projects: GitFix AI, VehiMeet, CodeSense.'
  )

  return (
    <>
      <Banner />
      <About />
      <Work />
      <Education />
      <Experience />
      <Projects />
      <Form />
    </>
  )
}

export default Home
