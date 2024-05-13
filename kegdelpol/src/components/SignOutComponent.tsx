import { FunctionComponent } from "react";
import SignOut from "./SignOut";
import Quote from "./Quote";
import "./SignOutComponent.css";

const SignOutComponent: FunctionComponent = () => {
  return (
    <section className="sign-out-component">
      <div className="action-component">
        <SignOut />
        <div className="quote-wrapper">
          <Quote didYouKnowThatAroundTheWo="Did you know that around the world, humans consume over 50 billion gallons of beer every year?" />
        </div>
      </div>
    </section>
  );
};

export default SignOutComponent;
