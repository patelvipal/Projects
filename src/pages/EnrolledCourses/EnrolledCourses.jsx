import { Link } from "react-router-dom";
import { useEnrolledCourses } from "../../context/EnrolledCoursesContext";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./EnrolledCourses.css";

function EnrolledCourses() {
  const { enrolledCourses, removeEnrolledCourse } = useEnrolledCourses();

  return (
    <>
      <Navbar />

      <section className="enrolled-page">
        <div className="enrolled-header">
          <h1>🎓 Enrolled Courses</h1>

          <p>Your enrolled courses are listed below.</p>

          <div className="enrolled-count">
            Total Enrolled Courses: {enrolledCourses.length}
          </div>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="empty-state">
            <h2>No Enrolled Courses</h2>

            <p>Start learning by enrolling in a course.</p>

            <Link to="/courses" className="browse-btn">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="enrolled-grid">
            {enrolledCourses.map((course) => (
              <div className="enrolled-card" key={course.id}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />

                <h2>{course.title}</h2>

                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>

                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>

                <p>
                  <strong>Level:</strong> {course.level}
                </p>

                <p>
                  <strong>Price:</strong> {course.price}
                </p>

                <p className="status">
                  Status : <span>Enrolled ✅</span>
                </p>

                <div className="course-actions">
                  <Link to={`/courses/${course.id}`} className="details-btn">
                    View Details
                  </Link>

                  <button
                    className="remove-btn"
                    onClick={() => removeEnrolledCourse(course.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default EnrolledCourses;
