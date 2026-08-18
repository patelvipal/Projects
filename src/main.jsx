import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { SavedJobsProvider } from "./context/SavedJobsContext";
import { SearchProvider } from "./context/SearchContext";
import { AppliedJobsProvider } from "./context/AppliedJobsContext";
import { SavedCoursesProvider } from "./context/SavedCoursesContext";
import { EnrolledCoursesProvider } from "./context/EnrolledCoursesContext";
import { RegisteredWebinarsProvider } from "./context/RegisteredWebinarsContext";
import { ProfileProvider } from "./context/ProfileContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <ProfileProvider>
          <SavedJobsProvider>
            <AppliedJobsProvider>
              <SavedCoursesProvider>
                <EnrolledCoursesProvider>
                  <RegisteredWebinarsProvider>
                    <App />

                    <ToastContainer
                      position="top-right"
                      autoClose={2500}
                      hideProgressBar={false}
                      newestOnTop
                      closeOnClick
                      pauseOnHover
                      draggable
                      theme="colored"
                    />
                  </RegisteredWebinarsProvider>
                </EnrolledCoursesProvider>
              </SavedCoursesProvider>
            </AppliedJobsProvider>
          </SavedJobsProvider>
        </ProfileProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
