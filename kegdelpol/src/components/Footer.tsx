import { FunctionComponent } from "react";
import "./Footer.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer11">
      <div className="footer-background6">
        <div className="footer-background-child1" />
        <div className="footer12">Footer</div>
      </div>
      <div className="icons9">
        <img
          className="iconmonstr-linkedin-3-15"
          loading="lazy"
          alt=""
          src="/iconmonstrlinkedin3-1.svg"
        />
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
        <img className="vector-icon1" alt="" src="/vector-1.svg" />
        <img className="vector-icon2" alt="" src="/vector-2.svg" />
        <img className="vector-icon3" alt="" src="/vector-3.svg" />
      </div>
      <div className="logo-parent2">
        <div className="logo15">
          <div className="logo-wrapper3">
            <img className="logo-icon5" loading="lazy" alt="" src="/logo.svg" />
          </div>
          <div className="kegdelpol-parent2">
            <div className="kegdelpol14">KEGDELPOL</div>
            <div className="we-deliver-your14">WE DELIVER YOUR BEER</div>
          </div>
        </div>
        <div className="privacy-policy-wrapper1">
          <div className="privacy-policy5">privacy policy</div>
        </div>
      </div>
      <div className="copyright-2024-kegdelpol-sp-frame">
        <div className="copyright-20245">
          Copyright © 2024 Kegdelpol sp. z o.o. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
