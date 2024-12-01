import { useState } from 'react'
import styles from './Sarees.module.css'

function Sarees() {
  const [sarees] = useState([
    {
      id: 1,
      name: "Traditional Silk Saree",
      price: 5999,
      image: "https://via.placeholder.com/300x400",
      description: "Handwoven silk saree with traditional designs",
      color: "Red",
      material: "Pure Silk"
    },
    {
      id: 2,
      name: "Designer Cotton Saree",
      price: 2999,
      image: "https://via.placeholder.com/300x400",
      description: "Lightweight cotton saree with modern prints",
      color: "Blue",
      material: "Cotton"
    },
    {
      id: 3,
      name: "Chiffon Saree",
      price: 3999,
      image: "https://via.placeholder.com/300x400",
      description: "Chiffon saree with intricate designs",
      color: "Green",
      material: "Chiffon"
    }
    // Add more sarees as needed
  ])

  const handleAddToCart = (saree) => {
    // Add to cart logic here
    console.log('Added to cart:', saree)
  }

  const handleBuyNow = (saree) => {
    // Buy now logic here
    console.log('Buy now:', saree)
  }

  return (
    <div className={styles.sareeContainer}>
      <h1>SAREES</h1>
      
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

      <div className={styles.sareeGrid}>
        {sarees.map((saree) => (
          <div key={saree.id} className={styles.sareeCard}>
            <img src={saree.image} alt={saree.name} />
            <div className={styles.sareeInfo}>
              <h3>{saree.name}</h3>
              <p className={styles.price}>₹{saree.price}</p>
              <p className={styles.description}>{saree.description}</p>
              <p>Color: {saree.color}</p>
              <p>Material: {saree.material}</p>
              <div className={styles.buttons}>
                <button 
                  onClick={() => handleAddToCart(saree)}
                  className={styles.addToCart}
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => handleBuyNow(saree)}
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

export default Sarees
