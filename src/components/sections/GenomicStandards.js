import React, { useState, useEffect } from 'react';
import '../../styles/GenomicStandards.css';

function GenomicStandards({ updateData }) {
  const [fields, setFields] = useState({
    samp_type: '',
    temp: '',
    target_gene: '',
    pcr_primers: '',
    seq_meth: '',
    pcr_cond: '',  
    nucl_acid_amp: '',
    chimera_check: '',
    seq_quality_check: '',    
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
        <label>Sample type</label>
        <input 
        type="text" 
        placeholder="Describe the sample/organ (e.g. lung, brain, kidney, boold cells)."
        value={fields.samp_type} 
        onChange={(e) => handleInputChange('samp_type', e.target.value)} />
      </div>
      <div className="field">
        <label>Temperature (C)</label>
        <input 
        type="number" 
        placeholder="Temperature of the sample at the time of sampling"
        value={fields.temp} 
        onChange={(e) => handleInputChange('temp', e.target.value)} />
      </div>
      <div className="field">
        <label>Target gene/fragment</label>
        <input 
        type="text" 
        placeholder="Identify the target gene."
        value={fields.target_gene} 
        onChange={(e) => handleInputChange('target_gene', e.target.value)} />
      </div>
      <div className="field">
        <label>PCR primers</label>
        <textarea
        type="textarea-input"
        rows="4" 
        placeholder="(uppercase letters) forward or reverse primers PCR primers used to amplify the sequence."
        value={fields.pcr_primers} 
        onChange={(e) => handleInputChange('pcr_primers', e.target.value)} />
      </div>
      <div className="field">
        <label>Sequencing method</label>
        <textarea
        type="textarea-input"
        rows="4"
        placeholder="Indicate the sequencing machine used and its version. When possible use the terms specified in http://purl.obolibrary.org/obo/OBI_0400103"
        value={fields.seq_meth} 
        onChange={(e) => handleInputChange('seq_meth', e.target.value)} />
      </div>      
      <div className="field">
        <label>PCR conditions</label>
        <textarea
        type="textarea-input"
        rows="4"
        placeholder="Describe the reaction conditions and components of PCR performed during library preparation"
        value={fields.pcr_cond} 
        onChange={(e) => handleInputChange('pcr_cond', e.target.value)} />
      </div>
      <div className="field">
        <label>Nucleic acid amplification method</label>
        <textarea
        type="textarea-input"
        rows="2" 
        placeholder="Provide a reference or a standard operating procedure (SOP) describing the enzymatic amplification (PCR, TMA, NASBA) of specific nucleic acids."
        value={fields.nucl_acid_amp} 
        onChange={(e) => handleInputChange('nucl_acid_amp', e.target.value)} />
      </div>
      <div className="field">
        <label>Chimera checking tool</label>
        <textarea
        type="textarea-input"
        rows="4" 
        placeholder="Tool used for chimera checking, including version number and parameters, to discover and remove chimeric sequences."
        value={fields.chimera_check} 
        onChange={(e) => handleInputChange('chimera_check', e.target.value)} />
      </div>
      <div className="field">
        <label>Sequence quality check</label>
        <textarea
        type="textarea-input"
        rows="4"
        placeholder="Indicate processes for quality check or if the data has undergone a manual editings (e.g. by inspecting the raw data or chromatograms). Applies only for sequences that are not submitted to SRA,ENA or DRA"
        value={fields.seq_quality_check} 
        onChange={(e) => handleInputChange('seq_quality_check', e.target.value)} />
      </div>      
     
    </div>
  );
}

export default GenomicStandards;
