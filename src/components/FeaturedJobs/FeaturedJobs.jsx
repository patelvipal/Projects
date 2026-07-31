import { Link } from "react-router-dom";
import jobsData from "../../data/JobsData";
import JobCard from "../JobCard/JobCard";
import "./FeaturedJobs.css";

function FeaturedJobs() {
  const featuredJobs = jobsData.slice(0, 4);

  return (
    <section className="featured-jobs">
      <div className="featured-container">
        {/* Header */}

        <div className="section-header">
          <h2>🔥 Featured Jobs</h2>

          <p>Discover the latest opportunities from India's top companies.</p>
        </div>

        {/* Jobs */}

        <div className="jobs-grid">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* View All */}

        <div className="view-all">
          <Link to="/jobs" className="view-btn">
            View All Jobs →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
