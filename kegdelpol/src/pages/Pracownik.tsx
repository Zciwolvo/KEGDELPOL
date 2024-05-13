import { FunctionComponent } from "react";
import RegisterArea from "../components/RegisterArea";
import "./Pracownik.css";

const Pracownik: FunctionComponent = () => {
  return (
    <div className="pracownik">
      <section className="navbar5">
        <header className="navbar6">
          <div className="navbar-background4" />
          <div className="logo7">
            <div className="logo8">
              <div className="about-us-link">
                <img
                  className="keg-icon4"
                  loading="lazy"
                  alt=""
                  src="/keg.svg"
                />
              </div>
              <div className="logo-text4">
                <h1 className="kegdelpol7">KEGDELPOL</h1>
                <div className="employee-button">
                  <div className="we-deliver-your7">WE DELIVER YOUR BEER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-links4">
            <div className="home4">Home</div>
            <div className="parent-of-about-us-and-contact">
              <div className="about-us4">About us</div>
            </div>
            <div className="parent-of-about-us-and-contact1">
              <div className="contact5">Contact</div>
            </div>
          </div>
        </header>
      </section>
      <section className="register-input-employee-wrapper">
        <RegisterArea
          name1="Name"
          name2="Surname"
          propTextAlign="center"
          propDisplay="inline-block"
          propMinWidth="51px"
          propMinWidth1="80px"
        />
      </section>
      <footer className="footer7">
        <div className="footer-background4">
          <div className="footer-background-inner" />
          <div className="footer8">Footer</div>
        </div>
        <div className="icons7">
          <img
            className="iconmonstr-linkedin-3-13"
            loading="lazy"
            alt=""
            src="/iconmonstrlinkedin3-1.svg"
          />
          <img
            className="website-logo-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <img className="website-logo-icon1" alt="" src="/vector-1.svg" />
          <img className="website-logo-icon2" alt="" src="/vector-2.svg" />
          <img className="website-logo-icon3" alt="" src="/vector-3.svg" />
        </div>
        <div className="logo-parent1">
          <div className="logo9">
            <div className="parent-of-footer-bg-and-icons">
              <img
                className="logo-icon3"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <div className="kegdelpol-container">
              <div className="kegdelpol8">KEGDELPOL</div>
              <div className="we-deliver-your8">WE DELIVER YOUR BEER</div>
            </div>
          </div>
          <div className="footer-layout">
            <div className="privacy-policy3">privacy policy</div>
          </div>
        </div>
        <div className="icons-container1">
          <div className="copyright-20243">
            Copyright © 2024 Kegdelpol sp. z o.o. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pracownik;
