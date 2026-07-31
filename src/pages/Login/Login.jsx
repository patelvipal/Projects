import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

function Login() {
  return (
    <section className="login-page">
      <div className="login-container">
        {/* Left Side */}

        <div className="login-left">
          <h1>Welcome Back 👋</h1>

          <p>
            Login to your SkillBridge account and continue your career journey.
          </p>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
            alt="Login"
          />
        </div>

        {/* Right Side */}

        <div className="login-right">
          <h2>Login</h2>

          <form>
            {/* Email */}

            <div className="input-group">
              <FaEnvelope className="input-icon" />

              <input type="email" placeholder="Enter your email" />
            </div>

            {/* Password */}

            <div className="input-group">
              <FaLock className="input-icon" />

              <input type="password" placeholder="Enter your password" />
            </div>

            {/* Options */}

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            {/* Button */}

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          {/* Register */}

          <p className="register-text">
            Don't have an account?
            <Link to="/register">Register Now</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
