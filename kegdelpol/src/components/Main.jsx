import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Main.css";
import ConfirmButton from "./ConfirmButton";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';


const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://www.igorgawlowicz.pl/kegdelpol/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      const decodedToken = jwtDecode(data.token);
      const role = decodedToken.role;

      setToken(data.token);
      localStorage.setItem("jwt", data.token);

      if (role === "employee") {
        navigate("/employeeUI");
      } else if (role === "customer") {
        navigate("/clientUI");
      } else if (role === "driver") {
        navigate("/driverUI");
      } else {
        console.error("Unknown role");
      }
    } else {
      console.log("fail");
      console.log(JSON.stringify({ username, password }));
    }
    
  };
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <div className="main-container">
          <h1>LOG IN TO YOUR ACCOUNT</h1>
          <form className="login-form">
            <div className="input-container">
              <label htmlFor="login">Login</label>
              <input
                type="text"
                id="login"
                placeholder="Login"
                className="input-field"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <ConfirmButton buttonText="Sign in" onClick={handleLogin} />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
