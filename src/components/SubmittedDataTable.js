import React from 'react';

const SubmittedDataTable = ({ data, setSubmittedData }) => {
  const handleDelete = (index) => {
    setSubmittedData((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <table border="1">
      <thead>
        <tr>
          {data.length > 0 && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, idx) => <td key={idx}>{value}</td>)}
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubmittedDataTable;
