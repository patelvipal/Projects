import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import CompanyCard from "./CompanyCard";
import companyData from "../../data/companyData";

import "./Companies.css";

function Companies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companyData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Navbar />

      <section className="companies-page">
        {/* Header */}

        <div className="companies-header">
          <h1>Top Companies</h1>

          <p>Discover India's leading companies hiring talented developers.</p>
        </div>

        {/* Search */}

        <div className="companies-search">
          <input
            type="text"
            placeholder="Search company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Total Companies */}

        <div className="companies-count">
          {filteredCompanies.length} Companies Found
        </div>

        {/* Company Grid */}

        <div className="companies-grid">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))
          ) : (
            <div className="no-company">
              <h2>No Company Found 😔</h2>

              <p>Try searching with another company name.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Companies;
