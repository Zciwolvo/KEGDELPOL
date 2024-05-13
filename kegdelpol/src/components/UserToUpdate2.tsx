import { FunctionComponent } from "react";
import Update from "./Update";
import Delete from "./Delete";
import "./UserToUpdate2.css";

const UserToUpdate: FunctionComponent = () => {
  return (
    <div className="usertoupdate3">
      <div className="usertoupdate-child2" />
      <div className="instance-content">
        <h3 className="user-13">User 2</h3>
      </div>
      <div className="instance-details">
        <div className="instance-attributes">
          <div className="instance-values">
            <div className="surname-group">
              <div className="surname3">Surname</div>
              <div className="contact-details">
                <div className="phonenumber3">Phone Number</div>
                <div className="license3">License info</div>
                <div className="address3">Address</div>
              </div>
            </div>
            <div className="instance-actions">
              <Update
                propHeight="unset"
                propAlignSelf="unset"
                propDisplay="unset"
              />
              <Delete
                propHeight="unset"
                propAlignSelf="unset"
                propDisplay="unset"
              />
            </div>
          </div>
        </div>
        <div className="name5">Name</div>
      </div>
    </div>
  );
};

export default UserToUpdate;
