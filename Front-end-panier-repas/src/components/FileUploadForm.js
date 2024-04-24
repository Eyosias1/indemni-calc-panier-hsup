import React, { useState } from 'react';
import './FileUploadForm.css'; // Make sure to import the CSS file
function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [PanRepas, setPanier] = useState('');
  const [downloadLink, setDownloadLink] = useState(null); // State to hold the download link

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleHourlyRateChange = (e) => setHourlyRate(e.target.value);
  const handlePanierChange = (e) => setPanier(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('csvfile', file);
    formData.append('fullname', fullName);
    formData.append('hourlyrate', hourlyRate);
    formData.append('PanRepas', PanRepas);

    try {
      const response = await fetch('https://indemniter-calculator-6c1f1eb3bb5e.herokuapp.com//process-csv', {
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
      // const blob = await response.blob();
      // const downloadUrl = window.URL.createObjectURL(blob);
      // const link = document.createElement('a');
      // link.href = downloadUrl;
      // link.download = `${fullName}_Report.pdf`;
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" value={fullName} onChange={handleFullNameChange} placeholder="Nom et Prénom" required />
        </div>
        <div className="form-group val-use">
          <input type="text" value={hourlyRate} onChange={handleHourlyRateChange} placeholder="Taux : e.g 11.07 €" />
          <input type="text" value={PanRepas} onChange={handlePanierChange} placeholder="Ind repas : e.g 13.80€" />
        </div>
        <div className="form-group">
          <input type="file" onChange={handleFileChange} accept=".csv" required />
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
