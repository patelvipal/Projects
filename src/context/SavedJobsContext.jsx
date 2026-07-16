import { createContext, useContext, useState } from "react";

const SavedJobsContext = createContext();

export const SavedJobsProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState([]);

  // Save Job
  const saveJob = (job) => {
    const alreadySaved = savedJobs.find((item) => item.id === job.id);

    if (!alreadySaved) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  // Remove Job
  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  // Check Saved
  const isSaved = (id) => {
    return savedJobs.some((job) => job.id === id);
  };

  return (
    <SavedJobsContext.Provider
      value={{
        savedJobs,
        saveJob,
        removeJob,
        isSaved,
      }}
    >
      {children}
    </SavedJobsContext.Provider>
  );
};

export const useSavedJobs = () => {
  return useContext(SavedJobsContext);
};
