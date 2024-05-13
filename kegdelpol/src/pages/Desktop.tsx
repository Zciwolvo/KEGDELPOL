import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./Desktop.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <Navbar />
      <section className="desktop-1-inner">
        <FrameComponent />
      </section>
      <Footer />
    </div>
  );
};

export default Desktop;
