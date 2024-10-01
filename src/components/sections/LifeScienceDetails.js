// components/sections/LifeScienceDetails.js
import React, { useState, useEffect } from 'react';
import '../../styles/LifeScienceDetails.css'; // Ensure you have a corresponding CSS file for styling

function LifeScienceDetails({ updateData }) {
  const [fields, setFields] = useState({
    // Biological Sample Information
    species: '',
    sampleType: '',
    samplePreservationMethod: '',
    biologicalRelevance: '',

    // Genetic Information
    geneticModificationStatus: '',
    genomicData: '',
    transgenicOrganismInfo: '',

    // Microscopy/Imaging Data
    microscopyType: '',
    imagingParameters: '',
    stainingMethod: ''
  });

  useEffect(() => {
    updateData(fields);
  }, [fields, updateData]);

  const handleInputChange = (field, value) => {
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  return (
    <div className="life-science-details">
      <h2>Life Science Details</h2>
      <hr />
      
      {/* Biological Sample Information */}
      <h3>Biological Sample Information</h3>
      <div className="field">
        <label>Species:</label>
        <input
          type="text"
          value={fields.species}
          onChange={(e) => handleInputChange('species', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Sample Type:</label>
        <input
          type="text"
          value={fields.sampleType}
          onChange={(e) => handleInputChange('sampleType', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Sample Preservation Method:</label>
        <input
          type="text"
          value={fields.samplePreservationMethod}
          onChange={(e) => handleInputChange('samplePreservationMethod', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Biological Relevance:</label>
        <input
          type="text"
          value={fields.biologicalRelevance}
          onChange={(e) => handleInputChange('biologicalRelevance', e.target.value)}
        />
      </div>

      {/* Genetic Information */}
      <h3>Genetic Information</h3>
      <div className="field">
        <label>Genetic Modification Status:</label>
        <input
          type="text"
          value={fields.geneticModificationStatus}
          onChange={(e) => handleInputChange('geneticModificationStatus', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genomic Data:</label>
        <input
          type="text"
          value={fields.genomicData}
          onChange={(e) => handleInputChange('genomicData', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Transgenic Organism Information:</label>
        <input
          type="text"
          value={fields.transgenicOrganismInfo}
          onChange={(e) => handleInputChange('transgenicOrganismInfo', e.target.value)}
        />
      </div>

      {/* Microscopy/Imaging Data */}
      <h3>Microscopy/Imaging Data</h3>
      <div className="field">
        <label>Microscopy Type:</label>
        <input
          type="text"
          value={fields.microscopyType}
          onChange={(e) => handleInputChange('microscopyType', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Imaging Parameters:</label>
        <input
          type="text"
          value={fields.imagingParameters}
          onChange={(e) => handleInputChange('imagingParameters', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Staining/Labeling Method:</label>
        <input
          type="text"
          value={fields.stainingMethod}
          onChange={(e) => handleInputChange('stainingMethod', e.target.value)}
        />
      </div>
    </div>
  );
}

export default LifeScienceDetails;
