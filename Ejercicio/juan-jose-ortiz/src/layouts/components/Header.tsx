import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="Header-Navbar">
        <ul className="Header-Navbar--list">
          <Link className="Header-Navbar--list-link" to="/locations?page=1">Locations</Link>
          <Link className="Header-Navbar--list-link" to="/episodes?page=1">Episodes</Link>
          <Link className="Header-Navbar--list-link" to="/characters?page=1">Characters</Link>
        </ul>
      </div>
      <div className="Header">
          <h1>Rick And Morty App</h1>
          <p>Find everything you need!</p>
      </div>
    </React.Fragment>
  );
};

export default Header;
