import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechnologySection from './TechnologySection';
import HealthSection from './HealthSection';
import EducationSection from './EducationSection';
import './Form.css'; // Import CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: ''
  });
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      // Form data is valid, proceed with submission
      // You can handle form submission logic here
      console.log('Form data:', formData);
      console.log('Additional questions:', additionalQuestions);
    } else {
      // Form data is invalid, set errors state
      setFormErrors(errors);
    }
  };

  const validateFormData = (data) => {
    // Implement your form validation logic here
    let errors = {};
    // Example validation (required fields)
    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!data.surveyTopic.trim()) {
      errors.surveyTopic = 'Survey Topic is required';
    }
    return errors;
  };

  useEffect(() => {
    if (formData.surveyTopic) {
      // Fetch additional questions from external API based on the selected survey topic
      axios.get(`https://api.example.com/questions?topic=${formData.surveyTopic}`)
        .then(response => {
          setAdditionalQuestions(response.data);
        })
        .catch(error => {
          console.error('Error fetching additional questions:', error);
        });
    }
  }, [formData.surveyTopic]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
          {formErrors.fullName && <span>{formErrors.fullName}</span>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          {formErrors.email && <span>{formErrors.email}</span>}
        </label>
      </div>
      <div>
        <label>
          Survey Topic:
          <select name="surveyTopic" value={formData.surveyTopic} onChange={handleInputChange}>
            <option value="">Select Topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {formErrors.surveyTopic && <span>{formErrors.surveyTopic}</span>}
        </label>
      </div>

      {formData.surveyTopic === 'Technology' && <TechnologySection formData={formData} handleInputChange={handleInputChange} />}
      {formData.surveyTopic === 'Health' && <HealthSection formData={formData} handleInputChange={handleInputChange} />}
      {formData.surveyTopic === 'Education' && <EducationSection formData={formData} handleInputChange={handleInputChange} />}

      <div>
        <label>
          Feedback:
          <textarea name="feedback" value={formData.feedback} onChange={handleInputChange} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
