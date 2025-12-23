import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function Wishlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('wishlist') || '[]'));
  }, []);

  const removeItem = (e, product) => {
    const updated = items.filter(item => item.id !== product.id);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    setItems(updated);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <>
      <Header />
      <main className="wishlist-container">
        <div className="container">
          <h1 className="wishlist-title">MY WISHLIST</h1>
          {items.length === 0 ? (
            <div className="empty-state">
              <p>Your wishlist is empty.</p>
              <a href="/" className="shop-link">START SHOPPING</a>
            </div>
          ) : (
            <div className="product-grid no-filter">
              {items.map(product => (
                <Product 
                  key={product.id} 
                  product={product} 
                  isLiked={true} 
                  onToggleWishlist={removeItem}
                  showRemove={true}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}