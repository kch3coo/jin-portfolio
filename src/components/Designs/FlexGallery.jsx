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
export default class FlexGallery extends Component {
  render() {
    return (
      <div class="container pl-md-10 pr-md-10">
        <div class="row mb-0">
          <div class="col-lg-9 col-md-9 col-sm-9">
            <div class="row">
              <div class="col-lg-8 col-sm-8">
                <img class="img-fluid" src={i1} />
              </div>
              <div class="col-lg-4 col-sm-4 pl-0">
                {" "}
                <img class="img-fluid" src={p1} />
              </div>
            </div>
            <div className="row">
              <div class="col-lg-4 col-sm-4">
                {" "}
                <img class="img-fluid" src={l1} />
              </div>
              <div class="col-lg-8 col-sm-8 pl-0">
                <img class="img-fluid" src={ll1} />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-3">
            <div className="row">
              <div className="col-lg-12">
                <img class="img-fluid mb-1" src={l1} />
                <img class="img-fluid mb-1" src={p1} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <img class="img-fluid mb-1" src={l1} />
                <img class="img-fluid mb-1" src={p1} />
              </div>

              <div className="col-lg-6 col-sm-6 pl-0">
                <img class="img-fluid mb-1" src={p1} />
                <img class="img-fluid mb-1" src={l1} />
              </div>
            </div>

            <div className="row">
              <img class="img-fluid mb-1" src={ll1} />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 pl-0">
            <img class="img-fluid mb-1" src={i2} />
            <img class="img-fluid mb-1" src={i3} />
          </div>
        </div>
      </div>
    );
  }
}
