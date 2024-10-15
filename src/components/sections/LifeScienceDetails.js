// components/sections/LifeScienceDetails.js
import React, { useState, useEffect } from 'react';
import '../../styles/LifeScienceDetails.css'; 

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
      <h3>Biological sample information</h3>
      <div className="field">
        <label>Species</label>
        <input
          type="text"
          placeholder="Describe the experimental species (e.g. C57BL/6 (B6) mouse, Sprague–Dawley (SD) rats)."
          value={fields.species}
          onChange={(e) => handleInputChange('species', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Sample type</label>
        <input
          type="text"
          placeholder="Describe the sample/organ (e.g. lung, brain, kidney, boold cells)."
          value={fields.sampleType}
          onChange={(e) => handleInputChange('sampleType', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Sample preservation method</label>
        <input
          type="text"
          placeholder="Indicate the preservation method (e.g. Methanol fixation, PFA fixation, fresh tissue)."
          value={fields.samplePreservationMethod}
          onChange={(e) => handleInputChange('samplePreservationMethod', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Biological relevance</label>
        <input
          type="text"
          placeholder="Describe why the sample was collected or its biological significance."
          value={fields.biologicalRelevance}
          onChange={(e) => handleInputChange('biologicalRelevance', e.target.value)}
        />
      </div>

      {/* Genetic Information */}
      <h3>Genetic Information</h3>
      <div className="field">
        <label>Genetic modification status</label>
        <input
          type="text"
          placeholder="Indicate if the specie was genetically modified (e.g. CRISPR-modified, knockout mice)"
          value={fields.geneticModificationStatus}
          onChange={(e) => handleInputChange('geneticModificationStatus', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genomic data</label>
        <input
          type="text"
          placeholder="If applicable, indicate if genetic data is available (e.g. RNA-Seq, Microarray)"
          value={fields.genomicData}
          onChange={(e) => handleInputChange('genomicData', e.target.value)}
        />
      </div>
      
      {/* Microscopy/Imaging Data */}
      <h3>Microscopy/imaging data</h3>
      <div className="field">
        <label>Microscopy type</label>
        <input
          type="text"
          placeholder="Type and reference of the microscope (e.g. Widefield AxioScan Z1 slide scanner)"
          value={fields.microscopyType}
          onChange={(e) => handleInputChange('microscopyType', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Imaging parameters</label>
        <textarea
          type="textarea-input"
          rows="4"
          placeholder="Provide a sufficient and relevant description of the image acquisition parameters (e.g. filters, excitation and emission wavelengths, pinhole, exposure time, etc.)"
          value={fields.imagingParameters}
          onChange={(e) => handleInputChange('imagingParameters', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Staining/labeling method</label>
        <textarea
          type="textarea-input"
          rows="4"
          placeholder="Identify staining methods (e.g. immunohistochemistry, FISH, dyes, etc.)"
          value={fields.stainingMethod}
          onChange={(e) => handleInputChange('stainingMethod', e.target.value)}
        />
      </div>
    </div>
  );
}

export default LifeScienceDetails;
