import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar-container">
      <div className="searchbar-box">
        <FaSearch className="jobs-search-icon" />

        <input
          type="text"
          placeholder="Search jobs by title, company, or skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
