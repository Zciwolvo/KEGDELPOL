import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Quote.css";

export type QuoteType = {
  didYouKnowThatAroundTheWo?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Quote: FunctionComponent<QuoteType> = ({
  didYouKnowThatAroundTheWo,
  propPadding,
}) => {
  const quoteStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="quote" style={quoteStyle}>
      <div className="did-you-know">{didYouKnowThatAroundTheWo}</div>
    </div>
  );
};

export default Quote;
