import { FunctionComponent } from "react";
import UserToUpdate from "./UserToUpdate";
import "./FrameComponent1.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="frame-parent5">
      <div className="usertoupdate-parent">
        <div className="usertoupdate1">
          <div className="usertoupdate-item" />
          <div className="frame-parent6">
            <div className="user-1-container">
              <h3 className="user-11">User 1</h3>
            </div>
            <div className="frame-parent7">
              <div className="name-wrapper">
                <div className="name1">Name</div>
              </div>
              <div className="surname-wrapper">
                <div className="surname1">Surname</div>
              </div>
              <div className="phonenumber-wrapper">
                <div className="phonenumber1">Phone Number</div>
              </div>
              <div className="license1">License info</div>
              <div className="address1">Address</div>
            </div>
          </div>
          <div className="usertoupdate-inner">
            <div className="update-group">
              <div className="update2">
                <div className="update-item" />
                <div className="employee5">Update</div>
              </div>
              <div className="delete1">
                <div className="delete-item" />
                <div className="employee6">Delete</div>
              </div>
            </div>
          </div>
        </div>
        <UserToUpdate />
      </div>
      <div className="frame-wrapper2">
        <div className="update-container">
          <div className="update3">
            <div className="update-inner" />
            <div className="employee7">Update</div>
          </div>
          <div className="delete2">
            <div className="delete-inner" />
            <div className="employee8">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
