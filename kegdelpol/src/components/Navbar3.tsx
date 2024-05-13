import { FunctionComponent } from "react";
import "./Navbar3.css";

const Navbar1: FunctionComponent = () => {
  return (
    <header className="navbar12">
      <div className="navbar-background10" />
      <div className="logo-container1">
        <div className="logo19">
          <div className="navbar-link">
            <img className="keg-icon10" loading="lazy" alt="" src="/keg.svg" />
          </div>
          <div className="logo-text10">
            <h1 className="kegdelpol18">KEGDELPOL</h1>
            <div className="sign-out-button">
              <div className="we-deliver-your18">WE DELIVER YOUR BEER</div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-links10">
        <div className="home10">Home</div>
        <div className="about-us-wrapper1">
          <div className="about-us10">About us</div>
        </div>
        <div className="contact-wrapper1">
          <div className="contact11">Contact</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar1;
