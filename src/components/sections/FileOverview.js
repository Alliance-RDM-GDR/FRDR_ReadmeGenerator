import React, { useState, useEffect } from 'react'; 
import '../../styles/FileOverview.css';

function FileOverview({ updateData }) {
  const [folderNamingConvention, setFolderNamingConvention] = useState(''); // New field
  const [fileOverviewFields, setFileOverviewFields] = useState([{ itemType: '', name: '', description: '' }]);
  const [relationshipBetweenFiles, setRelationshipBetweenFiles] = useState('');
  const [additionalRelatedData, setAdditionalRelatedData] = useState('');

  // Update form data when fields change
  useEffect(() => {
    updateData({
      folderNamingConvention, // Include the new field in the form data
      fileOverviewFields,
      relationshipBetweenFiles,
      additionalRelatedData
    });
  }, [folderNamingConvention, fileOverviewFields, relationshipBetweenFiles, additionalRelatedData, updateData]);

  // Add new file overview field
  const addFileOverviewField = () => {
    setFileOverviewFields([...fileOverviewFields, { itemType: '', name: '', description: '' }]);
  };

  // Remove the last added field
  const removeLastFileOverviewField = () => {
    if (fileOverviewFields.length > 1) {
      setFileOverviewFields(fileOverviewFields.slice(0, -1));
    }
  };

  // Handle input changes for file overview fields
  const handleInputChange = (index, field, value) => {
    const newFields = [...fileOverviewFields];
    newFields[index][field] = value;
    setFileOverviewFields(newFields);
  };

  return (
    <div className="file-overview">
      <h2>File Overview</h2>
      <hr />

      {/* New field for Folder/files naming convention */}
      <div className="field">
        <label>Folder/files naming convention:</label>
        <textarea
          rows="3"
          placeholder="Describe the folder/files naming convention"
          value={folderNamingConvention}
          onChange={(e) => setFolderNamingConvention(e.target.value)}
        />
      </div>

      {fileOverviewFields.map((field, index) => (
        <div key={index} className="file-overview-field">
          <div className="field-row">
            <div className="field-column">
              <label>Item Type</label>
              <select
                value={field.itemType}
                onChange={(e) => handleInputChange(index, 'itemType', e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="File">File</option>
                <option value="Folder">Folder</option>
              </select>
            </div>
            <div className="field-column">
              <label>Name:</label>
              <input
                type="text"
                value={field.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                placeholder="Enter item name"
              />
            </div>
            <div className="field-column">
              <label>Description:</label>
              <textarea
                placeholder="Please provide a brief description of the item."
                value={field.description}
                onChange={(e) => handleInputChange(index, 'description', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="button-group">
        <button onClick={addFileOverviewField}>Add another</button>
        <button onClick={removeLastFileOverviewField}>Erase last</button>
      </div>

      <div className="field">
        <label>Relationship between files</label>
        <textarea
          rows="4"
          value={relationshipBetweenFiles}
          onChange={(e) => setRelationshipBetweenFiles(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Additional related data</label>
        <textarea
          rows="4"
          value={additionalRelatedData}
          onChange={(e) => setAdditionalRelatedData(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FileOverview;
