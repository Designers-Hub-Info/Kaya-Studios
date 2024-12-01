import { useState } from 'react'
import styles from './Co-ords.module.css'

function Coords() {
  const [coords] = useState([
    {
      id: 1,
      name: "Printed Co-ord Set",
      price: 2999,
      image: "https://via.placeholder.com/300x400",
      description: "Stylish printed top and bottom set",
      color: "Blue & White",
      material: "Cotton Blend"
    },
    {
      id: 2,
      name: "Summer Co-ord Set",
      price: 3499,
      image: "https://via.placeholder.com/300x400",
      description: "Lightweight summer wear co-ord set",
      color: "Pastel Pink",
      material: "Linen Blend"
    },
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
      <h1>Our Co-ord Sets Collection</h1>
      
      <div className={styles.filters}>
        <select className={styles.filterSelect}>
          <option value="">Filter by Material</option>
          <option value="cotton">Cotton Blend</option>
          <option value="linen">Linen Blend</option>
          <option value="rayon">Rayon</option>
        </select>
        
        <select className={styles.filterSelect}>
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
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
