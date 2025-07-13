import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking-summary');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Stay</h2>
      <label>Name:
        <input type="text" required />
      </label>
      <label>Check-in Date:
        <input type="date" required />
      </label>
      <label>Check-out Date:
        <input type="date" required />
      </label>
      <label>Guests:
        <input type="number" min="1" required />
      </label>
      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingForm;