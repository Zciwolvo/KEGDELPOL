import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Main.css";
import ConfirmButton from "./ConfirmButton";

const Main = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <div className="main-container">
          <h1>Log in to your account</h1>
          <form className="login-form">
            <div className="input-container">
              <label htmlFor="login">Login</label>
              <input type="text" id="login" placeholder="Login" className="input-field" />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" className="input-field" />
            </div>
            <ConfirmButton buttonText="Sign in" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
