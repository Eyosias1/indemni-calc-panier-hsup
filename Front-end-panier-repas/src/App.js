import React, {useState} from 'react';
import FileUploadForm from './components/FileUploadForm'; // Ensure this path is correct
import InfoCard from './components/InfoCard'; // Import the InfoCard component
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import PaymentComponent from './components/PaymentComponent';
import "./App.css";
function App() {
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Function to handle payment completion
  const handlePaymentCompletion = () => {
    setPaymentComplete(true);
  };
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {paymentComplete ? (
        <FileUploadForm />
      ): (
        <React.Fragment>
          <InfoCard />
          <PaymentComponent onPaymentComplete={handlePaymentCompletion} />
        </React.Fragment>
      )}
      <Contact />
    </div>
  );
}

export default App;

