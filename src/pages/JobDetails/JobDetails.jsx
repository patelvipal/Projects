import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useAppliedJobs } from "../../context/AppliedJobsContext";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

import "./JobDetails.css";

const API_URL = "http://localhost:2000/api/jobs";

function JobDetails() {
  const { id } = useParams();

  const { applyJob, isApplied } = useAppliedJobs();

  const [job, setJob] = useState(null);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  // Fetch single job and all jobs from MongoDB
  useEffect(() => {
    const controller = new AbortController();

    async function fetchJobDetails() {
      try {
        setLoading(true);
        setError("");

        const [jobResponse, allJobsResponse] = await Promise.all([
          fetch(`${API_URL}/${id}`, { signal: controller.signal }),
          fetch(API_URL, { signal: controller.signal }),
        ]);

        if (!jobResponse.ok) {
          throw new Error(
            jobResponse.status === 404
              ? "Job not found."
              : "Failed to fetch job details.",
          );
        }

        if (!allJobsResponse.ok) {
          throw new Error("Failed to fetch similar jobs.");
        }

        const jobData = await jobResponse.json();
        const jobsData = await allJobsResponse.json();

        const normalizeJob = (item) => ({
          ...item,
          id: item.id || item._id,
          title: String(item.title || ""),
          company: String(item.company || ""),
          location: String(item.location || ""),
          salary: String(item.salary ?? ""),
          experience: String(item.experience || ""),
          jobType: String(item.jobType || "Full-time"),
          category: String(item.category || "Other"),
          description: String(item.description || ""),
          skills: Array.isArray(item.skills) ? item.skills : [],
          responsibilities: Array.isArray(item.responsibilities)
            ? item.responsibilities
            : [],
          benefits: Array.isArray(item.benefits) ? item.benefits : [],
        });

        setJob(normalizeJob(jobData));
        setAllJobs(Array.isArray(jobsData) ? jobsData.map(normalizeJob) : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchJobDetails();

    return () => controller.abort();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = (e) => {
    e.preventDefault();

    if (isApplied(job.id)) return;

    applyJob(job);
    setShowApplyModal(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
    });

    setShowSuccessModal(true);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="job-not-found">
          <h2>Loading job details...</h2>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !job) {
    return (
      <>
        <Navbar />
        <div className="job-not-found">
          <h2>{error || "Job Not Found"}</h2>
          <Link to="/jobs" className="back-btn">
            ← Back to Jobs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const similarJobs = allJobs
    .filter(
      (item) =>
        item.category === job.category && String(item.id) !== String(job.id),
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <section className="job-details-page">
        <div className="job-details-card">
          <div className="job-header">
            {job.companyLogo && (
              <img
                src={job.companyLogo}
                alt={job.company}
                className="company-logo"
              />
            )}

            <div>
              <h1>{job.title}</h1>
              <h3>{job.company}</h3>

              <div className="job-meta">
                <span>
                  <FaMapMarkerAlt /> {job.location}
                </span>
                <span>
                  <FaMoneyBillWave /> {job.salary}
                </span>
                <span>
                  <FaClock /> {job.jobType}
                </span>
                <span>
                  <FaBuilding /> {job.experience}
                </span>
              </div>
            </div>
          </div>

          <div className="job-section">
            <h2>Job Description</h2>
            <p>{job.description || "No description available."}</p>
          </div>

          <div className="job-section">
            <h2>Responsibilities</h2>
            {job.responsibilities.length > 0 ? (
              <ul>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No responsibilities provided.</p>
            )}
          </div>

          <div className="job-section">
            <h2>Required Skills</h2>
            <div className="skills">
              {job.skills.length > 0 ? (
                job.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))
              ) : (
                <p>No skills provided.</p>
              )}
            </div>
          </div>

          <div className="job-section">
            <h2>Benefits</h2>
            <div className="benefits">
              {job.benefits.length > 0 ? (
                job.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    {benefit}
                  </div>
                ))
              ) : (
                <p>No benefits provided.</p>
              )}
            </div>
          </div>

          <button
            className="apply-job-btn"
            onClick={() => setShowApplyModal(true)}
            disabled={isApplied(job.id)}
          >
            {isApplied(job.id) ? "Applied ✅" : "Apply Now"}
          </button>
        </div>

        <div className="similar-jobs">
          <h2>Similar Jobs</h2>

          <div className="similar-grid">
            {similarJobs.length > 0 ? (
              similarJobs.map((item) => (
                <Link
                  key={item.id}
                  to={`/jobs/${item.id}`}
                  className="similar-card"
                >
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                  <span>{item.location}</span>
                </Link>
              ))
            ) : (
              <p>No similar jobs found.</p>
            )}
          </div>
        </div>
      </section>

      {showApplyModal && (
        <div
          className="apply-modal-overlay"
          onClick={() => setShowApplyModal(false)}
        >
          <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-modal-btn"
              onClick={() => setShowApplyModal(false)}
            >
              <FaTimes />
            </button>

            <div className="apply-modal-header">
              <h2>Apply for this Job</h2>
              <p>
                {job.title} at <strong>{job.company}</strong>
              </p>
            </div>

            <form onSubmit={handleApply}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label>Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Write a short cover letter..."
                  rows="5"
                  required
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowApplyModal(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="submit-application-btn">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div
          className="success-modal-overlay"
          onClick={() => setShowSuccessModal(false)}
        >
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon">✓</div>
            <h2>Application Submitted!</h2>
            <p>
              Your application for <strong>{job.title}</strong> at{" "}
              <strong>{job.company}</strong> has been submitted successfully.
            </p>
            <button
              type="button"
              className="success-close-btn"
              onClick={() => setShowSuccessModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default JobDetails;
