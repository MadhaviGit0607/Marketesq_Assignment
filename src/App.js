import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import OrderComplete from './components/OrderComplete';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  const [bookingData, setBookingData] = useState(null);
  const handleBookingComplete = (data) => {
    setBookingData(data);
  };

  return (
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booking"
            element={<BookingForm onBookingComplete={handleBookingComplete} />}
          />
          <Route
            path="/order-complete"
            element={<OrderComplete bookingData={bookingData} />}
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;