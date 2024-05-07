import React, { useState } from 'react';
import './FileUploadForm.css'; // Make sure to import the CSS file
function FileUploadForm() {
  const [file, setCSVFile] = useState(null);
  const [fichTxt, setTxtFil] = useState(null);
  const [fullName, setFullName] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [PanRepas, setPanier] = useState('');
  const [downloadLink, setDownloadLink] = useState(null); // State to hold the download link
  const [errorFilUpload, setError] = useState(false);

  const resetForm = () => {
    setCSVFile(null);
    setTxtFil(null);
    setFullName('');
    setHourlyRate('');
    setPanier('');
    setDownloadLink(null);
    setError(false);
  };
  const handleFileChange = (e) => {
    setCSVFile(e.target.files[0]);
    setError(false);
  };

  const handleFileTxtChange = (e) => {
    setTxtFil(e.target.files[0]);
  };

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleHourlyRateChange = (e) => setHourlyRate(e.target.value);
  const handlePanierChange = (e) => setPanier(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullname', fullName);
    formData.append('hourlyrate', hourlyRate);
    formData.append('PanRepas', PanRepas);

    // Check if neither a CSV file nor a TXT file is uploaded
    if(!file && !fichTxt) {
      setError(true);
      return;
    }
    // Check if both a CSV file and a TXT file are uploaded
    if(fichTxt) {
      formData.append('txtfile', fichTxt);
    }
    if (file) {
      formData.append('csvfile', file);
    }
    try { // 
      const response = await fetch('https://indemni-serv-side.onrender.com/process-csv', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Network response was not ok.');

      // Get the filename from response headers if available
      const filename = `${fullName}_Report.pdf`;

      // Create a download link dynamically
      const blob = await response.blob();
      if (!blob) {
        throw new Error('Blob object is null or undefined');
      }
      const downloadUrl = window.URL.createObjectURL(blob);
      setDownloadLink({ url: downloadUrl, filename });
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
    setError(false);
  };

  return (
    <div className='card2 section'>
    <h3> Calculate: </h3>
       <div className='form-container'>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" value={fullName} onChange={handleFullNameChange} placeholder="Nom et Prénom" required />
          </div>
          <div className="form-group val-use number-input">
            <input type="number" value={hourlyRate} onChange={handleHourlyRateChange} placeholder="Taux : e.g 11.07 €" required />
            <input type="number" value={PanRepas} onChange={handlePanierChange} placeholder="Ind repas : e.g 13.80€" required />
          </div>
          <div className="form-group val-use" >
            <div className={errorFilUpload && !file ? 'row error-border' : 'row '}>
              <label>fichier .csv :</label>
              <input type="file" onChange={handleFileChange} accept=".csv"  />
            </div>
            <div className={errorFilUpload && !fichTxt ? 'row error-border' : 'row '}>
              <label>fichier .txt :</label>
              <input type="file" onChange={handleFileTxtChange} accept=".txt" />
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Generate Report</button>
          </div>
          </form>
          {downloadLink && (
            <a href={downloadLink.url} download={downloadLink.filename} className="download-link" onClick={resetForm}>
          Download PDF
            </a>
          )}
        </div>
    </div>
  );
}

export default FileUploadForm;
