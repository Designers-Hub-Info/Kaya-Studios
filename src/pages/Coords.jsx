import { useState } from 'react'
import styles from './Coords.module.css'

function Coords() {
  const [coords] = useState([
    {
      id: 1,
      name: "Summer Co-ord Set",
      price: 2999,
      image: "https://via.placeholder.com/300x400",
      description: "Trendy printed co-ord set perfect for summer",
      color: "Sage Green",
      material: "Cotton Blend",
      size: "S, M, L"
    },
    {
      id: 2,
      name: "Casual Co-ord Set",
      price: 3499,
      image: "https://via.placeholder.com/300x400",
      description: "Comfortable casual wear co-ord set",
      color: "Beige",
      material: "Linen Blend",
      size: "S, M, L, XL"
    },
    {
      id: 3,
      name: "Printed Co-ord Set",
      price: 2999,
      image: "https://via.placeholder.com/300x400",
      description: "Stylish printed top and bottom set",
      color: "Blue & White",
      material: "Cotton Blend",
      size: "S, M, L"
    }
    // Add more co-ords as needed
  ])

  const handleAddToCart = (coord) => {
    console.log('Added to cart:', coord)
  }

  const handleBuyNow = (coord) => {
    console.log('Buy now:', coord)
  }

  return (
    <div className={styles.coordContainer}>
      <h1>CO-ORDS</h1>
      
      <div className={styles.filters}>
      <select className={styles.filterSelect}>
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
        <select className={styles.filterSelect}>
            <option value="">Filter by Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
      </div>

      <div className={styles.coordGrid}>
        {coords.map((coord) => (
          <div key={coord.id} className={styles.coordCard}>
            <img src={coord.image} alt={coord.name} />
            <div className={styles.coordInfo}>
              <h3>{coord.name}</h3>
              <p className={styles.price}>₹{coord.price}</p>
              <p className={styles.description}>{coord.description}</p>
              <p>Color: {coord.color}</p>
              <p>Material: {coord.material}</p>
              <p>Available Sizes: {coord.size}</p>
              <div className={styles.buttons}>
                <button 
                  onClick={() => handleAddToCart(coord)}
                  className={styles.addToCart}
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => handleBuyNow(coord)}
                  className={styles.buyNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coords
