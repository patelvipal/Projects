import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import { SavedJobsProvider } from "./context/SavedJobsContext";
import { AppliedJobsProvider } from "./context/AppliedJobsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SavedJobsProvider>
        <AppliedJobsProvider>
          <App />
        </AppliedJobsProvider>
      </SavedJobsProvider>
    </BrowserRouter>
  </StrictMode>,
);
