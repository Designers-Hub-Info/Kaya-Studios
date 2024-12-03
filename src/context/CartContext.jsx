import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id)
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...items, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(items => items.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const cartCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  )

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
