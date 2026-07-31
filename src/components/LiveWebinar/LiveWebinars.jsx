import { useState } from "react";
import webinarData from "../../data/webinarData";
import WebinarCard from "../WebinarCard/WebinarCard";
import "./LiveWebinars.css";

function LiveWebinars() {
  const [showAll, setShowAll] = useState(false);

  const displayedWebinars = showAll ? webinarData : webinarData.slice(0, 3);

  return (
    <section className="live-webinars">
      <div className="live-webinars-container">
        {/* Header */}

        <div className="live-webinars-header">
          <div>
            <h2>🎥 Live Webinars</h2>

            <p>
              Learn directly from industry experts and boost your career with
              live interactive sessions.
            </p>
          </div>

          <button
            className="view-all-webinars-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "View All Webinars →"}
          </button>
        </div>

        {/* Webinar Cards */}

        <div className="webinars-grid">
          {displayedWebinars.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LiveWebinars;
