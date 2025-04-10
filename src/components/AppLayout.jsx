import React from "react";
import { Outlet } from "react-router-dom";
import SidePanel from "./SidePanel";
import "../styles/AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <SidePanel />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
