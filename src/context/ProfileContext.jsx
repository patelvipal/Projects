import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext();

const defaultProfile = {
  fullName: "Patel Vipal",
  title: "MERN Stack Developer",

  email: "vipal@gmail.com",
  phone: "+91 9876543210",

  location: "Surat, Gujarat",

  about:
    "Passionate MERN Stack Developer who loves building modern web applications using React, Node.js, Express.js and MongoDB.",

  education: "MCA - Parul University",

  github: "https://github.com/",
  linkedin: "https://linkedin.com/",

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ],

  // UPDATED RESUME OBJECT
  resume: {
    name: "",
    data: "",
  },

  profileImage:
    "https://ui-avatars.com/api/?name=Patel+Vipal&background=2563eb&color=fff&size=300",
};

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem("profile");

    return storedProfile ? JSON.parse(storedProfile) : defaultProfile;
  });

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updatedData) => {
    setProfile((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  // NEW
  const updateResume = (resume) => {
    setProfile((prev) => ({
      ...prev,
      resume,
    }));
  };

  // NEW
  const removeResume = () => {
    setProfile((prev) => ({
      ...prev,
      resume: {
        name: "",
        data: "",
      },
    }));
  };

  const resetProfile = () => {
    setProfile(defaultProfile);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        updateResume,
        removeResume,
        resetProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  return useContext(ProfileContext);
};
