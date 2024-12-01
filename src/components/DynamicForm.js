import React, { useState } from 'react';

const DynamicForm = ({ formStructure, onSubmit, setProgress }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update progress bar
    const filledFields = Object.values({ ...formData, [name]: value }).filter(Boolean).length;
    const totalFields = formStructure.fields.length;
    setProgress((filledFields / totalFields) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    formStructure.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onSubmit(formData);
      setFormData({});
      setProgress(100); // Full progress on submit
      alert('Form submitted successfully!');
    }
  };

  return (
     <div className='container'>
        <form onSubmit={handleSubmit}>
      {formStructure.fields.map((field, idx) => (
        <div key={idx}>
          <label>
            {field.label} {field.required && '*'}
            {field.type === 'dropdown' ? (
              <select onChange={(e) => handleChange(field.name, e.target.value)}>
                <option value="">Select {field.label}</option>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
          </label>
          {errors[field.name] && <p style={{ color: 'red' }}>{errors[field.name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
     </div>
  );
};

export default DynamicForm;
