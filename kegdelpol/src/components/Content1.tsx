import { FunctionComponent } from "react";
import AddNewVehicle1 from "./AddNewVehicle1";
import RegistrationInfo from "./RegistrationInfo";
import ConfirmationMessage from "./ConfirmationMessage";
import "./Content1.css";

const Content1: FunctionComponent = () => {
  return (
    <section className="content18">
      <div className="page-content">
        <AddNewVehicle1 />
        <div className="form-container">
          <div className="input-fields">
            <div className="inputvehicle">
              <textarea
                className="type-input"
                placeholder="Type"
                rows={5}
                cols={13}
              />
              <div className="capacity">
                <div className="capacity1">Capacity</div>
                <div className="input-fields-container">
                  <div className="input-boxes" />
                </div>
              </div>
              <RegistrationInfo />
            </div>
            <ConfirmationMessage propWidth="unset" propAlignSelf="stretch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content1;
