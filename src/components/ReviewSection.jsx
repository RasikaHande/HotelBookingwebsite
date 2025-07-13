
import './ReviewSection.css';
import '../components/ReviewSection.css'
const reviews = 
 [
  {
    name: 'Aarav Sharma',
    comment: 'Excellent rooms and very professional staff!',
    rating: 5
  },
  {
    name: 'Priya Desai',
    comment: 'Had a pleasant stay. Loved the view from the balcony.',
    rating: 4
  },
  {
    name: 'Vikram Joshi',
    comment: 'Clean and comfortable. Will definitely visit again.',
    rating: 5
  },
  {
    name: 'Sneha Mehta',
    comment: 'Great service and delicious food at the restaurant.',
    rating: 4
  },
  {
    name: 'Rohit Verma',
    comment: 'Amazing location. Room was cozy and well-maintained.',
    rating: 5
  },
  {
    name: 'Neha Kapoor',
    comment: 'Had some delay in room service but overall good experience.',
    rating: 3
  },
  {
    name: 'Karan Malhotra',
    comment: 'Loved the spa and amenities. Very relaxing stay.',
    rating: 5
  },
  {
    name: 'Divya Singh',
    comment: 'Nice decor and friendly staff. Would recommend to friends.',
    rating: 4
  },
  {
    name: 'Ankit Deshmukh',
    comment: 'Affordable and clean. A good choice for a short trip.',
    rating: 4
  },
  {
    name: 'Isha Nair',
    comment: 'The hotel ambience was beautiful and peaceful.',
    rating: 5
  },
  {
    name: 'Siddharth Jain',
    comment: 'Check-in took a while, but staff handled it well.',
    rating: 3
  },
  {
    name: 'Meera Kulkarni',
    comment: 'Perfect for couples. Loved the candlelight dinner arrangement.',
    rating: 5
  },
  {
    name: 'Aditya Rao',
    comment: 'Spacious room and good housekeeping service.',
    rating: 4
  },
  {
    name: 'Ritika Bansal',
    comment: 'Bathroom was super clean. Beds were very comfortable.',
    rating: 5
  },
  {
    name: 'Yash Patel',
    comment: 'Free Wi-Fi was slow. Everything else was fine.',
    rating: 3
  },
  {
    name: 'Tanya Sharma',
    comment: 'Very peaceful surroundings and great garden view.',
    rating: 5
  },
  {
    name: 'Harshil Dave',
    comment: 'Breakfast options were limited but tasty.',
    rating: 4
  },
  {
    name: 'Pooja Sinha',
    comment: 'Room lighting and ambiance was perfect for a relaxing night.',
    rating: 5
  },
  {
    name: 'Raj Mehta',
    comment: 'TV channels were limited. Improve entertainment options.',
    rating: 3
  },
  {
    name: 'Nidhi Agarwal',
    comment: 'Staff was courteous and helpful throughout our stay.',
    rating: 5
  },
  {
    name: 'Arjun Tripathi',
    comment: 'Had to wait long for towels. Needs improvement.',
    rating: 2
  },
  {
    name: 'Bhavya Reddy',
    comment: 'Loved the heritage design and traditional vibe.',
    rating: 5
  },
  {
    name: 'Manav Kapoor',
    comment: 'Elevator was not working. Room was good though.',
    rating: 3
  },
  {
    name: 'Simran Khurana',
    comment: 'Beautiful ocean view and soft bed. Loved it!',
    rating: 5
  },
  {
    name: 'Devanshi Joshi',
    comment: 'Smooth check-in and great customer service.',
    rating: 4
  },
  {
    name: 'Aryan Bose',
    comment: 'The pool area was amazing and well maintained.',
    rating: 5
  },
  {
    name: 'Kriti Das',
    comment: 'Rooms were nice but could be a bit more spacious.',
    rating: 4
  }
];

function ReviewSection() {
  return (
    <div className="review-section">
      <h2>Guest Reviews</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.name}</h3>
            <p>{review.comment}</p>
            <div className="stars">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
