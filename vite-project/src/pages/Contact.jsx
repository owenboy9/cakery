// src/pages/Home.jsx
import text from '../data/text';

<p>{text.home.intro}</p>

function Contact() {
  return (
    <div style={ {backgroundColor: 'lightpink', padding: '2rem'}} >
      <h1>{text.contact.title}</h1>
      <p>{text.contact.message}</p>
      <span>{text.contact.location}</span>
    </div>
  )
}

export default Contact;