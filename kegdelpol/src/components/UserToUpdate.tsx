import { FunctionComponent } from "react";
import "./UserToUpdate.css";

const UserToUpdate: FunctionComponent = () => {
  return (
    <div className="usertoupdate">
      <div className="usertoupdate-child" />
      <div className="user-1-wrapper">
        <h3 className="user-1">User 2</h3>
      </div>
      <div className="frame-parent3">
        <div className="frame-wrapper1">
          <div className="frame-parent4">
            <div className="surname-parent">
              <div className="surname">Surname</div>
              <div className="phonenumber-parent">
                <div className="phonenumber">Phone Number</div>
                <div className="license">License info</div>
                <div className="address">Address</div>
              </div>
            </div>
            <div className="update-parent">
              <div className="update1">
                <div className="update-child" />
                <div className="employee3">Update</div>
              </div>
              <div className="delete">
                <div className="delete-child" />
                <div className="employee4">Delete</div>
              </div>
            </div>
          </div>
        </div>
        <div className="name">Name</div>
      </div>
    </div>
  );
};

export default UserToUpdate;
