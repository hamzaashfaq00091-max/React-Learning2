import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { addItemToCart, removeItemFromCart, clearCart } from './slice/cartSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const [itemInput, setItemInput] = useState({
    name: 'Product',
    price: 10
  })

  return (
    <>
   

      <div className="ticks"></div>

      <section id="cart-section" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>🛒 Redux Shopping Cart</h2>
        
        <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Add Item to Cart</h3>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Product name"
              value={itemInput.name}
              onChange={(e) => setItemInput({ ...itemInput, name: e.target.value })}
              style={{ flex: 1, padding: '8px' }}
            />
            <input
              type="number"
              placeholder="Price"
              value={itemInput.price}
              onChange={(e) => setItemInput({ ...itemInput, price: Number(e.target.value) })}
              style={{ width: '100px', padding: '8px' }}
            />
          </div>
          <button
            onClick={() => {
              if (itemInput.name && itemInput.price > 0) {
                dispatch(addItemToCart({
                  id: Date.now(),
                  name: itemInput.name,
                  price: itemInput.price
                }))
                setItemInput({ name: 'Product', price: 10 })
              }
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#61dafb',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Add to Cart
          </button>
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Cart Items ({totalQuantity})</h3>
          {cartItems.length === 0 ? (
            <p style={{ color: '#999' }}>Cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '4px'
                  }}
                >
                  <div>
                    <strong>{item.name}</strong>
                    <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                      ${item.price.toFixed(2)} × {item.quantity} = ${item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h3>Cart Summary</h3>
          <p style={{ fontSize: '16px', marginBottom: '10px' }}>
            <strong>Total Items:</strong> {totalQuantity}
          </p>
          <p style={{ fontSize: '18px', marginBottom: '15px' }}>
            <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
          </p>
          <button
            onClick={() => dispatch(clearCart())}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Clear Cart
          </button>
        </div>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
