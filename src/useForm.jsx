import { useState } from 'react';

const useForm = (callback) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    setFormData,
  };
};

export default useForm;
