import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom'; 
import '../styles.css'; 

const OrderComplete = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); 

  if (!state) {
    return <p>No order details available.</p>;
  }

  const { name, email, phone, adults, children, checkIn, checkOut, rooms,totalAmount } = state;

  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="order-complete">
      
      <header className="header">
        <h1>Brisphere</h1>
        <nav className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
        </nav>
      </header>

      
      <div className="order-details">
        
        <div className="user-info">
          <h2>{name}</h2>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{adults} Adults and {children} Children</p>
        </div>

        
        <div className="order-status">
          <FaCheckCircle className="status-icon" />
          <h2>Order Complete</h2>
          <p>Have questions? <a href="#contact-us">Contact us</a></p>
        </div>
      </div>

      
      <div className="booking-summary">
       
        <div className="summary-item">
          <h4>Check-In</h4>
          <p>{checkIn}</p> 
        </div>
        <div className="summary-item">
          <h4>Check-Out</h4>
          <p>{checkOut}</p> 
        </div>
        <div className="summary-item">
          <h4>Rooms</h4>
          <p>{rooms}</p> 
        </div>
        <div className="summary-item">
          <h4>Total Payment</h4>
          <p>₹ {totalAmount}</p> 
        </div>
      </div>

      <div className="home-navigation">
        <button onClick={goToHome} className="home-button">Go to Home</button> 
      </div>
    </div>
  );
};

export default OrderComplete;
