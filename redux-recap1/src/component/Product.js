import React, { useState } from "react";

export default function Product(props) {
  console.log("LOGGER: Product.js: props:", props);

  const [product] = useState({ productId: "PR-01", productName: "Mobile", productPrice: 12000 });

  return (
    <div className="px-3 py-4 rounded-lg shadow-md shadow-slate-400">
      <h1 className="text-4xl font-semibold">Product Component</h1>
      <button onClick={
        () => props.addProductToCartHandler(product)
      } className="mt-2 px-2 py-2 duration-150 rounded shadow-md shadow-slate-400 hover:shadow-none hover:bg-teal-700 bg-teal-600 text-white">Add 1 Product To Cart</button>
    </div>
  );
}
