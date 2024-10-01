// components/templates/LifeSciencesTemplate.js
import React, { useState, useEffect } from 'react';
import DatasetIdentification from '../sections/DatasetIdentification';
import AuthorInformation from '../sections/AuthorInformation';
import LicensingOptions from '../sections/LicensingOptions';
import MethodologicalDetails from '../sections/MethodologicalDetails';
import FileOverview from '../sections/FileOverview';
import LifeScienceDetails from '../sections/LifeScienceDetails'; // Import the new section

function LifeSciencesTemplate({ updateFormData }) {
  const [datasetIdentificationData, setDatasetIdentificationData] = useState({});
  const [authorInformationData, setAuthorInformationData] = useState({});
  const [licensingOptionsData, setLicensingOptionsData] = useState({});
  const [methodologicalDetailsData, setMethodologicalDetailsData] = useState({});
  const [fileOverviewData, setFileOverviewData] = useState({});
  const [lifeScienceDetailsData, setLifeScienceDetailsData] = useState({}); // New state

  // Update parent component with section data
  useEffect(() => {
    updateFormData('Dataset Identification', datasetIdentificationData);
  }, [datasetIdentificationData, updateFormData]);

  useEffect(() => {
    updateFormData('Author Information', authorInformationData);
  }, [authorInformationData, updateFormData]);

  useEffect(() => {
    updateFormData('Licensing Options', licensingOptionsData);
  }, [licensingOptionsData, updateFormData]);

  useEffect(() => {
    updateFormData('Methodological Details', methodologicalDetailsData);
  }, [methodologicalDetailsData, updateFormData]);

  useEffect(() => {
    updateFormData('File Overview', fileOverviewData);
  }, [fileOverviewData, updateFormData]);

  useEffect(() => {
    updateFormData('Life Science Details', lifeScienceDetailsData); // New section data
  }, [lifeScienceDetailsData, updateFormData]);

  return (
    <div>
      <DatasetIdentification updateData={setDatasetIdentificationData} />
      <AuthorInformation updateData={setAuthorInformationData} />
      <LicensingOptions updateData={setLicensingOptionsData} />
      <MethodologicalDetails updateData={setMethodologicalDetailsData} />
      <FileOverview updateData={setFileOverviewData} />
      <LifeScienceDetails updateData={setLifeScienceDetailsData} /> {/* Render new section */}
    </div>
  );
}

export default LifeSciencesTemplate;
