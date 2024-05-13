import { FunctionComponent } from "react";
import "./OrdersComponent.css";

const OrdersComponent: FunctionComponent = () => {
  return (
    <section className="orders-component">
      <div className="sign-out-instance">
        <div className="sign-out2">
          <h3 className="sign-out3">SIGN OUT</h3>
          <div className="footer-background9">
            <img
              className="vector-icon16"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div>
        <div className="footer-instance">
          <div className="quote1">
            <div className="did-you-know1">
              Did you know that Heineken made beer bottles to be sued as bricks?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersComponent;
