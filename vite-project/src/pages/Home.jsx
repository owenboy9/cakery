// src/pages/Home.jsx
import text from '../data/text';
import '../styles/everyPage.css';

<p>{text.home.intro}</p>

function Home() {
  return (
    <div className="every-page-container">
      <h1>{text.home.headline}</h1>
      <h2>{text.home.subheadline}</h2>
      <p>{text.home.content}</p>
      <span>{text.home.cta}</span>
    </div>
  )
}

export default Home;