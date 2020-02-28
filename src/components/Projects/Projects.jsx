import React, { Component } from "react";
import { Card, Button, Carousel } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

import ez_landing from "../../assets/img/screenshots/ezlearning_landing.png";
import soo_landing from "../../assets/img/screenshots/soonic_landingpage.png";
import stylelist1 from "../../assets/img/screenshots/stylelist_1.png";
import stylelist2 from "../../assets/img/screenshots/stylelist_2.png";
import stylelist3 from "../../assets/img/screenshots/stylelist_3.jpg";
import batman1 from "../../assets/img/screenshots/batman1.jpg";
import batman2 from "../../assets/img/screenshots/batman2.jpg";
import batman3 from "../../assets/img/screenshots/batman3.jpg";
import batman4 from "../../assets/img/screenshots/batman4.jpg";
import batman_apk from "../../assets/downloads/batman_game_center.apk";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    AOS.init();
  }

  render() {
    return (
      <section className="pt-4 mt-4" id="projects">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h1 className="text-white project_section">Projects</h1>
          </div>

          {/* Ezlearning ACA */}
          <div className="row justify-content-center mt-5">
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>EZ Learning Academy</h2>
              <div className="text-white-p">
                {" "}
                <p>
                  A freelance project for the company Easy Learning Academy to
                  develope its static landing page.
                </p>
                <p>
                  Tasks: My main tasks were to design all the web wireframes that
                  satisfy the client’s standard, and begin front-end production.
                </p>
                <p>
                  {" "}
                  Challenges: Establish a good connection with the client and
                  understand their needs and requirements. Design, implement and
                  publish this website within two weeks.{" "}
                </p>
                <h5>Contributors: </h5>
              </div>
              <div className="contributors_box">
                <a calssName="contributor " href="https://github.com/kch3coo">
                  <FaGithub /> kch3coo
                </a>
                <a calssName="contributor" href="https://github.com/yty25">
                  <FaGithub /> yty25
                </a>
                <a
                  calssName="contributor"
                  href="https://github.com/jisuanke413 "
                >
                  <FaGithub /> jisuanke413{" "}
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row gutter-0">
                <div
                  className="col-md-12"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <Card>
                    <Card.Img variant="top" src={ez_landing} />
                    <Card.Body>
                      <Card.Title>EZ Learning Academy</Card.Title>
                      <Card.Text>
                        <p>
                          Design the interface using JavaScript, HTML and
                          Bootstrap framework and deploy the application on
                          Amazon Web Server.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a href="http://ezlearningaca.com/">
                        <h5>Navigate</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          {/* end Ezlearning */}

          {/* SOO */}
          <div className="row justify-content-center mt-5">
            <div className="col-sm-6">
              <div className="row gutter-0">
                <div
                  className="col-md-12"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <Card>
                    <Card.Img variant="top" src={soo_landing} />
                    <Card.Body>
                      <Card.Title>Special Olympics Ontario</Card.Title>
                      <Card.Text>
                        <p>
                          Used Python Flask framework to build our backend
                          management system, Microsoft SQL Server Management
                          Studio 18 for our database and React framework to
                          display our interfaces.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a href="http://results.sooinc.ca/">
                        <h5>Navigate</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>Special Olympics Ontario</h2>
              <div className="text-white-p">
                {" "}
                <p>
                  This project is developed alongside our partner from the
                  Special Olympic Ontario team. We are building the very first
                  product for Special Olympics which supports search with
                  multiple criteria and display of events/ individual athlete
                  performance. This is a bridge that connects the Special
                  Olympics athletes to the rest of society since their efforts
                  and performance now can be heard and seen more often.
                </p>
                <p>
                  Tasks: Understand the partner's needs. Organize priorities
                  of each deliverable graphic designer and front-end developer.
                </p>
                <p>
                  {" "}
                  Challenges: Building the project based on industry-level
                  standards and processes. Constant communication with the
                  partner. Making frequent deliverables based on the scrum
                  process. Followed the Agile development process.
                </p>
                <h5>Contributors: </h5>
              </div>
              <div className="contributors_box">
                <a calssName="contributor " href="https://github.com/kch3coo">
                  <FaGithub /> kch3coo
                </a>
                <a calssName="contributor" href="https://github.com/WeitongL">
                  <FaGithub /> WeitongL
                </a>
                <a calssName="contributor" href="https://github.com/Yangfan999">
                  <FaGithub /> Yangfan999
                </a>
                <a calssName="contributor" href="https://github.com/caiquanshi">
                  <FaGithub /> caiquanshi
                </a>
                <a calssName="contributor" href="https://github.com/helenz7">
                  <FaGithub /> helenz7
                </a>
                <a
                  calssName="contributor"
                  href="https://github.com/brook-linyue-wu "
                >
                  <FaGithub /> brook-linyue-wu{" "}
                </a>
              </div>
            </div>
          </div>
          {/* End SOO */}

          {/* Stylelist */}
          <div className="row justify-content-center mt-5">
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>Stylelist</h2>
              <div className="text-white-p">
                {" "}
                <p>
                  Second place winner for UofT Hacks VII 2020. Fashion has
                  always been a world that seemed far away from tech.
                  “Stylelist” is able to bridge this gap by understanding users’
                  fashion within a few swipes and makes personalized suggestions
                  for their daily outfits.
                </p>
                <p>
                  Tasks: Design the overall outlook of the website, all graphic
                  related works including poster, icons, and logo. Data scraping
                  using UiPath. React frontend development.
                </p>
                <p>
                  {" "}
                  Challenges: Coming up with an amazing idea that bridges
                  Fashion and machine learning. Connecting the backend,
                  frontend, and database and deliver this full-stack project
                  within 36 hours.
                </p>
                <h5>Contributors: </h5>
              </div>
              <div className="contributors_box">
                <a calssName="contributor " href="https://github.com/kch3coo">
                  <FaGithub /> kch3coo
                </a>
                <a calssName="contributor" href="https://github.com/NivedithaK">
                  <FaGithub /> NivedithaK
                </a>
                <a
                  calssName="contributor"
                  href="https://github.com/kevinleung987"
                >
                  <FaGithub /> kevinleung987{" "}
                </a>
                <a calssName="contributor" href="https://github.com/tinally">
                  <FaGithub /> tinally{" "}
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row gutter-0">
                <div
                  className="col-md-12"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <Card>
                    <div className="container card-container">
                      <Carousel>
                        <Carousel.Item>
                          <img src={stylelist1} alt="Stylelist" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={stylelist2} alt="Stylelist" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={stylelist3} alt="Third slide" />
                        </Carousel.Item>
                      </Carousel>
                    </div>

                    <Card.Body>
                      <Card.Title>Stylelist</Card.Title>
                      <Card.Text>
                        <p>
                          Used a web scraper to get the clothing items
                          information from Nordstrom.ca and then feed these data
                          into the backend. Our backend is a Machine Learning
                          model trained on the bank of keywords and it provides
                          next items after a swipe based on the cosine
                          similarities between the next items and the liked
                          items. The interaction with the clothing items and the
                          swipes is on our React frontend.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a href="https://github.com/tinally/stylelist/">
                        <h5>Source Code</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          {/* end Stylelist*/}

          {/* BGC*/}
          <div className="row align-items-center justify-content-center mt-5">
            <div className="col-sm-6">
              <div className="row gutter-0">
                <div
                  className="col-md-12"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <Card>
                    <div className="container batman-card-container">
                      <Carousel style={{ height: "inherit" }}>
                        <Carousel.Item>
                          <img
                            className="d-block w-40"
                            src={batman1}
                            alt="Stylelist"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-70"
                            src={batman2}
                            alt="Stylelist"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-70"
                            src={batman3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-70"
                            src={batman4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <Card.Body>
                      <Card.Title>Batman Game Center</Card.Title>
                      <Card.Text>
                        <p>
                          An Android application containing three games:
                          block-puzzle-game (2048), puzzle-solving game (Sliding
                          Tiles) and Sudoku. Implemented with Java and XML
                          layout on Andriod Studio.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a href={batman_apk} download>
                        <h5>Download</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>
               Batman Game Center
              </h2>
              <div className="text-white-p">
                {" "}
                <p>
                  Collaborated with 3 other teammates through GitHub. We have
                  incorporated multiple design patterns, including MVC,
                  observer, strategy design patterns to help us implement these
                  games. The files and user accounts are stored locally on the
                  user's device.
                </p>
                <p>
                  Tasks: Building all the layouts, designing the structure of
                  our project, and implementing the scoring systems and gesture
                  detectors..
                </p>
                <p>
                  {" "}
                  Challenges: Understand and implement different design patterns
                  to build a project that follows the SOLID design principle.
                  Incorporate multiple games within a single application and
                  have a variety of customizable settings.
                </p>
                <h5>Contributors: </h5>
              </div>
              <div className="contributors_box">
                <a calssName="contributor " href="https://github.com/kch3coo">
                  <FaGithub /> kch3coo
                </a>
                <a calssName="contributor" href="https://github.com/dpcjzpeter">
                  <FaGithub /> dpcjzpeter
                </a>
                <a calssName="contributor" href="https://github.com/LeoGuo98">
                  <FaGithub /> LeoGuo98
                </a>
                <a calssName="contributor" href="https://github.com/Misaiko">
                  <FaGithub /> Misaiko
                </a>
              </div>
            </div>
          </div>
          {/* End SOO */}

          

          <br />
          <br />
        </div>
      </section>
    );
  }
}
