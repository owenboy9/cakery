import '../styles/productCard.css';

function LargeProductCard({name, image, price, ingredients, description, bestPairedWith, onClickBuy}) {
  return(
    <div className='large-product-card'>
      <img 
      src={image} 
      alt={name} 
      className='large-product-image' />

      <div className='large-product-content'>
        <h3 className='large-product-name'>{name}</h3>
        <p className='large-product-price'>{price}</p>
        <p className='large-product-ingredients'>ingredients: {ingredients}</p>
        <p className='large-product-description'>{description}</p>
        <p className='large-product-best-paired'>best paired with: {bestPairedWith}</p>
        <div class name='large-product-input'>
          <p className='large-product-question'>how many of those would you like?</p>
          <input type="int" placeholder='??' />
          <button
            className='large-product-buy-button'
            onClick={onClickBuy}>
            buy!
          </button>
        </div>
      </div>
    </div>
  )
}

export default LargeProductCard;