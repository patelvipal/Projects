import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaGlobe,
  FaCalendarAlt,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import companyData from "../../data/companyData";
import jobsData from "../../data/JobsData";

import "./CompanyDetails.css";

function CompanyDetails() {
  const { id } = useParams();

  const company = companyData.find((item) => item.id === Number(id));

  if (!company) {
    return (
      <>
        <Navbar />

        <div className="company-not-found">
          <h2>Company Not Found</h2>

          <Link to="/companies" className="back-btn">
            ← Back to Companies
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  // Jobs of this company
  const companyJobs = jobsData.filter((job) => job.company === company.name);

  return (
    <>
      <Navbar />

      <section className="company-details-page">
        {/* Company Card */}

        <div className="company-details-card">
          <div className="company-header">
            {company.logo ? (
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
            ) : (
              <div className="company-avatar">{company.name.charAt(0)}</div>
            )}

            <div>
              <h1>{company.name}</h1>

              <div className="company-rating">
                <FaStar className="star" />
                {company.rating}
              </div>

              <div className="company-meta">
                <span>
                  <FaMapMarkerAlt />
                  {company.location}
                </span>

                <span>
                  <FaUsers />
                  {company.employees}
                </span>

                <span>
                  <FaBuilding />
                  {company.industry}
                </span>

                <span>
                  <FaCalendarAlt />
                  {company.founded}
                </span>
              </div>
            </div>
          </div>

          {/* About */}

          <div className="company-section">
            <h2>About Company</h2>

            <p>{company.description}</p>
          </div>

          {/* Website */}

          <div className="company-section">
            <h2>Website</h2>

            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="company-website"
            >
              <FaGlobe />
              {company.website}
            </a>
          </div>

          {/* Open Jobs */}

          <div className="company-section">
            <h2>
              <FaBriefcase />
              Open Jobs ({companyJobs.length})
            </h2>

            {companyJobs.length > 0 ? (
              <div className="company-jobs">
                {companyJobs.map((job) => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.id}`}
                    className="company-job-card"
                  >
                    <h3>{job.title}</h3>

                    <p>{job.location}</p>

                    <span>{job.salary}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p>No jobs available.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CompanyDetails;
