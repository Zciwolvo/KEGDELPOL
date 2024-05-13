import { FunctionComponent } from "react";
import Navbar1 from "../components/Navbar3";
import Main from "../components/Main";
import Footer2 from "../components/Footer2";
import "./ReadDBTable.css";

const ReadDBTable: FunctionComponent = () => {
  return (
    <div className="read-db-table">
      <Navbar1 />
      <Main />
      <div className="login">
        <div className="login1">Login</div>
        <div className="login-child" />
      </div>
      <Footer2 />
    </div>
  );
};

export default ReadDBTable;
