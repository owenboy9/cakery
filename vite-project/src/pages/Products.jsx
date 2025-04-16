import { useState } from 'react';
import '../styles/products.css';

import products from '../data/products';
import ProductCard from '../components/ProductCard';
import LargeProductCard from '../components/LargeProductCard';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterType, setFilterType] = useState(null); // default filter

  const handleBuy = (productName, quantity) => {
    console.log(`added ${quantity} ${productName}(s) to cart`);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  let displayedProducts;

  if (filterType) {
    displayedProducts = products
      .filter((product) => product.type === filterType)
      .sort((a, b) => a.name.localeCompare(b.name));
  } else {
    displayedProducts = products.sort((a, b) => a.name.localeCompare(b.name)); // all products, no sort
  }


  return (
    <div className="products-page">
      {/* FILTER BUTTONS */}
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
          className={filterType === '' ? 'active' : ''}
          onClick={() => setFilterType('')}
        >
          all together
        </button>
      </div>

      <div className="products-container">
        {/* PRODUCT GRID */}
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            onBuyClick={() => handleBuy(product.name, 1)}
            onImageClick={() => handleImageClick(product)}
          />
        ))}

        {/* POPUP */}
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
                  handleBuy(selectedProduct.name, quantity)
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
