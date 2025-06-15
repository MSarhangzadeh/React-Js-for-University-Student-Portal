import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/Logo_et_Slogan_HU.png';

// lazim dari avazliasn isdisn dashboard da ishladma istsn da avazlia bulsn

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
      
      {/* Top bar (Mobile only) */}
      <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Signup</span>
            </Link>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">

            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* Menu Area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">Apply</Link></li>
                  <li><Link to="/">Research</Link></li>
                  <li><Link to="/">Students</Link></li>
                  <li><Link to="/">Contact</Link></li>
                </ul>
              </div>

              {/* Desktop Signup/Login */}
              <Link to="/signup" className="lab-btn me-3 d-none d-md-block">
                <span>Signup</span>
              </Link>
              <Link to="/login" className="d-none d-md-block">
                Login
              </Link>

              {/* Mobile Menu Toggle */}
              <div
                className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Mobile Social Toggle */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
