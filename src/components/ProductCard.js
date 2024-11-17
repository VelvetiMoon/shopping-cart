import React from 'react';

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-item">
            <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '20%', height: '20%', objectFit: 'cover' }}  // Set fixed width and height
            />
            <h5>{product.name}</h5>
            <p>${product.price}</p>
            <button
    onClick={() => addToCart(product)}
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
    onMouseOver={(e) => (e.target.style.backgroundColor = '#111')} // Hover state
    onMouseOut={(e) => (e.target.style.backgroundColor = '#333')} // Reset on hover out
>
    Add to Cart
</button>

        </div>
    );
}

export default ProductCard;
