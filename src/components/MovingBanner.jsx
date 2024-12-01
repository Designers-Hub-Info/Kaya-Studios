import styles from './MovingBanner.module.css'

function MovingBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>
        Free Shipping on Orders Over $100 • New Collection Available • Sign Up for 10% Off • Free Returns
      </div>
    </div>
  )
}

export default MovingBanner
