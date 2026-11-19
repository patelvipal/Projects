import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const API_URL = "https://skillbridge-backend-e156.onrender.com/api/jobs";

function Admin() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("success");

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    category: "Frontend Development",
    jobType: "Full-time",
    experience: "Fresher",
    skills: "",
  });

  // Dashboard Statistics
  const totalJobs = jobs.length;

  const totalCompanies = new Set(
    jobs.map((job) => job.company?.trim()).filter(Boolean),
  ).size;

  const totalCategories = new Set(
    jobs.map((job) => job.category?.trim()).filter(Boolean),
  ).size;

  const recentJobs = [...jobs]
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, 4);

  // Toast Notification
  const showToast = (text, type = "success") => {
    setToast(text);
    setToastType(type);

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  // Handle Unauthorized Access
  const handleUnauthorized = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");

    showToast("Session expired. Please login again.", "error");

    navigate("/admin-login", { replace: true });
  };

  // Get Admin Token
  const getAdminToken = () => {
    return localStorage.getItem("adminToken");
  };

  // Reset Form
  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);

    setFormData({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
      category: "Frontend Development",
      jobType: "Full-time",
      experience: "Fresher",
      skills: "",
    });
  };

  // Fetch All Jobs
  const fetchJobs = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const data = await response.json();

      setJobs(Array.isArray(data) ? data : data.jobs || data.data || []);
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");

    resetForm();

    navigate("/admin-login", { replace: true });
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Edit Existing Job
  const handleEdit = (job) => {
    setIsEditing(true);
    setEditingId(job._id || job.id);

    setFormData({
      title: job.title || "",
      company: job.company || "",
      location: job.location || "",
      salary: job.salary || "",
      description: job.description || "",
      category: job.category || "Frontend Development",
      jobType: job.jobType || "Full-time",
      experience: job.experience || "Fresher",
      skills: Array.isArray(job.skills)
        ? job.skills.join(", ")
        : job.skills || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add or Update Job
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = getAdminToken();

    if (!token) {
      handleUnauthorized();
      return;
    }

    try {
      const url = isEditing ? `${API_URL}/${editingId}` : API_URL;

      const response = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),
        }),
      });

      const result = await response.json();

      if (response.status === 401 || response.status === 403) {
        handleUnauthorized();
        return;
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to save job");
      }

      showToast(
        isEditing ? "Job updated successfully!" : "Job added successfully!",
        "success",
      );

      resetForm();
      fetchJobs();
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  // Delete Job
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) {
      return;
    }

    const token = getAdminToken();

    if (!token) {
      handleUnauthorized();
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (response.status === 401 || response.status === 403) {
        handleUnauthorized();
        return;
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete job");
      }

      showToast("Job deleted successfully!", "success");

      if (editingId === id) {
        resetForm();
      }

      fetchJobs();
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return (
    <div className="admin-page">
      {/* Toast Notification */}
      {toast && (
        <div className={`toast-notification ${toastType}`}>
          <span className="toast-icon">
            {toastType === "success" ? "✓" : "✕"}
          </span>

          <span>{toast}</span>

          <button className="toast-close" onClick={() => setToast("")}>
            ×
          </button>
        </div>
      )}

      {/* Dashboard Header */}
      <div className="admin-dashboard-header">
        <div>
          <h1>SkillBridge Admin Dashboard</h1>
          <p>Welcome to your job management dashboard.</p>
        </div>

        <button
          type="button"
          className="admin-logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Dashboard Statistics */}
      <section className="admin-stats">
        <div className="admin-stat-card">
          <div className="stat-icon jobs-icon">J</div>
          <div>
            <h3>Total Jobs</h3>
            <h2>{totalJobs}</h2>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon companies-icon">C</div>
          <div>
            <h3>Total Companies</h3>
            <h2>{totalCompanies}</h2>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon categories-icon">C</div>
          <div>
            <h3>Total Categories</h3>
            <h2>{totalCategories}</h2>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon recent-icon">R</div>
          <div>
            <h3>Recent Jobs</h3>
            <h2>{recentJobs.length}</h2>
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="admin-recent-section">
        <h2>Recent Job Listings</h2>

        {loading ? (
          <p>Loading recent jobs...</p>
        ) : recentJobs.length === 0 ? (
          <p>No recent jobs available.</p>
        ) : (
          recentJobs.map((job) => (
            <div className="admin-recent-card" key={job._id || job.id}>
              <div>
                <h3>{job.title}</h3>
                <p>
                  {job.company} — {job.location}
                </p>
              </div>

              <span>{job.category}</span>
            </div>
          ))
        )}
      </section>

      {/* Add / Edit Job Form */}
      <section className="admin-form-section">
        <h2>{isEditing ? "Edit Job" : "Add New Job"}</h2>

        <form onSubmit={handleSubmit} className="admin-form">
          <input
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            name="jobType"
            placeholder="Job Type"
            value={formData.jobType}
            onChange={handleChange}
            required
          />

          <input
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />

          <input
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button type="submit">{isEditing ? "Update Job" : "Add Job"}</button>

          {isEditing && (
            <button
              type="button"
              className="cancel-edit-btn"
              onClick={resetForm}
            >
              Cancel Edit
            </button>
          )}
        </form>
      </section>

      {/* Manage Jobs */}
      <section className="admin-jobs-section">
        <h2>Manage Jobs ({jobs.length})</h2>

        {loading ? (
          <p>Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p>No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div className="admin-job-card" key={job._id || job.id}>
              <div>
                <h3>{job.title}</h3>

                <p>
                  {job.company} — {job.location}
                </p>

                <p>
                  {job.category} | {job.jobType}
                </p>
              </div>

              <div className="admin-actions">
                <button className="edit-btn" onClick={() => handleEdit(job)}>
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(job._id || job.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Admin;
