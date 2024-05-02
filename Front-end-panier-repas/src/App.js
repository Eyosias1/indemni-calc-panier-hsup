import React from 'react';
import FileUploadForm from './components/FileUploadForm'; // Ensure this path is correct
import InfoCard from './components/InfoCard'; // Import the InfoCard component
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoCard />
      <FileUploadForm />
    </div>
  );
}

export default App;

