import { FunctionComponent } from "react";
import "./RegistrationInfo.css";

const RegistrationInfo: FunctionComponent = () => {
  return (
    <div className="registration-info">
      <div className="registration-info1">Registration Info</div>
      <div className="registration-info-inner">
        <input className="rectangle-input" type="text" />
      </div>
    </div>
  );
};

export default RegistrationInfo;
