import React, { useState } from 'react';
import './styles/App.css';
import GeneralTemplate from './components/templates/GeneralTemplate';
import LifeSciencesTemplate from './components/templates/LifeSciencesTemplate';
import SequencingGenomicTemplate from './components/templates/SequencingGenomicTemplate';
import logo from './logo.png';

// Template options with descriptions
const templates = [
  {
    name: 'General Template',
    value: 'general',
    description: 'The General Template is suitable for most datasets across disciplines. It includes sections like dataset identification, author information, licensing, methodological details, and file overview.',
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

// Generate plain text README content based on collected data
const generatePlainTextReadmeContent = () => {
  let readmeContent = 'README File\n\n';

  Object.keys(formData).forEach((section) => {
    // Add section divider with a string of hashes and two spaces between sections
    readmeContent += '---------------------------\n';
    readmeContent += `${section.toUpperCase()}\n\n`;

    if (section === 'Dataset Identification') {
      readmeContent += `Title of the dataset: ${formData[section]?.title || 'N/A'}\n`;
      readmeContent += `Description: ${formData[section]?.description || 'N/A'}\n`;
      readmeContent += `Data collection start date: ${formData[section]?.startDate || 'N/A'}\n`;
      readmeContent += `Data collection end date: ${formData[section]?.endDate || 'N/A'}\n\n`;
    }

    if (section === 'Licensing Options') {
      const license = formData[section]?.selectedLicense === 'other'
        ? formData[section]?.customLicenseDescription
        : formData[section]?.selectedLicense || 'N/A';
      readmeContent += `Licence: ${license}\n`;
      readmeContent += `Licence Description: ${formData[section]?.licenseDescription || 'N/A'}\n`;
      readmeContent += `Was data derived from another source?: ${formData[section]?.derivedFromSource || 'N/A'}\n`;
      readmeContent += `Are the data sensitive or derived from autochthonous population?: ${formData[section]?.sensitiveData || 'N/A'}\n\n`;
    }

    // Handle Methodological Details section
    else if (section === 'Methodological Details') {
      readmeContent += `Methods for data collection: ${formData[section]?.methodsForDataCollection || 'N/A'}\n\n`;

      if (formData[section]?.collectionSoftwareFields?.length) {
        readmeContent += `Software/instrument used for data collection:\n`;
        formData[section].collectionSoftwareFields.forEach((field) => {
          readmeContent += `- Software: ${field.software} (v${field.version}) - Purpose: ${field.purpose}\n`;
        });
      } else {
        readmeContent += `Software/instrument used for data collection: N/A\n`;
      }

      readmeContent += `\nMethods for processing the data: ${formData[section]?.methodsForDataProcessing || 'N/A'}\n\n`;

      if (formData[section]?.processingSoftwareFields?.length) {
        readmeContent += `Software used for data processing:\n`;
        formData[section].processingSoftwareFields.forEach((field) => {
          readmeContent += `- Software: ${field.software} (v${field.version}) - Purpose: ${field.purpose}\n`;
        });
      } else {
        readmeContent += `Software used for data processing: N/A\n`;
      }

      readmeContent += `\nEnvironmental/experimental conditions: ${formData[section]?.environmentalConditions || 'N/A'}\n\n`;

      if (formData[section]?.contributors?.length) {
        readmeContent += `Contributors:\n`;
        formData[section].contributors.forEach((contributor) => {
          readmeContent += `- ${contributor.role}: ${contributor.name}\n`;
        });
      } else {
        readmeContent += `Contributors: N/A\n`;
      }
    }

    // Handle Author Information section
    else if (section === 'Author Information') {
      if (formData[section]?.authors?.length) {
        formData[section].authors.forEach((author, index) => {
          readmeContent += `Author ${index + 1}:\n`;
          readmeContent += `  Name: ${author.name || 'N/A'}\n`;
          readmeContent += `  Institution: ${author.institution || 'N/A'}\n`;
          readmeContent += `  Email: ${author.email || 'N/A'}\n`;
          readmeContent += `  ORCID ID: ${author.orcid || 'N/A'}\n`;
        });
      } else {
        readmeContent += `Author Information: N/A\n`;
      }
    }

    // Handle File Overview section
    else if (section === 'File Overview') {
      if (formData[section]?.fileOverviewFields?.length) {
        readmeContent += `Files Overview:\n`;
        formData[section].fileOverviewFields.forEach((field) => {
          readmeContent += `- Item Type: ${field.itemType}\n  Name: ${field.name}\n  Description: ${field.description}\n`;
        });
      } else {
        readmeContent += `Files Overview: N/A\n`;
      }

      readmeContent += `Relationship between files: ${formData[section]?.relationshipBetweenFiles || 'N/A'}\n`;
      readmeContent += `Additional related data: ${formData[section]?.additionalRelatedData || 'N/A'}\n\n`;
    }

    // Handle Life Science Details section
    else if (section === 'Life Science Details') {
      readmeContent += `BIOLOGICAL SAMPLE INFORMATION\n`;
      readmeContent += `Species: ${formData[section]?.species || 'N/A'}\n`;
      readmeContent += `Sample Type: ${formData[section]?.sampleType || 'N/A'}\n`;
      readmeContent += `Sample Preservation Method: ${formData[section]?.samplePreservationMethod || 'N/A'}\n`;
      readmeContent += `Biological Relevance: ${formData[section]?.biologicalRelevance || 'N/A'}\n\n`;

      readmeContent += `GENETIC INFORMATION\n`;
      readmeContent += `Genetic Modification Status: ${formData[section]?.geneticModificationStatus || 'N/A'}\n`;
      readmeContent += `Genomic Data: ${formData[section]?.genomicData || 'N/A'}\n`;
      readmeContent += `Transgenic Organism Information: ${formData[section]?.transgenicOrganismInfo || 'N/A'}\n\n`;

      readmeContent += `MICROSCOPY/IMAGING DATA\n`;
      readmeContent += `Microscopy Type: ${formData[section]?.microscopyType || 'N/A'}\n`;
      readmeContent += `Imaging Parameters: ${formData[section]?.imagingParameters || 'N/A'}\n`;
      readmeContent += `Staining/Labeling Method: ${formData[section]?.stainingMethod || 'N/A'}\n\n`;
    }

    // Handle Genomic Standards section (Specific to MIMARKS)
    else if (section === 'Genomic Standards') {
      readmeContent += `Sequencing Method: ${formData[section]?.sequencingMethod || 'N/A'}\n`;
      readmeContent += `Target Gene: ${formData[section]?.targetGene || 'N/A'}\n`;
      readmeContent += `Amplification Primers: ${formData[section]?.amplificationPrimers || 'N/A'}\n`;
      readmeContent += `Sequencing Platform: ${formData[section]?.sequencingPlatform || 'N/A'}\n`;
      readmeContent += `Read Length: ${formData[section]?.readLength || 'N/A'}\n\n`;
    }

    // Catch-all section (ensure it doesn't duplicate Dataset Identification)
    else if (section !== 'Dataset Identification') {
      Object.keys(formData[section]).forEach((field) => {
        readmeContent += `${field}: ${formData[section][field]}\n\n`;
      });
    }

    readmeContent += '\n'; // Ensure two spaces between sections
  });

  return readmeContent;
};

  // Export Plain Text file
  const exportPlainTextReadme = () => {
    const readmeContent = generatePlainTextReadmeContent();
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
