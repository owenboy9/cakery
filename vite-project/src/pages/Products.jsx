import { useState } from 'react';
import '../styles/products.css';

import products from '../data/products';
import ProductCard from '../components/ProductCard';
import LargeProductCard from '../components/LargeProductCard';
import { useCart } from '../context/CartContext';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const { addToCart } = useCart();

  const handleBuy = (product, quantity) => {
    addToCart({
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
    console.log(`added ${quantity} ${product.name}(s) to cart`);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  let displayedProducts = [...products];

  if (filterType) {
    displayedProducts = displayedProducts
      .filter((product) => product.type === filterType)
      .sort((a, b) => a.name.localeCompare(b.name));
  } else {
    displayedProducts = displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="products-page">
      <div className="filter-buttons">
        <button
          className={filterType === 'cupcake' ? 'active' : ''}
          onClick={() => setFilterType('cupcake')}
        >
          cupcakes
        </button>
        <button
          className={filterType === 'wedding-cake' ? 'active' : ''}
          onClick={() => setFilterType('wedding-cake')}
        >
          wedding cakes
        </button>
        <button
          className={!filterType ? 'active' : ''}
          onClick={() => setFilterType(null)}
        >
          all together
        </button>
      </div>

      <div className="products-container">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            onBuyClick={() => handleBuy(product, 1)}
            onImageClick={() => handleImageClick(product)}
          />
        ))}

        {selectedProduct && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <LargeProductCard
                name={selectedProduct.name}
                image={selectedProduct.image}
                price={selectedProduct.price}
                ingredients={selectedProduct.ingredients.join(', ')}
                description={selectedProduct.description}
                bestPairedWith={selectedProduct.bestPairedWith}
                onClickBuy={(quantity) =>
                  handleBuy(selectedProduct, quantity)
                }
                onClose={closePopup}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
