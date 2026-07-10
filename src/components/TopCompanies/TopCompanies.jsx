import "./TopCompanies.css";
import companyData from "../../data/companyData";

function TopCompanies() {
  return (
    <section className="top-companies-wrapper">
      <div className="top-companies-heading">
        <h2>Top Companies Hiring</h2>
        <p>Trusted companies are hiring talented people</p>
      </div>

      <div className="top-companies-list">
        {companyData.map((company) => (
          <div className="top-company-item" key={company.id}>
            <div className="top-company-logo-box">
              <img
                src={company.logo}
                alt={company.name}
                className="top-company-logo"
                loading="lazy"
              />
            </div>

            <h3 className="top-company-title">{company.name}</h3>

            <p className="top-company-count">{company.jobs}</p>

            <p className="top-company-location">📍 {company.location}</p>

            <p className="top-company-rating">⭐ {company.rating}</p>

            <button className="top-company-action">View Jobs</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;
