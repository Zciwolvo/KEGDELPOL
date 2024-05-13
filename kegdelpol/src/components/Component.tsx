import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component.css";

const Component: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent2ContainerClick = useCallback(() => {
    navigate("/update-user");
  }, [navigate]);

  return (
    <div className="component-2" onClick={onComponent2ContainerClick}>
      <div className="frame-parent2">
        <div className="vector-wrapper">
          <img className="vector-icon5" alt="" src="/vector-11.svg" />
        </div>
        <img className="vector-icon6" alt="" src="/vector-21.svg" />
      </div>
      <div className="update-the-user-wrapper">
        <div className="update-the-user">Update the User</div>
      </div>
      <img
        className="gear-svgrepo-com-1-1"
        alt=""
        src="/gearsvgrepocom-1-1.svg"
      />
    </div>
  );
};

export default Component;
