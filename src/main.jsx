import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Context Providers
import { ProfileProvider } from "./context/ProfileContext";
import { ResumeProvider } from "./context/ResumeContext";

import { SavedJobsProvider } from "./context/SavedJobsContext";
import { AppliedJobsProvider } from "./context/AppliedJobsContext";

import { SavedCoursesProvider } from "./context/SavedCoursesContext";
import { EnrolledCoursesProvider } from "./context/EnrolledCoursesContext";

import { RegisteredWebinarsProvider } from "./context/RegisteredWebinarsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <ResumeProvider>
          <SavedJobsProvider>
            <AppliedJobsProvider>
              <SavedCoursesProvider>
                <EnrolledCoursesProvider>
                  <RegisteredWebinarsProvider>
                    <App />
                  </RegisteredWebinarsProvider>
                </EnrolledCoursesProvider>
              </SavedCoursesProvider>
            </AppliedJobsProvider>
          </SavedJobsProvider>
        </ResumeProvider>
      </ProfileProvider>
    </BrowserRouter>
  </StrictMode>,
);
