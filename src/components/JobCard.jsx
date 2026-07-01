import React from "react";
import "./JobCard.css";

const jobs = [
  {
    logo: "💻",
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "5-8 LPA",
    type: "Full Time",
  },

  {
    logo: "⚛️",
    title: "React Developer",
    company: "Infosys",
    location: "Pune",
    salary: "4-7 LPA",
    type: "Full Time",
  },

  {
    logo: "🟢",
    title: "MERN Stack Developer",
    company: "TCS",
    location: "Mumbai",
    salary: "5-9 LPA",
    type: "Hybrid",
  },

  {
    logo: "☁️",
    title: "Cloud Engineer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "6-12 LPA",
    type: "Full Time",
  },

  {
    logo: "🐍",
    title: "Python Developer",
    company: "Microsoft",
    location: "Noida",
    salary: "6-10 LPA",
    type: "Remote",
  },

  {
    logo: "🎨",
    title: "UI UX Designer",
    company: "Wipro",
    location: "Delhi",
    salary: "3-6 LPA",
    type: "Full Time",
  },

  {
    logo: "🔐",
    title: "Cyber Security Analyst",
    company: "Accenture",
    location: "Mumbai",
    salary: "5-8 LPA",
    type: "Hybrid",
  },
];

function JobCard() {
  return (
    <section className="jobs-section">
      <div className="jobs-header">
        <div>
          <h2>Latest Jobs</h2>

          <p>Find your dream job from top companies</p>
        </div>
      </div>

      <div className="jobs-slider">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-card-top">
              <div className="job-company-logo">{job.logo}</div>

              <div>
                <h3>{job.title}</h3>

                <p className="job-company-name">{job.company}</p>
              </div>
            </div>

            <div className="job-card-details">
              <span>📍 {job.location}</span>

              <span>💰 {job.salary}</span>

              <span>💼 {job.type}</span>
            </div>

            <button className="job-apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobCard;
