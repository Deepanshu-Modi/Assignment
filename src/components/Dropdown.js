import React from 'react';

const Dropdown = ({ onSelectionChange }) => {
  const options = ['User Information', 'Address Information', 'Payment Information'];

  const handleChange = (e) => {
    onSelectionChange(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select Form Type</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
