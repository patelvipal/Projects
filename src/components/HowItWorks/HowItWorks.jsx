import { FaUserPlus, FaUserEdit, FaSearch, FaBriefcase } from "react-icons/fa";

import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    icon: FaUserPlus,
    title: "Create Account",
    description:
      "Sign up for free and create your SkillBridge account in less than a minute.",
  },
  {
    id: 2,
    icon: FaUserEdit,
    title: "Build Your Profile",
    description:
      "Add your skills, education, projects and resume to attract recruiters.",
  },
  {
    id: 3,
    icon: FaSearch,
    title: "Find Opportunities",
    description:
      "Browse thousands of jobs, internships and professional courses.",
  },
  {
    id: 4,
    icon: FaBriefcase,
    title: "Apply & Get Hired",
    description:
      "Apply with one click and connect with top companies across India.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-header">
          <h2>🚀 How SkillBridge Works</h2>

          <p>Get your dream job in just four simple steps.</p>
        </div>

        <div className="how-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="how-card" key={step.id}>
                <div className="step-number">{step.id}</div>

                <div className="how-icon">
                  <Icon />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
