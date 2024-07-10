import {Navbar} from '/src/components/Navbar/Navbar'
import { Hero } from "/src/components/Hero/Hero"
import { Footer } from "/src/components/Footer/Footer"
import { AboutMe } from "/src/components/AboutMe/AboutMe"
import { Projects } from "/src/components/Projects/Projects"
function Home() {
 
    return (
      <>
       <Navbar/>
       <Hero/>
       <AboutMe/>
       <Projects/>
       <Footer/>
      </>
    )
  }
  
  export default Home
  