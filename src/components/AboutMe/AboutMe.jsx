import './aboutme.css'
import '../../App.css'
import list from '../../../public/lista.gif'
export const AboutMe = () => {
  return (
    <section id="about" className='section-container-generic'>
        <div className="div-section-primary">
            <p className="title-section">ABOUT ME</p>
            <span className='spam-section-global'>
                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </span>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-xl-6' >
                    <p className='title-spam'>Get to know me!</p>
                    <div className='mt-4 spam-me'>
                        I am a Full Stack Developer with expertise in crafting responsive and dynamic websites as well as robust mobile applications. Skilled in both front-end and back-end technologies, I deliver comprehensive solutions that drive success and functionality across platforms. Committed to building efficient, user-centric, and scalable products that cater to client needs and elevate user experience. I am open to job opportunities that allow me to contribute, learn, and grow in the tech field.
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                        <img className='gif-list' src={list} alt="" />
                    </div>
                </div>
                <div id='skills-div' className='col-12 col-sm-12 col-md-6 col-xl-6' >
                    <p className='title-spam'>My Skills</p>
                    <div className='mt-4 row'>
                        <h5 className='fw-bold'>Programming Languages</h5>
                        <p className='col-2 skills'>JavaScript</p>
                        <p className='col-2 skills'>TypeScript</p>
                        <p className='col-2 skills'>Java</p>
                        <p className='col-2 skills'>C#</p>

                        <h5 className='fw-bold'>Web and Mobile Development</h5>
                        <p className='col-2 skills'>HTML</p>
                        <p className='col-2 skills'>CSS</p>
                        <p className='col-2 skills'>React</p>
                        <p className='col-2 skills'>React Native</p>
                        <p className='col-2 skills'>Angular</p>
                        <p className='col-2 skills'>Ionic</p>
                        <p className='col-2 skills'>Xamarin Forms</p>
                        <p className='col-2 skills'>Bootstrap</p>
                        <p className='col-2 skills'>Responsive Design</p>

                        <h5 className='fw-bold'>Backend and Databases</h5>
                        <p className='col-2 skills'>NodeJs</p>
                        <p className='col-2 skills'>Firebase</p>
                        <p className='col-2 skills'>MongoDB</p>
                        <p className='col-2 skills'>MySQL</p>
                        <p className='col-2 skills'>PostgreSQL</p>
                        <p className='col-2 skills'>Oracle Apex</p>
                        <p className='col-2 skills'>SpringBoot</p>

                        <h5 className='fw-bold'>Development Tools</h5>
                        <p className='col-2 skills'>GitHub</p>
                        <p className='col-2 skills'>VS Code</p>
                        <p className='col-2 skills'>Visual Estudio</p>
                        <p className='col-2 skills'>NetBeans</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
