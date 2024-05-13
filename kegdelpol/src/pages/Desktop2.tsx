import { FunctionComponent } from "react";
import Navbar1 from "../components/Navbar3";
import OrdersComponent from "../components/OrdersComponent";
import KegdelpolLogo from "../components/KegdelpolLogo";
import Footer2 from "../components/Footer2";
import "./Desktop2.css";

const ClientUI: FunctionComponent = () => {
  return (
    <div className="client-ui">
      <main className="navbar-parent">
        <Navbar1 />
        <OrdersComponent />
        <KegdelpolLogo />
      </main>
      <Footer2 />
    </div>
  );
};

export default ClientUI;
