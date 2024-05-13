import { FunctionComponent } from "react";
import Content from "../components/Content";
import "./AssignDriver1.css";

const AssignDriver1: FunctionComponent = () => {
  return (
    <div className="assign-driver1">
      <header className="navbar2">
        <div className="navbar-background2" />
        <div className="navbar-content">
          <div className="logo3">
            <div className="keg-frame">
              <img className="keg-icon2" loading="lazy" alt="" src="/keg.svg" />
            </div>
            <div className="logo-text2">
              <h1 className="kegdelpol3">KEGDELPOL</h1>
              <div className="we-deliver-your-beer-frame">
                <div className="we-deliver-your3">WE DELIVER YOUR BEER</div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-links2">
          <div className="home2">Home</div>
          <div className="link-items">
            <div className="about-us2">About us</div>
          </div>
          <div className="link-items1">
            <div className="contact2">Contact</div>
          </div>
        </div>
      </header>
      <Content />
      <footer className="footer2">
        <div className="footer-background1">
          <div className="footer-background2" />
          <div className="footer3">Footer</div>
        </div>
        <div className="icons5">
          <img
            className="iconmonstr-linkedin-3-11"
            loading="lazy"
            alt=""
            src="/iconmonstrlinkedin3-1.svg"
          />
          <img className="social-icons" alt="" src="/vector.svg" />
          <img className="social-icons1" alt="" src="/vector-1.svg" />
          <img className="social-icons2" alt="" src="/vector-2.svg" />
          <img className="social-icons3" alt="" src="/vector-3.svg" />
        </div>
        <div className="footer-content">
          <div className="logo4">
            <div className="logo-frame">
              <img
                className="logo-icon1"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <div className="kegdelpol-group">
              <div className="kegdelpol4">KEGDELPOL</div>
              <div className="we-deliver-your4">WE DELIVER YOUR BEER</div>
            </div>
          </div>
          <div className="privacy-policy-container">
            <div className="privacy-policy1">privacy policy</div>
          </div>
        </div>
        <div className="copyright-2024-kegdelpol-sp-container">
          <div className="copyright-20241">
            Copyright © 2024 Kegdelpol sp. z o.o. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AssignDriver1;
