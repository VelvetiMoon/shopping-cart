import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ addToCart }) {
    const [search, setSearch] = useState('');
    
    const items = [
        { id: 1, name: 'Mouse', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1734&auto=format&fit=crop', price: 50 },
        { id: 2, name: 'Keyboard', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop', price: 150 },
        { id: 3, name: 'Monitor', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop', price: 300 },
        { id: 4, name: 'Mouse Pad', image: 'https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=2070&auto=format&fit=crop', price: 20 },
        { id: 5, name: 'Printer', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop', price: 200 },
        { id: 6, name: 'Laptop', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop', price: 1000 }
    ];

    const filteredProducts = items.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search products" 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
            />
            <div className="items">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
