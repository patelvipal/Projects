import { Link } from "react-router-dom";
import { useSavedJobs } from "../../context/SavedJobsContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./SavedJobs.css";

function SavedJobs() {
  const { savedJobs, removeJob } = useSavedJobs();

  return (
    <>
      <Navbar />

      <section className="saved-jobs-page">
        <div className="saved-header">
          <h1>❤️ Saved Jobs</h1>
          <p>Your favourite jobs are stored here.</p>
        </div>

        {savedJobs.length === 0 ? (
          <div className="empty-state">
            <h2>No Saved Jobs</h2>
            <p>Save jobs to view them later.</p>

            <Link to="/jobs" className="browse-btn">
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="saved-jobs-grid">
            {savedJobs.map((job) => (
              <div className="saved-job-card" key={job.id}>
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

                <div className="saved-actions">
                  <Link to={`/jobs/${job.id}`} className="details-btn">
                    View Details
                  </Link>

                  <button
                    className="remove-btn"
                    onClick={() => removeJob(job.id)}
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

export default SavedJobs;
