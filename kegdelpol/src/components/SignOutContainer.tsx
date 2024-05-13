import { FunctionComponent } from "react";
import Quote from "./Quote";
import "./SignOutContainer.css";

const SignOutContainer: FunctionComponent = () => {
  return (
    <section className="sign-out-container">
      <div className="sign-out-group">
        <div className="sign-out4">
          <h3 className="sign-out5">SIGN OUT</h3>
          <div className="sign-out-icon-wrapper">
            <img
              className="sign-out-icon"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div>
        <div className="quote-container">
          <Quote
            didYouKnowThatAroundTheWo="Did you know that China consumes the most beer as a whole?"
            propPadding="12px 0px"
          />
        </div>
      </div>
    </section>
  );
};

export default SignOutContainer;
