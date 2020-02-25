import React, { Component } from "react";


import Gallery from "./Gallery.jsx";

import "./Design.css";

export default class Designs extends Component {
  render() {
    return (
      <section className="mt-6 mb-6" id="designs">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h1 className="project_section">Graphic Designs</h1>

           
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Gallery />
            </div>

          
         
        </div>
      </section>
    );
  }
}
