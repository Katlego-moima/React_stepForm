import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Gender"
        value={formData.gender}
        onChange={(e) => {
          setFormData({ ...formData, gender: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;
