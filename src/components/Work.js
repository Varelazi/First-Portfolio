import React from "react"
import Me from "../assets/photoMe.png"
import RatiemateLanding from "../assets/ratiemate-landing.png"

const Work = () => {
    return(
        <>
            <div className="work">
                <div className="container">
                    <p className="hello">Hello There!</p>
                    <p className="text">I'm Ilene Varela-Zul, a passionate frontend software engineer with a knack for bringing digital visions to life. I thrive on the creative challenge of crafting captivating front-end projects that leave a lasting impression. With a love for coding and an eye for detail, I'm dedicated to pushing the boundaries of what's possible in the digital realm. From elegant designs to seamless user experiences, I'm all about blending innovation with functionality.</p>
                </div>
                <div className="container1">
                    <img src={Me} alt="Ilene Varela-Zul" className="me"/>
                </div>
            </div>
            <div className="work1">
                <div className="ratiemate-container">
                    <img src={RatiemateLanding} alt="Ratie Mate Landing Page" className="landing-r"/>
                </div>
            </div> 
        </>
    )
}

export default Work