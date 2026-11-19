import "./FilterSidebar.css";

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedJobType,
  setSelectedJobType,
}) {
  const categories = [
    "All",
    "Frontend Development",
    "Backend Development",
    "MERN Stack",
    "UI/UX Design",
    "Data Science",
    "Cyber Security",
  ];

  const locations = [
    "All",
    "Surat",
    "Ahmedabad",
    "Mumbai",
    "Pune",
    "Bangalore",
    "Hyderabad",
    "Delhi",
    "Remote",
  ];

  const jobTypes = [
    "All",
    "Full-time",
    "Internship",
    "Part-time",
    "Remote",
    "Hybrid",
  ];

  return (
    <aside className="filter-sidebar">
      <h2>Filters</h2>

      {/* Category */}

      <div className="filter-group">
        <h3>Category</h3>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Location */}

      <div className="filter-group">
        <h3>Location</h3>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Job Type */}

      <div className="filter-group">
        <h3>Job Type</h3>

        <select
          value={selectedJobType}
          onChange={(e) => setSelectedJobType(e.target.value)}
        >
          {jobTypes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </aside>
  );
}

export default FilterSidebar;
