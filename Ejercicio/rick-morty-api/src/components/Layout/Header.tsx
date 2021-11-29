import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="navbar bg-dark navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav justify-content-center">
  <li className="nav-item">
  <Link className="nav-link active" to={"/Characters"}>Characters</Link>
    
  </li>
  <li className="nav-item">
  <Link className="nav-link active" to={"/Locations"}>Locations</Link>

  </li>
  <li className="nav-item">
  <Link className="nav-link active" to={"/Episodes"}>Episodes</Link>

  </li>
  
</ul>
     
    </div>
  </div>
</nav>

    </>
  );
};

export default Header;
