import React from "react"

function NavBar () {
    return (
        <>
            <div className="navbar">
                <div className="title-container">
                    <h2 className="name"> Ilene Varela-Zul </h2>
                    <p className="title">Front-End Software Developer</p>
                </div>
                <div className="linkbox">
                    <h5 className="navlink">About Me</h5>
                    <h5 className="navlink">Projects</h5>
                    <h5 className="navlink">Contact Me</h5>
                </div>
            </div>
        </>
    )
}

export default NavBar