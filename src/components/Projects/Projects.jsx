import AngularLogo from '../../../public/angular-logo.webp'
import BootstrapLogo from '../../../public/bootstrap-logo.svg'
import ReactLogo from '../../../public/react-logo.png'
import NodeLogo from '../../../public/nodejs-logo.png'
import MongoLogo from '../../../public/mongodb-logo.png'
import './projects.css'
import '../../App.css'
export const Projects = () => {
const projectsInfo =[
    {
        title:'SESPRIV',
        info:'Developed a professional landing page for SESPRIV, a private security company specializing in providing trained security agents. The project was built using Angular and Bootstrap, featuring a sleek and responsive design that highlights the company&apos;s key services: on-site security, event security, and customized security plans. Designed to deliver an optimal user experience while showcasing the firm&apos;s expertise in security solutions.',
        url:'https://main--sespriv.netlify.app/',
        logos:[AngularLogo,BootstrapLogo],
        imgProjects:['public/sespriv-img-1.png','public/sespriv-img-2.png','public/sespriv-img-3.png']
    },
    {
        title:'Sponsorship Management System for VTV',
        info:'I developed a local Sponsorship Management System for VTV, featuring user roles for Masters and Administrators. The system, deployed on their internal network, enhances data security and integrates smoothly with existing infrastructure.',
        url:'https://main--sespriv.netlify.app/',
        logos:[ReactLogo,BootstrapLogo,NodeLogo,MongoLogo],
        imgProjects:['public/cintillos-1.png','public/cintillos-2.png','public/cintillos-3.png']
    }

]
  return (
   <section id='projects' className="section-container-generic">
     <div  className="div-section-primary">
            <p className="title-section">PROJECTS</p>
            <span className='spam-section-global'>
            Here you will find some of the personal and clients projects that I have created with each project containing its own case study
            </span>
        </div>
        <div className='container-fluid'>
                {projectsInfo.map((project,index)=>(
                <div key={index} className='row mb-rem'>
                    <div  className='col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center' >
                        <div className='carrousel-container'>
                            <div id={'carousel'+project.title} className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target={'#carousel'+project.title} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target={'#carousel'+project.title} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target={'#carousel'+project.title} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                {project.imgProjects.map((imgSrc, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={imgSrc} className="d-block img-fluid" alt={`Project ${index + 1}`} />
                                    </div>
                                ))}
            
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={'#carousel'+project.title} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={'#carousel'+project.title} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
        
                        </div>
                    </div>
                    <div id='skills-div' className='col-12 col-sm-12 col-md-6 col-xl-6' >
                        
                        <div className='div-container-title'>
                            <span className='title-spam m-0 w-50 text-center'>{project.title}</span>
                            <div className='div-container-logo'>
                            {project.logos.map((logo,index)=>(
                               <img key={index} src={logo} alt="Logo" className='img-logo-projects'/>
                            ))}
                            </div>
                        </div>
                        <div className='about-project'>
                            {project.info}
                        </div>
                        <div className='container-ancord-project'>
                            <a href={project.url}  target='_blank' className='btn-projects'>See</a>  
                        </div>
                    </div>
                </div>
                ))}
        </div>
   </section>
  )
}
