import { createContext, useContext, useEffect, useState } from "react";

const EnrolledCoursesContext = createContext();

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const storedCourses = localStorage.getItem("enrolledCourses");
    return storedCourses ? JSON.parse(storedCourses) : [];
  });

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  // Enroll Course
  const enrollCourse = (course) => {
    const alreadyEnrolled = enrolledCourses.find(
      (item) => item.id === course.id,
    );

    if (!alreadyEnrolled) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  // Remove Course
  const removeEnrolledCourse = (id) => {
    setEnrolledCourses(enrolledCourses.filter((course) => course.id !== id));
  };

  // Check Enrolled
  const isEnrolled = (id) => {
    return enrolledCourses.some((course) => course.id === id);
  };

  return (
    <EnrolledCoursesContext.Provider
      value={{
        enrolledCourses,
        enrollCourse,
        removeEnrolledCourse,
        isEnrolled,
      }}
    >
      {children}
    </EnrolledCoursesContext.Provider>
  );
};

export const useEnrolledCourses = () => {
  return useContext(EnrolledCoursesContext);
};
