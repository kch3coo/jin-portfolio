import React from "react";
import "./App.css";
import TopNav from "./components/Navbar/TopNav.js";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Designs from "./components/Designs/Designs.jsx";
import Footer from "./components/Navbar/Footer.jsx";
import "./assets/css/style.css";
function App() {
  return (
    <div className="App">
      <TopNav />

      <AboutMe />
      <Projects />
      <Designs />

      <Footer className="mt-5" />
    </div>
  );
}

export default App;
