import { useParams, Link } from "react-router-dom";
import jobsData from "../../data/JobsData";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  const job = jobsData.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="job-not-found">
          <h2>Job Not Found</h2>

          <Link to="/jobs" className="back-btn">
            ← Back to Jobs
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  const similarJobs = jobsData
    .filter((item) => item.category === job.category && item.id !== job.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <section className="job-details-page">
        {/* Header */}

        <div className="job-details-card">
          <div className="job-header">
            <img
              src={job.companyLogo}
              alt={job.company}
              className="company-logo"
            />

            <div>
              <h1>{job.title}</h1>

              <h3>{job.company}</h3>

              <div className="job-meta">
                <span>
                  <FaMapMarkerAlt />
                  {job.location}
                </span>

                <span>
                  <FaMoneyBillWave />
                  {job.salary}
                </span>

                <span>
                  <FaClock />
                  {job.jobType}
                </span>

                <span>
                  <FaBuilding />
                  {job.experience}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}

          <div className="job-section">
            <h2>Job Description</h2>

            <p>{job.description}</p>
          </div>

          {/* Responsibilities */}

          <div className="job-section">
            <h2>Responsibilities</h2>

            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}

          <div className="job-section">
            <h2>Required Skills</h2>

            <div className="skills">
              {job.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Benefits */}

          <div className="job-section">
            <h2>Benefits</h2>

            <div className="benefits">
              {job.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Apply */}

          <button className="apply-job-btn">Apply Now</button>
        </div>

        {/* Similar Jobs */}

        <div className="similar-jobs">
          <h2>Similar Jobs</h2>

          <div className="similar-grid">
            {similarJobs.map((item) => (
              <Link
                key={item.id}
                to={`/jobs/${item.id}`}
                className="similar-card"
              >
                <h3>{item.title}</h3>

                <p>{item.company}</p>

                <span>{item.location}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default JobDetails;
