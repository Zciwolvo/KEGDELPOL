import { FunctionComponent, useCallback } from "react";
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";
import Name1 from "../components/Name1";
import ConfirmationMessage from "../components/ConfirmationMessage";
import Footer2 from "../components/Footer2";
import "./Kierowca.css";

const Kierowca: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEmployeeText2Click = useCallback(() => {
    navigate("/pracownik");
  }, [navigate]);

  const onEmployeeText1Click = useCallback(() => {
    navigate("/klient");
  }, [navigate]);

  return (
    <div className="kierowca">
      <section className="navbar-container">
        <header className="navbar7">
          <div className="navbar-background5" />
          <div className="register-component">
            <div className="logo10">
              <div className="confirmation-box">
                <img
                  className="keg-icon5"
                  loading="lazy"
                  alt=""
                  src="/keg.svg"
                />
              </div>
              <div className="logo-text5">
                <h1 className="kegdelpol9">KEGDELPOL</h1>
                <div className="contact-link">
                  <div className="we-deliver-your9">WE DELIVER YOUR BEER</div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-links5">
            <div className="home5">Home</div>
            <div className="about-us-container">
              <div className="about-us5">About us</div>
            </div>
            <div className="contact-container">
              <div className="contact6">Contact</div>
            </div>
          </div>
        </header>
      </section>
      <section className="input-field-layout">
        <div className="register-fields-container">
          <div className="employee-button-set">
            <Register />
          </div>
          <div className="button-parent">
            <div className="button">
              <div className="button-child" />
              <h3 className="employee" onClick={onEmployeeText2Click}>
                Employee
              </h3>
            </div>
            <div className="frame-parent1">
              <div className="registration-form-container-parent">
                <div className="registration-form-container">
                  <div className="button-group">
                    <div className="button1">
                      <div className="button-item" />
                      <h3 className="employee1">Driver</h3>
                    </div>
                    <div className="button2">
                      <div className="button-inner" />
                      <h3 className="employee2" onClick={onEmployeeText1Click}>
                        Customer
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="inputdriver">
                  <Name1 name1="Name" />
                  <Name1
                    name1="Surname"
                    propTextAlign="left"
                    propMinWidth="80px"
                    propDisplay="inline-block"
                    propOutline="none"
                    propMinWidth1="154px"
                  />
                  <Name1
                    name1="Phone Number"
                    propTextAlign="left"
                    propMinWidth="unset"
                    propDisplay="unset"
                    propOutline="unset"
                    propMinWidth1="unset"
                  />
                  <Name1
                    name1="License info"
                    propTextAlign="left"
                    propMinWidth="107px"
                    propDisplay="inline-block"
                    propOutline="none"
                    propMinWidth1="154px"
                  />
                </div>
              </div>
              <ConfirmationMessage />
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default Kierowca;
