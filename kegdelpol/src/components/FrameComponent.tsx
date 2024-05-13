import { FunctionComponent } from "react";
import Welcome from "./Welcome";
import Login1 from "./Login";
import Password from "./Password";
import SignIn from "./SignIn";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="welcome-parent">
      <Welcome />
      <div className="blend-builder">
        <div className="login-parent">
          <Login1 />
          <Password />
        </div>
      </div>
      <div className="sign-in-wrapper">
        <SignIn />
      </div>
    </div>
  );
};

export default FrameComponent;
