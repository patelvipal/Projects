import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}

        <div className="footer-column">
          <h2 className="footer-logo">SkillBridge</h2>

          <p>
            Your one-stop platform for finding jobs, learning new skills, and
            building a successful career.
          </p>

          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="https://www.instagram.com/skillbridge_hub/">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/jobs">Jobs</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/companies">Companies</Link>

          <Link to="/profile">Profile</Link>
        </div>

        {/* Resources */}

        <div className="footer-column">
          <h3>Resources</h3>

          <a href="#">Career Tips</a>

          <a href="#">Interview Prep</a>

          <a href="#">Resume Builder</a>

          <a href="#">Help Center</a>

          <a href="#">Contact Us</a>
        </div>

        {/* Newsletter */}

        <div className="footer-column">
          <h3>Newsletter</h3>

          <p>Subscribe to receive the latest jobs and courses.</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />

            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        <p>© 2026 SkillBridge. All Rights Reserved.</p>

        <button
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
