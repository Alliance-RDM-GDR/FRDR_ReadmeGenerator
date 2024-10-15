import React, { useState, useEffect } from 'react';
import DatasetIdentification from '../sections/DatasetIdentification';
import AuthorInformation from '../sections/AuthorInformation';
import FunderInformation from '../sections/FunderInformation';
import LicensingOptions from '../sections/LicensingOptions';
import MethodologicalDetails from '../sections/MethodologicalDetails';
import FileOverview from '../sections/FileOverview';
import GenomicStandards from '../sections/GenomicStandards'; // Import Genomic Standards

function SequencingGenomicTemplate({ updateFormData }) {
  const [datasetIdentificationData, setDatasetIdentificationData] = useState({});
  const [funderInformationData, setFunderInformationData] = useState({});
  const [authorInformationData, setAuthorInformationData] = useState({});
  const [licensingOptionsData, setLicensingOptionsData] = useState({});
  const [methodologicalDetailsData, setMethodologicalDetailsData] = useState({});
  const [fileOverviewData, setFileOverviewData] = useState({});
  const [genomicStandardsData, setGenomicStandardsData] = useState({}); // State for Genomic Standards

  // Whenever one section updates, we notify the parent component
  useEffect(() => {
    updateFormData('Dataset Identification', datasetIdentificationData);
  }, [datasetIdentificationData, updateFormData]);

  useEffect(() => {
    updateFormData('Funder Information', funderInformationData);
  }, [funderInformationData, updateFormData]);

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
    updateFormData('Genomic Standards', genomicStandardsData); // Send Genomic Standards data
  }, [genomicStandardsData, updateFormData]);

  return (
    <div>
      <DatasetIdentification updateData={setDatasetIdentificationData} />
      <FunderInformation updateData={setFunderInformationData} />
      <AuthorInformation updateData={setAuthorInformationData} />
      <LicensingOptions updateData={setLicensingOptionsData} />
      <MethodologicalDetails updateData={setMethodologicalDetailsData} />
      <FileOverview updateData={setFileOverviewData} />
      <GenomicStandards updateData={setGenomicStandardsData} /> {/* Add Genomic Standards section */}
    </div>
  );
}

export default SequencingGenomicTemplate;
