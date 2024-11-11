import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingCard = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingData = async () => {
      setIsLoading(true);
      try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log('Fetched Data:', data);
      } catch (error) {
        setError('Failed to fetch data');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookingData();
  }, []); 

  const handleRoomsIncrement = () => setRooms(rooms + 1);
  const handleRoomsDecrement = () => {
    if (rooms > 1) setRooms(rooms - 1);
  };

  const handleBooking = async () => {
    const bookingDetails = { checkIn, checkOut, rooms };
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });
      const data = await response.json();
      console.log('Booking Data Submitted:', data);

      navigate('/booking', { state: { bookingData: bookingDetails } });
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className="booking-card">
      <div className="field-container">
        <div className="field">
          <label>Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Rooms</label>
          <div className="room-control">
            <button onClick={handleRoomsDecrement}>-</button>
            <span>{rooms}</span>
            <button onClick={handleRoomsIncrement}>+</button>
          </div>
        </div>
      </div>

      {isLoading && <p>Loading available data...</p>}
      {error && <p className="error">{error}</p>}

      <button className="book-button" onClick={handleBooking}>
        Book
      </button>
    </div>
  );
};

export default BookingCard;
