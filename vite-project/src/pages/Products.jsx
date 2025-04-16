import { useState } from 'react';
import '../styles/products.css';

import products from '../data/products';
import ProductCard from '../components/ProductCard';
import LargeProductCard from '../components/LargeProductCard';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuy = (productName, quantity) => {
    console.log(`added ${quantity} ${productName}(s) to cart`);
  };

  const handleImageClick = (product) => {
    console.log("Image clicked", product); // Debugging line
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const sortedProducts = [...products].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="products-container">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          onBuyClick={() => handleBuy(product.name, 1)}
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
              onClickBuy={(quantity) => handleBuy(selectedProduct.name, quantity)}
              onClose={closePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
