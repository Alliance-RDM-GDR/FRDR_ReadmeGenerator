import React, { useState, useEffect } from 'react';
import '../../styles/LicensingOptions.css'; // Ensure the path is correct

function LicensingOptions({ updateData }) {
  const [selectedLicense, setSelectedLicense] = useState('');
  const [licenseDescription, setLicenseDescription] = useState('');
  const [derivedFromSource, setDerivedFromSource] = useState('');
  const [sensitiveData, setSensitiveData] = useState('');

  const licenses = [
    { value: 'cc_by', label: 'CC BY', description: 'This license allows others to distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation.' },
    { value: 'cc_by_sa', label: 'CC BY-SA', description: 'This license lets others remix, adapt, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under identical terms.' },
    { value: 'cc_by_nc', label: 'CC BY-NC', description: 'This license lets others remix, adapt, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.' },
    { value: 'cc0', label: 'CC0', description: 'This license allows the work to be freely available in the public domain.' },
  ];

  const handleLicenseChange = (event) => {
    const selected = licenses.find(license => license.value === event.target.value);
    setSelectedLicense(event.target.value);
    setLicenseDescription(selected ? selected.description : '');
  };

  // Update the parent component whenever data changes
  useEffect(() => {
    updateData({
      selectedLicense,
      licenseDescription,
      derivedFromSource,
      sensitiveData,
    });
  }, [selectedLicense, licenseDescription, derivedFromSource, sensitiveData, updateData]);

  return (
    <div className="licensing-options">
      <h2>Licensing Options</h2>
      <hr />
      <div className="row">
        <div className="column">
          <label>Licence:</label>
          <select value={selectedLicense} onChange={handleLicenseChange}>
            <option value="">--Select Licence--</option>
            {licenses.map((license) => (
              <option key={license.value} value={license.value}>
                {license.label}
              </option>
            ))}
          </select>
        </div>
        <div className="column">
          <label>Licence Description:</label>
          <p>{licenseDescription || 'Please select a licence to see its description.'}</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label>Was data derived from another source?</label>
          <select value={derivedFromSource} onChange={(e) => setDerivedFromSource(e.target.value)}>
            <option value="">--Select--</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="column">
          <label>Are the data sensitive or derived from autochthonous population?</label>
          <select value={sensitiveData} onChange={(e) => setSensitiveData(e.target.value)}>
            <option value="">--Select--</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default LicensingOptions;
