import React, { useState, useEffect } from 'react';
import '../../styles/MethodologicalDetails.css';

function MethodologicalDetails({ updateData }) {
  const [methodsForDataCollection, setMethodsForDataCollection] = useState('');
  const [methodsForDataProcessing, setMethodsForDataProcessing] = useState('');
  const [environmentalConditions, setEnvironmentalConditions] = useState('');
  const [collectionSoftwareFields, setCollectionSoftwareFields] = useState([]);
  const [processingSoftwareFields, setProcessingSoftwareFields] = useState([]);
  const [contributors, setContributors] = useState([{ role: '', name: '' }]);

  // Update the parent component whenever the state changes
  useEffect(() => {
    updateData({
      methodsForDataCollection,
      methodsForDataProcessing,
      environmentalConditions,
      collectionSoftwareFields,
      processingSoftwareFields,
      contributors,
    });
  }, [
    methodsForDataCollection,
    methodsForDataProcessing,
    environmentalConditions,
    collectionSoftwareFields,
    processingSoftwareFields,
    contributors,
    updateData,
  ]);

  // Add software fields dynamically for data collection
  const addCollectionSoftwareField = () => {
    setCollectionSoftwareFields([...collectionSoftwareFields, { software: '', version: '', purpose: '' }]);
  };

  // Remove the last added software field for data collection
  const removeLastCollectionSoftwareField = () => {
    if (collectionSoftwareFields.length > 0) {
      setCollectionSoftwareFields(collectionSoftwareFields.slice(0, -1));
    }
  };

  // Add software fields dynamically for data processing
  const addProcessingSoftwareField = () => {
    setProcessingSoftwareFields([...processingSoftwareFields, { software: '', version: '', purpose: '' }]);
  };

  // Remove the last added software field for data processing
  const removeLastProcessingSoftwareField = () => {
    if (processingSoftwareFields.length > 0) {
      setProcessingSoftwareFields(processingSoftwareFields.slice(0, -1));
    }
  };

  // Add another contributor
  const addContributor = () => {
    setContributors([...contributors, { role: '', name: '' }]);
  };

  // Remove the last contributor
  const removeLastContributor = () => {
    if (contributors.length > 1) {
      setContributors(contributors.slice(0, -1));
    }
  };

  // Handle input changes for collection software fields
  const handleCollectionSoftwareInputChange = (index, field, value) => {
    const newFields = [...collectionSoftwareFields];
    newFields[index][field] = value;
    setCollectionSoftwareFields(newFields);
  };

  // Handle input changes for processing software fields
  const handleProcessingSoftwareInputChange = (index, field, value) => {
    const newFields = [...processingSoftwareFields];
    newFields[index][field] = value;
    setProcessingSoftwareFields(newFields);
  };

  // Handle contributor input changes
  const handleContributorChange = (index, field, value) => {
    const newContributors = [...contributors];
    newContributors[index][field] = value;
    setContributors(newContributors);
  };

  return (
    <div className="methodological-details">
      <h2>Methodological Details</h2>
      <hr />

      {/* Methods for data collection */}
      <div className="field">
        <label>Methods for data collection</label>
        <textarea
          rows="4"
          value={methodsForDataCollection}
          onChange={(e) => setMethodsForDataCollection(e.target.value)}
        />

        {/* Dynamically generated software fields for data collection */}
        {collectionSoftwareFields.length > 0 &&
          collectionSoftwareFields.map((field, index) => (
            <div key={index} className="software-fields">
              <div className="software-field">
                <label>Software:</label>
                <input
                  type="text"
                  value={field.software}
                  onChange={(e) => handleCollectionSoftwareInputChange(index, 'software', e.target.value)}
                />
              </div>
              <div className="software-field">
                <label>Version:</label>
                <input
                  type="text"
                  value={field.version}
                  onChange={(e) => handleCollectionSoftwareInputChange(index, 'version', e.target.value)}
                />
              </div>
              <div className="software-field">
                <label>Purpose:</label>
                <input
                  type="text"
                  value={field.purpose}
                  onChange={(e) => handleCollectionSoftwareInputChange(index, 'purpose', e.target.value)}
                />
              </div>
            </div>
          ))}

        <div className="button-group">
          <button onClick={addCollectionSoftwareField}>Add Software</button>
          <button onClick={removeLastCollectionSoftwareField}>Remove Last Software</button>
        </div>
      </div>

      {/* Methods for processing the data */}
      <div className="field">
        <label>Methods for processing the data:</label>
        <textarea
          rows="4"
          value={methodsForDataProcessing}
          onChange={(e) => setMethodsForDataProcessing(e.target.value)}
        />

        {/* Dynamically generated software fields for data processing */}
        {processingSoftwareFields.length > 0 &&
          processingSoftwareFields.map((field, index) => (
            <div key={index} className="software-fields">
              <div className="software-field">
                <label>Software:</label>
                <input
                  type="text"
                  value={field.software}
                  onChange={(e) => handleProcessingSoftwareInputChange(index, 'software', e.target.value)}
                />
              </div>
              <div className="software-field">
                <label>Version:</label>
                <input
                  type="text"
                  value={field.version}
                  onChange={(e) => handleProcessingSoftwareInputChange(index, 'version', e.target.value)}
                />
              </div>
              <div className="software-field">
                <label>Purpose:</label>
                <input
                  type="text"
                  value={field.purpose}
                  onChange={(e) => handleProcessingSoftwareInputChange(index, 'purpose', e.target.value)}
                />
              </div>
            </div>
          ))}

        <div className="button-group">
          <button onClick={addProcessingSoftwareField}>Add Software</button>
          <button onClick={removeLastProcessingSoftwareField}>Remove Last Software</button>
        </div>
      </div>

      {/* Environmental/experimental conditions */}
      <div className="field">
        <label>Environmental/experimental conditions</label>
        <textarea
          rows="4"
          value={environmentalConditions}
          onChange={(e) => setEnvironmentalConditions(e.target.value)}
        />
      </div>

      {/* Contributors */}
      <div className="contributors">
        <label>Contributors</label>
        {contributors.map((contributor, index) => (
          <div key={index} className="row">
            <div className="column">
              <label>Role:</label>
              <select
                value={contributor.role}
                onChange={(e) => handleContributorChange(index, 'role', e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Collector">Collector</option>
                <option value="Processor">Processor</option>
                <option value="Analyst">Analyst</option>
              </select>
            </div>
            <div className="column">
              <label>Name (Last name, Name):</label>
              <input
                type="text"
                value={contributor.name}
                onChange={(e) => handleContributorChange(index, 'name', e.target.value)}
              />
            </div>
          </div>
        ))}
        <div className="button-group">
          <button onClick={addContributor}>Add another</button>
          <button onClick={removeLastContributor}>Erase last</button>
        </div>
      </div>
    </div>
  );
}

export default MethodologicalDetails;
