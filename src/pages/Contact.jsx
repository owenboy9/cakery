import { useState } from 'react';
import text from '../data/text';
import '../styles/everyPage.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Message:', message);

    if (!email || !name || !message) {
      alert('you have missed some fields here ♡');
      return;
    }
    else{
        // show thank-you in the message field
      setMessage('thank you for your message\n♡');
      setEmail('♡'); // clear email field
      setName('♡'); // clear name field
      setIsSubmitted(true);
      setIsThankYou(true);

      setTimeout(() => {
        // clear fields again after 3s
        setMessage('');
        setIsSubmitted(false);
        setIsThankYou(false);
        setEmail('');
        setName('');
      }, 3000);
    }
  };

  return (
    <div className="every-page-container">
      <h1>{text.contact.title}</h1>
      <p>{text.contact.message}</p>
      <form onSubmit={submitForm} className="form-container">
        <input
          type="text"
          className={`email ${isSubmitted ? 'thank-you-style' : ''}`}
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className={`name ${isSubmitted ? 'thank-you-style' : ''}`}
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className={`message ${isSubmitted ? 'thank-you-style' : ''}`}
          placeholder="your message"
          rows="4"
          value={message}
          readOnly={isSubmitted} // make it read-only during thank-you
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="form-button">send!</button>
      </form>
      <span>{text.contact.location}</span>
    </div>
  );
}

export default Contact;
