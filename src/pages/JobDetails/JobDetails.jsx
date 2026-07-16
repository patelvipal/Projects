import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import jobsData from "../../data/jobsData";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  const job = jobsData.find((item) => item.id === parseInt(id));

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="job-not-found">
          <h1>Job Not Found</h1>

          <Link to="/jobs" className="back-btn">
            Back to Jobs
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="job-details-page">
        <div className="job-details-card">
          {/* Header */}

          <div className="job-header">
            <h1>{job.title}</h1>

            <h3>{job.company}</h3>

            <div className="job-info">
              <span>📍 {job.location}</span>
              <span>💰 {job.salary}</span>
              <span>💼 {job.jobType}</span>
              <span>🕒 {job.experience}</span>
            </div>
          </div>

          {/* Description */}

          <div className="job-section">
            <h2>Job Description</h2>

            <p>{job.description || "No description available."}</p>
          </div>

          {/* Skills */}

          <div className="job-section">
            <h2>Required Skills</h2>

            <div className="skills-container">
              {(job.skills ?? []).map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}

          <div className="job-section">
            <h2>Responsibilities</h2>

            <ul>
              {(job.responsibilities ?? []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}

          <div className="job-section">
            <h2>Benefits</h2>

            <ul>
              {(job.benefits ?? []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}

          <div className="job-buttons">
            <button className="apply-btn">Apply Now</button>

            <Link to="/jobs" className="back-btn">
              Back to Jobs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default JobDetails;
