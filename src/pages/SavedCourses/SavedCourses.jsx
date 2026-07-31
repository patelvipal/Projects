import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useSavedCourses } from "../../context/SavedCoursesContext";
import "./SavedCourses.css";

function SavedCourses() {
  const { savedCourses, removeCourse } = useSavedCourses();

  return (
    <>
      <Navbar />

      <section className="saved-courses-page">
        <div className="saved-courses-header">
          <h1>❤️ Saved Courses</h1>
          <p>Your favourite courses are stored here.</p>
        </div>

        {savedCourses.length === 0 ? (
          <div className="empty-state">
            <h2>No Saved Courses</h2>

            <p>Save courses to view them later.</p>

            <Link to="/courses" className="browse-btn">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="saved-courses-grid">
            {savedCourses.map((course) => (
              <div className="saved-course-card" key={course.id}>
                <img src={course.image} alt={course.title} />

                <h2>{course.title}</h2>

                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>

                <p>
                  <strong>Category:</strong> {course.category}
                </p>

                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>

                <p>
                  <strong>Price:</strong> {course.price}
                </p>

                <div className="saved-course-actions">
                  <Link to={`/courses/${course.id}`} className="details-btn">
                    View Details
                  </Link>

                  <button
                    className="remove-btn"
                    onClick={() => removeCourse(course.id)}
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

export default SavedCourses;
