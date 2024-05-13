import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./SignOut.css";

export type SignOutType = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const SignOut: FunctionComponent<SignOutType> = ({
  propMargin,
  propFontWeight,
}) => {
  const sIGNOUTStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      fontWeight: propFontWeight,
    };
  }, [propMargin, propFontWeight]);

  return (
    <div className="sign-out">
      <div className="sign-out1" style={sIGNOUTStyle}>
        SIGN OUT
      </div>
      <div className="add-driver-data-base">
        <img
          className="vector-icon4"
          loading="lazy"
          alt=""
          src="/vector1.svg"
        />
      </div>
    </div>
  );
};

export default SignOut;
