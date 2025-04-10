import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaFileMedical,
  FaComments,
  FaClock,
  FaCalendarTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/SidePanel.css";
import caspianLogo from "../assets/CaspianLogo.png";

const SidePanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="side-panel">
      <div className="sidepanel-caspian-logo">
        <img src={caspianLogo} alt="Caspian Healthcare Logo" />
      </div>
      <nav className="side-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaTachometerAlt className="icon" />
          Dashboard
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaUserMd className="icon" />
          Doctors
        </NavLink>
        <NavLink
          to="/emrs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaFileMedical className="icon" />
          EMRs
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaComments className="icon" />
          Messages
        </NavLink>
        <NavLink
          to="/reminders"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaClock className="icon" />
          Reminders
        </NavLink>
        <NavLink
          to="/unavailability"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FaCalendarTimes className="icon" />
          Unavailability
        </NavLink>

        <div className="side-nav-logout-link" onClick={handleLogout}>
          <FaSignOutAlt className="icon" />
          Sign Out
        </div>
      </nav>
    </div>
  );
};

export default SidePanel;
