import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from "./productSlice";

function Product() {
  const dispatch = useDispatch();
  // const { products } = useSelector(state => state.product);
  console.log("Product.js: products:");

  return (
    <div>
      <div className="my-4 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">Product Component</h1>
        <div className="flex items-center gap-4">
          <div className="">I-Phone: $110.20</div>
          <button onClick={
            () => dispatch(addProductToCart({ name: "I-Phone", price: 110.20 }))
          } className="px-4 py-2 rounded text-white bg-blue-600">Add To Cart</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="">PS5: $12.10</div>
          <button onClick={
            () => dispatch(addProductToCart({ name: "PS5", price: 12.10 }))
          } className="px-4 py-2 rounded text-white bg-blue-600">Add To Cart</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="">MI-Phone: $40.75</div>
          <button onClick={
            () => dispatch(addProductToCart({ name: "MI-Phone", price: 40.75 }))
          } className="px-4 py-2 rounded text-white bg-blue-600">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
