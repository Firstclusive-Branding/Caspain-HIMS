import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import Doctors from "./pages/Doctors";
import EMRs from "./pages/EMRs";
import Messages from "./pages/Messages";
import Reminders from "./pages/Reminders";
import Unavailability from "./pages/Unavailability";

import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "doctors", element: <Doctors /> },
          { path: "emrs", element: <EMRs /> },
          { path: "messages", element: <Messages /> },
          { path: "reminders", element: <Reminders /> },
          { path: "unavailability", element: <Unavailability /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: "#ffffff",
          color: "#333",
          fontSize: "15px",
          fontWeight: 500,
          padding: "12px 16px",
          borderLeft: "6px solid #007bc7",
          boxShadow: "0 2px 10px rgba(0, 123, 199, 0.15)",
          borderRadius: "8px",
        }}
        progressStyle={{
          background: "#007bc7",
        }}
      />
    </>
  );
}

export default App;
