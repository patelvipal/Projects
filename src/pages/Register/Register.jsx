import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

import "./Register.css";

function Register() {
  return (
    <section className="register-page">
      <div className="register-container">
        {/* Left */}

        <div className="register-left">
          <h1>Join SkillBridge 🚀</h1>

          <p>
            Create your free account and discover thousands of jobs, companies,
            and courses.
          </p>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Register"
          />
        </div>

        {/* Right */}

        <div className="register-right">
          <h2>Create Account</h2>

          <form>
            <div className="input-group">
              <FaUser className="input-icon" />

              <input type="text" placeholder="Full Name" />
            </div>

            <div className="input-group">
              <FaEnvelope className="input-icon" />

              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-group">
              <FaPhone className="input-icon" />

              <input type="tel" placeholder="Mobile Number" />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />

              <input type="password" placeholder="Password" />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />

              <input type="password" placeholder="Confirm Password" />
            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>
          </form>

          <p className="login-text">
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
