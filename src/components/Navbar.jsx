import "./css/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      {/* <nav>
            <div classNameName="nav--logo"> <img src="./codeqube_logo.svg" alt="" /> </div>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services <span classNameName="dropper"><img src="./services drop.svg" alt="" /></span></a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
        </nav> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <a className="navbar-brand  flex-grow-1 ms-4" href="#">
            <img src="./codeqube_logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <Link to="/aboutus" style={{ textDecoration: 'none' }} className="nav-item">
                <a className="nav-link mx-3 fs-3" aria-current="page" href="#feature">
                  About us
                </a>
              </Link>
              <li className="nav-item dropdown">
                <a
                  className="nav-link mx-3 fs-3"
                  href="#services"
                  role="button"
                >
                  Services
                </a>
              </li>
              <Link to="/projects" style={{ textDecoration: 'none' }} className="nav-item">
                <a className="nav-link mx-3 fs-3" href="#">
                  Portfolio
                </a>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }} className="nav-item">
                <a href="#contact" className="nav-link mx-3 fs-3 ">
                  Contact us
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
