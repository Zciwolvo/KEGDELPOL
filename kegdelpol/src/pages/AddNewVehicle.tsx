import { FunctionComponent } from "react";
import Content1 from "../components/Content1";
import Footer2 from "../components/Footer2";
import "./AddNewVehicle.css";

const AddNewVehicle: FunctionComponent = () => {
  return (
    <div className="add-new-vehicle">
      <section className="main1">
        <header className="navbar9">
          <div className="navbar-background7" />
          <div className="navbar-content1">
            <div className="logo13">
              <div className="logo-image-container">
                <img
                  className="keg-icon7"
                  loading="lazy"
                  alt=""
                  src="/keg1.svg"
                />
              </div>
              <div className="logo-text7">
                <h1 className="kegdelpol12">KEGDELPOL</h1>
                <div className="logo-slogan-container">
                  <div className="we-deliver-your12">WE DELIVER YOUR BEER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-links7">
            <div className="home7">Home</div>
            <div className="navigation-items">
              <div className="about-us7">About us</div>
            </div>
            <div className="navigation-items1">
              <div className="contact8">Contact</div>
            </div>
          </div>
        </header>
      </section>
      <Content1 />
      <Footer2 />
    </div>
  );
};

export default AddNewVehicle;
