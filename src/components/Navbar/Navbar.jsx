import './navbar.css'
import me from '../../../public/me.jpeg';

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={me} className='profileImg'/>
        <p className="name-nav fw-bold">Harol Morales</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">PROYECTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};