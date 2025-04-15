import { Link } from "react-router-dom";
import '../styles/nav.css'

function Nav() {
  return (
    <nav>
      <Link to="/" >home</Link>
      <Link to="/about">about</Link>
      <Link to="/products" >products</Link>
      <Link to="/contact" >contact</Link>
    </nav>
  );
}

export default Nav;
