import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"
import { Footer } from "./components/Footer/Footer"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Projects } from "./components/Projects/Projects"
function App() {
 
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

export default App
