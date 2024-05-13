import { FunctionComponent } from "react";
import "./OrderStatusComponent.css";

const OrderStatusComponent: FunctionComponent = () => {
  return (
    <div className="order-status-component">
      <div className="order-1-svgrepo-com-1-wrapper">
        <img
          className="order-1-svgrepo-com-1-icon"
          loading="lazy"
          alt=""
          src="/order1svgrepocom-1.svg"
        />
      </div>
      <h3 className="change-order-status">Change order status</h3>
    </div>
  );
};

export default OrderStatusComponent;
