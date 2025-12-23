import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react'

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()
  return { props: { product } }
}

export default function ProductDetail({ product }) {
  const [showToast, setShowToast] = useState(false)

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      existing.qty += 1
    } else {
      cart.push({ ...product, qty: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('storage'))

    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
      <Header />
      
      {showToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <span>✔</span>
            <p>Added to bag successfully!</p>
          </div>
        </div>
      )}

      <section className="product-detail-page">
        <div className="product-detail-grid">
          <div className="product-image-box">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="product-price">${product.price}</p>
            <p className="product-desc">{product.description}</p>
            <button className="primary-btn" onClick={addToCart}>
              ADD TO BAG
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}