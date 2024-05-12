import { useState } from 'react';
import './navbar.css';
import me from '../../../public/me.jpeg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid p-0">
        <img src={me} className='profileImg' alt="Profile"/>
        <p className="name-nav fw-bold">Harol Morales</p>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home" onClick={closeNavbar}>HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#about" onClick={closeNavbar}>ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#projects" onClick={closeNavbar}>PROJECTS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="https://wa.me/+50432890527" onClick={closeNavbar}>CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
