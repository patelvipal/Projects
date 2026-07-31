import "./Hero.css";
import {
  FaSearch,
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <span className="hero-tag">🚀 India's Smart Career Platform</span>

          <h1>
            Find Your <span>Dream Job</span>
            <br />
            Learn New Skills &
            <br />
            Grow Your Career
          </h1>

          <p>
            Discover thousands of jobs, industry-leading courses and connect
            with top companies across India.
          </p>

          {/* Search */}
          <div className="hero-search">
            <FaSearch className="hero-search-icon" />

            <input
              type="text"
              placeholder="Search jobs, companies, courses..."
            />

            <button>Search</button>
          </div>

          {/* Buttons */}

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Jobs
              <FaArrowRight />
            </button>

            <button className="secondary-btn">Browse Courses</button>
          </div>

          {/* Stats */}

          <div className="hero-stats">
            <div className="stat-box">
              <h2>10K+</h2>
              <p>Jobs</p>
            </div>

            <div className="stat-box">
              <h2>500+</h2>
              <p>Courses</p>
            </div>

            <div className="stat-box">
              <h2>300+</h2>
              <p>Companies</p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="hero-right">
          <div className="hero-card">
            <div className="card-icon">
              <FaBriefcase />
            </div>

            <h3>Frontend Developer</h3>

            <p>Google • Bengaluru</p>

            <span>₹12 LPA</span>
          </div>

          <div className="hero-card">
            <div className="card-icon course">
              <FaGraduationCap />
            </div>

            <h3>React.js Masterclass</h3>

            <p>120+ Lessons</p>

            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>

      {/* Companies */}

      <div className="companies">
        <p>Trusted by students preparing for careers at</p>

        <div className="company-list">
          <span>Google</span>
          <span>Microsoft</span>
          <span>Amazon</span>
          <span>TCS</span>
          <span>Infosys</span>
          <span>Accenture</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
