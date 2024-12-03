import styles from './CartItem.module.css'
import { useCart } from '../../context/CartContext'

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className={styles.cartItem}>
      <img 
        src={item.image} 
        alt={item.name} 
        className={styles.itemImage}
      />
      <div className={styles.itemDetails}>
        <h3>{item.name}</h3>
        <p className={styles.price}>₹{item.price}</p>
        <div className={styles.quantity}>
          <button 
            className={styles.quantityButton}
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            className={styles.quantityButton}
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button 
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
