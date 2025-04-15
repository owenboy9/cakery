import { Link } from "react-router-dom"

function Nav() {
  return <nav>
    <Link to="/" style={{ color: 'white' }}>home</Link> &nbsp;
    <Link to="/About" style={{ color: 'white' }}>about</Link> &nbsp;
    <Link to="Products" style={{ color: 'white' }}>products</Link> &nbsp;
    <Link to="Contact" style={{ color: 'white' }}>contact</Link>
  </nav>
}

export default Nav;