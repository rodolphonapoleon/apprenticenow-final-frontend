import { NavLink } from "react-router-dom";
import Logo from "../images/apprentice_logo.png";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand ms-5 fs-1"><img style={{ width: 200 }} src={Logo} alt="logo"/><span className="ms-3 text-white">|</span><span className="ms-3 text-info">Hackaton</span></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
            <div className="navbar-nav">
             <NavLink to="/" className="nav-link me-5 fs-4 text-info">Home</NavLink>
             <NavLink to="/register" className="nav-link me-5 fs-4 text-info">Register</NavLink>
             <NavLink to="/list" className="nav-link me-5 fs-4 text-info">Student List</NavLink>
            </div>
          </div>
        </div>
      </nav> 
    )
}

export default Navbar;