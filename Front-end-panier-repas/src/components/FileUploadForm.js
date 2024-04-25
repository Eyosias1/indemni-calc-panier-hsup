import React, { useState } from 'react';
import './FileUploadForm.css'; // Make sure to import the CSS file
function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [fichTxt, setTxtFil] = useState(null);
  const [fullName, setFullName] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [PanRepas, setPanier] = useState('');
  const [downloadLink, setDownloadLink] = useState(null); // State to hold the download link

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleFileTxtChange = (e) => setTxtFil(e.target.files[1]);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleHourlyRateChange = (e) => setHourlyRate(e.target.value);
  const handlePanierChange = (e) => setPanier(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('csvfile', file);
    formData.append('txtfile', fichTxt);
    formData.append('fullname', fullName);
    formData.append('hourlyrate', hourlyRate);
    formData.append('PanRepas', PanRepas);

    try {
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
  };

  return (
    <div className='form-container'>
      <h1 > Calcul d'Indémnités Panier repas heures sup: </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" value={fullName} onChange={handleFullNameChange} placeholder="Nom et Prénom" required />
        </div>
        <div className="form-group val-use">
          <input type="text" value={hourlyRate} onChange={handleHourlyRateChange} placeholder="Taux : e.g 11.07 €" />
          <input type="text" value={PanRepas} onChange={handlePanierChange} placeholder="Ind repas : e.g 13.80€" />
        </div>
        <div className="form-group val-use" >
          <div className='row'>
            <label>fichier .csv :</label>
            <input type="file" onChange={handleFileChange} accept=".csv" />
          </div>
          <div className='row'>
            <label>fichier .txt :</label>
            <input type="file" onChange={handleFileTxtChange} accept=".txt"  />
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Generate Report</button>
        </div>
      </form>
      {downloadLink && (
        <a href={downloadLink.url} download={downloadLink.filename} className="download-link">
          Download PDF
        </a>
      )}
    </div>
  );
}

export default FileUploadForm;
