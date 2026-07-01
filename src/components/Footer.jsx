import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="sf-footer">
      <div className="sf-container">
        {/* Brand */}
        <div className="sf-brand">
          <h2 className="sf-logo">SkillBridge</h2>

          <p className="sf-description">
            Learn skills, discover jobs, and build your career with India's
            growing learning and hiring platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sf-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="sf-links">
          <h3>Resources</h3>

          <ul>
            <li>
              <a href="#">Career Guide</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Webinars</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="sf-contact">
          <h3>Contact</h3>

          <p>📧 support@skillbridge.com</p>
          <p>📞 +91 12345 67890</p>
          <p>📍 Surat, Gujarat</p>
        </div>
      </div>

      <div className="sf-bottom">
        <p>© 2026 SkillBridge. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
