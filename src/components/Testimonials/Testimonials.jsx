import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useState } from "react";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer @ Infosys",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    review:
      "SkillBridge helped me land my first React Developer job. The platform is easy to use and the job recommendations were excellent.",
  },

  {
    id: 2,
    name: "Priya Patel",
    role: "UI/UX Designer @ TCS",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "The courses and interview preparation resources are amazing. I got hired within two months of joining SkillBridge.",
  },

  {
    id: 3,
    name: "Amit Verma",
    role: "Backend Developer @ Amazon",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "The clean interface, verified companies, and quick application process make SkillBridge one of the best career platforms.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>💬 What Our Users Say</h2>

          <p>Thousands of learners and job seekers trust SkillBridge.</p>
        </div>

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />

          <div className="testimonial-avatar">
            <img src={reviews[current].image} alt={reviews[current].name} />
          </div>

          <div className="testimonial-stars">
            {[...Array(reviews[current].rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="testimonial-review">"{reviews[current].review}"</p>

          <h3>{reviews[current].name}</h3>

          <span>{reviews[current].role}</span>

          <div className="testimonial-buttons">
            <button onClick={prevSlide}>
              <FaChevronLeft />
            </button>

            <button onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
