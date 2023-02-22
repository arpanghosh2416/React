import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const { products } = useSelector(state => state.product);
  console.log("Cart.js: products:", products);

  return (
    <div>
      <h1 className="text-4xl font-semibold">Cart Component</h1>
      <span>Items Count: {products.length}</span>
    </div>
  );
}

export default Cart;
