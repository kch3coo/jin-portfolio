import React from "react";
import "./App.css";
import TopNav from "./components/Navbar/TopNav.js";
import Typical from "react-typical";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Designs from "./components/Designs/Designs.jsx";
import { ParallaxProvider } from 'react-scroll-parallax';
import "./assets/css/style.css"
function App() {
  return (
    <div className="App">
      <TopNav />
      
      <ParallaxProvider>
        <AboutMe />
        <Projects />
        <Designs />
      </ParallaxProvider>
    </div>
  );
}

export default App;
