import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">SkillBridge</div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {/* INTERN */}
            <li className="dropdown">
              <span>Internships</span>

              <div className="dropdown-card">
                <Link to="/" className="card-item">
                  <h4>Top Internships</h4>
                  <p>High paying verified internships</p>
                </Link>

                <Link to="/" className="card-item">
                  <h4>Summer Internships</h4>
                  <p>Best internships for students</p>
                </Link>

                <Link to="/" className="card-item">
                  <h4>Remote Internships</h4>
                  <p>Work from anywhere</p>
                </Link>
              </div>
            </li>

            {/* JOBS */}
            <li className="dropdown">
              <span>Jobs</span>

              <div className="dropdown-card">
                <Link to="/" className="card-item">
                  <h4>IT Jobs</h4>
                  <p>Software & developer roles</p>
                </Link>

                <Link to="/" className="card-item">
                  <h4>Marketing Jobs</h4>
                  <p>Digital marketing & sales roles</p>
                </Link>

                <Link to="/" className="card-item">
                  <h4>Freshers Jobs</h4>
                  <p>Entry level opportunities</p>
                </Link>
              </div>
            </li>

            {/* COURSES */}
            <li className="dropdown">
              <span>Courses</span>

              <div className="dropdown-card">
                <Link to="/" className="card-item">
                  <h4>Programming</h4>
                  <p>Learn coding from scratch</p>
                </Link>

                <Link to="/" className="card-item">
                  <h4>Design</h4>
                  <p>UI/UX & graphic design</p>
                </Link>

                <Link to="/" className="card-item">
                  <h4>Business</h4>
                  <p>Marketing & management skills</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* SEARCH */}
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <Link className="login" to="/login">
            Login
          </Link>
          <Link className="signup" to="/signup">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
