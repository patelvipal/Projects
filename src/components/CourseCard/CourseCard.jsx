import { Link } from "react-router-dom";
import { useState } from "react";
import { FaStar, FaUserGraduate, FaHeart } from "react-icons/fa";

import { useSavedCourses } from "../../context/SavedCoursesContext";
import { useEnrolledCourses } from "../../context/EnrolledCoursesContext";

import EnrollModal from "../EnrollModal/EnrollModal";
import SuccessModal from "../SuccessModal/SuccessModal";

import "./CourseCard.css";

function CourseCard({ course }) {
  const { toggleSaveCourse, isSaved } = useSavedCourses();

  const { enrollCourse, isEnrolled } = useEnrolledCourses();

  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleOpenModal = () => {
    if (!isEnrolled(course.id)) {
      setShowEnrollModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowEnrollModal(false);
  };

  const handleConfirmEnroll = () => {
    enrollCourse(course);

    setShowEnrollModal(false);

    setTimeout(() => {
      setShowSuccessModal(true);
    }, 200);
  };

  return (
    <>
      <div className="course-card">
        {/* Image */}

        <div className="course-image-box">
          <img src={course.image} alt={course.title} />

          <button
            className={`save-course ${isSaved(course.id) ? "saved" : ""}`}
            onClick={() => toggleSaveCourse(course)}
          >
            ❤️
          </button>
        </div>

        {/* Content */}

        <div className="course-content">
          <h3>{course.title}</h3>

          <p className="course-instructor">👨 {course.instructor}</p>

          <div className="course-rating">
            <span>
              <FaStar /> {course.rating}
            </span>

            <span>
              <FaUserGraduate /> {course.students}
            </span>
          </div>

          <div className="course-info">
            <span>⏱ {course.duration}</span>

            <span>{course.level}</span>
          </div>

          <div className="course-price">{course.price}</div>

          <div className="course-buttons">
            <Link to={`/courses/${course.id}`} className="details-btn">
              Details
            </Link>

            <button
              className={`enroll-btn ${
                isEnrolled(course.id) ? "enrolled" : ""
              }`}
              onClick={handleOpenModal}
              disabled={isEnrolled(course.id)}
            >
              {isEnrolled(course.id) ? "Enrolled ✓" : "Enroll"}
            </button>
          </div>
        </div>
      </div>

      {/* Enroll Popup */}

      <EnrollModal
        isOpen={showEnrollModal}
        course={course}
        onClose={handleCloseModal}
        onConfirm={handleConfirmEnroll}
      />

      {/* Success Popup */}

      <SuccessModal
        isOpen={showSuccessModal}
        title="🎉 Enrollment Successful!"
        message="Congratulations! You have successfully enrolled in this course."
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}

export default CourseCard;
