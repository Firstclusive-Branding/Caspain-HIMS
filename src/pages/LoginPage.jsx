import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (email) => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-page-container">
        <Login onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
