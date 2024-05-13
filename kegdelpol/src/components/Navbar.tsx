import { FunctionComponent } from "react";
import "./Navbar.css";

const Navbar: FunctionComponent = () => {
  return (
    <header className="navbar10">
      <div className="navbar-background8" />
      <div className="links">
        <div className="logo14">
          <div className="login-area">
            <img className="keg-icon8" loading="lazy" alt="" src="/keg.svg" />
          </div>
          <div className="logo-text8">
            <h1 className="kegdelpol13">KEGDELPOL</h1>
            <div className="we-deliver-your-beer-wrapper1">
              <div className="we-deliver-your13">WE DELIVER YOUR BEER</div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-links8">
        <div className="home8">Home</div>
        <div className="login-form">
          <div className="about-us8">About us</div>
        </div>
        <div className="login-form1">
          <div className="contact9">Contact</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
