import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Cart() {
  const [cartItems, setCartItems] = useState([])

  const syncCart = () => {
    setCartItems(JSON.parse(localStorage.getItem('cart') || '[]'))
  }

  useEffect(() => {
    syncCart()
    window.addEventListener('storage', syncCart)
    return () => window.removeEventListener('storage', syncCart)
  }, [])

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updated))
    setCartItems(updated)
    window.dispatchEvent(new Event('storage'))
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <>
      <Header />
      <section className="cart-page">
        <h1>SHOPPING BAG</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">Your bag is empty.</div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} />
                  <div className="cart-info">
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <span>Qty: {item.qty}</span>
                    <button onClick={() => removeItem(item.id)}>REMOVE</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>ORDER SUMMARY</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="primary-btn full">CHECKOUT</button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  )
}
