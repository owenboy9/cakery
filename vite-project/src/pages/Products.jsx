// src/pages/Products.jsx
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
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: 'lightpink',
    }}>
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
