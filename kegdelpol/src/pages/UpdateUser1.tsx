import { FunctionComponent } from "react";
import ChooseTheUser from "../components/ChooseTheUser";
import UserToUpdate1 from "../components/UserToUpdate1";
import UserToUpdate from "../components/UserToUpdate";
import Update from "../components/Update";
import Delete from "../components/Delete";
import "./UpdateUser1.css";

const UpdateUser1: FunctionComponent = () => {
  return (
    <div className="update-user1">
      <section className="main">
        <header className="navbar8">
          <div className="navbar-background6" />
          <div className="logo-wrapper2">
            <div className="logo11">
              <div className="keg-container1">
                <img
                  className="keg-icon6"
                  loading="lazy"
                  alt=""
                  src="/keg.svg"
                />
              </div>
              <div className="logo-text6">
                <h1 className="kegdelpol10">KEGDELPOL</h1>
                <div className="slogan-container">
                  <div className="we-deliver-your10">WE DELIVER YOUR BEER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-links6">
            <div className="home6">Home</div>
            <div className="pages">
              <div className="about-us6">About us</div>
            </div>
            <div className="pages1">
              <div className="contact7">Contact</div>
            </div>
          </div>
        </header>
      </section>
      <section className="content">
        <div className="user-controls-wrapper">
          <div className="user-controls">
            <ChooseTheUser />
            <div className="search-container">
              <img
                className="searchbar-icon1"
                loading="lazy"
                alt=""
                src="/searchbar.svg"
              />
            </div>
          </div>
        </div>
        <div className="user-info">
          <div className="user-display">
            <UserToUpdate1 />
            <UserToUpdate />
          </div>
          <div className="action-buttons-instance">
            <div className="employee-actions-instance">
              <Update />
              <Delete />
            </div>
          </div>
        </div>
      </section>
      <section className="footer9">
        <div className="footer-background5">
          <div className="rectangle-div" />
          <div className="footer10">Footer</div>
        </div>
        <div className="icons8">
          <img
            className="iconmonstr-linkedin-3-14"
            loading="lazy"
            alt=""
            src="/iconmonstrlinkedin3-1.svg"
          />
          <img className="icon-set" loading="lazy" alt="" src="/vector.svg" />
          <img className="icon-set1" alt="" src="/vector-1.svg" />
          <img className="icon-set2" alt="" src="/vector-2.svg" />
          <img className="icon-set3" alt="" src="/vector-3.svg" />
        </div>
        <div className="footer-content1">
          <div className="logo12">
            <div className="footer-logo-icon">
              <img
                className="logo-icon4"
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>
            <div className="kegdelpol-parent1">
              <div className="kegdelpol11">KEGDELPOL</div>
              <div className="we-deliver-your11">WE DELIVER YOUR BEER</div>
            </div>
          </div>
          <div className="policy-container">
            <div className="privacy-policy4">privacy policy</div>
          </div>
        </div>
        <div className="copyright-container">
          <div className="copyright-20244">
            Copyright © 2024 Kegdelpol sp. z o.o. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateUser1;
