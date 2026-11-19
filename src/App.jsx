import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import SavedJobs from "./pages/SavedJobs/SavedJobs";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";

import Admin from "./pages/Admin/Admin";
import AdminLogin from "./pages/AdminLogin/AdminLogin";

import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import SavedCourses from "./pages/SavedCourses/SavedCourses";
import EditProfile from "./pages/EditProfile/EditProfile";
import CompanyDetails from "./pages/CompanyDetails/CompanyDetails";
import Companies from "./pages/Companies/Companies";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import MyWebinars from "./pages/MyWebinars/MyWebinars";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import EnrolledCourses from "./pages/EnrolledCourses/EnrolledCourses";

import NotFound from "./pages/NotFound/NotFound";

function App() {
  const isAdminLoggedIn = Boolean(localStorage.getItem("adminToken"));

  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Admin Routes */}
      <Route
        path="/admin-login"
        element={
          isAdminLoggedIn ? <Navigate to="/admin" replace /> : <AdminLogin />
        }
      />

      <Route
        path="/admin"
        element={
          isAdminLoggedIn ? <Admin /> : <Navigate to="/admin-login" replace />
        }
      />

      {/* Job Routes */}
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/saved-jobs" element={<SavedJobs />} />
      <Route path="/applied-jobs" element={<AppliedJobs />} />

      {/* Company Routes */}
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:id" element={<CompanyDetails />} />

      {/* Course Routes */}
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/saved-courses" element={<SavedCourses />} />

      {/* User Routes */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/edit-profile" element={<EditProfile />} />

      {/* Other Routes */}
      <Route path="/my-webinars" element={<MyWebinars />} />
      <Route path="/enrolled-courses" element={<EnrolledCourses />} />

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
