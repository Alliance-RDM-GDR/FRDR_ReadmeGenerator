import React, { useState, useEffect } from 'react';
import DatasetIdentification from '../sections/DatasetIdentification';
import AuthorInformation from '../sections/AuthorInformation';
import LicensingOptions from '../sections/LicensingOptions';
import MethodologicalDetails from '../sections/MethodologicalDetails';
import FileOverview from '../sections/FileOverview';

function GeneralTemplate({ updateFormData }) {
  const [datasetIdentificationData, setDatasetIdentificationData] = useState({});
  const [authorInformationData, setAuthorInformationData] = useState({});
  const [licensingOptionsData, setLicensingOptionsData] = useState({});
  const [methodologicalDetailsData, setMethodologicalDetailsData] = useState({});
  const [fileOverviewData, setFileOverviewData] = useState({});

  // Whenever one section updates, we notify the parent component
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

  return (
    <div>
      <DatasetIdentification updateData={setDatasetIdentificationData} />
      <AuthorInformation updateData={setAuthorInformationData} />
      <LicensingOptions updateData={setLicensingOptionsData} />
      <MethodologicalDetails updateData={setMethodologicalDetailsData} />
      <FileOverview updateData={setFileOverviewData} />
    </div>
  );
}

export default GeneralTemplate;
