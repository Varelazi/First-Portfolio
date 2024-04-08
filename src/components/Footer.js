import React from "react"

const Footer = () => {
    return(
        <div className="footer-container">
            <p className="footer-name">&#169; Portfolio - Ilene Varela-Zul</p>
            <div className="socials">
                <a href="https://www.linkedin.com/in/varelazi/" target="_blank" className="linkedin-a">
                    <p className="linkedin">LinkedIn</p>
                </a>
                <a href="https://github.com/Varelazi" target="_blank" className="github-a">
                    <p className="github">Github</p>
                </a>
            </div>
        </div>
    )
}

export default Footer