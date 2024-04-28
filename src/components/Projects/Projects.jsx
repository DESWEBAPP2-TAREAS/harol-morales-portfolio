import './projects.css'
import '../../App.css'
export const Projects = () => {
  return (
   <section id='projects' className="section-container-generic">
     <div  className="div-section-primary">
            <p className="title-section">PROJECTS</p>
            <span className='spam-section-global'>
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
            </span>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-xl-6' >
                <div className='w-75'>
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
                    <p className='title-spam'>ZELDA</p>
                    <div className='mt-4 row'>
                     ASDFASDF
                    </div>
                </div>

            </div>
        </div>
   </section>
  )
}
