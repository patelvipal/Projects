import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

import {
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaBook,
  FaUserCircle,
  FaBriefcase,
  FaChevronDown,
} from "react-icons/fa";

import { useSavedJobs } from "../../context/SavedJobsContext";
import { useSavedCourses } from "../../context/SavedCoursesContext";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { savedJobs } = useSavedJobs();
  const { savedCourses } = useSavedCourses();

  const { searchTerm, setSearchTerm } = useSearch();
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}

        <Link to="/" className="logo">
          <FaBriefcase className="logo-icon" />
          <span>SkillBridge</span>
        </Link>

        {/* Search */}

        <div className="nav-search">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search jobs, courses, companies..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log("Navbar:", e.target.value);
            }}
          />
        </div>

        {/* Mobile Button */}

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}

        <div className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/jobs" onClick={() => setMenuOpen(false)}>
            Jobs
          </NavLink>

          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </NavLink>

          <NavLink to="/companies" onClick={() => setMenuOpen(false)}>
            Companies
          </NavLink>

          {/* Saved Jobs */}

          <Link to="/saved-jobs" className="icon-link">
            <FaHeart />

            <span className="badge">{savedJobs.length}</span>
          </Link>

          {/* Saved Courses */}

          <Link to="/saved-courses" className="icon-link">
            <FaBook />

            <span className="badge">{savedCourses.length}</span>
          </Link>

          {/* Profile */}

          <div className="profile-menu">
            <button
              className="profile-btn"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <FaUserCircle className="profile-icon" />

              <span>Profile</span>

              <FaChevronDown className={profileOpen ? "rotate" : ""} />
            </button>

            {profileOpen && (
              <div className="dropdown">
                <Link
                  to="/profile"
                  onClick={() => {
                    setProfileOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  My Profile
                </Link>

                <Link
                  to="/applied-jobs"
                  onClick={() => {
                    setProfileOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Applied Jobs
                </Link>

                <Link
                  to="/saved-jobs"
                  onClick={() => {
                    setProfileOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Saved Jobs
                </Link>

                <Link
                  to="/enrolled-courses"
                  onClick={() => {
                    setProfileOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Enrolled Courses
                </Link>

                <Link
                  to="/saved-courses"
                  onClick={() => {
                    setProfileOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Saved Courses
                </Link>

                <Link
                  to="/my-webinars"
                  onClick={() => {
                    setProfileOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  My Webinars
                </Link>

                <Link
                  to="/edit-profile"
                  onClick={() => {
                    setProfileOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Edit Profile
                </Link>

                <Link
                  to="/login"
                  onClick={() => {
                    setProfileOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/register"
            className="register-btn"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
