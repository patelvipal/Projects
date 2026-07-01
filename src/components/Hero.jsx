import "./Hero.css";

function Hero() {
  return (
    <section className="heroPro-section">
      <div className="heroPro-content">
        <h1 className="heroPro-title">Build Your Career With SkillBridge</h1>

        <p className="heroPro-description">
          Find jobs, learn skills and connect with top companies.
        </p>

        <div className="heroPro-buttons">
          <button className="heroPro-google">🔵 Continue with Google</button>

          <button className="heroPro-email">✉ Register with Email</button>
        </div>

        <div className="heroPro-stats">
          <div className="heroPro-stat">
            <h3>1000+</h3>

            <p>Jobs</p>
          </div>

          <div className="heroPro-stat">
            <h3>500+</h3>

            <p>Courses</p>
          </div>

          <div className="heroPro-stat">
            <h3>100+</h3>

            <p>Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
