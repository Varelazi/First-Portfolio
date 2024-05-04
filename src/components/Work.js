import React from "react"
import Me from "../assets/photoMe.png"
import RatieMate from "../assets/ratiemate.png"

const Work = () => {
    return(
        <>
            <div className="work">
                <div className="container">
                    <p className="hello">Hello There!</p>
                    <p className="text">I'm Ilene Varela-Zul, a dedicated frontend software developer known for my ability to translate digital visions into reality. With a passion for coding and a keen attention to detail, I'm committed to pushing the limits of what can be achieved in the digital space. Whether it's creating elegant designs or delivering seamless user experiences, my focus is on harmonizing innovation with practicality.</p>
                </div>
                <div className="container1">
                    <img src={Me} alt="Ilene Varela-Zul" className="me"/>
                </div>
            </div>
            <div className="holding-img-text">
                <div className="work-container">
                    <a href="https://frontend-ratiemate.onrender.com/" target="_blank" rel="noreferrer" className="ratiemate-link">
                        <div className="project">
                            <img src={RatieMate} alt="Ratie Mate website" className="ratiemate"/>
                        </div>
                        <div className="text-overlay">
                            <div className="text-overlay-overlay">
                                <div className="project-text">
                                    <p className="project-title">Ratie Mate</p>
                                    <p className="project-creator"> &copy; Roniel, Adrian, Tori, and Ilene</p>
                                    <p className="project-desc">Join our vibrant community-driven movie rating platform. Explore and rate a diverse range of films, from Hollywood blockbusters to indie gems. Contribute your ratings, discover new favorites, and expand our database with overlooked titles. With seamless API integration, enjoy access to an extensive film library, enhancing your movie-watching experience.</p>
                                    <div className="grid-container">
                                        <div className="item">React</div>
                                        <div className="item">Ruby on Rails</div>
                                        <div className="item">UX/UI</div>
                                        <div className="item">External API</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div> 
            {/* <div className="work-container">
                <div className="project">

                </div>
            </div> */}
        </>
    )
}

export default Work