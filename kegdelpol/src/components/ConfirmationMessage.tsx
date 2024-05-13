import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ConfirmationMessage.css";

export type ConfirmationMessageType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const ConfirmationMessage: FunctionComponent<ConfirmationMessageType> = ({
  propWidth,
  propAlignSelf,
}) => {
  const confirmationMessageStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className="confirmation-message" style={confirmationMessageStyle}>
      <div className="confirm6">
        <div className="confirm-item" />
        <h2 className="confirm7">CONFIRM</h2>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
