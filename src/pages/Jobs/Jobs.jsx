import { useState } from "react";
import { Link } from "react-router-dom";
import { useSavedJobs } from "../../context/SavedJobsContext";

import "./Jobs.css";
import jobsData from "../../data/jobsData";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedJobType, setSelectedJobType] = useState("All");

  const { saveJob, removeJob, isSaved } = useSavedJobs();

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;

    const matchesJobType =
      selectedJobType === "All" || job.jobType === selectedJobType;

    return matchesSearch && matchesCategory && matchesJobType;
  });

  return (
    <>
      <Navbar />

      <section className="jobs-page">
        <div className="jobs-header">
          <h1>Find Your Dream Job</h1>
          <p>Browse thousands of opportunities from top companies.</p>
        </div>

        <div className="jobs-search">
          <input
            type="text"
            placeholder="Search jobs, companies, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="jobs-container">
          {/* Sidebar */}

          <aside className="jobs-sidebar">
            <h3>Filters</h3>

            <div className="filter-group">
              <label>Category</label>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Job Type</label>

              <select
                value={selectedJobType}
                onChange={(e) => setSelectedJobType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Full Time">Full Time</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </aside>

          {/* Jobs */}

          <div className="jobs-list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div className="job-card" key={job.id}>
                  {/* Save Button */}

                  <button
                    className="save-job-btn"
                    onClick={() =>
                      isSaved(job.id) ? removeJob(job.id) : saveJob(job)
                    }
                  >
                    {isSaved(job.id) ? "❤️ Saved" : "🤍 Save"}
                  </button>

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
                    <strong>Job Type:</strong> {job.jobType}
                  </p>

                  <p>
                    <strong>Category:</strong> {job.category}
                  </p>

                  <div className="job-actions">
                    <button className="apply-btn">Apply Now</button>

                    <Link to={`/jobs/${job.id}`} className="details-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <h2>No Jobs Found</h2>
                <p>Try changing your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Jobs;
