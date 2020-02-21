import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNav.css";
import logo from "../../assets/img/logo3.png";
import { Link, animateScroll as scroll } from "react-scroll";
export default class TopNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar-light bg-transparent" id="topNav" expand="lg">
        <Navbar.Brand className="name" href="#home">
          <img
            src={logo}
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className="ml-2 mt-2">Lu Ming Jin</span>
        </Navbar.Brand>

        <div className="float-right collapse navbar-collapse">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link className="nav-item">About me</Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link className="nav-item">Projects</Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="designs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link className="nav-item">Designs</Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="info"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link className="nav-item">Contact Info</Nav.Link>
            </Link>
          </Nav>
        </div>
      </Navbar>
    );
  }
}
