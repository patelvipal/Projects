import { useRef, useState } from "react";
import {
  FaFilePdf,
  FaUpload,
  FaEye,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

import { useProfile } from "../../context/ProfileContext";

import "./ResumeUpload.css";

function ResumeUpload() {
  const { profile, updateResume, removeResume } = useProfile();

  const fileInputRef = useRef(null);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      updateResume({
        name: file.name,
        data: reader.result,
      });

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    };

    reader.readAsDataURL(file);
  };

  const handleViewResume = () => {
    if (!profile.resume.data) return;

    const newWindow = window.open();

    newWindow.document.write(`
      <iframe
        src="${profile.resume.data}"
        frameborder="0"
        style="width:100%;height:100vh"
      ></iframe>
    `);
  };

  const handleDeleteResume = () => {
    removeResume();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="resume-upload-card">
      <h2 className="resume-title">
        <FaFilePdf />
        Resume
      </h2>

      <div className="resume-content">
        <p className="resume-name">
          {profile.resume.name || "No Resume Uploaded"}
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div className="resume-buttons">
          <button className="upload-btn" onClick={handleUploadClick}>
            <FaUpload />

            {profile.resume.name ? "Replace Resume" : "Upload Resume"}
          </button>

          <button
            className="view-btn"
            onClick={handleViewResume}
            disabled={!profile.resume.data}
          >
            <FaEye />
            View Resume
          </button>

          <button
            className="delete-btn"
            onClick={handleDeleteResume}
            disabled={!profile.resume.name}
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </div>

      {showSuccess && (
        <div className="resume-success">
          <FaCheckCircle />
          Resume Uploaded Successfully!
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
