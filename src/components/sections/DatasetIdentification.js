import React, { useState, useEffect } from 'react';
import '../../styles/DatasetIdentification.css';

function DatasetIdentification({ updateData }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Geographic location fields
  const [cityRegion, setCityRegion] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [latitudeLongitude, setLatitudeLongitude] = useState('');

  // Update the parent component whenever the user changes input
  useEffect(() => {
    updateData({
      title,
      description,
      startDate,
      endDate,
      cityRegion,
      province,
      country,
      latitudeLongitude,
    });
  }, [title, description, startDate, endDate, cityRegion, province, country, latitudeLongitude, updateData]);

  return (
    <div className="dataset-identification-container">
      <div className="section-title">
        <h2>Dataset Identification</h2>
        <hr />
      </div>
      <div className="field-group">
        <label>Title of the dataset</label>
        <input
          type="text"
          className="text-input"
          placeholder="Provide a descriptive title for your dataset"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="field-group">
        <label>Description</label>
        <textarea
          className="textarea-input"
          placeholder="Briefely describe the context, content and methods used to garther the data"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="date-group">
        <div className="date-column">
          <label>Data collection start date</label>
          <input
            type="date"
            className="date-picker"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="date-column">
          <label>Data collection end date</label>
          <input
            type="date"
            className="date-picker"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Geographic location section */}
      <div className="section-title">
        <h3>Geographic location of data collection</h3>        
      </div>
      <div className="geo-group">
        <div className="geo-column">
          <label>City/region</label>
          <input
            type="text"
            className="text-input"
            value={cityRegion}
            onChange={(e) => setCityRegion(e.target.value)}
          />
        </div>
        <div className="geo-column">
          <label>Province</label>
          <input
            type="text"
            className="text-input"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </div>
      </div>
      <div className="geo-group">
        <div className="geo-column">
          <label>Country</label>
          <input
            type="text"
            className="text-input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="geo-column">
          <label>Latitude, longitude</label>
          <input
            type="text"
            className="text-input"
            placeholder="e.g., 34.0522, -118.2437"
            value={latitudeLongitude}
            onChange={(e) => setLatitudeLongitude(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default DatasetIdentification;
