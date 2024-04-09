import React, { useState } from "react";
import logo from "../assets/iv.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="nav">
      <img src={logo} alt="Ilene Varela-Zul Logo" className="logo" />
      <div className="links-box">
        <Link to="/" className={activeLink === "/" ? "active-link linkto-w" : "linkto-w"} onClick={() => handleSetActiveLink("/")}>
          <p className="links">Work</p>
        </Link>
        <Link to="/AboutMe" className={activeLink === "/AboutMe" ? "active-link linkto-a" : "linkto-a"} onClick={() => handleSetActiveLink("/AboutMe")}>
          <p className="links">About</p>
        </Link>
        <Link to="/ContactMe" className={activeLink === "/ContactMe" ? "active-link linkto-c" : "linkto-c"} onClick={() => handleSetActiveLink("/ContactMe")}>
          <p className="links">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
