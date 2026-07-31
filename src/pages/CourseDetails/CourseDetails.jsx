import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import coursesData from "../../data/coursesData";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();

  const course = coursesData.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <>
        <Navbar />

        <div className="course-not-found">
          <h1>Course Not Found</h1>

          <Link to="/courses" className="back-btn">
            Back to Courses
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="course-details-page">
        <div className="course-details-card">
          <img
            src={course.image}
            alt={course.title}
            className="course-banner"
          />

          <div className="course-info">
            <h1>{course.title}</h1>

            <h3>👨‍🏫 {course.instructor}</h3>

            <div className="course-meta">
              <span>⭐ {course.rating}</span>
              <span>👨‍🎓 {course.students} Students</span>
            </div>

            <div className="course-meta">
              <span>💰 {course.price}</span>
              <span>⏳ {course.duration}</span>
              <span>🎯 {course.level}</span>
            </div>

            <p>
              <strong>Category:</strong> {course.category}
            </p>
          </div>

          <div className="course-section">
            <h2>Description</h2>

            <p>{course.description}</p>
          </div>

          <div className="course-section">
            <h2>What You'll Learn</h2>

            <ul>
              {(course.learning || []).map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div className="course-section">
            <h2>This Course Includes</h2>

            <ul>
              {(course.includes || []).map((item, index) => (
                <li key={index}>📦 {item}</li>
              ))}
            </ul>
          </div>

          <div className="course-buttons">
            <button className="enroll-btn">Enroll Now</button>

            <Link to="/courses" className="back-btn">
              Back to Courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CourseDetails;
