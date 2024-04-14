import  { useState } from 'react';
import './navbar.css'
import me from '../../../public/me.jpeg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='w-50 mx-3 d-flex align-items-center'>
        <div className='h-100 w-auto'>
          <img className='profileImg' src={me} alt='' />
        </div>
        <div className='mx-2 h-100 d-flex align-items-center'>
          <h4>Harol Morales</h4>
        </div>
      </div>
      <div className='w-50'>
        <div className='d-flex justify-content-end'>
          <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
            <i className='fas fa-bars'></i>
          </div>
          <div className={`navbar-menu ${isOpen ? 'show' : 'hide'}`}>
            <a className='references' href='#home'>
              HOME
            </a>
            <a className='references' href='#about'>
              ABOUT
            </a>
            <a className='references' href='#projects'>
              PROJECTS
            </a>
            <a className='references' href='#contact'>
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};