import { FunctionComponent } from "react";
import Component11 from "./Component11";
import Component4 from "./Component4";
import "./KegdelpolLogo.css";

const KegdelpolLogo: FunctionComponent = () => {
  return (
    <section className="kegdelpol-logo">
      <div className="action1">
        <h1 className="choose-your-action1">Choose your action</h1>
      </div>
      <div className="order-basket-component">
        <div className="component-1-parent">
          <Component11 />
          <Component4 />
        </div>
      </div>
    </section>
  );
};

export default KegdelpolLogo;
