import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Main.css";
import ConfirmButton from "./ConfirmButton";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Logowanie użytkownika
    const loginResponse = await fetch(
      "https://www.igorgawlowicz.pl/kegdelpol/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    if (!loginResponse.ok) {
      console.error("Login failed");
      return;
    }

    const loginData = await loginResponse.json();
    const authToken = loginData.token;

    // Pobranie auth_id i roli
    const authIdAndRoleResponse = await fetch(
      "https://www.igorgawlowicz.pl/kegdelpol/auth/get_auth_id_and_role",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Przekazanie JWT tokena
        },
        body: JSON.stringify({ token: authToken }),
      }
    );

    if (!authIdAndRoleResponse.ok) {
      console.error("Failed to fetch auth ID and role");
      return;
    }

    const authIdAndRoleData = await authIdAndRoleResponse.json();
    const { role, auth_id } = authIdAndRoleData;

    // Zapisanie danych do localStorage
    localStorage.setItem("jwt", authToken);
    localStorage.setItem("auth_id", auth_id);
    localStorage.setItem("role", role);

    // Przekierowanie na odpowiedni interfejs użytkownika w zależności od roli
    if (role === "Employee") {
      navigate("/employeeUI");
    } else if (role === "Customer") {
      navigate("/clientUI");
    } else if (role === "Driver") {
      navigate("/driverUI");
    } else {
      console.error("Unknown role");
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
