import React, { useState } from 'react';
import './styles/App.css';
import GeneralTemplate from './components/templates/GeneralTemplate';
import LifeSciencesTemplate from './components/templates/LifeSciencesTemplate';
import SequencingGenomicTemplate from './components/templates/SequencingGenomicTemplate';
import logo from './logo.png';

// Import the generateReadmeContent function from the output folder
import { generatePlainTextReadmeContent } from './components/output/generateReadmeContent'; 

// Template options with descriptions
const templates = [
  {
    name: 'General Template',
    value: 'general',
    description: 'The General Template is suitable for most datasets across disciplines. It includes sections like dataset identification, author information, licensing, methodological details, file overview, and funder information.',
  },
  {
    name: 'Life Sciences Template',
    value: 'life_sciences',
    description: 'The Life Sciences Template is tailored for biological and life sciences research, and includes fields for biological sample information, genetic data, and imaging data.',
  },
  {
    name: 'Sequencing-Genomic Template',
    value: 'sequencing_genomic',
    description: 'The Sequencing-Genomic Template is specific to genomic studies and includes MiMARKS standards for sequencing (https://www.gensc.org/pages/standards-intro.html).',
  },
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('general');
  const [formData, setFormData] = useState({});
  const [selectedTemplateDescription, setSelectedTemplateDescription] = useState(templates[0].description);

  // Handle template selection change
  const handleTemplateChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTemplate(selectedValue);
    const selectedTemplate = templates.find((template) => template.value === selectedValue);
    setSelectedTemplateDescription(selectedTemplate.description);
  };

  // Update form data based on user input in different sections
  const updateFormData = (section, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: data,
    }));
  };

  // Export Plain Text file
  const exportPlainTextReadme = () => {
    const readmeContent = generatePlainTextReadmeContent(formData, selectedTemplate); // Pass the selectedTemplate
    const blob = new Blob([readmeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'README.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="app-container">
      <div className="left-column">
        <img src={logo} alt="Company Logo" className="logo" />

        {/* Form description and useful links */}
        <div className="form-description">
          <p>
            This README file generator is maintained by the Federated Research Data Repository (https://www.frdr-dfdr.ca/).
            This tool allows researchers and data depositors to identify and populate relevant information to describe and contextualize datasets.
            Exported as plain text (.txt), the README file is suitable to document data for FRDR or other repositories.
          </p>
          <p>
            <a href="https://www.frdr-dfdr.ca/repo/" target="_blank" rel="noopener noreferrer">FRDR repository</a> | 
            <a href="https://dmp-pgd.ca/" target="_blank" rel="noopener noreferrer">DMP assistant</a>
          </p>
          <p>
            Please be aware that you cannot save the work. Populate the form and export as plain text.
          </p>
        </div>

        {/* Template selector */}
        <div className="template-selector">
          <label>Select Template:</label>
          <select value={selectedTemplate} onChange={handleTemplateChange}>
            {templates.map((template) => (
              <option key={template.value} value={template.value}>
                {template.name}
              </option>
            ))}
          </select>

          {/* Display the description of the selected template */}
          <div className="template-description">
            <p>{selectedTemplateDescription}</p>
          </div>
        </div>
      </div>

      <div className="right-column">
        <h1 className="app-title">Readme file generator</h1>
        <div className="section-content">
          {selectedTemplate === 'general' && (
            <GeneralTemplate updateFormData={updateFormData} />
          )}
          {selectedTemplate === 'life_sciences' && (
            <LifeSciencesTemplate updateFormData={updateFormData} />
          )}
          {selectedTemplate === 'sequencing_genomic' && (
            <SequencingGenomicTemplate updateFormData={updateFormData} />
          )}
        </div>

        {/* Single button for Plain Text export */}
        <div className="button-group">
          <button onClick={exportPlainTextReadme} className="export-button">
            Export as Plain Text
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
