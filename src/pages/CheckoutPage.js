import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function CheckoutPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];
    
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = total * 0.12;

    const handleCheckout = () => {
        alert('Payment successful');
        navigate('/');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.name} - ₱{item.price} x {item.quantity}</li>
                ))}
            </ul>
            <p>Tax: ₱{tax.toFixed(2)}</p>
            <p>Total: ₱{(total + tax).toFixed(2)}</p>
            <button onClick={() => navigate('/')} className="btn btn-secondary">Cancel</button>
            <button onClick={handleCheckout} className="btn btn-success">Pay</button>
        </div>
    );
}

export default CheckoutPage;
