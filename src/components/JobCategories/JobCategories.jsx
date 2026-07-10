import React, { useState } from "react";
import "./JobCategories.css";

const categories = [
  {
    icon: "💻",
    name: "IT & Software",
    jobs: "1200+ Jobs",
    color: "blue",
  },

  {
    icon: "📊",
    name: "Data Science",
    jobs: "500+ Jobs",
    color: "purple",
  },

  {
    icon: "🎨",
    name: "UI/UX Design",
    jobs: "300+ Jobs",
    color: "pink",
  },

  {
    icon: "📱",
    name: "Mobile Development",
    jobs: "450+ Jobs",
    color: "green",
  },

  {
    icon: "📈",
    name: "Marketing",
    jobs: "700+ Jobs",
    color: "orange",
  },

  {
    icon: "💼",
    name: "Business",
    jobs: "600+ Jobs",
    color: "yellow",
  },

  {
    icon: "☁️",
    name: "Cloud Computing",
    jobs: "350+ Jobs",
    color: "blue",
  },

  {
    icon: "🔐",
    name: "Cyber Security",
    jobs: "250+ Jobs",
    color: "purple",
  },

  {
    icon: "🤖",
    name: "AI & Machine Learning",
    jobs: "400+ Jobs",
    color: "pink",
  },

  {
    icon: "🧪",
    name: "Testing",
    jobs: "200+ Jobs",
    color: "green",
  },

  {
    icon: "⚙️",
    name: "DevOps",
    jobs: "300+ Jobs",
    color: "orange",
  },

  {
    icon: "🎬",
    name: "Content & Media",
    jobs: "150+ Jobs",
    color: "yellow",
  },
];

function JobCategories() {
  const [showAll, setShowAll] = useState(false);

  const displayCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <section className="category-section">
      <div className="category-header">
        <div>
          <h2>Explore Jobs By Category</h2>

          <p>Choose your career path and grow your skills</p>
        </div>

        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less ↑" : "View All →"}
        </button>
      </div>

      <div className="category-container">
        {displayCategories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className={`category-icon ${item.color}`}>{item.icon}</div>

            <h3>{item.name}</h3>

            <span>{item.jobs}</span>

            <div className="category-link">Explore Jobs →</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobCategories;
