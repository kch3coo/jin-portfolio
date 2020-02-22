import React, { Component } from "react";
import {
  Nav,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import logo from "../../assets/img/white_logo.svg";
import wechat_qrcode from "../../assets/img/screenshots/weixin_qrcode.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaWeixin } from "react-icons/fa";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <Nav
        sticky="bottom"
        style={{
          backgroundColor: "black"
        }}
      >
        <div className="container justify-content-center text-white">
          <div
            className="footer-logo-frame"
          >
            <img
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          
          <div className="info mt-2 p-5"> 
          <Row>
            <Col>
              {" "}
              <h5> Contact</h5>
              <div>mingjin.lu@mail.utoronto.ca</div>
            </Col>
            <Col>
              <h5> Connect</h5>

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

                <OverlayTrigger
                  trigger="hover"
                  key="top"
                  placement="top"
                  overlay={
                    <Popover id={`popover-positioned-top`}>
                      <Popover.Title as="h5">Wechat QR Code</Popover.Title>
                      <Popover.Content>
                        <img src={wechat_qrcode} />
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <a className="ml-3 hvr-icon-fade" href="">
                    <FaWeixin className="weixin-icon" size="2em" />
                  </a>
                </OverlayTrigger>
              </div>
            </Col>
            <Col>
              <h5> Location</h5>
              <div>40 St George St, Toronto, ON M5S 2E4</div>
            </Col>
          </Row>
          </div>
        </div>
      </Nav>
    );
  }
}
