import React from "react"
import Me from "../assets/aboutmeIMG.png"
import ReactLogo from "../assets/react.png"
import HTMLLogo from "../assets/html.png"
import CSSLogo from "../assets/css.png"
import JavaScriptLogo from "../assets/js.png"
import RubyLogo from "../assets/ruby.png"
import RailsLogo from "../assets/rails.png"
import GithubLogo from "../assets/github.png"

const AboutMe = () => {
    return(
        <>
            <div className="about-me">
                <div className="about-textbox">
                    <p className="hello">
                        Hola!
                    </p>
                    <p className="text1">
                        My name is Ilene Varela-Zul, a passionate frontend software developer whose roots trace back to the vibrant culture of Mexico, now dedicated to crafting innovative experiences in sunny California.
                    </p>
                    <p className="text1">
                        My journey into the world of coding began in middle school, igniting a fervent love for the craft that has since become the cornerstone of my life's work. With an unwavering commitment to placing creativity and design at the forefront, I am driven by the desire to craft digital landscapes that captivate and inspire.           
                    </p>
                    <p className="text1">
                        In my quest for meaningful employment, I am dedicated to channeling my skills and enthusiasm into crafting user experiences that are both effective and enjoyable.
                    </p>
                    <p className="text1">
                        Beyond the realm of coding, I find solace and inspiration in various creative pursuits. Whether immersed in the latest gaming adventures, exploring the vibrant world of painting, indulging in the therapeutic act of coloring, or losing myself in captivating shows, I am constantly seeking new avenues for expression and enjoyment.
                    </p>
                </div>
                <img src={Me} alt="Ilene Varela-Zul" className="about-img"/>
            </div>
            <p className="skills-title">Skills</p>
            <div className="skill-box">
                <img src={ReactLogo} alt="React and React Native Logo" className="skills-logo"/>
                <img src={HTMLLogo} alt="HTML Logo" className="skills-logo"/>
                <img src={CSSLogo} alt="CSS Logo" className="skills-logo"/>
                <img src={JavaScriptLogo} alt="JavaScript Logo" className="skills-logo"/>
                <img src={RubyLogo} alt="Ruby Logo" className="skills-logo"/>
                <img src={RailsLogo} alt="Rails Logo" className="skills-logo"/>
                <img src={GithubLogo} alt="Github Logo" className="skills-logo"/>
            </div>
            <p className="test-title">Testimonials</p>
            <div className="testimonials">
                <p className="test1">
                    "Ilene is a gem to work with—her hands-on approach, adept problem-solving skills, and laser focus on staying on topic make her an invaluable asset to any tech team. Collaborative and easy to work alongside, she consistently brings positivity and productivity to every project. I wholeheartedly recommend Ilene for her exceptional abilities and professionalism."
                </p>
                <p className="test-name">Tori Calkins, Junior Frontend Web Developer</p>
            </div>
            <div className="testimonials">
                <p className="test2">
                    "Ilene is an invaluable asset to any team. Her talent for problem solving is outstanding, always finding elegant solutions to even the most daunting challenges. Working alongside her is not only a pleasure but also a guarantee of success. Ilene's dedication, creativity, and collaborative spirit make her an exceptional teammate and an indispensable part of any project."
                </p>
                <p className="test-name1">Adrian Ramirez, Junior Frontend Web Developer</p>
            </div>
            <div className="bottom-buttons">
                <a href="https://drive.google.com/file/d/1pnm6ebY4bPSFSmjU7p8K5XSGOA5L4pJd/view?usp=sharing" target="_blank" rel="noreferrer" className="button">
                    View Resume
                </a>
                <a href="https://drive.google.com/file/d/11WTKMx6heD7gm4p4uLlTt0zkG2KI-ad3/view?usp=sharing" target="_blank" rel="noreferrer" className="button">
                    Reference Letter - Ajnea
                </a>
            </div>
        </>
    )
}

export default AboutMe