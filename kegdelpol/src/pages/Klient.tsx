import { FunctionComponent } from "react";
import RegisterArea from "../components/RegisterArea";
import "./Klient.css";

const Klient: FunctionComponent = () => {
  return (
    <div className="klient">
      <section className="navbar3">
        <header className="navbar4">
          <div className="navbar-background3" />
          <div className="input-field">
            <div className="logo5">
              <div className="footer4">
                <img
                  className="keg-icon3"
                  loading="lazy"
                  alt=""
                  src="/keg.svg"
                />
              </div>
              <div className="logo-text3">
                <h1 className="kegdelpol5">KEGDELPOL</h1>
                <div className="contact3">
                  <div className="we-deliver-your5">WE DELIVER YOUR BEER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-links3">
            <div className="home3">Home</div>
            <div className="name-field">
              <div className="about-us3">About us</div>
            </div>
            <div className="name-field1">
              <div className="contact4">Contact</div>
            </div>
          </div>
        </header>
      </section>
      <section className="register-area-wrapper">
        <RegisterArea name1="Customer Name" name2="Address" />
      </section>
      <footer className="footer5">
        <div className="footer-background3">
          <div className="footer-background-item" />
          <div className="footer6">Footer</div>
        </div>
        <div className="icons6">
          <img
            className="iconmonstr-linkedin-3-12"
            loading="lazy"
            alt=""
            src="/iconmonstrlinkedin3-1.svg"
          />
          <img
            className="iconmonstr-linkedin"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <img className="iconmonstr-linkedin1" alt="" src="/vector-1.svg" />
          <img className="iconmonstr-linkedin2" alt="" src="/vector-2.svg" />
          <img className="iconmonstr-linkedin3" alt="" src="/vector-3.svg" />
        </div>
        <div className="logo-group">
          <div className="logo6">
            <div className="logo-wrapper1">
              <img
                className="logo-icon2"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <div className="footer-message">
              <div className="kegdelpol6">KEGDELPOL</div>
              <div className="we-deliver-your6">WE DELIVER YOUR BEER</div>
            </div>
          </div>
          <div className="privacy-policy-frame">
            <div className="privacy-policy2">privacy policy</div>
          </div>
        </div>
        <div className="icons-container">
          <div className="copyright-20242">
            Copyright © 2024 Kegdelpol sp. z o.o. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Klient;
