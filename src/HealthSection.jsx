import React from 'react';

const HealthSection = ({ formData, handleInputChange }) => {
  return (
    <div>
      <div>
        <label>
          Exercise Frequency:
          <select name="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleInputChange}>
            <option value="">Select Frequency</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Rarely">Rarely</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Diet Preference:
          <select name="dietPreference" value={formData.dietPreference} onChange={handleInputChange}>
            <option value="">Select Preference</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default HealthSection;
