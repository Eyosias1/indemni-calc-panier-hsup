import React, {useState, useEffect} from 'react';
import FileUploadForm from './components/FileUploadForm'; // Ensure this path is correct
import InfoCard from './components/InfoCard'; // Import the InfoCard component
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import PaymentComponent from './components/PaymentComponent';
import Login from './components/Login';
import SignIn from './components/UserRegistration';
import axios from 'axios';
import "./App.css";
function App() {
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the JWT token is present in localStorage
    const token = localStorage.getItem('token');
    const isLoggedIn = token !== null; // Check if token exists
    setIsLoggedIn(isLoggedIn);

    // If user is logged in (token exists), check payment completion
  if (isLoggedIn) {
    const userEmail = localStorage.getItem('userEmail');
    handlePaymentCompletion(userEmail);
  }
  }, []);
  // Function to handle payment completion
  const handlePaymentCompletion = async (userEmail) => {
    try {
      // Make a PUT request to update the payment status
      const response = await axios.get(`https://cid-server-side.onrender.com/users/${userEmail}/payment`);
      // response.data should be a boolean indicating the success of the payment update
      if (response.data.paymentComplete === true) {
        setPaymentComplete(true);
        console.log("Payment status updated to complete.");
      } else {
        setPaymentComplete(false);
        console.error("Failed to update payment status.");
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      setPaymentComplete(false); // Assuming false as default if there's an error
    }
  };
  const handleLoginSuccess = (userEmail) => {
    setIsLoggedIn(true);
    localStorage.setItem('userEmail', userEmail);
    handlePaymentCompletion(userEmail);
  };
  return (
    <div className="App">
      <header className='App-header'>
        <Navbar />
        <Hero />
        <InfoCard />
        {isLoggedIn ? (
          <React.Fragment>
            {paymentComplete ?
            (
              <React.Fragment>
                <FileUploadForm />
              </React.Fragment>
              ) :
            (
              <React.Fragment>
                <PaymentComponent  />
              </React.Fragment>
            )}
          </React.Fragment>
          ) : (
            <React.Fragment>
              <Login onLoginSuccess={handleLoginSuccess} />
              <SignIn onLoginSuccess={handleLoginSuccess} />
            </React.Fragment>
          )}
        <Contact />
      </header>
    </div>
  );
}

export default App;

