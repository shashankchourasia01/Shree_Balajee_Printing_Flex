//deep
// App.js
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
import SEO from './SEO'

const App = () => {
  return (
    <div className="scroll-smooth">
      <SEO 
        title="Shree Balajee Printing & Flex | Best Printing Services in Dhanbad, Katras"
        description="No. 1 printing shop in Katras, Dhanbad. Specializing in flex printing, banners, hoarding, wedding cards, visiting cards, and digital printing. Quality guaranteed since 2010."
        url="https://www.balajeeflex.com"
        image="https://www.balajeeflex.com/banner-image.jpg"
      />
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





// import React from 'react'
// import Navbar from './components/Navbar'
// import Services from './components/Services'
// import MainServices from './components/MainServices'
// import Working from './components/Working'
// import Strategy from './components/Strategy'
// import Shop from './components/Facility'
// import Project from './components/Project'
// import Location from './components/Location'
// import Footer from './components/Footer'
// import VoiceAgent from './components/VoiceAgent'
// import SEO from './SEO'

// const App = () => {
//   return (
//     <div >
//       <SEO />
//       <Navbar />
//       <VoiceAgent />
//       <Services />
//       <MainServices />
//       <Working />
//       <Strategy />
//       <Shop />
//       <Project />
//       <Location />
//       <Footer />
//     </div>
//   )
// }

// export default App
