// src/pages/Home.jsx
import text from '../data/text';

<p>{text.home.intro}</p>

function Home() {
  return (
    <div style={{ backgroundColor: 'lightpink', padding: '2rem' }}>
      <h1>{text.home.headline}</h1>
      <h2>{text.home.subheadline}</h2>
      <p>{text.home.content}</p>
      <span>{text.home.cta}</span>
    </div>
  )
}

export default Home;