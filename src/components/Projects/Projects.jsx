import React, { Component } from "react";
import { Card, Carousel } from "react-bootstrap";
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
import pm_remaster1 from "../../assets/img/screenshots/pm-remaster1.png";
import pm_remaster2 from "../../assets/img/screenshots/pm-remaster2.png";
import pm_remaster3 from "../../assets/img/screenshots/pm-remaster3.png";
import pm_remaster4 from "../../assets/img/screenshots/pm-remaster4.png";

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

          {/* Aitchl Ltd */}
          <div className="row justify-content-center mt-5">
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
                          <img src={"/screenshots/aitchl1.png"} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={"/screenshots/aitchl2.png"} alt="" />
                        </Carousel.Item>
                      </Carousel>
                    </div>

                    <Card.Body>
                      <Card.Title>Aitchl Ltd</Card.Title>
                      <Card.Text>
                        The design is created by Xuan using Adobe XD. The
                        website is developed using JavaScript, HTML, Saas, AOS
                        framework and Bootstrap framework.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a className="p-1" href="https://aitchl.com/">
                        <h5>Navigate</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>Aitchl Ltd</h2>
              <div className="text-white-p">
                {" "}
                <p>
                  Lead a small team of four from Amind Studio to design and
                  develop a professional landing page for Aitchl Ltd.
                </p>
                <p>
                  My Tasks: My main tasks were to communicate with the customer
                  and translate his requirements into detailed instructions. I
                  oversee the design and the entire project construction. I also
                  need to assist team members when they don't know how to build
                  some parts of the website.
                </p>
                <p>
                  {" "}
                  The customer has very strict requirements on optimization
                  across different browsers and having SEO enhancement. We had
                  trouble optimizing some layouts on Safari and we need to
                  incorporate SEO along the way. Also, we need to add a language
                  translation function to the website, and it is a new challenge
                  for us.
                </p>
                <h5>Contributors: </h5>
              </div>
              <div className="contributors_box">
                <a calssName="contributor " href="https://github.com/kch3coo">
                  <FaGithub /> kch3coo
                </a>
                <a calssName="contributor" href="https://github.com/rainyuxuan">
                  <FaGithub /> rainyuxuan
                </a>
                <a calssName="contributor" href="https://github.com/themarkone">
                  <FaGithub /> themarkone{" "}
                </a>
                <a
                  calssName="contributor"
                  href="https://github.com/swx1037307095"
                >
                  <FaGithub /> swx1037307095{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Aitchl Ltd */}

          {/* 2020 Non-official UofT Virtual Clubfair*/}
          <div className="row justify-content-center mt-5">
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>2020 Non-official UofT Virtual Clubfair</h2>
              <div className="text-white-p">
                {" "}
                <p>
                  This project is for a non-official UofT virtual club fair.
                  During the COVID-19 pandemic, the UofT club fair that usually
                  happens in September was cancelled. Many student organizations
                  need some form of marketing and platform to attract new
                  members so this event is hosted. AMIND developed a web
                  platform for this event.
                </p>
                <p>
                  My Tasks: My main tasks were to design the entire website,
                  understand what data needs to be presented for each club and
                  how to properly display them.
                </p>
                <p>
                  {" "}
                  Challenges: There are 37 clubs to manage and it is tedious to
                  create a webpage for each club using plain javascript and
                  HTML. Our solution is to use HandlebarsJS to generate each
                  subpage based on the data of each club.{" "}
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
                <a calssName="contributor" href="https://github.com/alexmai123">
                  <FaGithub /> alexmai123{" "}
                </a>
                <a calssName="contributor" href="https://github.com/rainyuxuan">
                  <FaGithub /> rainyuxuan{" "}
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
                          <img src={"/screenshots/ut_clubfair1.png"} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={"/screenshots/ut_clubfair2.png"} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={"/screenshots/ut_clubfair3.png"} alt="" />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <Card.Body>
                      <Card.Title>
                        2020 Non-official UofT Virtual Clubfair Web Platform
                      </Card.Title>
                      <Card.Text>
                        <p>
                          Used JSON Schema to formalize data from different
                          clubs, store all data into a JSON file and used
                          Boostrap and Handlebars.js to display this information
                          onto the web platform.
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a className="p-1" href="https://www.uoftclubfair.com/">
                        <h5>Navigate</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          {/* end 2020 Non-official UofT Virtual Clubfair */}

          {/* Easy Education */}
          <div className="row justify-content-center mt-5">
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
                          <img src={"/screenshots/ez4edu.png"} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={"/screenshots/ez4edu1.png"} alt="" />
                        </Carousel.Item>
                      </Carousel>
                    </div>

                    <Card.Body>
                      <Card.Title>Easy Education</Card.Title>
                      <Card.Text>
                        JavaScript, HTML, aos.js, and Bootstrap to develop the
                        landing page. Connected the website with the customer's
                        Shopify products.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a className="p-1" href="https://ez4edu.com/">
                        <h5>Navigate</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>Easy Education</h2>
              <div className="text-white-p">
                {" "}
                <p>
                  This project comes from the same customer that asked me to
                  construct EZ Learning Academy. Both of these websites are for
                  Easy Group and Easy Education is one of their largest product.
                  With the trust of the returning customer, I and two others
                  from AMIND collaborate with the design team from Easy Group to
                  construct a new landing page for Easy Education.
                </p>
                <p>
                  My Tasks: My main tasks were to provide professional opinions
                  on landing page design, overseeing the development of the
                  website, and making sure the schedule is on track.
                </p>
                <p>
                  {" "}
                  Challenges: In some particular parts of the website, the
                  customer wants a completely different view when the screen
                  size is different. The challenge is to utilize HTML and CSS to
                  achieve the desired outcome.
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
                <a calssName="contributor" href="https://github.com/alexmai123">
                  <FaGithub /> alexmai123{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Easy Education */}

          {/* Ezlearning ACA */}
          <div className="row justify-content-center mt-5">
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>EZ Learning Academy</h2>
              <div className="text-white-p">
                {" "}
                <p>
                  A freelance project for the company Easy Learning Academy to
                  develop its static landing page.
                </p>
                <p>
                  My Tasks: My main tasks were to design the graphics and layout
                  of the website and developed the front-end of the website.
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
                      <a className="p-1" href="http://ezlearningaca.com/">
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
                        Used Python Flask framework to build our backend
                        management system, Microsoft SQL Server Management
                        Studio 18 for our database and React framework to
                        display our interfaces.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a className="p-1" href="http://results.sooinc.ca/">
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
                  performance. This connects the bridge between Special Olympics
                  athletes and the rest of society since their efforts and
                  performance can now be heard and seen more often.
                </p>
                <p>
                  My Tasks: Understand the partner's needs. Organize priorities
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
                  Challenges: Building the project based on industry-level
                  standards and processes. Constant communication with the
                  partner. Making frequent deliverables based on the scrum
                  process. Followed the Agile development process.
                </p>
                <p>
                  My Tasks: Design the overall outlook of the website, all
                  graphics-related works including posters, icons, and logos.
                  Data scraping using UiPath. React frontend development.
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
                        Used a web scraper to get the clothing items information
                        from Nordstrom.ca and then feed these data into the
                        backend. Our backend is a Machine Learning model trained
                        on the bank of keywords and it provides next items after
                        a swipe based on the cosine similarities between the
                        next items and the liked items. The interaction with the
                        clothing items and the swipes is on our React frontend.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a
                        className="p-1"
                        href="https://github.com/tinally/stylelist/"
                      >
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
                        An Android application containing three games:
                        block-puzzle-game (2048), puzzle-solving game (Sliding
                        Tiles) and Sudoku. Implemented with Java and XML layout
                        on Andriod Studio.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a className="p-1" href={batman_apk} download>
                        <h5>Download</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>Batman Game Center</h2>
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
                  My Tasks: Building all the layouts, designing the structure of
                  our project, and implementing the scoring systems and gesture
                  detectors.
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

          {/* PM-REMASTER */}
          <div className="row justify-content-center mt-5">
            <div className="text-white col-sm-6 pr-md-4 text-center text-md-left pt-3 pl-3">
              <h2>PM-remaster</h2>
              <div className="text-white-p">
                {" "}
                <p>
                  Developed an interactive project management system web
                  application that utilized the MERN (MongoDB, Express JS, React
                  JS and Node JS) stack development. By using AJAX technology,
                  and interactive front-end, we are able to reduce the
                  difficulty and increase the efficiency of project management
                  while making the process interactive and fun. Project managers
                  can create teams, and assign tasks to project contributors and
                  look at the project status in a simple way.
                </p>
                <p>
                  My Tasks: Graphic design, Front-end Development, design and
                  implementation of RESTful APIs, design the entire project
                  structure.
                </p>
                <p>
                  {" "}
                  Challenges: Trying to come up with an innovative and efficient
                  way of project management while making the process interactive
                  and fun. Designing and implementing RESTful APIs that
                  represent the project management system
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
                          <img src={pm_remaster1} alt="Stylelist" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={pm_remaster2} alt="Stylelist" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={pm_remaster3} alt="Third slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src={pm_remaster4} alt="Third slide" />
                        </Carousel.Item>
                      </Carousel>
                    </div>

                    <Card.Body>
                      <Card.Title>PM-remaster</Card.Title>
                      <Card.Text>
                        Used Axios JS for HTTP requests, React Bootstrap library
                        for some of the frontend interfaces and deployed the
                        project on Heroku. This allows project managers to have
                        more ways to create, manage and keep track of their
                        project status.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <a
                        className="p-1"
                        href="https://pm-remaster.herokuapp.com/"
                      >
                        <h5>Navigate</h5>
                      </a>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          {/* end PM-REMASTER*/}

          <br />
          <br />
        </div>
      </section>
    );
  }
}
