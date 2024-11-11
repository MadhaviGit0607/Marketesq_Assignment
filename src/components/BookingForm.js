import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import OrderComplete from './OrderComplete';

const BookingForm = ({ onBookingComplete }) => {
  const location = useLocation();
  const { bookingData } = location.state || {};
  const { checkIn: initialCheckIn, checkOut: initialCheckOut, rooms: initialRooms = 1, adults: initialAdults = 1, children: initialChildren = 0 } = bookingData || {};
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const [checkIn, setCheckIn] = useState(initialCheckIn || '');
  const [checkOut, setCheckOut] = useState(initialCheckOut || '');
  const [rooms, setRooms] = useState(initialRooms || 1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const roomCost = 1000;
  const navigate = useNavigate();

  useEffect(() => {
    setTotalAmount(rooms * roomCost);
  }, [rooms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, phone, adults, children, checkIn, checkOut, totalAmount };
    onBookingComplete?.(formData);
  };

  const handleArrowClick = () => {
    setIsOrderComplete(true);
    navigate('/order-complete', {
      state: {
        name,
        email,
        phone,
        adults,
        children,
        checkIn,
        checkOut,
        rooms,
        totalAmount,
      },
    });
  };

  return (
    <div className="booking-form-card">
    
      {!isOrderComplete ? (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Adults</label>
            <input
              type="number"
              value={adults}
              min="1"
              onChange={(e) => setAdults(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="field">
            <label>Children</label>
            <input
              type="number"
              value={children}
              min="0"
              onChange={(e) => setChildren(parseInt(e.target.value))}
            />
          </div>

          <div className="field">
            <label>Check-In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Check-Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <div className="field">
                  <label>Rooms</label>
                  <input
                    type="number"
                    value={rooms}
                    min="1"
                    onChange={(e) => setRooms(parseInt(e.target.value))}
                    required
                  />
          </div>

          <div className="field">
            <div className="payment-info">
              <span>Total Payment: ₹{totalAmount}</span>
              <button
                type="button"
                onClick={handleArrowClick}
                className="arrow-button"
              >
                <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <OrderComplete
          name={name}
          email={email}
          phone={phone}
          adults={adults}
          children={children}
          checkIn={checkIn}
          checkOut={checkOut}
          totalAmount={totalAmount}
        />
      )}
    </div>
  );
};

export default BookingForm;
