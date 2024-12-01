import styles from './FlexBoard.module.css'

function FlexBoard() {
  return (
    <div className={styles.flexBoard}>
      <div className={styles.flexItem}>
        <img src="https://via.placeholder.com/400x500" alt="Fashion Item 1" />
        <h3>New Arrivals</h3>
        <p>Check out our latest collection</p>
      </div>
      <div className={styles.flexItem}>
        <img src="https://via.placeholder.com/400x500" alt="Fashion Item 2" />
        <h3>Summer Collection</h3>
        <p>Discover summer essentials</p>
      </div>
      <div className={styles.flexItem}>
        <img src="https://via.placeholder.com/400x500" alt="Fashion Item 3" />
        <h3>Trending Now</h3>
        <p>See what's popular</p>
      </div>
    </div>
  )
}

export default FlexBoard
