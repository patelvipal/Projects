import "./HowItWorks.css";
import howItWorksData from "../../data/howItWorksData";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-heading">
        <h2>How SkillBridge Works</h2>
        <p>Find your dream job in just three simple steps.</p>
      </div>

      <div className="how-it-works-container">
        {howItWorksData.map((step) => {
          const Icon = step.icon;

          return (
            <div className="how-card" key={step.id}>
              <div className="how-icon">
                <Icon />
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;
