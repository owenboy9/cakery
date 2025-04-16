import '../styles/productCard.css';

function ProductCard({ name, image, price, onBuyClick, onImageClick }) {

  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-image"
        onClick={onImageClick}
      />
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <button 
          className="buy-button"
          onClick={onBuyClick}
        >
          buy one
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
