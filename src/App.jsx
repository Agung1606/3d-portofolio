import React from 'react'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import LogoShowcase from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <ExperienceSection />
    </>
  )
}

export default App