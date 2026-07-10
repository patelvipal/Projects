import React from "react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Rahul Patel",
    role: "MERN Developer",
    image: "https://i.pravatar.cc/100?img=12",
    text: "SkillBridge helped me improve my skills and find better career opportunities.",
  },

  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/100?img=47",
    text: "The courses and job updates are very useful for beginners.",
  },

  {
    name: "Karan Ahuja",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/100?img=33",
    text: "Great platform to learn technology and prepare for interviews.",
  },

  {
    name: "Neha Singh",
    role: "UI UX Designer",
    image: "https://i.pravatar.cc/100?img=44",
    text: "The learning experience is simple and user friendly.",
  },
];

function Testimonials() {
  return (
    <section className="ts-section">
      <div className="ts-heading">
        <h2>What Our Students Say</h2>

        <p>Real experiences from our learners</p>
      </div>

      <div className="ts-slider">
        {reviews.map((item, index) => (
          <div className="ts-card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <span>{item.role}</span>

            <div className="ts-rating">⭐⭐⭐⭐⭐</div>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
