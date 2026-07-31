import { useState } from "react";
import coursesData from "../../data/coursesData";
import CourseCard from "../CourseCard/CourseCard";
import "./FeaturedCourses.css";

function FeaturedCourses() {
  const [showAll, setShowAll] = useState(false);

  const displayedCourses = showAll ? coursesData : coursesData.slice(0, 4);

  return (
    <section className="featured-courses">
      <div className="featured-courses-container">
        <div className="featured-courses-header">
          <div>
            <h2>📚 Popular Courses</h2>

            <p>
              Learn in-demand skills from industry experts and accelerate your
              career.
            </p>
          </div>

          <button
            className="view-all-courses-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "View All Courses →"}
          </button>
        </div>

        <div className="courses-grid">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
