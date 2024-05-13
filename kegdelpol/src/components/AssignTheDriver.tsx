import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AssignTheDriver.css";

const AssignTheDriver: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAssignTheDriverClick = useCallback(() => {
    navigate("/assign-driver");
  }, [navigate]);

  return (
    <div className="assign-the-driver" onClick={onAssignTheDriverClick}>
      <img
        className="driver-license-car-svgrepo-com-icon"
        loading="lazy"
        alt=""
        src="/driverlicensecarsvgrepocom-1.svg"
      />
      <div className="assign-the-driver-wrapper">
        <div className="assign-the-driver1">Assign the Driver</div>
      </div>
    </div>
  );
};

export default AssignTheDriver;
