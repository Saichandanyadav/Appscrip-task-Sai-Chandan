import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon, SearchIcon, HeartIcon, ShoppingBagIcon, UserIcon, StarIcon } from '../pages/_app'

export default function Header({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const updateCounts = () => {
      setWishlistCount(JSON.parse(localStorage.getItem('wishlist') || '[]').length)
      setCartCount(JSON.parse(localStorage.getItem('cart') || '[]').length)
    }
    updateCounts()
    window.addEventListener('storage', updateCounts)
    return () => window.removeEventListener('storage', updateCounts)
  }, [])

  const resetSearch = () => {
    setSearchValue('')
    if(onSearch) onSearch('')
    setIsSearchOpen(false)
  }

  const navItems = ['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US']

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="header-left">
          <MenuIcon className="hamburger-icon mobile-only" onClick={() => setIsMenuOpen(true)} />
          <div className="logo-icon"><StarIcon size={28} strokeWidth={1.5} /></div>
        </div>
        <div className="header-center">
          <Link href="/"><h1 className="logo-text">LOGO</h1></Link>
        </div>
        <div className="header-right">
          <div className={`search-box ${isSearchOpen ? 'active' : ''}`}>
            {isSearchOpen && (
              <input
                type="text"
                value={searchValue}
                autoFocus
                placeholder="Search..."
                onChange={e => {
                  setSearchValue(e.target.value)
                  if(onSearch) onSearch(e.target.value)
                }}
              />
            )}
            {isSearchOpen ? (
              <XIcon size={18} onClick={resetSearch} className="cursor-pointer" />
            ) : (
              <SearchIcon size={20} onClick={() => setIsSearchOpen(true)} className="cursor-pointer" />
            )}
          </div>
          <Link href="/wishlist" className="icon-badge-wrapper">
            <HeartIcon size={20} />
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </Link>
          <Link href="/cart" className="icon-badge-wrapper">
            <ShoppingBagIcon size={20} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
          <Link href="/profile" className="desktop-only"><UserIcon size={20} /></Link>
        </div>
      </div>

      <nav className="main-nav">
        {navItems.map(item => (
          <Link key={item} href={item === 'SHOP' ? '/' : '/work-in-progress'} className="nav-link">
            {item}
          </Link>
        ))}
      </nav>

      {isMenuOpen && (
        <>
          <div className="sidebar-overlay" onClick={() => setIsMenuOpen(false)} />
          <div className="mobile-sidebar open">
            <XIcon size={22} onClick={() => setIsMenuOpen(false)} />
            <div className="mobile-nav">
              {navItems.map(item => (
                <Link key={item} href={item === 'SHOP' ? '/' : '/work-in-progress'} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  )
}
