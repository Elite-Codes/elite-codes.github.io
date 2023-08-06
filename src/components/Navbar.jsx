import "./css/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link to="/">
            <a className="navbar-brand  flex-grow-1 ms-4" href="#">
              <img src="./codeqube_logo.svg" alt="" />
            </a>
          </Link>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link mx-3 fs-3"
                  href="#services"
                  role="button"
                >
                  Services
                </a>
              </li>
              <a className="nav-link mx-3 fs-3" href="#feature" role="button">
                About us
              </a>

              <Link
                to="/projects"
                style={{ textDecoration: "none" }}
                className="nav-item"
              >
                <a className="nav-link mx-3 fs-3" href="#">
                  Portfolio
                </a>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none" }}
                className="nav-item"
              >
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
