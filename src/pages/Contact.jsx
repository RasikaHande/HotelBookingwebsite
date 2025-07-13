
import ContactForm from '../components/ContactForm';
import '../pages/Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you.</p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
