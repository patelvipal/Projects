import { createContext, useContext, useEffect, useState } from "react";

const SavedCoursesContext = createContext();

export const SavedCoursesProvider = ({ children }) => {
  // Load from Local Storage
  const [savedCourses, setSavedCourses] = useState(() => {
    const storedCourses = localStorage.getItem("savedCourses");
    return storedCourses ? JSON.parse(storedCourses) : [];
  });

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem("savedCourses", JSON.stringify(savedCourses));
  }, [savedCourses]);

  // Toggle Save
  const toggleSaveCourse = (course) => {
    const alreadySaved = savedCourses.some((item) => item.id === course.id);

    if (alreadySaved) {
      setSavedCourses((prev) => prev.filter((item) => item.id !== course.id));
    } else {
      setSavedCourses((prev) => [...prev, course]);
    }
  };

  // Remove Course
  const removeCourse = (id) => {
    setSavedCourses((prev) => prev.filter((course) => course.id !== id));
  };

  // Check Saved
  const isSaved = (id) => {
    return savedCourses.some((course) => course.id === id);
  };

  return (
    <SavedCoursesContext.Provider
      value={{
        savedCourses,
        toggleSaveCourse,
        removeCourse,
        isSaved,
      }}
    >
      {children}
    </SavedCoursesContext.Provider>
  );
};

export const useSavedCourses = () => {
  return useContext(SavedCoursesContext);
};
