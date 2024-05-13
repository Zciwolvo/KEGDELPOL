import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Footer1 from "../components/Footer1";
import "./UpdateUser.css";

const UpdateUser: FunctionComponent = () => {
  return (
    <div className="update-user">
      <FrameComponent2 />
      <section className="frame-section">
        <div className="frame-div">
          <div className="choose-the-user-parent">
            <div className="choose-the-user">
              <h1 className="update">CHOOSE THE USER TO UPDATE</h1>
              <div className="choose-the-user-inner">
                <img
                  className="frame-inner"
                  loading="lazy"
                  alt=""
                  src="/line-1.svg"
                />
              </div>
            </div>
            <div className="searchbar-wrapper">
              <img
                className="searchbar-icon"
                loading="lazy"
                alt=""
                src="/searchbar.svg"
              />
            </div>
          </div>
        </div>
        <FrameComponent1 />
      </section>
      <Footer1 />
    </div>
  );
};

export default UpdateUser;
