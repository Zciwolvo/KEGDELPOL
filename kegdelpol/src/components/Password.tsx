import { FunctionComponent } from "react";
import "./Password.css";

const Password: FunctionComponent = () => {
  return (
    <div className="password">
      <div className="password-wrapper">
        <div className="password1">Password</div>
      </div>
      <textarea className="password-child" rows={4} cols={22} />
    </div>
  );
};

export default Password;
