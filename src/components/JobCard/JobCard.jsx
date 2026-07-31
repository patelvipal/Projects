import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaHeart,
} from "react-icons/fa";

import { useSavedJobs } from "../../context/SavedJobsContext";
import { useAppliedJobs } from "../../context/AppliedJobsContext";

import ApplyModal from "../ApplyModal/ApplyModal";
import SuccessModal from "../SuccessModal/SuccessModal";

import "./JobCard.css";

function JobCard({ job }) {
  const { toggleSaveJob, isSaved } = useSavedJobs();
  const { applyJob, isApplied } = useAppliedJobs();

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleOpenModal = () => {
    if (!isApplied(job.id)) {
      setShowApplyModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowApplyModal(false);
  };

  const handleConfirmApply = () => {
    applyJob(job);

    setShowApplyModal(false);

    setTimeout(() => {
      setShowSuccessModal(true);
    }, 200);
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <div className="job-card">
        {/* Header */}

        <div className="job-top">
          <div>
            <h3>{job.title}</h3>

            <span className="company-name">{job.company}</span>
          </div>

          <button
            className={`save-btn ${isSaved(job.id) ? "saved" : ""}`}
            onClick={() => toggleSaveJob(job)}
            title={isSaved(job.id) ? "Saved Job" : "Save Job"}
          >
            {isSaved(job.id) ? "❤️" : "🤍"}
          </button>
        </div>

        {/* Details */}

        <div className="job-details">
          <p>
            <FaMapMarkerAlt />
            {job.location}
          </p>

          <p>
            <FaMoneyBillWave />
            {job.salary}
          </p>

          <p>
            <FaClock />
            {job.experience}
          </p>
        </div>

        {/* Tags */}

        <div className="job-tags">
          <span>{job.jobType}</span>
          <span>{job.category}</span>
        </div>

        {/* Footer */}

        <div className="job-footer">
          <Link to={`/jobs/${job.id}`} className="details-btn">
            View Details
          </Link>

          <button
            className={`apply-btn ${isApplied(job.id) ? "applied" : ""}`}
            onClick={handleOpenModal}
            disabled={isApplied(job.id)}
          >
            {isApplied(job.id) ? "Applied ✓" : "Apply Now"}
          </button>
        </div>
      </div>

      {/* Apply Modal */}

      <ApplyModal
        isOpen={showApplyModal}
        job={job}
        onClose={handleCloseModal}
        onConfirm={handleConfirmApply}
      />

      {/* Success Modal */}

      <SuccessModal
        isOpen={showSuccessModal}
        title="Application Submitted!"
        message="Your application has been submitted successfully. Best of luck!"
        onClose={handleCloseSuccess}
      />
    </>
  );
}

export default JobCard;
