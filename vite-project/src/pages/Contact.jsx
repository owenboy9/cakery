// src/pages/Home.jsx
import text from '../data/text';
import '../styles/everyPage.css';

<p>{text.home.intro}</p>

function Contact() {
  return (
    <div className="every-page-container" >
      <h1>{text.contact.title}</h1>
      <p>{text.contact.message}</p>
      <input type="text" className='email'/>
      <input type="text" className="name" />
      <input type="text" className="message" />
      <button className="form-button">send!</button>
      <span>{text.contact.location}</span>
    </div>
  )
}

export default Contact;