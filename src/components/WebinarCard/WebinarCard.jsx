import { useState } from "react";
import { FaCalendarAlt, FaClock, FaUserFriends, FaVideo } from "react-icons/fa";

import { useRegisteredWebinars } from "../../context/RegisteredWebinarsContext";

import RegisterWebinarModal from "../RegisterWebinarModal/RegisterWebinarModal";
import SuccessModal from "../SuccessModal/SuccessModal";

import "./WebinarCard.css";

function WebinarCard({ webinar }) {
  const { registerWebinar, isRegistered } = useRegisteredWebinars();

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleOpenModal = () => {
    if (!isRegistered(webinar.id)) {
      setShowRegisterModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowRegisterModal(false);
  };

  const handleConfirmRegister = () => {
    registerWebinar(webinar);

    setShowRegisterModal(false);

    setTimeout(() => {
      setShowSuccessModal(true);
    }, 200);
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <div className="webinar-card">
        {/* Image */}

        <div className="webinar-image-box">
          <img src={webinar.image} alt={webinar.title} />

          <span className="live-badge">🔴 LIVE</span>
        </div>

        {/* Content */}

        <div className="webinar-content">
          <h3>{webinar.title}</h3>

          <p className="speaker">🎤 {webinar.speaker}</p>

          <p className="company">🏢 {webinar.company}</p>

          <div className="webinar-details">
            <span>
              <FaCalendarAlt />
              {webinar.date}
            </span>

            <span>
              <FaClock />
              {webinar.time}
            </span>

            <span>
              <FaVideo />
              {webinar.duration}
            </span>

            <span>📈 {webinar.level}</span>

            <span>
              <FaUserFriends />
              {webinar.registered}
            </span>
          </div>

          <p className="description">{webinar.description}</p>

          <button
            className={`register-btn ${
              isRegistered(webinar.id) ? "registered" : ""
            }`}
            onClick={handleOpenModal}
            disabled={isRegistered(webinar.id)}
          >
            {isRegistered(webinar.id) ? "Registered ✓" : "Register Free"}
          </button>
        </div>
      </div>

      {/* Register Modal */}

      <RegisterWebinarModal
        isOpen={showRegisterModal}
        webinar={webinar}
        onClose={handleCloseModal}
        onConfirm={handleConfirmRegister}
      />

      {/* Success Modal */}

      <SuccessModal
        isOpen={showSuccessModal}
        title="Registration Successful!"
        message="You have successfully registered for this webinar."
        onClose={handleCloseSuccess}
      />
    </>
  );
}

export default WebinarCard;
