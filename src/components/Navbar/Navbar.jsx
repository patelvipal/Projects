import { useState } from "react";
import { Link } from "react-router-dom";
import { useSavedJobs } from "../../context/SavedJobsContext";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { savedJobs } = useSavedJobs();

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">SkillBridge</Link>
        </div>

        {/* Mobile Menu */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/jobs" onClick={() => setMenuOpen(false)}>
              Jobs
            </Link>
          </li>

          <li>
            <Link to="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </Link>
          </li>

          <li>
            <Link to="/companies" onClick={() => setMenuOpen(false)}>
              Companies
            </Link>
          </li>

          <li>
            <Link
              to="/saved-jobs"
              className="saved-link"
              onClick={() => setMenuOpen(false)}
            >
              ❤️ Saved Jobs
              <span className="saved-count">{savedJobs.length}</span>
            </Link>
          </li>

          <li>
            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>
          </li>
        </ul>

        {/* Search */}
        <div className="nav-search">
          <input type="text" placeholder="Search jobs..." />
        </div>

        {/* Right Side */}
        <div className="nav-right">
          <Link
            to="/login"
            className="login-btn"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="register-btn"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
