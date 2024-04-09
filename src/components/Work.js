import React from "react"
import Me from "../assets/photoMe.png"

const Work = () => {
    return(
        <>
            <div className="work">
                <div className="container">
                    <p className="hello">Hello There!</p>
                    <p className="text">I'm Ilene Varela-Zul, a dedicated frontend software engineer with a talent for translating digital visions into reality. I excel in the creative process of developing engaging front-end projects that make a memorable impact. Fueled by my passion for coding and a keen attention to detail, I'm committed to pushing the limits of what can be achieved in the digital space. Whether it's creating elegant designs or delivering seamless user experiences, my focus is on harmonizing innovation with practicality.</p>
                </div>
                <div className="container1">
                    <img src={Me} alt="Ilene Varela-Zul" className="me"/>
                </div>
            </div>
            <div className="work1">
                <div className="ratiemate-container">

                </div>
            </div> 
            <div className="work2">
                <div className="cookbook-container">

                </div>
            </div>
        </>
    )
}

export default Work