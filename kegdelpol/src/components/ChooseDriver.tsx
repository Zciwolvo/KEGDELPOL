import { FunctionComponent } from "react";
import "./ChooseDriver.css";

const ChooseDriver: FunctionComponent = () => {
  return (
    <div className="choose-driver1">
      <div className="choose-the-driver1">Choose the Driver</div>
      <div className="driver-dropdown-input">
        <div className="driver-dropdown-rect" />
      </div>
      <img className="dropdown-icon3" alt="" src="/dropdown.svg" />
    </div>
  );
};

export default ChooseDriver;
