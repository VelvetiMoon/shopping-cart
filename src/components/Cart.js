import React from 'react';

function Cart({ cartItems, updateQuantity, removeItem, handleCheckout }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = total * 0.12;

    return (
        <div className="cart-container">
            <h3>Your Cart</h3>
            <ul className="cart-list">
                {cartItems.map(item => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <p>{item.name}</p>
                            <p>₱{item.price.toFixed(2)}</p>
                        </div>
                        <div className="cart-item-quantity">
                            <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                        </div>
                        <button onClick={() => removeItem(item)} className="btn btn-danger">Remove</button>
                    </li>
                ))}
            </ul>
            <div className="cart-summary">
                <p>Subtotal: <span>₱{total.toFixed(2)}</span></p>
                <p>Tax (12%): <span>₱{tax.toFixed(2)}</span></p>
                <p>Total: <span>₱{(total + tax).toFixed(2)}</span></p>
                <button
                    onClick={handleCheckout}
                    style={{
                        backgroundColor: '#333', /* Dark black */
                        color: '#fff', /* White text */
                        border: '2px solid #222', /* Subtle border */
                        padding: '10px 15px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    }}
                    className="btn btn-primary"
                    
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
