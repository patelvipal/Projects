import { createContext, useContext, useEffect, useState } from "react";

const SavedJobsContext = createContext();

export const SavedJobsProvider = ({ children }) => {
  // Load saved jobs from Local Storage
  const [savedJobs, setSavedJobs] = useState(() => {
    const storedJobs = localStorage.getItem("savedJobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  // Save to Local Storage whenever savedJobs changes
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  // Save Job
  const saveJob = (job) => {
    const alreadySaved = savedJobs.some((item) => item.id === job.id);

    if (!alreadySaved) {
      setSavedJobs((prev) => [...prev, job]);
    }
  };

  // Remove Job
  const removeJob = (id) => {
    setSavedJobs((prev) => prev.filter((job) => job.id !== id));
  };

  // Toggle Save / Unsave
  const toggleSaveJob = (job) => {
    if (isSaved(job.id)) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
  };

  // Check if Job is Saved
  const isSaved = (id) => {
    return savedJobs.some((job) => job.id === id);
  };

  return (
    <SavedJobsContext.Provider
      value={{
        savedJobs,
        saveJob,
        removeJob,
        toggleSaveJob,  
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
