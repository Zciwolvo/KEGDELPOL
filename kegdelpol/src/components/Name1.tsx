import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Name1.css";

export type Name1Type = {
  name1?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propOutline?: CSSProperties["outline"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Name1: FunctionComponent<Name1Type> = ({
  name1,
  propTextAlign,
  propMinWidth,
  propDisplay,
  propOutline,
  propMinWidth1,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propTextAlign, propMinWidth, propDisplay]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      outline: propOutline,
      minWidth: propMinWidth1,
    };
  }, [propOutline, propMinWidth1]);

  return (
    <div className="name2">
      <div className="name3" style={nameStyle}>
        {name1}
      </div>
      <div className="name-inner">
        <div className="frame-child1" style={rectangleDivStyle} />
      </div>
    </div>
  );
};

export default Name1;
