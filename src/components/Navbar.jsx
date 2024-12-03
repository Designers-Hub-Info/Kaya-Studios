import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../assets/logo2.png'
import { useCart } from '../context/CartContext'

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount } = useCart()

  const handleSearchClose = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <img src={logo} alt="Brand Logo" className={styles.logo} />
      </div>
      <div className={styles.navContainer}>
        {isSearchOpen ? (
          <div className={styles.searchForm}>
            <input
              autoFocus
              type="text"
              className={styles.searchBar}
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="button" 
              className={styles.closeButton} 
              onClick={handleSearchClose}
            >
              ✖
            </button>
          </div>
        ) : (
          <>
            <ul className={styles.navLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sarees">Sarees</Link></li>
              <li><Link to="/suits">Suits</Link></li>
              <li><Link to="/coords">Co-ords</Link></li>
            </ul>
            <div className={styles.iconContainer}>
              <li>
                <button 
                  className={styles.searchIcon} 
                  onClick={() => setIsSearchOpen(true)}
                >
                  🔍
                </button>
              </li>
              <li>
                <a href="/login" className={styles.loginIcon} title="Login">
                  👤
                </a>
              </li>
              <li className={styles.cart}>
                <Link to="/cart" title="Shopping Cart">
                  🛒
                  {cartCount > 0 && (
                    <span className={styles.cartBadge}>{cartCount}</span>
                  )}
                </Link>
              </li>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
