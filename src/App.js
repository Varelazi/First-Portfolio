import React from "react"
import "./App.css"
import NavBar from "./components/NavBar";
import AboutBorder from "./assets/aboutMeBorder.png"
import AboutImage from "./assets/greetingIMG.png"
import ReactLogo from "./assets/react.png"
import JSLogo from "./assets/js.png"
import HtmlLogo from "./assets/html.png"
import CssLogo from "./assets/css.png"
import RubyLogo from "./assets/ruby.png"
import GithubLogo from "./assets/github.png"
import RailsLogo from "./assets/rails.png"

function App() {
  return (
    <>
      <NavBar />
      <div className="aboutMe">
        <div className="frame-container">
          <img src={AboutBorder} className="about-frame"/>
          <div className="about-container">
            <div className="about-text">
              <h3 className="greeting">Greetings, I'm Ilene Varela-Zul!</h3>
              <p className="intro">I am a front-end developer driven by a passion for crafting robust and innovative web applications. With a strong foundation in coding and a fervor for problem-solving, I have embraced the world of software development as my creative playground.</p>
              <div className="skills">
                <img src={ReactLogo} alt="React and React Native Logo" className="logo"/>
                <img src={JSLogo} alt="JavaScript Logo" className="logo"/>
                <img src={HtmlLogo} alt="HTML Logo" className="logo"/>
                <img src={CssLogo} alt="CSS Logo" className="logo"/>
                <img src={RubyLogo} alt="Ruby Logo" className="logo"/>
                <img src={RailsLogo} alt="Rails Logo" className="logo"/>
                <img src={GithubLogo} alt="Github Logo" className="logo"/>
              </div>
            </div>
            <img src={AboutImage} className="about-image" alt="Ilene Varela-Zul"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
