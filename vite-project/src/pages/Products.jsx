import '../styles/products.css';

import products from '../data/products'; // adjust path if needed
import ProductCard from '../components/ProductCard';

function Products() {
  const handleBuy = (productName) => {
    console.log(`added one ${productName} to cart`);
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
          onBuyClick={() => handleBuy(product.name)}
        />
      ))}
    </div>
  );
}

export default Products;
