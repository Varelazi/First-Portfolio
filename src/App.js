import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"
import Work from "./components/Work"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />}/>
        <Route path="/AboutMe" element={<AboutMe />}/>
        <Route path="/ContactMe" element={<ContactMe />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
