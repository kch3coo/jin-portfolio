import React from "react";
import "./App.css";
import TopNav from "./components/Navbar/TopNav.js";
import Typical from "react-typical";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Designs from "./components/Designs/Designs.jsx";
import Footer from "./components/Navbar/Footer.jsx";
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
      <Footer className="mt-5"/>
    </div>
  );
}

export default App;
