import styles from './FlexBoard2.module.css'

function FlexBoard2() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.flexBoard}>
        {/* First set of items */}
        <div className={styles.flexItem}>
          <img src="https://via.placeholder.com/400x500" alt="Fashion Item 1" />
          <h3>Best Sellers</h3>
          <p>Our most popular items</p>
        </div>
        <div className={styles.flexItem}>
          <img src="https://via.placeholder.com/400x500" alt="Fashion Item 2" />
          <h3>Winter Collection</h3>
          <p>Stay warm in style</p>
        </div>
        <div className={styles.flexItem}>
          <img src="https://via.placeholder.com/400x500" alt="Fashion Item 3" />
          <h3>Accessories</h3>
          <p>Complete your look</p>
        </div>
        {/* Duplicate items for continuous scroll */}
        <div className={styles.flexItem}>
          <img src="https://via.placeholder.com/400x500" alt="Fashion Item 1" />
          <h3>Best Sellers</h3>
          <p>Our most popular items</p>
        </div>
        <div className={styles.flexItem}>
          <img src="https://via.placeholder.com/400x500" alt="Fashion Item 2" />
          <h3>Winter Collection</h3>
          <p>Stay warm in style</p>
        </div>
        <div className={styles.flexItem}>
          <img src="https://via.placeholder.com/400x500" alt="Fashion Item 3" />
          <h3>Accessories</h3>
          <p>Complete your look</p>
        </div>
      </div>
    </div>
  )
}

export default FlexBoard2
