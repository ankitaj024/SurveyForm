import React from 'react';

const TechnologySection = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div>
        <label>
          Favorite Programming Language:
          <select name="favoriteLanguage" value={formData.favoriteLanguage} onChange={handleInputChange}>
            <option value="">Select Language</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Years of Experience:
          <input type="number" name="yearsExperience" value={formData.yearsExperience} onChange={handleInputChange} />
        </label>
      </div>
    </div>
  );
};

export default TechnologySection;
