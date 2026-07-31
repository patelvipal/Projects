import { Link } from "react-router-dom";
import categoryData from "../../data/categoryData";

import "./JobCategories.css";

function JobCategories() {
  return (
    <section className="categories-section">
      <div className="categories-container">
        <div className="categories-header">
          <h2>🚀 Browse Jobs by Category</h2>

          <p>
            Find your dream job by exploring the most popular technology
            categories.
          </p>
        </div>

        <div className="categories-grid">
          {categoryData.map((category) => {
            const Icon = category.icon;

            return (
              <Link to="/jobs" className="category-link" key={category.id}>
                <div
                  className="category-icon"
                  style={{ background: category.color }}
                >
                  <Icon />
                </div>

                <h3 className="category-title">{category.name}</h3>

                <p className="category-jobs">{category.jobs}+ Jobs</p>

                <span className="category-explore">Explore Jobs →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default JobCategories;
