import React, { useState, useEffect } from 'react';
import '../../styles/FunderInformation.css'; // Import the CSS file

function FunderInformation({ updateData }) {
  const [funders, setFunders] = useState([{ funder: '', awardNumber: '', awardTitle: '', year: '' }]);

  // Update parent component when funders data changes
  useEffect(() => {
    updateData({ funders });
  }, [funders, updateData]);

  // Handle changes in individual fields
  const handleFunderChange = (index, field, value) => {
    const updatedFunders = [...funders];
    updatedFunders[index][field] = value;
    setFunders(updatedFunders);
  };

  // Add another funder
  const addFunder = () => {
    setFunders([...funders, { funder: '', awardNumber: '', awardTitle: '', year: '' }]);
  };

  // Remove the last funder
  const removeLastFunder = () => {
    if (funders.length > 1) {
      setFunders(funders.slice(0, -1));
    }
  };

  return (
    <div className="funder-information-container">
      <h2>Funder Information</h2>
      <hr />
      {funders.map((funder, index) => (
        <div key={index} className="funder-row">
          <div className="funder-column">
            <label>Funding agency</label>
            <input
              type="text"
              value={funder.funder}
              onChange={(e) => handleFunderChange(index, 'funder', e.target.value)}
            />
          </div>

          <div className="funder-column">
            <label>Award Number/id</label>
            <input
              type="text"              
              value={funder.awardNumber}
              onChange={(e) => handleFunderChange(index, 'awardNumber', e.target.value)}
            />
          </div>

          <div className="funder-column">
            <label>Award Title</label>
            <input
              type="text"
              value={funder.awardTitle}
              onChange={(e) => handleFunderChange(index, 'awardTitle', e.target.value)}
            />
          </div>

          <div className="funder-column">
            <label>Year</label>
            <input
              type="text"
              value={funder.year}
              onChange={(e) => handleFunderChange(index, 'year', e.target.value)}
            />
          </div>
        </div>
      ))}
      <div className="button-group">
        <button onClick={addFunder}>Add Another Funder</button>
        <button onClick={removeLastFunder}>Remove Last Funder</button>
      </div>
    </div>
  );
}

export default FunderInformation;
