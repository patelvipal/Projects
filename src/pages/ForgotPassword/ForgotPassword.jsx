import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <section className="forgot-page">
      <div className="forgot-container">
        {/* Left Side */}

        <div className="forgot-left">
          <h1>Forgot Password? 🔐</h1>

          <p>
            Don't worry! Enter your registered email address and we'll send you
            a password reset link.
          </p>

          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=900"
            alt="Forgot Password"
          />
        </div>

        {/* Right Side */}

        <div className="forgot-right">
          <h2>Reset Password</h2>

          <p className="forgot-subtitle">
            Enter your email to receive a password reset link.
          </p>

          <form>
            <div className="input-group">
              <FaEnvelope className="input-icon" />

              <input type="email" placeholder="Enter your email" />
            </div>

            <button type="submit" className="forgot-btn">
              Send Reset Link
            </button>
          </form>

          <p className="back-login">
            Remember your password?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
