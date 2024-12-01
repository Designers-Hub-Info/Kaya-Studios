import { useState } from 'react'
import styles from './Suits.module.css'

function Suits() {
  const [suits] = useState([
    {
      id: 1,
      name: "Designer Anarkali Suit",
      price: 4999,
      image: "https://via.placeholder.com/300x400",
      description: "Elegant Anarkali suit with detailed embroidery",
      color: "Maroon",
      material: "Georgette"
    },
    {
      id: 2,
      name: "Palazzo Suit Set",
      price: 3499,
      image: "https://via.placeholder.com/300x400",
      description: "Modern palazzo suit with printed design",
      color: "Teal",
      material: "Cotton Blend"
    },
    // Add more suits as needed
  ])

  const handleAddToCart = (suit) => {
    console.log('Added to cart:', suit)
  }

  const handleBuyNow = (suit) => {
    console.log('Buy now:', suit)
  }

  return (
    <div className={styles.suitContainer}>
      <h1>SUITS</h1>
      
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

      <div className={styles.suitGrid}>
        {suits.map((suit) => (
          <div key={suit.id} className={styles.suitCard}>
            <img src={suit.image} alt={suit.name} />
            <div className={styles.suitInfo}>
              <h3>{suit.name}</h3>
              <p className={styles.price}>₹{suit.price}</p>
              <p className={styles.description}>{suit.description}</p>
              <p>Color: {suit.color}</p>
              <p>Material: {suit.material}</p>
              <div className={styles.buttons}>
                <button 
                  onClick={() => handleAddToCart(suit)}
                  className={styles.addToCart}
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => handleBuyNow(suit)}
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

export default Suits
