import { FunctionComponent } from "react";
import AssignedOrdersComponent from "./AssignedOrdersComponent";
import OrderStatusComponent from "./OrderStatusComponent";
import "./ActionsContainer.css";

const ActionsContainer: FunctionComponent = () => {
  return (
    <section className="actions-container">
      <div className="action2">
        <h1 className="choose-your-action2">Choose your action</h1>
      </div>
      <div className="actions-container-inner">
        <div className="assigned-orders-component-parent">
          <AssignedOrdersComponent />
          <OrderStatusComponent />
        </div>
      </div>
    </section>
  );
};

export default ActionsContainer;
