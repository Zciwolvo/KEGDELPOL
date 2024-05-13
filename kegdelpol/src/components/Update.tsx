import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Update.css";

export type UpdateType = {
  /** Style props */
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
};

const Update: FunctionComponent<UpdateType> = ({
  propHeight,
  propAlignSelf,
  propDisplay,
}) => {
  const updateStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const employeeStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      display: propDisplay,
    };
  }, [propAlignSelf, propDisplay]);

  return (
    <div className="update5" style={updateStyle}>
      <div className="button-shapes-instance" />
      <div className="employee12" style={employeeStyle}>
        Update
      </div>
    </div>
  );
};

export default Update;
