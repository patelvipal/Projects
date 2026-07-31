import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaStar } from "react-icons/fa";

import "./CompanyCard.css";

function CompanyCard({ company }) {
  return (
    <div className="company-card">
      {/* Company Logo */}

      <div className="company-logo-box">
        {company.logo ? (
          <img src={company.logo} alt={company.name} className="company-logo" />
        ) : (
          <div className="company-avatar">{company.name.charAt(0)}</div>
        )}
      </div>

      {/* Company Name */}

      <h2>{company.name}</h2>

      {/* Rating */}

      <div className="company-rating">
        <FaStar className="star-icon" />

        <span>{company.rating}</span>
      </div>

      {/* Location */}

      <div className="company-info">
        <p>
          <FaMapMarkerAlt />
          {company.location}
        </p>

        <p>
          <FaBriefcase />
          {company.jobs} Open Jobs
        </p>
      </div>

      {/* Industry */}

      <div className="company-industry">{company.industry}</div>

      {/* View Button */}

      <Link to={`/companies/${company.id}`} className="company-btn">
        View Company
      </Link>
    </div>
  );
}

export default CompanyCard;
