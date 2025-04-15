// src/components/Header.jsx
function Header() {
  return (
    <header style={{ backgroundColor: '#f8c8dc', padding: '1rem' }}>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/products">Products</a> | <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
