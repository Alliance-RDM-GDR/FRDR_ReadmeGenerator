import React, { useState, useEffect } from 'react';
import '../../styles/GenomicStandards.css';

function GenomicStandards({ updateData }) {
  const [fields, setFields] = useState({
    samp_name: '',
    pcr_primers: '',
    nucl_acid_amp: '',
    seq_meth: '',
    seq_platform_version: '', // New field for sequencing platform version
    target_subfragment: '',
    temp: '',
    pcr_cond: '',
    nucl_acid_ext: '',
    read_count: '', // New field for Read Count/Sequence Depth
    assembly_version: '', // New field for Assembly/Annotation Version
    chimera_check: '',
    seq_quality_check: '',
    rel_to_oxygen: '',
    biotic_relationship: '',
    metadata_completeness: '', // New field for metadata standard compliance
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

  return (
    <div className="genomic-standards">
      <h2>Genomic Standards (MIMARKS-C)</h2>
      <hr />
      <div className="field">
        <label>Sample Name:</label>
        <input type="text" value={fields.samp_name} onChange={(e) => handleInputChange('samp_name', e.target.value)} />
      </div>
      <div className="field">
        <label>PCR Primers:</label>
        <input type="text" value={fields.pcr_primers} onChange={(e) => handleInputChange('pcr_primers', e.target.value)} />
      </div>
      <div className="field">
        <label>Target Gene/Fragment:</label>
        <input type="text" value={fields.target_subfragment} onChange={(e) => handleInputChange('target_subfragment', e.target.value)} />
      </div>
      <div className="field">
        <label>Sequencing Method:</label>
        <input type="text" value={fields.seq_meth} onChange={(e) => handleInputChange('seq_meth', e.target.value)} />
      </div>
      <div className="field">
        <label>Sequencing Platform Version:</label> {/* New Field */}
        <input type="text" value={fields.seq_platform_version} onChange={(e) => handleInputChange('seq_platform_version', e.target.value)} />
      </div>
      <div className="field">
        <label>Read Count/Sequence Depth:</label> {/* New Field */}
        <input type="number" value={fields.read_count} onChange={(e) => handleInputChange('read_count', e.target.value)} />
      </div>
      <div className="field">
        <label>PCR Conditions:</label>
        <input type="text" value={fields.pcr_cond} onChange={(e) => handleInputChange('pcr_cond', e.target.value)} />
      </div>
      <div className="field">
        <label>Nucleic Acid Amplification Method:</label>
        <input type="text" value={fields.nucl_acid_amp} onChange={(e) => handleInputChange('nucl_acid_amp', e.target.value)} />
      </div>
      <div className="field">
        <label>Nucleic Acid Extraction Method:</label>
        <input type="text" value={fields.nucl_acid_ext} onChange={(e) => handleInputChange('nucl_acid_ext', e.target.value)} />
      </div>
      <div className="field">
        <label>Chimera Checking Tool:</label>
        <input type="text" value={fields.chimera_check} onChange={(e) => handleInputChange('chimera_check', e.target.value)} />
      </div>
      <div className="field">
        <label>Sequence Quality Check:</label>
        <input type="text" value={fields.seq_quality_check} onChange={(e) => handleInputChange('seq_quality_check', e.target.value)} />
      </div>
      <div className="field">
        <label>Environmental Temperature (C):</label>
        <input type="number" value={fields.temp} onChange={(e) => handleInputChange('temp', e.target.value)} />
      </div>
     
    </div>
  );
}

export default GenomicStandards;
