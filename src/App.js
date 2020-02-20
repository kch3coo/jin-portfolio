import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/Navbar/TopNav.js";
import Typical from "react-typical";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
    <div className="App">
      <TopNav />
      
      <ParallaxProvider>
        <AboutMe />
        <Projects />
      </ParallaxProvider>
    </div>
  );
}

export default App;
