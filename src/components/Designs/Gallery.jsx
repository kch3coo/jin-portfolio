import React, { Component } from "react";

import i1 from "../../assets/img/grid/i1.png";
import i2 from "../../assets/img/grid/i2.png";
import i3 from "../../assets/img/grid/i3.png";

import l1 from "../../assets/img/grid/l1.svg";
import l2 from "../../assets/img/grid/l2.svg";
import l3 from "../../assets/img/grid/l3.png";
import l4 from "../../assets/img/grid/l4.png";

import ll1 from "../../assets/img/grid/ll1.svg";
import ll2 from "../../assets/img/grid/ll2.png";

import p1 from "../../assets/img/grid/p1.png";
import p2 from "../../assets/img/grid/p2.png";
import p3 from "../../assets/img/grid/p3.png";
import p4 from "../../assets/img/grid/p4.png";

import "./Gallery.css";

export default class Gallery extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="i1 overlay-frame">
          <img className="design-frame" src={i1} alt="image" />
          <div class="overlay text-white">
            This image was taken for UTADA booklet design.
          </div>
        </div>
        <div className="p1 overlay-frame">
          <img className="design-frame" src={p1} alt="poster" />
          <div class="overlay text-white">
            Poster design for a fundraising campaign for coronavirus.
          </div>
        </div>
        <div className="l1 overlay-frame">
          <img className="design-frame" src={l1} alt="long-logo" />
          <div class="overlay text-white">
            {" "}
            UTADA logo edited with Adobe Illustrator, the logo is masked with
            evening sunlight, this mix of purple and pink created a contrast
            with the original blue logo.
          </div>
        </div>
        <div className="p2 overlay-frame">
          <img className="design-frame" src={p2} alt="poster" />
          <div class="overlay text-white">
            Poster designed to celebrate Chinese New Year in 2020
          </div>
        </div>
        <div className="ll1 overlay-frame">
          <img className="design-frame" src={ll1} />
          <div class="overlay text-white">
            Designed my own logo in 2020 using Adobe Illustrator
          </div>
        </div>
        <div className="l2 overlay-frame">
          <img className="design-frame" src={l2} />
          <div class="overlay text-white">
            UTADA logo edited with Adobe Illustrator, the logo is masked with an
            image of forest, mixing the combination of nature and technology
            (UTADA is a computer science club).
          </div>
        </div>
        <div className="l3 overlay-frame">
          <img className="design-frame" src={l3} />
          <div class="overlay text-white">
            Logo of Stylelist, designed with Adobe Illustrator during UofTHack
            VII.
          </div>
        </div>
        <div className="i2 overlay-frame">
          <img className="design-frame" src={i2} alt="icon" />
          <div class="overlay text-white">
            Victoria College (my college) at UofT, this photo was used in UTADA
            2019 booklet design.
          </div>
        </div>
        <div className="p3 overlay-frame">
          <img className="design-frame" src={p3} alt="poster" />
          <div class="overlay text-white">
            The cover for UTADA 2019 booklet. Created by Adobe Illustrator and
            Photoshop.
          </div>
        </div>
        <div className="p4 overlay-frame">
          <img className="design-frame" src={p4} alt="poster" />
          <div class="overlay text-white">
            Final poster for a product design course CSC318 in UofT. Eventac is
            a product we designed using the waterfall design process with
            sufficient research, data gathering, hi-fi and low-fi prototype.
          </div>
        </div>
        <div className="ll2 overlay-frame">
          <img className="design-frame" src={ll2} alt="long-logo" />
          <div class="overlay text-white">
            A logo designed for UTADA Internal Case Competition in September
            2019, our product is UTOS, a web application that tries to bridge
            the gap between software developers in UofT.
          </div>
        </div>
        <div className="i3 overlay-frame">
          <img className="design-frame" src={i3} alt="icon" />
          <div class="overlay text-white">
            Sidney Smith Hall, photo taken in 2019 and it is used in UTADA 2019
            booklet to introduce the variety of study spaces at UofT.
          </div>
        </div>
        <div className="l4 overlay-frame">
          <img className="design-frame" src={l4} alt="logo" />
          <div class="overlay text-white">
            Poster of the WeChat application we created during the summer of
            2019. This is a food map that displays local delicacy around Toronto
            Downtown Area. Poster created using Adobe Photoshop.
          </div>
        </div>
      </div>
    );
  }
}
