import { FunctionComponent } from "react";
import SignOutComponent from "../components/SignOutComponent";
import Action from "../components/Action";
import AssignTheDriver from "../components/AssignTheDriver";
import Component3 from "../components/Component3";
import Component2 from "../components/Component2";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import VehicleAssigner from "../components/VehicleAssigner";
import Footer2 from "../components/Footer2";
import "./Desktop1.css";

const EmployeeUi: FunctionComponent = () => {
  return (
    <div className="employee-ui">
      <main className="f-r-a-m-e">
        <header className="navbar">
          <div className="navbar-background" />
          <div className="logo-instance">
            <div className="logo">
              <div className="keg-wrapper">
                <img
                  className="keg-icon"
                  loading="lazy"
                  alt=""
                  src="/keg.svg"
                />
              </div>
              <div className="logo-text">
                <div className="kegdelpol">KEGDELPOL</div>
                <div className="we-deliver-your-beer-wrapper">
                  <div className="we-deliver-your">WE DELIVER YOUR BEER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-links">
            <div className="home">Home</div>
            <div className="about-us-wrapper">
              <div className="about-us">About us</div>
            </div>
            <div className="contact-wrapper">
              <div className="contact">Contact</div>
            </div>
          </div>
        </header>
        <SignOutComponent />
        <Action />
        <section className="f-r-a-m-e-inner">
          <div className="frame-parent">
            <div className="frame-wrapper">
              <div className="assign-the-driver-parent">
                <AssignTheDriver />
                <Component3 />
                <Component2 />
              </div>
            </div>
            <div className="approve-order-component">
              <Component1 />
              <div className="component-2-parent">
                <Component />
                <VehicleAssigner />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer2 />
    </div>
  );
};

export default EmployeeUi;
