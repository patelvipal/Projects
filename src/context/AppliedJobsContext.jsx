import { createContext, useContext, useEffect, useState } from "react";

const AppliedJobsContext = createContext();

export const AppliedJobsProvider = ({ children }) => {
  // Load Applied Jobs from Local Storage
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const storedJobs = localStorage.getItem("appliedJobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  // Save Applied Jobs to Local Storage
  useEffect(() => {
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  // Apply Job
  const applyJob = (job) => {
    const alreadyApplied = appliedJobs.some((item) => item.id === job.id);

    if (!alreadyApplied) {
      setAppliedJobs((prev) => [...prev, job]);
    }
  };

  // Remove Applied Job
  const removeAppliedJob = (id) => {
    setAppliedJobs((prev) => prev.filter((job) => job.id !== id));
  };

  // Check Applied
  const isApplied = (id) => {
    return appliedJobs.some((job) => job.id === id);
  };

  return (
    <AppliedJobsContext.Provider
      value={{
        appliedJobs,
        applyJob,
        removeAppliedJob,
        isApplied,
      }}
    >
      {children}
    </AppliedJobsContext.Provider>
  );
};

export const useAppliedJobs = () => {
  return useContext(AppliedJobsContext);
};
