import { FunctionComponent } from "react";
import Navbar1 from "../components/Navbar3";
import SignOutContainer from "../components/SignOutContainer";
import ActionsContainer from "../components/ActionsContainer";
import Footer2 from "../components/Footer2";
import "./DriverUI.css";

const DriverUI: FunctionComponent = () => {
  return (
    <div className="driver-ui">
      <main className="navbar-group">
        <Navbar1 />
        <SignOutContainer />
        <ActionsContainer />
      </main>
      <Footer2 />
    </div>
  );
};

export default DriverUI;
