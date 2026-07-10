import React from "react";
import "./LiveWebinars.css";

const webinars = [
  {
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    title: "React Interview Preparation",
    speaker: "Expert Developer",
    time: "Today • 7:00 PM",
    students: "1200+ Students",
  },

  {
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    title: "Build Your Resume Workshop",
    speaker: "Career Mentor",
    time: "Tomorrow • 5:00 PM",
    students: "800+ Students",
  },

  {
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    title: "MERN Stack Roadmap",
    speaker: "Full Stack Developer",
    time: "Friday • 8:00 PM",
    students: "950+ Students",
  },

  {
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    title: "Crack Your First Job",
    speaker: "Placement Expert",
    time: "Sunday • 6:00 PM",
    students: "1500+ Students",
  },
];

function LiveWebinars() {
  return (
    <section className="lw-section">
      <div className="lw-header">
        <div>
          <h2>Live Webinars</h2>

          <p>Learn from industry experts</p>
        </div>

        <button className="lw-view-btn">View All →</button>
      </div>

      <div className="lw-container">
        {webinars.map((item, index) => (
          <div className="lw-card" key={index}>
            <div className="lw-image-box">
              <img src={item.image} alt={item.title} />

              <span className="lw-live-badge">🔴 LIVE</span>
            </div>

            <div className="lw-content">
              <h3>{item.title}</h3>

              <p>👨‍💻 {item.speaker}</p>

              <p>⏰ {item.time}</p>

              <p>👥 {item.students}</p>

              <button className="lw-join-btn">Join Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LiveWebinars;
