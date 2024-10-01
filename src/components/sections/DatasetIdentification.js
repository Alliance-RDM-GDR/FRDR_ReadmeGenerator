import React, { useState, useEffect } from 'react';
import '../../styles/DatasetIdentification.css';

function DatasetIdentification({ updateData }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Update the parent component whenever the user changes input
  useEffect(() => {
    updateData({
      title,
      description,
      startDate,
      endDate,
    });
  }, [title, description, startDate, endDate, updateData]);

  return (
    <div className="dataset-identification-container">
      <div className="section-title">
        <h2>Dataset Identification</h2>
        <hr />
      </div>
      <div className="field-group">
        <label>Title of the dataset:</label>
        <input
          type="text"
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="field-group">
        <label>Description:</label>
        <textarea
          className="textarea-input"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="date-group">
        <div className="date-column">
          <label>Start Date:</label>
          <input
            type="date"
            className="date-picker"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="date-column">
          <label>End Date:</label>
          <input
            type="date"
            className="date-picker"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default DatasetIdentification;
