import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function closeMenu() {
    setClick(false);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Movie App
            <i className='fas fa-popcorn'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' onClick={closeMenu}>
              <Link to='/' className='nav-links'>
                <i className='fas fa-home'></i>
                Home
              </Link>
            </li>
            <li className='nav-item' onClick={closeMenu}>
              <Link to='/favorites' className='nav-links'>
                <i className='fas fa-heart'></i>
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
