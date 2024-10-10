import React, { useState, useEffect } from 'react'; 
import '../../styles/LicensingOptions.css';

function LicensingOptions({ updateData }) {
  const [selectedLicense, setSelectedLicense] = useState('');
  const [licenseDescription, setLicenseDescription] = useState('');
  const [customLicenseDescription, setCustomLicenseDescription] = useState('');
  const [derivedFromSource, setDerivedFromSource] = useState('');
  const [attributionInfo, setAttributionInfo] = useState(''); // New state for attribution info
  const [sensitiveData, setSensitiveData] = useState('');

  const licenses = [
    { value: 'cc0', label: 'CC0 1.0', description: 'This license allows the work to be freely available in the public domain (https://creativecommons.org/publicdomain/zero/1.0/)' },
    { value: 'cc_by', label: 'CC BY 4.0', description: 'This license allows others to distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation (https://creativecommons.org/licenses/by/4.0/).' },
    { value: 'cc_by_sa', label: 'CC BY-SA 4.0', description: 'This license lets others remix, adapt, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under identical terms (https://creativecommons.org/licenses/by-sa/4.0/).' },
    { value: 'cc_by_nc', label: 'CC BY-NC 4.0', description: 'This license lets others remix, adapt, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms (https://creativecommons.org/licenses/by-nc/4.0/).' },
    { value: 'cc_by_nd', label: 'CC BY-ND 4.0', description: 'This license allows redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you (https://creativecommons.org/licenses/by-nd/4.0/).' },
    { value: 'cc_by_nc_sa', label: 'CC BY-NC-SA 4.0', description: 'This license lets others remix, adapt, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms (https://creativecommons.org/licenses/by-nc-sa/4.0/).' },
    { value: 'cc_by_nc_nd', label: 'CC BY-NC-ND 4.0', description: 'It allows others to download your work and share it with others as long as they credit you, but they can’t change it in any way or use it commercially (https://creativecommons.org/licenses/by-nc-nd/4.0/).' },
    { value: 'other', label: 'Other', description: '' }, // For custom user input
  ];

  const handleLicenseChange = (event) => {
    const selected = licenses.find(license => license.value === event.target.value);
    setSelectedLicense(event.target.value);
    setLicenseDescription(selected ? selected.description : '');

    // Clear custom license description when "Other" is not selected
    if (event.target.value !== 'other') {
      setCustomLicenseDescription('');
    }
  };

  // Update the parent component whenever data changes
  useEffect(() => {
    updateData({
      selectedLicense: selectedLicense === 'other' ? customLicenseDescription : licenses.find(license => license.value === selectedLicense)?.label,
      licenseDescription: selectedLicense === 'other' ? customLicenseDescription : licenseDescription,
      derivedFromSource,
      attributionInfo, // Include attribution info in the update
      sensitiveData,
    });
  }, [selectedLicense, licenseDescription, customLicenseDescription, derivedFromSource, attributionInfo, sensitiveData, updateData]);

  return (
    <div className="licensing-options">
      <h2>Access/sharing information</h2>
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
          {selectedLicense === 'other' ? (
            <textarea
              value={customLicenseDescription}
              onChange={(e) => setCustomLicenseDescription(e.target.value)}
              placeholder="Describe your custom license"
            />
          ) : (
            <p>{licenseDescription || 'Please select a licence to see its description.'}</p>
          )}
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

          {/* Conditionally render attribution information input below the dropdown */}
          {derivedFromSource === 'yes' && (
            <div>
              <label>Attribution information of previous source:</label>
              <textarea
                value={attributionInfo}
                onChange={(e) => setAttributionInfo(e.target.value)}
                placeholder="Provide attribution information, e.g citation or DOI"
                rows="4"
              />
            </div>
          )}
        </div>

        <div className="column">
          <label>Are the data sensitive or derived from or collected with an autochthonous population?</label>
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
