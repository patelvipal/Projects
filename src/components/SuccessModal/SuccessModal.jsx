import { FaCheckCircle } from "react-icons/fa";
import "./SuccessModal.css";

function SuccessModal({
  isOpen,
  title = "Success!",
  message = "Operation completed successfully.",
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="success-overlay">
      <div className="success-modal">
        <div className="success-icon">
          <FaCheckCircle />
        </div>

        <h2>{title}</h2>

        <p>{message}</p>

        <button className="success-btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
