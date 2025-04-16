// src/pages/Home.jsx
import text from '../data/text';
import '../styles/everyPage.css';

<p>{text.home.intro}</p>

function About() {
    return (
    <div className="every-page-container">
      <h1>{text.about.title}</h1>
      <p>{text.about.content}</p>
      <span>{text.about.quote}</span>
    </div>
  )
}

export default About;