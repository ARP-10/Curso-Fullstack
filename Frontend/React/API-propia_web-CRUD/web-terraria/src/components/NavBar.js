import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";
import logo from "../assets/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img className='logoImage' src={logo} alt='logo'></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/npc" onClick={closeMenu}>
                NPC
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/armaduras" onClick={closeMenu}>
                Armaduras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/armas" onClick={closeMenu}>
                Armas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bosses" onClick={closeMenu}>
                Bosses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/biomas" onClick={closeMenu}>
                Biomas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
