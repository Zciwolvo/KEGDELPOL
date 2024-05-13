import { FunctionComponent } from "react";
import "./AssignedOrdersComponent.css";

const AssignedOrdersComponent: FunctionComponent = () => {
  return (
    <div className="assigned-orders-component">
      <img className="action-icon" loading="lazy" alt="" src="/action.svg" />
      <h3 className="assigned-orders">Assigned orders</h3>
    </div>
  );
};

export default AssignedOrdersComponent;
