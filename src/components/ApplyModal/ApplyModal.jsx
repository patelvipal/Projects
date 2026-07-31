import "./ApplyModal.css";

function ApplyModal({ isOpen, job, onClose, onConfirm }) {
  if (!isOpen || !job) return null;

  return (
    <div className="modal-overlay">
      <div className="apply-modal">
        <h2>Apply for Job</h2>

        <div className="modal-job">
          <h3>{job.title}</h3>

          <p>
            {job.company} • {job.location}
          </p>
        </div>

        <p className="modal-text">
          Are you sure you want to apply for this job?
        </p>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="confirm-btn" onClick={onConfirm}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;
