
import RoomList from '../components/RoomList';
import './Rooms.css';

function Rooms() {
  return (
    <div className="rooms-page">
      <h2>Our Rooms</h2>
      <p>Choose from a variety of rooms designed for your comfort.</p>
      <RoomList />
    </div>
  );
}

export default Rooms;
