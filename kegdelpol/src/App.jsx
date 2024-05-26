import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import EmployeeUI from "./Pages/EmployeeUI";
import ClientUI from "./Pages/ClientUI";
import "./App.css";
import DriverUI from "./Pages/DriverUI";
import AssignTheDriverUI from "./Pages/AssignTheDriverUI";
import UpdateUser from "./Pages/UpdateUser";



const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/EmployeeUI" element={<EmployeeUI />} />
          <Route path="/ClientUI" element={<ClientUI />} />
          <Route path="/DriverUI" element={<DriverUI />} />
          <Route path="/AssignTheDriverUI" element={<AssignTheDriverUI />} />
          <Route path="/UpdateUser" element={<UpdateUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
