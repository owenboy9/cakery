// src/pages/Home.jsx
import text from '../data/text';

<p>{text.home.intro}</p>

function Contact() {
  return (
    <div style={ {backgroundColor: 'lightpink', padding: '2rem'}} >
      <h1>here's how you can get in touch</h1>
      <p>come by!</p>
    </div>
  )
}

export default Contact;