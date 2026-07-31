import { Link } from "react-router-dom";
import {
  FaUser,
  FaHeart,
  FaBriefcase,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="dashboard">
        {/* Sidebar */}

        <aside className="dashboard-sidebar">
          <div className="dashboard-user">
            <div className="dashboard-avatar">V</div>

            <h3>Vipal Patel</h3>

            <p>React Developer</p>
          </div>

          <nav className="dashboard-menu">
            <Link to="/profile">
              <FaUser />
              My Profile
            </Link>

            <Link to="/saved-jobs">
              <FaHeart />
              Saved Jobs
            </Link>

            <Link to="/applied-jobs">
              <FaBriefcase />
              Applied Jobs
            </Link>

            <Link to="/resume">
              <FaFileAlt />
              Resume
            </Link>

            <Link to="/settings">
              <FaCog />
              Settings
            </Link>

            <Link to="/login">
              <FaSignOutAlt />
              Logout
            </Link>
          </nav>
        </aside>

        {/* Main */}

        <main className="dashboard-main">
          <h1>Welcome Back 👋</h1>

          <p>
            Manage your profile, applications, and career journey from your
            dashboard.
          </p>

          {/* Stats */}

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h2>12</h2>

              <p>Applied Jobs</p>
            </div>

            <div className="dashboard-card">
              <h2>8</h2>

              <p>Saved Jobs</p>
            </div>

            <div className="dashboard-card">
              <h2>5</h2>

              <p>Interviews</p>
            </div>

            <div className="dashboard-card">
              <h2>92%</h2>

              <p>Profile Completion</p>
            </div>
          </div>

          {/* Recent Activity */}

          <div className="dashboard-section">
            <h2>Recent Activity</h2>

            <ul className="activity-list">
              <li>✅ Applied for Frontend Developer at Google</li>

              <li>❤️ Saved React Developer at Microsoft</li>

              <li>📄 Resume updated successfully</li>

              <li>🎉 Profile reached 92% completion</li>
            </ul>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;
