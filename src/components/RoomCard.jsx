
import { Link } from 'react-router-dom';
import './RoomCard.css';

function RoomCard({ id, name, image, price }) {
  return (
    <div className="room-card">
      <img src={image} alt={name} className="room-image" />
      <div className="room-details">
        <h3>{name}</h3>
        <p>Price: ₹{price}/night</p>
        <Link to={`/rooms/${id}`} className="book-btn">Book Now</Link>
      </div>
    </div>
  );
}

export default RoomCard;
