import React from 'react';

const ProgressBar = ({ progress }) => (
  <div style={{ background: '#ddd', height: '20px', width: '100%' }}>
    <div
      style={{
        width: `${progress}%`,
        background: '#34495e',
        height: '100%',
        transition: 'width 0.3s',
      }}
    ></div>
  </div>
);

export default ProgressBar;
