import React from 'react';

const EducationSection = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div>
        <label>
          Highest Qualification:
          <select name="highestQualification" value={formData.highestQualification} onChange={handleInputChange}>
            <option value="">Select Qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Field of Study:
          <input type="text" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleInputChange} />
        </label>
      </div>
    </div>
  );
};

export default EducationSection;
