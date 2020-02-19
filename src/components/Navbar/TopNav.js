import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNav.css";
export default class TopNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar-light bg-transparent" id="topNav" expand="lg">
        <Navbar.Brand className="name" href="#home">Jin</Navbar.Brand>

        <div className="float-right collapse navbar-collapse">
          <Nav className='ml-auto'>
            <Nav.Link className="nav-item" href="#home">About me</Nav.Link>
            <Nav.Link className="nav-item" href="#link">Projects</Nav.Link>
            <Nav.Link className="nav-item" href="#link">Designs</Nav.Link>
            <Nav.Link className="nav-item" href="#link">Contact Info</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    );
  }
}
