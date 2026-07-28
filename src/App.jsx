import React from 'react'
import Nav1 from './components/Nav1'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'
import InvertedCarousel from './components/InvertedCarousel'
import ServiceCard from './components/ServiceCard'
import HeaderText from './components/HeaderText'
import Clients from './components/Clients'
import AboutUs from './components/AboutUs'
import LetsTalk from './components/LetsTalk'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'


const App = () => {
  return (
    <div >
      <Nav1 />
      <Hero />
      <WorkSection/>
      <InvertedCarousel />
      <Clients />
      <AboutUs/>
      <LetsTalk />
      <Footer/>
      <ContactModal/>
    </div>
  )
}

export default App