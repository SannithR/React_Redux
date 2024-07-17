
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import useProducts from '../hooks/useProducts';
import './ProductLists.css';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useProducts();

  const handleAddToCart = (product: { id: number; title: string; price: number }) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart({ id: product.id, title: product.title, price: product.price })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

