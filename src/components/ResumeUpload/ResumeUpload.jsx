import { useRef } from "react";
import { toast } from "react-toastify";
import { FaFilePdf, FaUpload, FaEye, FaTrash } from "react-icons/fa";

import { useProfile } from "../../context/ProfileContext";

import "./ResumeUpload.css";

function ResumeUpload() {
  const { profile, updateResume, removeResume } = useProfile();

  const fileInputRef = useRef(null);

  // Open File Picker
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Upload Resume
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("❌ Please upload only a PDF file.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      updateResume({
        name: file.name,
        data: reader.result,
      });

      toast.success("📄 Resume Uploaded Successfully!");
    };

    reader.readAsDataURL(file);
  };

  // View Resume
  const handleViewResume = () => {
    if (!profile.resume?.data) {
      toast.warning("⚠️ No Resume Available.");
      return;
    }

    const newWindow = window.open();

    if (!newWindow) {
      toast.error("❌ Pop-up blocked. Please allow pop-ups.");
      return;
    }

    newWindow.document.write(`
      <html>
        <head>
          <title>${profile.resume.name}</title>
        </head>
        <body style="margin:0;">
          <iframe
            src="${profile.resume.data}"
            frameborder="0"
            style="width:100%;height:100vh;"
          ></iframe>
        </body>
      </html>
    `);

    newWindow.document.close();
  };

  // Delete Resume
  const handleDeleteResume = () => {
    removeResume();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    toast.info("🗑️ Resume Deleted Successfully!");
  };

  return (
    <div className="resume-upload-card">
      <h2 className="resume-title">
        <FaFilePdf /> Resume
      </h2>

      <div className="resume-content">
        <p className="resume-name">
          {profile.resume?.name || "No Resume Uploaded"}
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
            {profile.resume?.name ? "Replace Resume" : "Upload Resume"}
          </button>

          <button
            className="view-btn"
            onClick={handleViewResume}
            disabled={!profile.resume?.data}
          >
            <FaEye />
            View Resume
          </button>

          <button
            className="delete-btn"
            onClick={handleDeleteResume}
            disabled={!profile.resume?.name}
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeUpload;
