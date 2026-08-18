import { useState, useEffect } from "react";
import { useSearch } from "../../context/SearchContext";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import JobCard from "../../components/JobCard/JobCard";

import jobsData from "../../data/JobsData";

import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";

import "./Jobs.css";

function Jobs() {
  // ==========================
  // STATES
  // ==========================

  const { searchTerm } = useSearch();
  console.log("Jobs Search:", searchTerm);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedLocation, setSelectedLocation] = useState("All");

  const [selectedJobType, setSelectedJobType] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 6;

  // ==========================
  // FILTER JOBS
  // ==========================

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.jobType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.salary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills?.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;

    const matchesLocation =
      selectedLocation === "All" || job.location === selectedLocation;

    const matchesJobType =
      selectedJobType === "All" || job.jobType === selectedJobType;

    return (
      matchesSearch && matchesCategory && matchesLocation && matchesJobType
    );
  });

  // ==========================
  // RESET PAGE WHEN FILTER CHANGES
  // ==========================

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedLocation, selectedJobType]);

  // ==========================
  // PAGINATION
  // ==========================

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const indexOfLastJob = currentPage * jobsPerPage;

  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // ==========================
  // UI
  // ==========================

  return (
    <>
      <Navbar />

      <div className="jobs-page">
        <div className="jobs-layout">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedJobType={selectedJobType}
            setSelectedJobType={setSelectedJobType}
          />

          <div className="jobs-content">
            <h2>{filteredJobs.length} Jobs Found</h2>

            <div className="jobs-grid">
              {currentJobs.length > 0 ? (
                currentJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <p className="no-jobs">No jobs found.</p>
              )}
            </div>

            {filteredJobs.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Jobs;
