import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseCard from "../../components/CourseCard/CourseCard";
import coursesData from "../../data/coursesData";

import "./Courses.css";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="courses-page">
        <div className="courses-header">
          <h1>Upgrade Your Skills</h1>

          <p>Learn from industry experts and accelerate your career.</p>
        </div>

        {/* Search */}

        <div className="courses-search">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="courses-container">
          {/* Sidebar */}

          <aside className="courses-sidebar">
            <h3>Categories</h3>

            <div className="filter-group">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Programming">Programming</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Design">Design</option>
                <option value="Cloud">Cloud</option>
                <option value="DevOps">DevOps</option>
                <option value="Database">Database</option>
                <option value="Mobile">Mobile</option>
                <option value="Data Science">Data Science</option>
              </select>
            </div>
          </aside>

          {/* Courses */}

          <div className="courses-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="no-courses">
                <h2>No Courses Found</h2>

                <p>Try changing your search or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Courses;
