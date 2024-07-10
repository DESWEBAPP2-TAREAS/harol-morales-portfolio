import { getCollectionData } from "../../services/firebaseServices";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./projects.css";
import "../../App.css";

export const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataList = await getCollectionData('InfoProyectos');
        setData(dataList);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section id="projects" className="section-container-generic">
      <div className="div-section-primary">
        <p className="title-section">PROJECTS</p>
        <span className="spam-section-global">
          Here you will find some of the personal and clients projects that I
          have created with each project containing its own case study
        </span>
      </div>
      <div className="container-fluid">
        {data.map((project, index) => (
          <div key={project.id} className="row mb-rem">
            <div className="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center">
              <div className="carrousel-container">
                <div
                  id={`carousel${index}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  <div className="carousel-indicators">
                    {project.imgProjects.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        data-bs-target={`#carousel${index}`}
                        data-bs-slide-to={idx}
                        className={idx === 0 ? "active" : ""}
                        aria-current={idx === 0 ? "true" : undefined}
                        aria-label={`Slide ${idx + 1}`}
                      ></button>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {project.imgProjects.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className={`carousel-item ${idx === 0 ? "active" : ""}`}
                      >
                        <img
                          src={imgSrc}
                          className="d-block img-fluid img-carrousel"
                          alt={`Project ${idx + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-xl-6">
              <div className="div-container-title">
                <span className="title-spam m-0 w-50 text-center">
                  {project.title}
                </span>
                <div className="div-container-logo">
                  {project.logos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      src={logo}
                      alt="Logo"
                      className="img-logo-projects"
                    />
                  ))}
                </div>
              </div>
              <div className="about-project">{project.info}</div>
              <div className="container-ancord-project">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-projects"
                >
                  See
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

