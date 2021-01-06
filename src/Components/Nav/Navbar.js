import React, { useState } from "react";
import { Link } from "gatsby";
import { CgMenuRight, CgClose } from "react-icons/cg";
import logo from "../../images/logo.png";
import "./navbar.styles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
      <div className={navbar ? "main-navbar active" : "main-navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" loading="lazy" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CgClose role="button" /> : <CgMenuRight />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
