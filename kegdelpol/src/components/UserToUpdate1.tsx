import { FunctionComponent } from "react";
import Update from "./Update";
import Delete from "./Delete";
import "./UserToUpdate1.css";

const UserToUpdate1: FunctionComponent = () => {
  return (
    <div className="usertoupdate2">
      <div className="usertoupdate-child1" />
      <div className="user-content">
        <div className="user-name">
          <h3 className="user-12">User 1</h3>
        </div>
        <div className="user-attributes">
          <div className="attribute-names">
            <div className="name4">Name</div>
          </div>
          <div className="attribute-names1">
            <div className="surname2">Surname</div>
          </div>
          <div className="attribute-names2">
            <div className="phonenumber2">Phone Number</div>
          </div>
          <div className="license2">License info</div>
          <div className="address2">Address</div>
        </div>
      </div>
      <div className="action-buttons">
        <div className="employee-actions">
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
  );
};

export default UserToUpdate1;
