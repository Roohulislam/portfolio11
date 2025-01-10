import React from 'react'
import AboutMe from '../components/AboutMe'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
        <Banner/>
       <AboutMe/>
       <Skills/>
       <Projects/>
       <Work/>

    </div>
  )
}

export default Home
