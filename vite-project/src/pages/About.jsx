// src/pages/Home.jsx
import text from '../data/text';

<p>{text.home.intro}</p>

function About() {
    return (
    <div style={ {backgroundColor: 'lightpink', padding: '2rem'}}>
      <h1>{text.about.title}</h1>
      <p>{text.about.content}</p>
      <span>{text.about.quote}</span>
    </div>
  )
}

export default About;