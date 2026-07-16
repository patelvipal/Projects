import { createContext, useContext, useState } from "react";

const AppliedJobsContext = createContext();

export const AppliedJobsProvider = ({ children }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Apply Job
  const applyJob = (job) => {
    const alreadyApplied = appliedJobs.find((item) => item.id === job.id);

    if (!alreadyApplied) {
      setAppliedJobs([...appliedJobs, job]);
    }
  };

  // Remove Applied Job
  const removeAppliedJob = (id) => {
    setAppliedJobs(appliedJobs.filter((job) => job.id !== id));
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
