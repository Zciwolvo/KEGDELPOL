import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./OrderItem.css";

export type OrderItemType = {
  orders?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propHeight?: CSSProperties["height"];
};

const OrderItem: FunctionComponent<OrderItemType> = ({
  orders,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propMarginLeft,
  propHeight,
}) => {
  const orderItemStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
      marginLeft: propMarginLeft,
    };
  }, [propAlignSelf, propFlex, propMinWidth, propMarginLeft]);

  const ordersStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="order-item" style={orderItemStyle}>
      <div className="order-item-child" />
      <div className="orders1" style={ordersStyle}>
        {orders}
      </div>
    </div>
  );
};

export default OrderItem;
