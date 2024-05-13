import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import Register from "./Register";
import { useNavigate } from "react-router-dom";
import Name1 from "./Name1";
import "./RegisterArea.css";

export type RegisterAreaType = {
  name1?: string;
  name2?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const RegisterArea: FunctionComponent<RegisterAreaType> = ({
  name1,
  name2,
  propTextAlign,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propTextAlign, propDisplay, propMinWidth]);

  const nameStyle1: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const navigate = useNavigate();

  const onEmployeeTextClick = useCallback(() => {
    navigate("/pracownik");
  }, [navigate]);

  const onEmployeeText1Click = useCallback(() => {
    navigate("/kierowca");
  }, [navigate]);

  return (
    <div className="register-area">
      <div className="frame-parent8">
        <div className="register-wrapper">
          <Register />
        </div>
        <div className="input-client">
          <div className="button3">
            <div className="icons-container2" />
            <h3 className="employee9" onClick={onEmployeeTextClick}>
              Employee
            </h3>
          </div>
          <div className="button4">
            <div className="button-child1" />
            <h3 className="employee10" onClick={onEmployeeText1Click}>
              Driver
            </h3>
          </div>
          <div className="button5">
            <div className="button-child2" />
            <h3 className="employee11">Customer</h3>
          </div>
        </div>
      </div>
      <div className="inputclient-wrapper">
        <div className="inputclient">
          <Name1
            name1="Customer Name"
            propTextAlign="left"
            propMinWidth="unset"
            propDisplay="unset"
            propOutline="unset"
            propMinWidth1="unset"
          />
          <Name1
            name1="Address"
            propTextAlign="left"
            propMinWidth="73px"
            propDisplay="inline-block"
            propOutline="none"
            propMinWidth1="154px"
          />
          <Name1
            name1="Phone Number"
            propTextAlign="left"
            propMinWidth="unset"
            propDisplay="unset"
            propOutline="unset"
            propMinWidth1="unset"
          />
        </div>
      </div>
      <div className="kegdelpol-logo1">
        <div className="confirm4">
          <div className="confirm-button1" />
          <h2 className="confirm5">CONFIRM</h2>
        </div>
      </div>
    </div>
  );
};

export default RegisterArea;
