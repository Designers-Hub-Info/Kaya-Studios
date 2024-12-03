import styles from './Cart.module.css'
import CartItem from './CartItem'
import { useCart } from '../../context/CartContext'

function Cart() {
  const { cartItems, cartTotal } = useCart()

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem 
                key={item.id} 
                item={item}
              />
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h3>Cart Summary</h3>
            <p>Total: ₹{cartTotal}</p>
            <button className={styles.checkoutButton}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
