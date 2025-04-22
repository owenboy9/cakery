import { useState } from 'react';
import '../styles/largeProductCard.css';

function LargeProductCard({
  name,
  image,
  price,
  ingredients,
  description,
  bestPairedWith,
  onClickBuy,
}) {
  const [quantity, setQuantity] = useState('');

  const handleBuyClick = () => {
    const finalQuantity = parseInt(quantity) || 1;
    onClickBuy({ name, price}, finalQuantity);
  };

  return (
    <div className="large-product-card">
      <img src={image} alt={name} className="large-product-image" />

      <div className="large-product-content">
        <h3 className="large-product-name">{name}</h3>
        <p className="large-product-description">{description}</p>

        <p className="large-product-ingredients">
          <span className="ingredients-highlight">{ingredients}</span>
          <br />are what makes this one unique
        </p>

        <p className="large-product-best-paired">
          best paired with {bestPairedWith}
        </p>

        <div className="large-product-input">
          <p className="large-product-question">
            how many of those would you like?
          </p>
          <input
            type="text"
            min="1"
            value={quantity}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\d*$/.test(val)) {
                setQuantity(val === "" ? "" : parseInt(val));
              }
            }}

            placeholder="??"
            className="quantity-input"
          />
          <p className="large-product-price">$ {price}</p>
          <button className="large-product-buy-button" onClick={handleBuyClick}>
            buy!
          </button>
        </div>
      </div>
    </div>
  );
}

export default LargeProductCard;
