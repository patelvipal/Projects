import React from "react";
import "./FeaturedCourses.css";

const courses = [
  {
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    title: "MERN Stack Development",
    rating: "4.8",
    duration: "6 Months",
    level: "Beginner to Advanced",
  },

  {
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    title: "React JS Development",
    rating: "4.7",
    duration: "4 Months",
    level: "Intermediate",
  },

  {
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    title: "Full Stack Development",
    rating: "4.9",
    duration: "8 Months",
    level: "Advanced",
  },

  {
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    title: "Java Programming",
    rating: "4.6",
    duration: "5 Months",
    level: "Beginner",
  },

  {
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    title: "Python Development",
    rating: "4.8",
    duration: "5 Months",
    level: "Beginner",
  },

  {
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    title: "Data Science",
    rating: "4.9",
    duration: "9 Months",
    level: "Advanced",
  },

  {
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    title: "UI UX Design",
    rating: "4.7",
    duration: "3 Months",
    level: "Beginner",
  },

  {
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    title: "Digital Marketing",
    rating: "4.5",
    duration: "4 Months",
    level: "Intermediate",
  },
];

function FeaturedCourses() {
  return (
    <section className="fc-section">
      <div className="fc-header">
        <div>
          <h2 className="fc-title">Popular Courses</h2>

          <p className="fc-subtitle">Learn skills and become job ready</p>
        </div>

        <button className="fc-view-btn">View All Courses →</button>
      </div>

      <div className="fc-slider">
        {courses.map((course, index) => (
          <div className="fc-card" key={index}>
            <img className="fc-image" src={course.image} alt={course.title} />

            <div className="fc-content">
              <h3>{course.title}</h3>

              <p className="fc-rating">⭐ {course.rating}</p>

              <div className="fc-details">
                <span>⏱ {course.duration}</span>

                <span>📈 {course.level}</span>
              </div>

              <button className="fc-action-btn">Start Learning</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCourses;
