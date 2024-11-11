import React, { useState } from 'react';
import BookingCard from './BookingCard';
import BookingForm from './BookingForm';
import Discover from './Discover';
import Services from './Services';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../styles.css';

const Home = () => {
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [checkIn, setCheckIn] = useState(''); 
  const [checkOut, setCheckOut] = useState(''); 

  
  const handleBookingComplete = (data) => {
    setBookingData(data);
    setIsBookingFormVisible(false);
  };
  const handleBookButtonClick = (bookingData) => {
    setBookingData(bookingData);
    setIsBookingFormVisible(true);
  };

  return (
    <div className="home">
      <div className="content-container">
        <div className="text-container">
          <h1>Work from Ladakh</h1>
          <p>India’s first true digital tourism ecosystem</p>
          <div className="social-icons">
            <a href="#facebook" className="icon">
              <FaFacebookF />
            </a>
            <a href="#instagram" className="icon">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3a0ZXrIZ78GatLO4qiv70f2t8c7jLB3Bvg&s"
            alt="Ladakh"
            className="banner-image"
          />
        </div>
      </div>
      <div className="container">  
        <BookingCard
          checkIn={checkIn}
          checkOut={checkOut}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
          onBookingComplete={handleBookButtonClick}
        />
        {isBookingFormVisible && (
          <BookingForm
            bookingData={{ ...bookingData, checkIn, checkOut }} 
            onBookingComplete={handleBookingComplete}
          />
        )}
        <Discover />
        <Services />
      </div>
    </div>
  );
};

export default Home;
