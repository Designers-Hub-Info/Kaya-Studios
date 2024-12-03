import { useState } from 'react'
import styles from './Coords.module.css'
import { useCart } from '../context/CartContext'

function Coords() {
  const { addToCart } = useCart()
  
  const [coords] = useState([
    {
      id: 201,
      name: "Printed Co-ord Set",
      price: 3999,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3",
      description: "Modern printed co-ord set with trendy design",
      color: "Multi",
      material: "Cotton"
    },
    {
      id: 202,
      name: "Casual Co-ord Set",
      price: 2999,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3",
      description: "Comfortable casual wear co-ord set",
      color: "Pastel Pink",
      material: "Linen Blend"
    },
    {
      id: 203,
      name: "Party Co-ord Set",
      price: 4999,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3",
      description: "Stylish party wear co-ord set",
      color: "Black",
      material: "Polyester Blend"
    }
  ])

  const handleAddToCart = (coord) => {
    addToCart(coord)
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
