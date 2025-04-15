// src/components/Header.jsx
function Header() {
  return (
    <header style={{ backgroundColor: '#f8c8dc', padding: '1rem' }}>
      <nav>
        <a href="/">home</a> | <a href="/about">about</a> | <a href="/products">products</a> | <a href="/contact">contact</a>
      </nav>
    </header>
  );
}

export default Header;
