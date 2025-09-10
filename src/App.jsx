import React from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import MainServices from './components/MainServices'
import Working from './components/Working'
import Strategy from './components/Strategy'
import Shop from './components/Facility'
import Project from './components/Project'
import Location from './components/Location'
import Footer from './components/Footer'
import VoiceAgent from './components/VoiceAgent'

const App = () => {
  return (
    <div >
      <Navbar />
      <VoiceAgent />
      <Services />
      <MainServices />
      <Working />
      <Strategy />
      <Shop />
      <Project />
      <Location />
      <Footer />
    </div>
  )
}

export default App
