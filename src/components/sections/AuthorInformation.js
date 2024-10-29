import React, { useState, useEffect } from 'react';
import '../../styles/AuthorInformation.css'; // Ensure the path is correct

function AuthorInformation({ updateData }) {
  const [authors, setAuthors] = useState([{ name: '', institution: '', email: '', orcid: '' }]);

  // Update the parent component whenever the authors change
  useEffect(() => {
    updateData({ authors });
  }, [authors, updateData]);

  // Add a new author
  const addAuthor = () => {
    setAuthors([...authors, { name: '', institution: '', email: '', orcid: '' }]);
  };

  // Remove the last author
  const removeLastAuthor = () => {
    if (authors.length > 1) {
      setAuthors(authors.slice(0, -1));
    }
  };

  // Handle input changes for each author
  const handleInputChange = (index, field, value) => {
    const newAuthors = [...authors];
    newAuthors[index][field] = value;
    setAuthors(newAuthors);
  };

  return (
    <div className="author-information">
      <div className="section-title">
        <h2>Author Information</h2>
        <hr />
      </div>
      {authors.map((author, index) => (
        <div key={index} className="author-field">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              className="text-input"
              placeholder="Given name and family name"
              value={author.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Institution</label>
            <input
              type="text"
              className="text-input"
              placeholder="Name of the university or research center"
              value={author.institution}
              onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email:</label>
            <input
              type="email"
              className="text-input"
              placeholder="Contact email (Institutional preferred)"
              value={author.email}
              onChange={(e) => handleInputChange(index, 'email', e.target.value)}
            />
          </div>
          <div className="field">
            <label>ORCID ID</label>
            <input
              type="text"
              className="text-input"
              placeholder="ORCID full adress e.g https://orcid.org/0000-0002-1912-1764"
              value={author.orcid}
              onChange={(e) => handleInputChange(index, 'orcid', e.target.value)}
            />
          </div>
        </div>
      ))}

      <div className="button-group">
        <button onClick={addAuthor}>Add another author</button>
        <button onClick={removeLastAuthor}>Remove last</button>
      </div>
    </div>
  );
}

export default AuthorInformation;
