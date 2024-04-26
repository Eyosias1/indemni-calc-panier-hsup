import React from 'react';
import FileUploadForm from './components/FileUploadForm'; // Ensure this path is correct
import InfoCard from './components/InfoCard'; // Import the InfoCard component
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <InfoCard />
      </div>
      <FileUploadForm />
    </div>
  );
}

export default App;

