import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import SocialMedia from './Components/SocialMedia'
import Footer from './Components/Footer'
import CustomCursor from './Components/CustomCursor'

const App = () => {
  return (
    <>
      <CustomCursor/>
      <Navbar/>
      <SocialMedia/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App