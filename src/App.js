import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import DynamicForm from './components/DynamicForm';
import ProgressBar from './components/ProgressBar';
import SubmittedDataTable from './components/SubmittedDataTable';
import { fetchFormStructure } from './utils/api';

const App = () => {
  const [formStructure, setFormStructure] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleDropdownChange = async (selection) => {
    try {
      const structure = await fetchFormStructure(selection);
      setFormStructure(structure);
      setProgress(0); // Reset progress for the new form
    } catch (error) {
      console.error('Error fetching form structure:', error);
    }
  };

  const handleFormSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
  };

  return (
    <div>
      <Header />
      <Dropdown onSelectionChange={handleDropdownChange} />
      <ProgressBar progress={progress} />
      {formStructure && (
        <DynamicForm
          formStructure={formStructure}
          onSubmit={handleFormSubmit}
          setProgress={setProgress}
        />
      )}
      <SubmittedDataTable
        data={submittedData}
        setSubmittedData={setSubmittedData}
      />
      <Footer />
    </div>
  );
};

export default App;
