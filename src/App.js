import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"
import Work from "./components/Work"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Work />}/>
      </Routes>
    </>
  );
}

export default App;
