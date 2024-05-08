import AngularLogo from '../../../public/angular-logo.webp';
import BootstrapLogo from '../../../public/bootstrap-logo.svg';
import ReactLogo from '../../../public/react-logo.png';
import NodeLogo from '../../../public/nodejs-logo.png';
import MongoLogo from '../../../public/mongodb-logo.png';
import sespriv1 from '/public/sespriv-img-1.png'
import sespriv2 from '/public/sespriv-img-2.png'
import sespriv3 from '/public/sespriv-img-3.png'
import cintillos1 from '/public/cintillos-1.png'
import cintillos2 from '/public/cintillos-2.png'
import cintillos3 from '/public/cintillos-3.png'
import './projects.css';
import '../../App.css';

export const Projects = () => {
  const projectsInfo = [
    {
      title: 'SESPRIV',
      info: 'Developed a professional landing page for SESPRIV, a private security company specializing in providing trained security agents...',
      url: 'https://main--sespriv.netlify.app/',
      logos: [AngularLogo, BootstrapLogo],
      imgProjects: [sespriv1, sespriv2, sespriv3]
    },
    {
      title: 'Sponsorship Management System for VTV',
      info: 'I developed a local Sponsorship Management System for VTV, featuring user roles for Masters and Administrators...',
      url: 'https://github.com/HaroruDa3/control-cintillos-vtv.git',
      logos: [ReactLogo, BootstrapLogo, NodeLogo, MongoLogo],
      imgProjects: [cintillos1, cintillos2, cintillos3]
    }
  ];

  return (
    <section id='projects' className="section-container-generic">
      <div className="div-section-primary">
        <p className="title-section">PROJECTS</p>
        <span className='spam-section-global'>
          Here you will find some of the personal and clients projects that I have created with each project containing its own case study
        </span>
      </div>
      <div className='container-fluid'>
        {projectsInfo.map((project, index) => (
          <div key={index} className='row mb-rem'>
            <div className='col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center'>
              <div className='carrousel-container'>
                <div id={`carousel${index}`} className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                  <div className="carousel-indicators">
                    {project.imgProjects.map((_, idx) => (
                      <button key={idx} type="button" data-bs-target={`#carousel${index}`} data-bs-slide-to={idx} className={idx === 0 ? 'active' : ''} aria-current={idx === 0 ? 'true' : undefined} aria-label={`Slide ${idx + 1}`}></button>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {project.imgProjects.map((imgSrc, idx) => (
                      <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                        <img src={imgSrc} className="d-block img-fluid img-carrousel" alt={`Project ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-xl-6'>
              <div className='div-container-title'>
                <span className='title-spam m-0 w-50 text-center'>{project.title}</span>
                <div className='div-container-logo'>
                  {project.logos.map((logo, logoIndex) => (
                    <img key={logoIndex} src={logo} alt="Logo" className='img-logo-projects'/>
                  ))}
                </div>
              </div>
              <div className='about-project'>
                {project.info}
              </div>
              <div className='container-ancord-project'>
                <a href={project.url} target='_blank' rel="noopener noreferrer" className='btn-projects'>See</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
