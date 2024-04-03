import React from "react"
import logo from "../assets/iv.png"

const NavBar = ()  => {
    return (
        <div className="nav">
            <img src={logo} alt="Ilene Varela-Zul Logo" className="logo"/>
            <div className="links-box">
                <p className="links">Work</p>
                <p className="links">About Me</p>
                <p className="links">Contact</p>
            </div>
        </div>
    )
}

export default NavBar