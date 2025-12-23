import { useEffect, useState } from 'react'
import Product from './Product'

export default function ProductGrid({ products, showFilter }) {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('wishlist') || '[]')
    setWishlist(saved.map(p => p.id))
  }, [])

  const toggleWishlist = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    let current = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const exists = current.find(p => p.id === product.id)
    current = exists ? current.filter(p => p.id !== product.id) : [...current, product]
    localStorage.setItem('wishlist', JSON.stringify(current))
    setWishlist(current.map(p => p.id))
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <section className={`product-grid ${showFilter ? 'with-filter' : 'no-filter'}`}>
      {products.map(product => (
        <Product 
          key={product.id} 
          product={product} 
          isLiked={wishlist.includes(product.id)}
          onToggleWishlist={toggleWishlist}
        />
      ))}
    </section>
  )
}