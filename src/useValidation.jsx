import { useState } from 'react';

const useValidation = (formData) => {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let valid = true;
    let errors = {};

    if (!data.fullName) {
      valid = false;
      errors.fullName = 'Full Name is required';
    }

    if (!data.email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      valid = false;
      errors.email = 'Email address is invalid';
    }

    if (!data.surveyTopic) {
      valid = false;
      errors.surveyTopic = 'Survey Topic is required';
    }

    if (data.surveyTopic === 'Technology') {
      if (!data.favoriteLanguage) {
        valid = false;
        errors.favoriteLanguage = 'Favorite Programming Language is required';
      }
      if (!data.yearsExperience) {
        valid = false;
        errors.yearsExperience = 'Years of Experience is required';
      }
    }

    if (data.surveyTopic === 'Health') {
      if (!data.exerciseFrequency) {
        valid = false;
        errors.exerciseFrequency = 'Exercise Frequency is required';
      }
      if (!data.dietPreference) {
        valid = false;
        errors.dietPreference = 'Diet Preference is required';
      }
    }

    if (data.surveyTopic === 'Education') {
      if (!data.highestQualification) {
        valid = false;
        errors.highestQualification = 'Highest Qualification is required';
      }
      if (!data.fieldOfStudy) {
        valid = false;
        errors.fieldOfStudy = 'Field of Study is required';
      }
    }

    if (!data.feedback) {
      valid = false;
      errors.feedback = 'Feedback is required';
    } else if (data.feedback.length < 50) {
      valid = false;
      errors.feedback = 'Feedback must be at least 50 characters';
    }

    setErrors(errors);
    return valid;
  };

  return {
    errors,
    validate,
  };
};

export default useValidation;
