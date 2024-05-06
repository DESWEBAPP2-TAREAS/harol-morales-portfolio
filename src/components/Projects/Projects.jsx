import './projects.css'
import '../../App.css'
export const Projects = () => {
  return (
   <section id='projects' className="section-container-generic">
     <div  className="div-section-primary">
            <p className="title-section">PROJECTS</p>
            <span className='spam-section-global'>
            Here you will find some of the personal and clients projects that I have created with each project containing its own case study
            </span>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center' >
                <div className='carrousel-container'>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/05/09/16836248850273.jpg" className="d-block img-fluid " alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.nintenderos.com/wp-content/uploads/2023/07/zelda-futuro-articuli-1.jpg" className="d-block img-fluid " alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://www.nintenderos.com/wp-content/uploads/2023/08/zelda-tears-of-the-kingdom-logo-y.jpg.webp" className="d-block img-fluid " alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                </div>
                </div>
                <div id='skills-div' className='col-12 col-sm-12 col-md-6 col-xl-6' >
                    
                    <div className='div-container-title'>
                        <span className='title-spam m-0'>SESPRIV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-angular mx-1" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" />
                            <path d="M9 15l3 -8l3 8" />
                            <path d="M10 13h4" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-bootstrap" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" />
                            <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" />
                            <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />
                        </svg>

                    </div>
                    <div className='about-project'>
                        Developed a professional landing page for SESPRIV, a private security company specializing in providing trained security agents. The project was built using Angular and Bootstrap, featuring a sleek and responsive design that highlights the company&apos;s key services: on-site security, event security, and customized security plans. Designed to deliver an optimal user experience while showcasing the firm&apos;s expertise in security solutions.
                    </div>
                    <div className='container-ancord-project'>
                        <a href='https://main--sespriv.netlify.app/'  target='_blank' className='btn-projects'>See</a>  
                    </div>
                </div>


            </div>
        </div>
   </section>
  )
}
