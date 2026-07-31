import "./EnrollModal.css";

function EnrollModal({ isOpen, course, onClose, onConfirm }) {
  if (!isOpen || !course) return null;

  return (
    <div className="modal-overlay">
      <div className="enroll-modal">
        <h2>Enroll in Course</h2>

        <div className="modal-course">
          <h3>{course.title}</h3>

          <p>👨 {course.instructor}</p>

          <p>⏱ {course.duration}</p>

          <p>💰 {course.price}</p>
        </div>

        <p className="modal-text">
          Are you sure you want to enroll in this course?
        </p>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="confirm-btn" onClick={onConfirm}>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnrollModal;
