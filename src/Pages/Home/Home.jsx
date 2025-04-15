import React from 'react'
import Banner from './Banner'
import About from './About/About'
import Work from './Work/Work'
import Projects from '../Projects/Projects'
import Form from '../../Components/Form'

const Home = () => {
  return (
    <> 
      <div className="relative bg-[#0D0D0D]">
        <Banner />
        <About />
        <Work />
        <Projects />
        <Form />
      </div>
    </>
  )
}

export default Home