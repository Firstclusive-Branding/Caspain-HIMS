import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUserInjured, FaComments, FaUserPlus } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import "../styles/AdminDashboard.css";
import profilepic from "../assets/profile-pic.png";

const AdminDashboard = () => {
  const [date, setDate] = useState(new Date());

  const appointments = [
    { name: "Jhon sinauw", time: "April 9 - 09:00 am", img: profilepic },
    {
      name: "Indri valenciaciaa",
      time: "April 9 - 10:10 am",
      img: profilepic,
    },
    {
      name: "Udinsam trisakti",
      time: "April 9 - 01:00 pm",
      img: profilepic,
    },
    { name: "Bahar Astreeaa", time: "April 9 - 03:00 pm", img: profilepic },
  ];

  const messages = [
    {
      name: "Ope",
      time: "4:27pm",
      text: "Gee, its been good news all day. i met someone special today, she’s really pretty.",
      img: profilepic,
    },
    {
      name: "Bambam",
      time: "4:12pm",
      text: "Are you coming to class tomorrow? we have test.",
      img: profilepic,
    },
    {
      name: "Lucia",
      time: "3:27pm",
      text: "I miss you dear, when are you coming to see me.",
      img: profilepic,
    },
    {
      name: "Mijan",
      time: "4:00pm",
      text: "Baba what sup na, you still de Lagos?",
      img: profilepic,
    },
    {
      name: "Chi",
      time: "3:00pm",
      text: "Have you called them?",
      img: profilepic,
    },
  ];

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header">
        <h2>Hi, Sayyed</h2>
      </div>

      <div className="admin-dashboard-main">
        <div className="admin-left-panel">
          <div className="admin-overview-header">
            <h3>Overview Analytics</h3>
            <span>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="admin-overview-cards">
            <div className="admin-overview-card">
              <FaUserInjured className="admin-icon" />
              <div>
                <h4>Total Patients</h4>
                <p>85</p>
              </div>
            </div>
            <div className="admin-overview-card">
              <FaComments className="admin-icon" />
              <div>
                <h4>New Message</h4>
                <p>55</p>
              </div>
            </div>
            <div className="admin-overview-card">
              <FaUserPlus className="admin-icon" />
              <div>
                <h4>New Appointment</h4>
                <p>9</p>
              </div>
            </div>
          </div>

          <h3>Recent Message</h3>
          <div className="admin-recent-messages">
            {messages.map((msg, index) => (
              <div key={index} className="admin-message">
                <img src={msg.img} alt={msg.name} />
                <div className="admin-message-info">
                  <h4>{msg.name}</h4>
                  <p>{msg.text}</p>
                </div>
                <span>{msg.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-right-panel">
          <div className="admin-calendar-section">
            <Calendar onChange={setDate} value={date} />
          </div>

          <div className="admin-appointments-section">
            <h3>Upcoming Appointments</h3>
            {appointments.map((appt, i) => (
              <div key={i} className="admin-appointment">
                <img src={appt.img} alt={appt.name} />
                <div>
                  <h4>{appt.name}</h4>
                  <p>{appt.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-review-section">
            <h4>
              <MdReviews /> Patient Review
            </h4>
            <div className="admin-progress-bar">
              <p>Positive review</p>
              <div className="admin-bar">
                <div
                  className="admin-bar-positive"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p>85%</p>
            </div>
            <div className="admin-progress-bar">
              <p>Negative review</p>
              <div className="admin-bar">
                <div
                  className="admin-bar-negative"
                  style={{ width: "15%" }}
                ></div>
              </div>
              <p>15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
