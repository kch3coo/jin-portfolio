import React, { Component } from "react";

import i1 from "../../assets/img/grid/i1.png";
import i2 from "../../assets/img/grid/i2.png";
import i3 from "../../assets/img/grid/i3.png";

import l1 from "../../assets/img/grid/l1.svg";
import l2 from "../../assets/img/grid/l2.svg";
import l3 from "../../assets/img/grid/l3.png";

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
        <div className="i1">
          <img className="design-frame" src={i1} alt="icon" />
        </div>
        <div className="p1">
          <img className="design-frame" src={p1} alt="poster" />
        </div>
        <div className="l1">
          <img className="design-frame" src={l1} alt="long-logo" />
        </div>
        <div className="p2">
          <img className="design-frame" src={p2} alt="poster" />
        </div>
        <div className="ll1">
          <img className="design-frame" src={ll1} />
        </div>
        <div className="l2">
          <img className="design-frame" src={l2} />
        </div>
        <div className="l3">
          <img className="design-frame" src={l3} />
        </div>
        <div className="i2">
          <img className="design-frame" src={i2} alt="icon" />
        </div>
        <div className="p3">
          <img className="design-frame" src={p3} alt="poster" />
        </div>
        <div className="p4">
          <img className="design-frame" src={p4} alt="poster" />
        </div>
        <div className="ll2">
          <img className="design-frame" src={ll2} alt="long-logo" />
        </div>
        <div className="i3">
          <img className="design-frame" src={i3} alt="icon" />
        </div>
        <div className="l4">
          <img className="design-frame" src={l3} alt="logo" />
        </div>
      </div>
    );
  }
}
