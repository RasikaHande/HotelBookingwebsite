
import '../components/ContactForm.css'
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      
      <label>Name:
        <input type="text" required />
      </label>
      <label>Email:
        <input type="email" required />
      </label>
      <label>Message:
        <textarea rows="5" required></textarea>
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;


