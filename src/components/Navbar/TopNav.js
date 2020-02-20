import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNav.css";
import logo from "../../assets/img/logo3.png";
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
            <Nav.Link className="nav-item" href="#home">
              About me
            </Nav.Link>
            <Nav.Link className="nav-item" href="#link">
              Projects
            </Nav.Link>
            <Nav.Link className="nav-item" href="#link">
              Designs
            </Nav.Link>
            <Nav.Link className="nav-item" href="#link">
              Contact Info
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    );
  }
}
