import { useState, useEffect } from 'react';
import { getCollectionData } from "../../services/firebaseServices";
import './aboutme.css';
import '../../App.css';
import list from '../../../public/lista.gif';
import Spinner from "react-bootstrap/Spinner";

export const AboutMe = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataList = await getCollectionData('Skills');
        // Ordenar los datos por el campo id
        const sortedData = dataList.sort((a, b) => a.id - b.id);
        setData(sortedData);
        console.log(sortedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          <div className='col-12 col-sm-12 col-md-6 col-xl-6'>
            <p className='title-spam'>Get to know me!</p>
            <div className='mt-4 spam-me'>
              I am a Full Stack Developer with expertise in crafting responsive and dynamic websites as well as robust mobile applications. Skilled in both front-end and back-end technologies, I deliver comprehensive solutions that drive success and functionality across platforms. Committed to building efficient, user-centric, and scalable products that cater to client needs and elevate user experience. I am open to job opportunities that allow me to contribute, learn, and grow in the tech field.
            </div>
            <div className='w-100 d-flex justify-content-center'>
              <img className='gif-list' src={list} alt="Skills GIF" />
            </div>
          </div>
          <div id='skills-div' className='col-12 col-sm-12 col-md-6 col-xl-6'>
            <p className='title-spam'>My Skills</p>
            <div className='mt-2 row'>
              {loading ? (
                <div className='w-100 d-flex justify-content-center align-items-center'>
                    <Spinner animation="border" />
                </div>
              ) : error ? (
                <p>Error loading skills: {error.message}</p>
              ) : (
                data.map((skills, index) => (
                  <div key={index} className='col-12'>
                    <h5 className='fw-bold mt-3'>{skills.title}</h5>
                    <div className='row'>
                      {skills.skills.map((skill, skillIndex) => (
                        <p key={skillIndex} className='col-4 skills'>{skill}</p>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
