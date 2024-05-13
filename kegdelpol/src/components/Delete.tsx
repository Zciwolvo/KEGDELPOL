import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Delete.css";

export type DeleteType = {
  /** Style props */
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
};

const Delete: FunctionComponent<DeleteType> = ({
  propHeight,
  propAlignSelf,
  propDisplay,
}) => {
  const deleteStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const employee1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      display: propDisplay,
    };
  }, [propAlignSelf, propDisplay]);

  return (
    <div className="delete3" style={deleteStyle}>
      <div className="delete-child1" />
      <div className="employee13" style={employee1Style}>
        Delete
      </div>
    </div>
  );
};

export default Delete;
