import { FunctionComponent } from "react";
import SignOut from "../components/SignOut";
import "./AssignDriver.css";

const AssignDriver: FunctionComponent = () => {
  return (
    <div className="assign-driver">
      <header className="navbar1">
        <div className="navbar-background1" />
        <div className="logo-wrapper">
          <div className="logo1">
            <div className="keg-container">
              <img className="keg-icon1" loading="lazy" alt="" src="/keg.svg" />
            </div>
            <div className="logo-text1">
              <h1 className="kegdelpol1">KEGDELPOL</h1>
              <div className="we-deliver-your-beer-container">
                <div className="we-deliver-your1">WE DELIVER YOUR BEER</div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-links1">
          <div className="home1">Home</div>
          <div className="links-content">
            <div className="about-us1">About us</div>
          </div>
          <div className="links-content1">
            <div className="contact1">Contact</div>
          </div>
        </div>
      </header>
      <section className="assign-driver-inner">
        <div className="frame-group">
          <div className="sign-out-parent">
            <SignOut propMargin="0" propFontWeight="400" />
            <div className="assign-wrapper">
              <div className="assign">
                <h1 className="assigning-driver-to">
                  ASSIGNING DRIVER TO THE ORDER
                </h1>
                <div className="assign-inner">
                  <div className="frame-child" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-container">
            <div className="choose-order-parent">
              <div className="choose-order">
                <div className="choose-the-order-wrapper">
                  <div className="choose-the-order">Choose the Order</div>
                </div>
                <div className="choose-order-child" />
                <img
                  className="dropdown-icon"
                  loading="lazy"
                  alt=""
                  src="/dropdown.svg"
                />
              </div>
              <div className="choose-driver">
                <div className="choose-the-driver">Choose the Driver</div>
                <div className="choose-driver-inner">
                  <div className="frame-item" />
                </div>
                <img className="dropdown-icon1" alt="" src="/dropdown.svg" />
              </div>
            </div>
          </div>
          <div className="confirm-wrapper">
            <div className="confirm">
              <div className="confirm-child" />
              <h1 className="confirm1">CONFIRM</h1>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-background">
          <div className="footer-background-child" />
          <div className="footer1">Footer</div>
        </div>
        <div className="icons">
          <img
            className="iconmonstr-linkedin-3-1"
            loading="lazy"
            alt=""
            src="/iconmonstrlinkedin3-1.svg"
          />
          <img className="icons1" alt="" src="/vector.svg" />
          <img className="icons2" alt="" src="/vector-1.svg" />
          <img className="icons3" alt="" src="/vector-2.svg" />
          <img className="icons4" alt="" src="/vector-3.svg" />
        </div>
        <div className="logo-parent">
          <div className="logo2">
            <div className="logo-container">
              <img
                className="logo-icon"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <div className="kegdelpol-parent">
              <div className="kegdelpol2">KEGDELPOL</div>
              <div className="we-deliver-your2">WE DELIVER YOUR BEER</div>
            </div>
          </div>
          <div className="privacy-policy-wrapper">
            <div className="privacy-policy">privacy policy</div>
          </div>
        </div>
        <div className="copyright-2024-kegdelpol-sp-wrapper">
          <div className="copyright-2024">
            Copyright © 2024 Kegdelpol sp. z o.o. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AssignDriver;
