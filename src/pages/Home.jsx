import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Hotel Luxe</h1>
        <p>Your comfort is our priority. Experience luxury and serenity.</p>
        <Link to="/rooms" className="explore-btn">Explore Rooms</Link>
      </section>

      <section className="about">
        <h2>About Our Hotel</h2>
        <p>
          Hotel Luxe is a 5-star certified hotel offering luxurious accommodation, exceptional service, and stunning views. Whether it's a relaxing stay or a grand celebration, we ensure a delightful experience.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <img src="https://t4.ftcdn.net/jpg/05/93/78/61/360_F_593786156_CylOEtvTGbf46QsrHGRII6QgDxoAPPKD.jpg" alt="Star Service" />
          <h3>Star-Rated Staff</h3>
          <p>Our experienced staff ensures a professional, respectful, and warm experience for every guest.</p>
        </div>
       
        <div className="feature-card">
          <img src="https://www.meetingstoday.com/sites/default/files/styles/mt_default/public/2022-09/upload%20Windsong-Lawn-Function.jpg?itok=9LMhwaHT" alt="Lunch Taste" />
          <h3>Premium Dining</h3>
          <p>Savor multi-cuisine dishes prepared by expert chefs using the finest ingredients.</p>
        </div>
       
        <div className="feature-card">
          <img src="https://cdn0.weddingwire.in/article/7686/original/1920/jpg/16867-indian-wedding-decorations-the-wedding-salad-indian-wedding-decorations-mehndi-ceremony.jpeg" alt="Backyard Function" />
          <h3>Wedding Lawn</h3>
          <p>Celebrate personal moments or grand weddings in our beautifully decorated garden lawn.</p>
        </div>
         
        <div className="feature-card">
          <img src="https://deowgxgt4vwfe.cloudfront.net/uploads/1626351396_small.jpg" alt="Birthday Party" />
          <h3>Birthday Celebrations</h3>
          <p>Make your birthday unforgettable with our vibrant lawn setup, custom decor, music, and delicious catering.</p>
        </div>

        <div className="feature-card">
          <img src="https://foreverandadayevents.co.uk/wp-content/uploads/2024/01/best-anniversary-party-decor-celebrating-in-style-eno.jpg" alt="Anniversary Event" />
          <h3>Anniversary Events</h3>
          <p>Celebrate your love with a romantic dinner, custom themes, and elegant decoration tailored to your journey together.</p>
        </div>
         
         <div className="feature-card">
           <img src="https://i.pinimg.com/originals/28/bc/16/28bc16e405bcc09917642ff3ddb193f0.jpg" alt="Family Get-Together" />
           <h3>Family Gatherings</h3>
           <p>Host cozy outdoor dinners, BBQ nights, or daytime picnics in our well-lit and lush green backyard space.</p>
         </div>

         <div className="feature-card">
           <img src="https://i.pinimg.com/originals/7e/9d/f0/7e9df0d2e7dd67167feb67a4e44734ba.jpg" alt="Outdoor Movie Night" />
           <h3>Outdoor Movie Night</h3>
           <p>Enjoy a relaxing movie evening under the stars in our garden lawn — complete with a giant screen, cozy seating, and popcorn for all guests.</p>
        </div>

   

      </section>

      <section className="certificate">
        <h2>Our Credentials</h2>
        <p>Certified by National Hotel Association & rated 5-stars on all travel platforms.</p>
        <img src="https://cdn.slidesharecdn.com/ss_thumbnails/aa927069-8948-4658-a9b1-094b884f39fb-170109075619-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Certificate" className="certificate-img" />
      </section>
    </div>
  );
}

export default Home;

