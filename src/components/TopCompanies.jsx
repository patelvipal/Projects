import React from "react";
import "./TopCompanies.css";

const companies = [
  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
    name: "Google",
    jobs: "250+ Jobs",
  },

  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg",
    name: "Amazon",
    jobs: "180+ Jobs",
  },

  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg",
    name: "Microsoft",
    jobs: "150+ Jobs",
  },

  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/infosys.svg",
    name: "Infosys",
    jobs: "300+ Jobs",
  },

  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tata.svg",
    name: "TCS",
    jobs: "400+ Jobs",
  },

  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wipro.svg",
    name: "Wipro",
    jobs: "220+ Jobs",
  },

  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/accenture.svg",
    name: "Accenture",
    jobs: "350+ Jobs",
  },
];

function TopCompanies() {
  return (
    <section className="top-companies-wrapper">
      <div className="top-companies-heading">
        <h2>Top Companies Hiring</h2>

        <p>Trusted companies are hiring talented people</p>
      </div>

      <div className="top-companies-list">
        {companies.map((company, index) => (
          <div className="top-company-item" key={index}>
            <div className="top-company-logo-box">
              <img src={company.logo} alt={company.name} />
            </div>

            <h3 className="top-company-title">{company.name}</h3>

            <p className="top-company-count">{company.jobs}</p>

            <button className="top-company-action">View Jobs...</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;
