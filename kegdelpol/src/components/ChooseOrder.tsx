import { FunctionComponent } from "react";
import "./ChooseOrder.css";

const ChooseOrder: FunctionComponent = () => {
  return (
    <div className="choose-order1">
      <div className="order-dropdown-label">
        <div className="choose-the-order1">Choose the Order</div>
      </div>
      <div className="order-dropdown-input" />
      <img
        className="dropdown-icon2"
        loading="lazy"
        alt=""
        src="/dropdown.svg"
      />
    </div>
  );
};

export default ChooseOrder;
