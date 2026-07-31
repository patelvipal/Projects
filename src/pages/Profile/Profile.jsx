import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaEdit,
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfileCompletion from "../../components/ProfileCompletion/ProfileCompletion";
import ResumeUpload from "../../components/ResumeUpload/ResumeUpload";

import { useProfile } from "../../context/ProfileContext";

import "./Profile.css";

function Profile() {
  const { profile } = useProfile();

  return (
    <>
      <Navbar />

      <section className="profile-page">
        <div className="profile-container">
          {/* Header */}

          <div className="profile-header">
            <div className="profile-image">
              <img src={profile.profileImage} alt={profile.fullName} />
            </div>

            <div className="profile-info">
              <h1>{profile.fullName}</h1>

              <h3>{profile.title}</h3>

              <p>{profile.about}</p>

              <Link to="/edit-profile" className="edit-profile-btn">
                <FaEdit />
                Edit Profile
              </Link>
            </div>
          </div>

          {/* ===============================
              PROFILE COMPLETION
          =============================== */}

          <ProfileCompletion />

          {/* Personal Information */}

          <div className="profile-card">
            <h2>Personal Information</h2>

            <div className="profile-grid">
              <div>
                <FaUser />
                <span>{profile.fullName}</span>
              </div>

              <div>
                <FaEnvelope />
                <span>{profile.email}</span>
              </div>

              <div>
                <FaPhone />
                <span>{profile.phone}</span>
              </div>

              <div>
                <FaMapMarkerAlt />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* About */}

          <div className="profile-card">
            <h2>About Me</h2>

            <p>{profile.about}</p>
          </div>

          {/* Skills */}

          <div className="profile-card">
            <h2>
              <FaCode />
              Skills
            </h2>

            <div className="skills-list">
              {profile.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Education */}

          <div className="profile-card">
            <h2>
              <FaGraduationCap />
              Education
            </h2>

            <div className="education-item">
              <h3>{profile.education}</h3>

              <p>Current Qualification</p>
            </div>
          </div>

          {/* Resume */}

          <div className="profile-card">
            <h2>
              <ResumeUpload />
            </h2>

            <div className="resume-box">
              <p>{profile.resume ? profile.resume : "No Resume Uploaded"}</p>

              <div className="resume-buttons"></div>
            </div>
          </div>

          {/* Social Links */}

          <div className="profile-card">
            <h2>Social Links</h2>

            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub />
                GitHub
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;
