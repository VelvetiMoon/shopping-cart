import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

function HomePage() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const addToCart = product => {
        const exists = cartItems.find(item => item.id === product.id);
        if (exists) {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const updateQuantity = (product, quantity) => {
        if (quantity === 0) {
            removeItem(product);
        } else {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity } : item
                )
            );
        }
    };

    const removeItem = product => {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    };

    const handleCheckout = () => {
        navigate('/checkout', { state: { cartItems } });
    };

    return (
        <div className="row">
            <div className="col-8">
                <ProductList addToCart={addToCart} />
            </div>
            <div className="col-4">
                <Cart
                    cartItems={cartItems}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                    handleCheckout={handleCheckout}
                />
            </div>
        </div>
    );
}

export default HomePage;
