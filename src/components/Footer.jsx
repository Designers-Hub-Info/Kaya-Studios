import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* About Section */}
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>Kaya Studios is a premium clothing brand focused on sustainable and ethical fashion.</p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className={styles.footerSection}>
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/size-guide">Size Guide</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <ul>
            <li>Email: sale@kayastudios.in</li>
            <li>Phone: +91 96372 42606</li>
            <li>Address: Viman Nagar, Pune</li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>&copy; 2024 Kaya Studios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
