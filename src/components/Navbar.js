import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function closeMenu() {
      setClick(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={closeMenu}>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={closeMenu}>
              <Link to="/favorites" className="nav-links">
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
