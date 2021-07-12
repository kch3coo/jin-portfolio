import React, { Component } from "react";
import "./AboutMe.css";
import logo_svg from "../../assets/img/white_logo.svg";
import myself from "../../assets/img/design/myself3.png";
import myself2 from "../../assets/img/design/myself2.png";
import Typical from "react-typical";
import { Carousel } from "react-bootstrap";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default class AboutMe extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <section id="logo-section">
          <div className="container batman-card-container">
            <Carousel style={{ height: "inherit" }}>
              <Carousel.Item>
                {/* <Parallax y={[-20, 20]}> */}
                  <img className="parallax_bg frame" src={logo_svg} />
                {/* </Parallax> */}
              </Carousel.Item>
              <Carousel.Item>
                <div className="my-img-frame d-block" style={{maxHeight: "400px"}}>
                  <img className="my-img" src={myself} alt="my_pic" />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        {/* <div>
          <img src={bg} />
        </div> */}

        <section id="aboutme">
          <div className="intro-p-container">
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
                  "I am a Developer 💻 & Designer ✒️",
                  1000
                ]}
                loop={3}
                wrapper="p"
              />
            </div>
            <p className="aboutme-p p-2 mt-2">
              Welcome to my site! I’m a software developer, graphic designer,
              cat lover, and a fourth-year Computer Science Specialist student at
              the University of Toronto. Ok, that last part is a little bit
              dull, but anyways, my main focus is in software development. For
              the past year, I had developed landing page websites for Easy
              Learning Academy, and a search engine for Special Olympics
              Ontario. Recently, I am working on a cross-platform mobile
              application “Linkus”, and a web project “UTOS”. Besides coding,
              arts and design is a huge part of me and I have designed posters,
              logos, and UI/UX layouts using Adobe Softwares. As my experience
              of graphic design and software development enhances, I see how
              these two correlate with each other. One plus one is more than
              two, design and developing projects always give me the happiness
              of three.
            </p>
            <div>
              <a className="hvr-icon-fade" href="https://github.com/kch3coo">
                <FaGithub className="github-icon" size="2em" />
              </a>

              <a
                className="ml-3 hvr-icon-fade"
                href="https://www.linkedin.com/in/mingjinlu"
              >
                <FaLinkedin className="linkedin-icon" size="2em" />
              </a>

              <a
                className="ml-3 hvr-icon-fade"
                href="https://www.instagram.com/kch3coo/"
              >
                <FaInstagram className="insta-icon" size="2em" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
