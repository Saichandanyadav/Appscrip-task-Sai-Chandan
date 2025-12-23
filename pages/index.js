import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import ProductGrid from '../components/ProductGrid'
import { X } from 'lucide-react'

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) throw new Error('Failed to fetch')
    const products = await res.json()
    return { props: { products } }
  } catch (error) {
    return { props: { products: [] } }
  }
}

export default function Home({ products }) {
  const [showFilter, setShowFilter] = useState(true)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [displayProducts, setDisplayProducts] = useState(products)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('recommended')
  const [selectedFilters, setSelectedFilters] = useState([])

  const handleFilterChange = categoryId => {
    setSelectedFilters(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleClearAll = () => setSelectedFilters([])

  useEffect(() => {
    let result = [...products].filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (selectedFilters.length > 0) {
      result = result.filter(p => {
        const title = p.title.toLowerCase()
        return (
          (selectedFilters.includes('mens') && title.includes('mens')) ||
          (selectedFilters.includes('womens') && title.includes('women')) ||
          (selectedFilters.includes('bags') && title.includes('backpack')) ||
          (selectedFilters.includes('electronics') &&
            (title.includes('ssd') || title.includes('drive') || title.includes('monitor')))
        )
      })
    }

    if (sortBy === 'low') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'high') result.sort((a, b) => b.price - a.price)

    setDisplayProducts(result)
  }, [searchQuery, sortBy, products, selectedFilters])

  return (
    <div className="layout-wrapper">
      <Header onSearch={query => setSearchQuery(query)} />
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="title">DISCOVER OUR PRODUCTS</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            </p>
          </div>
        </section>

        <div className="plp-toolbar">
          <div className="toolbar-left">
            <span className="item-count">{displayProducts.length} ITEMS</span>
            <button className="filter-toggle desktop-only" onClick={() => setShowFilter(!showFilter)}>
              {showFilter ? '< HIDE FILTER' : '> SHOW FILTER'}
            </button>
            <button className="filter-toggle mobile-only" onClick={() => setIsMobileFilterOpen(true)}>
              FILTER
            </button>
          </div>
          <div className="toolbar-right">
            <select className="sort-dropdown" onChange={e => setSortBy(e.target.value)}>
              <option value="recommended">RECOMMENDED</option>
              <option value="high">PRICE: HIGH TO LOW</option>
              <option value="low">PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>

        <div className="plp-main">
          {showFilter && (
            <div className="filters-desktop desktop-only">
              <Filters selectedFilters={selectedFilters} onFilterChange={handleFilterChange} onClearAll={handleClearAll} />
            </div>
          )}
          <ProductGrid products={displayProducts} showFilter={showFilter} />
        </div>
      </main>

      {isMobileFilterOpen && (
        <div className="mobile-sidebar-container">
          <div className="sidebar-overlay" onClick={() => setIsMobileFilterOpen(false)}></div>
          <div className="mobile-sidebar open">
            <div className="sidebar-header">
              <h3>FILTERS</h3>
              <X onClick={() => setIsMobileFilterOpen(false)} style={{ cursor: 'pointer' }} />
            </div>
            <div className="mobile-filter-content">
              <Filters selectedFilters={selectedFilters} onFilterChange={handleFilterChange} onClearAll={handleClearAll} />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}