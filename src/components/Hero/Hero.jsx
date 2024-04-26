import dev from '../../../public/software.png'
import './hero.css'
export const Hero = () => {
  return (
   <>
   <section id='home'>
    <div className='nna'>

    </div>
      <div className='section-info-hero'>
      <img src={dev} alt="" />
            <span className='title-hero'> HEY I&apos;M HAROL MORALES </span> 
            <span className='info-hero'>
                Full Stack Developer with expertise in crafting responsive and dynamic websites as well as robust mobile applications.
            </span>
            
            <button className='btn-projects'>PROJECTS</button>  
      </div>
   </section>
   </>
  )
}
