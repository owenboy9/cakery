// src/pages/Home.jsx
import text from '../data/text';

<p>{text.home.intro}</p>

function About() {
    return (
    <div style={ {backgroundColor: 'lightpink', padding: '2rem'}}>
      <h1>we are your cakery</h1>
      <p>been around for a while</p>
    </div>
  )
}

export default About;