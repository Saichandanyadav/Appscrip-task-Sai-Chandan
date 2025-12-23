import Link from 'next/link'
import dynamic from 'next/dynamic'

const HeartIcon = dynamic(() => import('lucide-react').then(mod => mod.Heart), { ssr: false })
const Trash2Icon = dynamic(() => import('lucide-react').then(mod => mod.Trash2), { ssr: false })

export default function Product({ product, isLiked, onToggleWishlist, showRemove = false }) {
  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`} className="product-link">
        <div className="card-image-wrapper">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="card-info">
          <div className="card-header">
            <h3 className="product-title">{product.title}</h3>
            {!showRemove && (
              <div
                className="wishlist-icon-container"
                onClick={(e) => onToggleWishlist(e, product)}
              >
                <HeartIcon
                  size={20}
                  className={isLiked ? 'liked' : ''}
                  fill={isLiked ? 'currentColor' : 'none'}
                />
              </div>
            )}
          </div>
          <p className="pricing-text">Sign in or Create an account to see pricing</p>
        </div>
      </Link>
      {showRemove && (
        <button className="remove-btn" onClick={() => onToggleWishlist(null, product)}>
          <Trash2Icon size={16} /> REMOVE
        </button>
      )}
    </div>
  )
}
