import "./RegisterWebinarModal.css";

function RegisterWebinarModal({ isOpen, webinar, onClose, onConfirm }) {
  if (!isOpen || !webinar) return null;

  return (
    <div className="modal-overlay">
      <div className="apply-modal">
        <h2>Register Webinar</h2>

        <div className="modal-job">
          <h3>{webinar.title}</h3>

          <p>
            {webinar.speaker} • {webinar.company}
          </p>
        </div>

        <p className="modal-text">
          Are you sure you want to register for this webinar?
        </p>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="confirm-btn" onClick={onConfirm}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterWebinarModal;
