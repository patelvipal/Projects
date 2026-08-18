import { useProfile } from "../../context/ProfileContext";

import "./ProfileCompletion.css";

function ProfileCompletion() {
  const { profile } = useProfile();

  const fields = [
    !!profile.profileImage,
    !!profile.fullName,
    !!profile.email,
    !!profile.phone,
    !!profile.location,
    !!profile.about,
    !!profile.education,
    !!profile.github,
    !!profile.linkedin,
    profile.resume?.name !== "",
    profile.skills?.length > 0,
  ];

  const completedFields = fields.filter(Boolean).length;

  const totalFields = fields.length;

  const percentage = Math.round((completedFields / totalFields) * 100);

  return (
    <div className="profile-completion-card">
      <div className="completion-header">
        <h2>Profile Completion</h2>

        <span>{percentage}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p>
        {completedFields} of {totalFields} profile sections completed.
      </p>

      {percentage === 100 ? (
        <div className="completion-success">
          🎉 Congratulations! Your profile is fully completed.
        </div>
      ) : (
        <div className="completion-warning">
          Complete your profile to improve your chances of getting hired.
        </div>
      )}
    </div>
  );
}

export default ProfileCompletion;
