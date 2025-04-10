import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "../styles/Doctors.css";
import doctorData from "../data/doctors.json";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const specialties = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gynecologist",
  "Orthopedic",
  "ENT Specialist",
  "Urologist",
  "Psychiatrist",
  "Nephrologist",
  "Oncologist",
  "Endocrinologist",
  "Pulmonologist",
  "Rheumatologist",
  "Hematologist",
  "Gastroenterologist",
  "General Physician",
  "Radiologist",
  "Anesthesiologist",
];

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [time, setTime] = useState({
    fromHour: "",
    fromMinute: "",
    fromPeriod: "AM",
    toHour: "",
    toMinute: "",
    toPeriod: "PM",
  });

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialty: "",
  });

  useEffect(() => {
    setDoctors(doctorData);
  }, []);

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleAddDoctor = () => {
    const newId = doctors.length + 1;
    const availability = `${selectedDays.join(", ")} - ${time.fromHour}:${
      time.fromMinute
    } ${time.fromPeriod} to ${time.toHour}:${time.toMinute} ${time.toPeriod}`;
    const doctor = {
      id: newId,
      name: newDoctor.name,
      specialty: newDoctor.specialty,
      availability,
    };
    setDoctors([...doctors, doctor]);

    // Reset form
    setNewDoctor({ name: "", specialty: "" });
    setSelectedDays([]);
    setTime({
      fromHour: "",
      fromMinute: "",
      fromPeriod: "AM",
      toHour: "",
      toMinute: "",
      toPeriod: "PM",
    });
    setShowModal(false);
  };

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doctors-page">
      <div className="doctors-header">
        <input
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setShowModal(true)}>
          <FaPlus className="icon" /> Add Doctor
        </button>
      </div>

      <table className="doctors-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.specialty}</td>
              <td>{doc.availability}</td>
              <td className="action-icons">
                <FaEdit className="edit-icon" />
                <FaTrash className="delete-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="doctors-modal-overlay">
          <div className="doctors-modal-box">
            <span
              className="doctors-modal-close"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>

            <h3>Add New Doctor</h3>
            <form>
              <input
                type="text"
                placeholder="Name"
                value={newDoctor.name}
                required
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, name: e.target.value })
                }
              />

              <select
                value={newDoctor.specialty}
                required
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, specialty: e.target.value })
                }
              >
                <option value="">Select Specialty</option>
                {specialties.map((spec, index) => (
                  <option key={index} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>

              <label className="doctors-modal-label">
                Select Availability Days:
              </label>
              <div className="doctors-modal-day-selection">
                {weekdays.map((day) => (
                  <div
                    key={day}
                    className={`doctors-modal-day-card ${
                      selectedDays.includes(day) ? "selected" : ""
                    }`}
                    onClick={() => toggleDay(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>

              <label className="doctors-modal-label">Time From:</label>
              <div className="doctors-modal-time-row">
                <input
                  type="number"
                  placeholder="HH"
                  value={time.fromHour}
                  onChange={(e) =>
                    setTime({ ...time, fromHour: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="MM"
                  value={time.fromMinute}
                  onChange={(e) =>
                    setTime({ ...time, fromMinute: e.target.value })
                  }
                />
                <select
                  value={time.fromPeriod}
                  onChange={(e) =>
                    setTime({ ...time, fromPeriod: e.target.value })
                  }
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>

              <label className="doctors-modal-label">Time To:</label>
              <div className="doctors-modal-time-row">
                <input
                  type="number"
                  placeholder="HH"
                  value={time.toHour}
                  onChange={(e) => setTime({ ...time, toHour: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="MM"
                  value={time.toMinute}
                  onChange={(e) =>
                    setTime({ ...time, toMinute: e.target.value })
                  }
                />
                <select
                  value={time.toPeriod}
                  onChange={(e) =>
                    setTime({ ...time, toPeriod: e.target.value })
                  }
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>

              <div className="doctors-modal-actions">
                <button type="submit" onClick={handleAddDoctor}>
                  Add
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
