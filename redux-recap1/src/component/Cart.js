import React from "react";

export default function Cart(props) {
  console.log("LOGGER: Cart.js: props:", props);

  return (
    <div className="px-3 py-4 rounded-lg shadow-md shadow-slate-400">
      <h1 className="text-4xl font-semibold">Cart Component</h1>
      <div className="mt-2">
        <span className="text-2xl font-medium text-orange-600">Items Count: {
          props.getCart.cart.books.length + props.getCart.cart.products.length
        }</span>
      </div>
    </div>
  );
}
