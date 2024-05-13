import { FunctionComponent } from "react";
import Assign from "./Assign";
import ChooseOrder from "./ChooseOrder";
import ChooseDriver from "./ChooseDriver";
import Confirm1 from "./Confirm1";
import "./Content.css";

const Content: FunctionComponent = () => {
  return (
    <section className="content1">
      <div className="auth-content">
        <div className="auth-actions">
          <div className="sign-out6">
            <h3 className="sign-out7">SIGN OUT</h3>
            <div className="sign-out-icon-container">
              <img
                className="sign-out-icon1"
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
            </div>
          </div>
          <div className="assign-container">
            <Assign />
          </div>
        </div>
        <div className="order-selection">
          <div className="choose-order-group">
            <ChooseOrder />
            <ChooseDriver />
          </div>
        </div>
        <div className="confirmation">
          <Confirm1 />
        </div>
      </div>
    </section>
  );
};

export default Content;
