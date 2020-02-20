import React, { Component } from "react";
import "./AboutMe.css";
import bg from "../../assets/img/land_scape_bg.jpg";
import parallax_bg from "../../assets/img/bg_wo_person.png";
import person from "../../assets/img/person2.png";
import logo from "../../assets/img/logo3.png";
import { Parallax } from "react-scroll-parallax";
import Typical from "react-typical";

export default class AboutMe extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <section>
          <Parallax y={[20, -10]}>
            <img className="parallax_bg frame" src={logo} />
          </Parallax>
        </section>

        {/* <div>
          <img src={bg} />
        </div> */}

        <div className="intro-p-container text-white">
        <div>
        <Typical
          className="mt-2 self-intro-text"
          steps={[
            "Hello 👋",
            1000,
            "I am",
            700,
            "I am Ming Jin Lu 😆",
            700,
            "I am a ",
            500,
            "I am a Developer 💻",
            700,
            "I am a Developer 💻 & Designer ✒️",
            700
          ]}
          loop={3}
          wrapper="p"
        />
      </div>
          <p className="aboutme-p p-2 mt-2">
            Welcome to my site! I’m a software
            developer, graphic designer, cat lover, and a third-year Computer
            Science Specialist student at the University of Toronto. Ok, that
            last part is a little bit dull, but anyways, my main focus is in
            software development. For the past year, I had developed landing
            page websites for Easy Learning Academy, and a search engine for
            Special Olympics Ontario. Recently, I am working on a cross-platform
            mobile application “Linkus”, and a web project “UTOS”. Besides
            coding, arts and design is a huge part of me and I have designed
            posters, logos, and UI/UX layouts using Adobe Softwares. As my
            experience of graphic design and software development enhances, I
            see how these two correlate with each other. One plus one is more
            than two, design and developing projects always give me the
            happiness of three.
          </p>
        </div>
      </div>
    );
  }
}