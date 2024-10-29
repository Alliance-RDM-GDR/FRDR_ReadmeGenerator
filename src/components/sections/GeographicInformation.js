// components/sections/GeographicInformation.js
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getNames } from 'country-list'; // Import the list of country names
import '../../styles/GeographicInformation.css'; 

function GeographicInformation({ updateData }) {
  const [fields, setFields] = useState({
    // Geographic Coverage
    placeName: '',
    country: '',
    province: '',
    city: '',
    latitude: '',
    longitude: '',
    westLongitude: '',
    eastLongitude: '',
    northLatitude: '',
    southLatitude: '',

    // Spatial Resolution
    granularity: '',
    areaSize: '',

    // Satellite Information
    satelliteName: '',
    sensorName: '',
    orbitType: '',
    spectralBands: '',

    // Geospatial Data Formats
    fileFormats: '',
    crs: '',
    spatialAccuracy: '',
    metadataStandards: '',

    // Geospatial Data Processing Information
    softwareUsed: '',
    processingWorkflow: '',
    qualityControl: '',
    dataCorrection: '',
    derivedMetrics: ''
  });

  useEffect(() => {
    updateData(fields);
  }, [fields, updateData]);

  const handleInputChange = (field, value) => {
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  // Fetch country names using country-list library
  const countryOptions = getNames().map((country) => ({
    value: country,
    label: country,
  }));

  return (
    <div className="geographic-information">
      <h2>Geographic Information</h2>
      <hr />

      {/* Geographic Coverage */}
      <h3>Geographic Coverage</h3>
      <div className="geographic-grid">
        {/* Row 1: Place Name and Country */}
        <div className="field">
          <label>Place Name</label>
          <input
            type="text"
            placeholder="Enter the place name"
            value={fields.placeName}
            onChange={(e) => handleInputChange('placeName', e.target.value)}
          />
        </div>
        <div className="column">
          <label>Country</label>
          <Select
            options={countryOptions}
            placeholder="Select a country"
            onChange={(option) => handleInputChange('country', option.value)}
          />
        </div>

        {/* Row 2: Province/Territory/State and City */}
        <div className="field">
          <label>Province/Territory/State</label>
          <input
            type="text"
            placeholder="Enter the province or state"
            value={fields.province}
            onChange={(e) => handleInputChange('province', e.target.value)}
          />
        </div>
        <div className="field">
          <label>City</label>
          <input
            type="text"
            placeholder="Enter the city"
            value={fields.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
        </div>

        {/* Row 3: Latitude and Longitude */}
        <div className="field">
          <label>Latitude</label>
          <input
            type="text"
            placeholder="Enter the latitude"
            value={fields.latitude}
            onChange={(e) => handleInputChange('latitude', e.target.value)}
          />
        </div>
        <div className="field">
          <label>Longitude</label>
          <input
            type="text"
            placeholder="Enter the longitude"
            value={fields.longitude}
            onChange={(e) => handleInputChange('longitude', e.target.value)}
          />
        </div>
      </div>

      {/* Geographic Bounding Box */}
      <h4 className="geographic-bounding-box-title">Geographic Bounding Box</h4>
      <div className="geographic-bounding-box">
        <div className="field">
          <div className="field-group">
            <label>West Longitude</label>
            <input
              type="text"
              placeholder="Enter the west longitude"
              value={fields.westLongitude}
              onChange={(e) => handleInputChange('westLongitude', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>East Longitude</label>
            <input
              type="text"
              placeholder="Enter the east longitude"
              value={fields.eastLongitude}
              onChange={(e) => handleInputChange('eastLongitude', e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="field-group">
            <label>North Latitude</label>
            <input
              type="text"
              placeholder="Enter the north latitude"
              value={fields.northLatitude}
              onChange={(e) => handleInputChange('northLatitude', e.target.value)}
            />
          </div>
          <div className="field-group">
            <label>South Latitude</label>
            <input
              type="text"
              placeholder="Enter the south latitude"
              value={fields.southLatitude}
              onChange={(e) => handleInputChange('southLatitude', e.target.value)}
            />
          </div>
        </div>
      </div>


      {/* Spatial Resolution */}
      <h3>Spatial Resolution</h3>
      <div className="field">
        <label>Granularity</label>
        <input
          type="text"
          placeholder="Enter the granularity (e.g., pixel size)"
          value={fields.granularity}
          onChange={(e) => handleInputChange('granularity', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Area Size (km²)</label>
        <input
          type="text"
          placeholder="Enter the total area size"
          value={fields.areaSize}
          onChange={(e) => handleInputChange('areaSize', e.target.value)}
        />
      </div>

      {/* Satellite Information */}
      <h3>Satellite Information</h3>
      <div className="field">
        <label>Satellite Name</label>
        <input
          type="text"
          placeholder="Enter the satellite name"
          value={fields.satelliteName}
          onChange={(e) => handleInputChange('satelliteName', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Sensor Name</label>
        <input
          type="text"
          placeholder="Enter the sensor name"
          value={fields.sensorName}
          onChange={(e) => handleInputChange('sensorName', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Orbit Type</label>
        <input
          type="text"
          placeholder="Enter the orbit type (e.g., polar, geostationary)"
          value={fields.orbitType}
          onChange={(e) => handleInputChange('orbitType', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Spectral Bands Used</label>
        <input
          type="text"
          placeholder="List the spectral bands used (e.g., Red, NIR, Blue)"
          value={fields.spectralBands}
          onChange={(e) => handleInputChange('spectralBands', e.target.value)}
        />
      </div>

      {/* Geospatial Data Formats */}
      <h3>Geospatial Data Formats</h3>
      <div className="field">
        <label>Supported File Formats</label>
        <input
          type="text"
          placeholder="List the supported file formats (e.g., GeoTIFF, SHP)"
          value={fields.fileFormats}
          onChange={(e) => handleInputChange('fileFormats', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Coordinate Reference System (CRS)</label>
        <input
          type="text"
          placeholder="Enter the coordinate reference system (e.g., EPSG:4326)"
          value={fields.crs}
          onChange={(e) => handleInputChange('crs', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Spatial Accuracy</label>
        <input
          type="text"
          placeholder="Describe the spatial accuracy (e.g., 1-meter)"
          value={fields.spatialAccuracy}
          onChange={(e) => handleInputChange('spatialAccuracy', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Geospatial Metadata Standards</label>
        <input
          type="text"
          placeholder="Enter metadata standards (e.g., ISO 19115)"
          value={fields.metadataStandards}
          onChange={(e) => handleInputChange('metadataStandards', e.target.value)}
        />
      </div>

      {/* Geospatial Data Processing Information */}
      <h3>Geospatial Data Processing Information</h3>
      <div className="field">
        <label>Software Used</label>
        <input
          type="text"
          placeholder="List the software used for processing"
          value={fields.softwareUsed}
          onChange={(e) => handleInputChange('softwareUsed', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Processing Workflow</label>
        <textarea
          type="textarea-input"
          rows="4"
          placeholder="Describe the data processing workflow"
          value={fields.processingWorkflow}
          onChange={(e) => handleInputChange('processingWorkflow', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Quality Assurance/Quality Control (QA/QC)</label>
        <textarea
          type="textarea-input"
          rows="4"
          placeholder="Describe QA/QC measures"
          value={fields.qualityControl}
          onChange={(e) => handleInputChange('qualityControl', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Data Normalization/Correction</label>
        <textarea
          type="textarea-input"
          rows="4"
          placeholder="Describe any data correction or normalization techniques"
          value={fields.dataCorrection}
          onChange={(e) => handleInputChange('dataCorrection', e.target.value)}
        />
      </div>
      <div className="field">
        <label>Derived Metrics</label>
        <textarea
          type="textarea-input"
          rows="4"
          placeholder="List derived metrics (e.g., NDVI, EVI)"
          value={fields.derivedMetrics}
          onChange={(e) => handleInputChange('derivedMetrics', e.target.value)}
        />
      </div>
    </div>
  );
}

export default GeographicInformation;
