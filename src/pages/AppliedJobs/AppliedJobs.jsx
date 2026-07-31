import { Link } from "react-router-dom";
import { useAppliedJobs } from "../../context/AppliedJobsContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AppliedJobs.css";

function AppliedJobs() {
  const { appliedJobs, removeAppliedJob } = useAppliedJobs();

  return (
    <>
      <Navbar />

      <section className="applied-page">
        <div className="applied-header">
          <h1>📄 Applied Jobs</h1>
          <p>Track all the jobs you've applied for.</p>

          <div className="applied-count">
            Total Applied Jobs: {appliedJobs.length}
          </div>
        </div>

        {appliedJobs.length === 0 ? (
          <div className="empty-state">
            <h2>No Applications Yet</h2>

            <p>Start applying for jobs to see them here.</p>

            <Link to="/jobs" className="browse-btn">
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="applied-grid">
            {appliedJobs.map((job) => (
              <div className="applied-card" key={job.id}>
                <h2>{job.title}</h2>

                <p>
                  <strong>Company:</strong> {job.company}
                </p>

                <p>
                  <strong>Location:</strong> {job.location}
                </p>

                <p>
                  <strong>Salary:</strong> {job.salary}
                </p>

                <p>
                  <strong>Experience:</strong> {job.experience}
                </p>

                <p>
                  <strong>Status:</strong>
                  <span className="status">Applied ✅</span>
                </p>

                <div className="applied-actions">
                  <Link to={`/jobs/${job.id}`} className="details-btn">
                    View Details
                  </Link>

                  <button
                    className="remove-btn"
                    onClick={() => removeAppliedJob(job.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default AppliedJobs;
