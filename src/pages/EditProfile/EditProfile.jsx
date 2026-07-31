import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useProfile } from "../../context/ProfileContext";

import SuccessModal from "../../components/SuccessModal/SuccessModal";

import "./EditProfile.css";

function EditProfile() {
  const navigate = useNavigate();

  const { profile, updateProfile } = useProfile();

  const [formData, setFormData] = useState(profile);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "skills") {
      setFormData({
        ...formData,
        skills: value
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill !== ""),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile(formData);

    setShowSuccessModal(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);

    navigate("/profile");
  };

  return (
    <>
      <Navbar />

      <section className="edit-profile-page">
        <div className="edit-profile-container">
          <h1>Edit Profile</h1>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Job Title */}

            <div className="form-group">
              <label>Job Title</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Email */}

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}

            <div className="form-group">
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Location */}

            <div className="form-group">
              <label>Location</label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* About */}

            <div className="form-group">
              <label>About</label>

              <textarea
                rows="5"
                name="about"
                value={formData.about}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Education */}

            <div className="form-group">
              <label>Education</label>

              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>

            {/* Skills */}

            <div className="form-group">
              <label>Skills (Comma Separated)</label>

              <input
                type="text"
                name="skills"
                value={formData.skills.join(", ")}
                onChange={handleChange}
              />
            </div>

            {/* GitHub */}

            <div className="form-group">
              <label>GitHub URL</label>

              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
              />
            </div>

            {/* LinkedIn */}

            <div className="form-group">
              <label>LinkedIn URL</label>

              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            {/* Profile Image */}

            <div className="form-group">
              <label>Profile Image URL</label>

              <input
                type="text"
                name="profileImage"
                value={formData.profileImage}
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}

            <div className="button-group">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </button>

              <button type="submit" className="save-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Popup */}

      <SuccessModal
        isOpen={showSuccessModal}
        title="🎉 Profile Updated!"
        message="Your profile information has been updated successfully."
        onClose={handleCloseSuccess}
      />

      <Footer />
    </>
  );
}

export default EditProfile;
