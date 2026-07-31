import { createContext, useContext, useEffect, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState(() => {
    return localStorage.getItem("resume") || "";
  });

  useEffect(() => {
    localStorage.setItem("resume", resume);
  }, [resume]);

  const uploadResume = (resumeUrl) => {
    setResume(resumeUrl);
  };

  const removeResume = () => {
    setResume("");
  };

  return (
    <ResumeContext.Provider
      value={{
        resume,
        uploadResume,
        removeResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  return useContext(ResumeContext);
};
