import { useState, useEffect } from "react";
import { useSearch } from "../../context/SearchContext";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import JobCard from "../../components/JobCard/JobCard";

import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";

import "./Jobs.css";

const API_URL = "http://localhost:2000/api/jobs";

function Jobs() {
  const { searchTerm } = useSearch();

  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 6;

  // Fetch jobs from backend
  useEffect(() => {
    const controller = new AbortController();

    async function fetchJobs() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const result = await response.json();

        const jobs = Array.isArray(result)
          ? result
          : result.jobs || result.data || [];

        if (!Array.isArray(jobs)) {
          throw new Error("Invalid jobs data received from API.");
        }

        // Normalize MongoDB fields for the existing JobCard and filters
        const normalizedJobs = jobs.map((job) => ({
          ...job,
          id: job.id || job._id,
          title: String(job.title || ""),
          company: String(job.company || ""),
          location: String(job.location || ""),
          salary: String(job.salary ?? ""),
          category: String(job.category || "Other"),
          jobType: String(job.jobType || "Full-time"),
          description: String(job.description || ""),
          experience: String(job.experience || ""),
          skills: Array.isArray(job.skills) ? job.skills : [],
        }));

        setJobsData(normalizedJobs);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to load jobs.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchJobs();

    return () => controller.abort();
  }, []);

  // Search and filters
  const normalizedSearch = String(searchTerm || "").toLowerCase();

  const filteredJobs = jobsData.filter((job) => {
    const searchableFields = [
      job.title,
      job.company,
      job.category,
      job.location,
      job.jobType,
      job.description,
      job.experience,
      job.salary,
      ...job.skills,
    ];

    const matchesSearch = searchableFields.some((field) =>
      String(field).toLowerCase().includes(normalizedSearch),
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

  // Reset pagination when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedLocation, selectedJobType]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

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
            <h2>
              {loading
                ? "Loading jobs..."
                : error
                  ? "Unable to load jobs"
                  : `${filteredJobs.length} Jobs Found`}
            </h2>

            {loading ? (
              <p>Loading jobs from server...</p>
            ) : error ? (
              <div>
                <p role="alert">{error}</p>
                <p>Check that your backend server is running on port 2000.</p>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Jobs;
