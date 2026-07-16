import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Courses from "./pages/Courses/Courses";
import Companies from "./pages/Companies/Companies";
import JobDetails from "./pages/JobDetails/JobDetails";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import SavedJobs from "./pages/SavedJobs/SavedJobs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/saved-jobs" element={<SavedJobs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
