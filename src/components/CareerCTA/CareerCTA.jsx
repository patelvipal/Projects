import { Link } from "react-router-dom";
import "./CareerCTA.css";

function CareerCTA() {
  return (
    <section className="career-cta">
      <div className="career-cta-container">
        <span className="cta-badge">🚀 Join SkillBridge Today</span>

        <h2>Ready to Build Your Dream Career?</h2>

        <p>
          Join thousands of students and professionals discovering jobs,
          learning new skills, and connecting with top companies.
        </p>

        <div className="cta-stats">
          <div className="cta-stat">
            <h3>15K+</h3>
            <span>Jobs</span>
          </div>

          <div className="cta-stat">
            <h3>500+</h3>
            <span>Courses</span>
          </div>

          <div className="cta-stat">
            <h3>300+</h3>
            <span>Companies</span>
          </div>

          <div className="cta-stat">
            <h3>50K+</h3>
            <span>Users</span>
          </div>
        </div>

        <div className="cta-buttons">
          <Link to="/jobs" className="cta-primary-btn">
            Browse Jobs
          </Link>

          <Link to="/courses" className="cta-secondary-btn">
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CareerCTA;
