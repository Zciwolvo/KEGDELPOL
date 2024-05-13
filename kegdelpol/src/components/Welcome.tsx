import { FunctionComponent } from "react";
import "./Welcome.css";

const Welcome: FunctionComponent = () => {
  return (
    <div className="welcome">
      <h1 className="log-in-to">LOG IN TO YOUR ACCOUNT</h1>
      <div className="icons-row">
        <div className="linked-in-icon" />
      </div>
    </div>
  );
};

export default Welcome;
