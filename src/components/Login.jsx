import React, { useState } from "react";
import "../styles/Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Caspian Healthcare Admin</h2>
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
          <button type="submit">Login</button>
        </form>
        <p className="login-footer">Where Health Meets Expertise</p>
      </div>
    </div>
  );
};

export default Login;
