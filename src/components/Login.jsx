import React, { useState } from "react";
import "../styles/Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/Caspian.png";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = "admin@caspian.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
      onLogin(email);
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="login-page-container">
      <div className="login-logo-container">
        <img src={logo} alt="caspian logo" />
      </div>
      <div className="login-box">
        <h1 className="login-title">Login to Your Account</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-forgot-password-container">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="sign-up-container">
          <p>Don't have an account?</p>
          <a href="#">Sign up</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
