// Generate plain text README content based on collected data 
export const generatePlainTextReadmeContent = (formData) => {
  let readmeContent = 'README File\n\n';

  // Get the current date in YYYY-MM-DD format
  const today = new Date().toISOString().slice(0, 10);

  // Get the first author's name from the Author Information section
  const firstAuthor = formData['Author Information']?.authors?.[0]?.name || 'Unknown Author';

  // Add the line about who prepared the README file and the current date
  readmeContent += `This readme file was generated on ${today} by ${firstAuthor} using FRDR's README file generator (https://frdr-readme-generator.vercel.app/) \n\n`;
    
  Object.keys(formData).forEach((section) => {
    // Add section divider with a string of hashes and two spaces between sections
    readmeContent += '---------------------------\n';  
    
    // Check if the section is "Licensing Options" and replace its title
    if (section === 'Licensing Options') {
      readmeContent += 'ACCESS/SHARING INFORMATION\n\n';  // Custom section title for this case
    } else {
      // Print the default section title for all other sections
      readmeContent += `${section.toUpperCase()}\n\n`;
    }

    if (section === 'Dataset Identification') {
      readmeContent += `Title of the dataset: ${formData[section]?.title || 'N/A'}\n`;
      readmeContent += `Description: ${formData[section]?.description || 'N/A'}\n`;
      readmeContent += `Data collection start date: ${formData[section]?.startDate || 'N/A'}\n`;
      readmeContent += `Data collection end date: ${formData[section]?.endDate || 'N/A'}\n\n`;

      // Include geographic location fields
      readmeContent += `Geographic location of data collection:\n`;
      readmeContent += `  City/region: ${formData[section]?.cityRegion || 'N/A'}\n`;
      readmeContent += `  Province: ${formData[section]?.province || 'N/A'}\n`;
      readmeContent += `  Country: ${formData[section]?.country || 'N/A'}\n`;
      readmeContent += `  Latitude, longitude: ${formData[section]?.latitudeLongitude || 'N/A'}\n\n`;
    }

    // Handle Funder Information Section
    if (section === 'Funder Information') {
      if (formData[section]?.funders?.length) {
        formData[section].funders.forEach((funder, index) => {
          readmeContent += `Funder ${index + 1}:\n`;
          readmeContent += `  Funder: ${funder.funder || 'N/A'}\n`;
          readmeContent += `  Award Number: ${funder.awardNumber || 'N/A'}\n`;
          readmeContent += `  Award Title: ${funder.awardTitle || 'N/A'}\n`;
          readmeContent += `  Year: ${funder.year || 'N/A'}\n\n`;
        });
      } else {
        readmeContent += `Funder Information: N/A\n\n`;
      }
    } 

    if (section === 'Licensing Options') {
      const license = formData[section]?.selectedLicense === 'other'
        ? formData[section]?.customLicenseDescription
        : formData[section]?.selectedLicense || 'N/A';
      readmeContent += `Licence: ${license}\n`;
      readmeContent += `Licence Description: ${formData[section]?.licenseDescription || 'N/A'}\n`;
      readmeContent += `Was data derived from another source?: ${formData[section]?.derivedFromSource || 'N/A'}\n`;
    
      if (formData[section]?.derivedFromSource === 'yes') {
        readmeContent += `Attribution information of previous source: ${formData[section]?.attributionInfo || 'N/A'}\n`;
      }

      readmeContent += `Are the data sensitive or derived from autochthonous population?: ${formData[section]?.sensitiveData || 'N/A'}\n\n`;

      // New section for "Links to publications"
      if (formData[section]?.publicationLinks?.length) {
        readmeContent += `Links to publications that cite or use the data:\n`;
        formData[section].publicationLinks.forEach((link, index) => {
          readmeContent += `  Publication ${index + 1}: ${link || 'N/A'}\n`;
        });
      } else {
        readmeContent += `Links to publications that cite or use the data: N/A\n\n`;
      }
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

      // New field for folder/files naming convention
      readmeContent += `Folder/files naming convention: ${formData[section]?.folderNamingConvention || 'N/A'}\n\n`;
      
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
      
      readmeContent += `MICROSCOPY/IMAGING DATA\n`;
      readmeContent += `Microscopy Type: ${formData[section]?.microscopyType || 'N/A'}\n`;
      readmeContent += `Imaging Parameters: ${formData[section]?.imagingParameters || 'N/A'}\n`;
      readmeContent += `Staining/Labeling Method: ${formData[section]?.stainingMethod || 'N/A'}\n\n`;
    }

    // Handle Genomic Standards section (Specific to MIMARKS)
    else if (section === 'Genomic Standards') {
      readmeContent += `Sample type: ${formData[section]?.samp_type || 'N/A'}\n`;
      readmeContent += `Temperatuce (C): ${formData[section]?.temp || 'N/A'}\n`;
      readmeContent += `Target Gene: ${formData[section]?.target_gene || 'N/A'}\n`;
      readmeContent += `PCR Primers: ${formData[section]?.pcr_primers || 'N/A'}\n`;
      readmeContent += `Sequencing Method: ${formData[section]?.seq_meth || 'N/A'}\n`;
      readmeContent += `PCR conditions: ${formData[section]?.pcr_cond || 'N/A'}\n`;
      readmeContent += `Nucleic acid amplification method: ${formData[section]?.nucl_acid_amp || 'N/A'}\n`;
      readmeContent += `Chimera checking tool: ${formData[section]?.chimera_check || 'N/A'}\n`;
      readmeContent += `Sequence quality check: ${formData[section]?.seq_quality_check || 'N/A'}\n`;
    }

    // Handle Geographic Information section
    else if (section === 'Geographic Information') {
      
      // Geographic Coverage
      readmeContent += `Geographic Coverage:\n`;
      readmeContent += `  Place Name: ${formData[section]?.placeName || 'N/A'}\n`;
      readmeContent += `  Country: ${formData[section]?.country || 'N/A'}\n`;
      readmeContent += `  Province/Territory/State: ${formData[section]?.province || 'N/A'}\n`;
      readmeContent += `  City: ${formData[section]?.city || 'N/A'}\n`;
      readmeContent += `  Latitude: ${formData[section]?.latitude || 'N/A'}\n`;
      readmeContent += `  Longitude: ${formData[section]?.longitude || 'N/A'}\n`;
      readmeContent += `  Geographic Bounding Box:\n`;
      readmeContent += `    West Longitude: ${formData[section]?.westLongitude || 'N/A'}\n`;
      readmeContent += `    East Longitude: ${formData[section]?.eastLongitude || 'N/A'}\n`;
      readmeContent += `    North Latitude: ${formData[section]?.northLatitude || 'N/A'}\n`;
      readmeContent += `    South Latitude: ${formData[section]?.southLatitude || 'N/A'}\n\n`;

      // Spatial Resolution
      readmeContent += `Spatial Resolution:\n`;
      readmeContent += `  Granularity: ${formData[section]?.granularity || 'N/A'}\n`;
      readmeContent += `  Area Size (km²): ${formData[section]?.areaSize || 'N/A'}\n\n`;

      // Satellite Information
      readmeContent += `Satellite Information:\n`;
      readmeContent += `  Satellite Name: ${formData[section]?.satelliteName || 'N/A'}\n`;
      readmeContent += `  Sensor Name: ${formData[section]?.sensorName || 'N/A'}\n`;
      readmeContent += `  Orbit Type: ${formData[section]?.orbitType || 'N/A'}\n`;
      readmeContent += `  Spectral Bands Used: ${formData[section]?.spectralBands || 'N/A'}\n\n`;

      // Geospatial Data Formats
      readmeContent += `Geospatial Data Formats:\n`;
      readmeContent += `  Supported File Formats: ${formData[section]?.fileFormats || 'N/A'}\n`;
      readmeContent += `  Coordinate Reference System (CRS): ${formData[section]?.crs || 'N/A'}\n`;
      readmeContent += `  Spatial Accuracy: ${formData[section]?.spatialAccuracy || 'N/A'}\n`;
      readmeContent += `  Geospatial Metadata Standards: ${formData[section]?.metadataStandards || 'N/A'}\n\n`;

      // Geospatial Data Processing Information
      readmeContent += `Geospatial Data Processing Information:\n`;
      readmeContent += `  Software Used: ${formData[section]?.softwareUsed || 'N/A'}\n`;
      readmeContent += `  Processing Workflow: ${formData[section]?.processingWorkflow || 'N/A'}\n`;
      readmeContent += `  Quality Assurance/Quality Control (QA/QC): ${formData[section]?.qualityControl || 'N/A'}\n`;
      readmeContent += `  Data Normalization/Correction: ${formData[section]?.dataCorrection || 'N/A'}\n`;
      readmeContent += `  Derived Metrics: ${formData[section]?.derivedMetrics || 'N/A'}\n\n`;
    }

    // Catch-all section to ensure it doesn't duplicate Dataset Identification
    else if (section !== 'Dataset Identification' && section !== 'Funder Information') {
      Object.keys(formData[section]).forEach((field) => {
        readmeContent += `${field}: ${formData[section][field]}\n\n`;
      });
    }

    readmeContent += '\n'; // Ensure two spaces between sections
  });

  return readmeContent;
};
