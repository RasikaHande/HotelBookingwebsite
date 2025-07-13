
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Contact from './pages/Contact';
import BookingSummary from './pages/BookingSummary';
import NotFound from './pages/NotFound';
import Reviews from './components/ReviewSection';
import ReviewSection from './components/ReviewSection';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking-summary" element={<BookingSummary />} />
            <Route path="/reviews" element={<ReviewSection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
