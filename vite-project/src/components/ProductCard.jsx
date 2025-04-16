// src/components/ProductCard.jsx
function ProductCard({ name, image, price, onBuyClick }) {
  return (
    <div style={{
      width: '220px',
      backgroundColor: ' rgba(245, 227, 237, 0.37)',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0px 0px 10px rgba(236, 164, 97, 0.87)',
      padding: '1rem',
      textAlign: 'center',
      margin: '1rem',
      fontFamily: 'sans-serif',
      transition: 'background-color 0.3s ease',
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: '100%', objectFit: 'cover', cursor: 'pointer', borderRadius: '0.5rem' }}
      />
      <div style={{ padding: '0.3rem' }}>
        <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0', color: 'black' }}>
          {name}
        </h3>
        <p style={{ fontWeight: 'bold', color: 'black', margin: '0.6rem 0' }}>{price}</p>
        <button
          onClick={onBuyClick}
          style={{
            backgroundColor: 'lightpink',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '0.5rem',
            borderShadow: '0px 0px 5px rgba(240, 121, 11, 0.5)',
            transition: 'background-color 0.3s ease',
          }}
        >
          buy one
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
