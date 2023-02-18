import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { cart } = useSelector(state => state.cart);
  console.log("LOGGER: Home.js: cart:", cart);

  return (
    <div className="px-3 py-4 rounded-lg shadow-md shadow-slate-400">
      <h1 className="text-4xl font-semibold">Home Component</h1>
      <div className="">
        <h1 className="mt-2 text-xl font-medium text-red-600">Books</h1>
        {
          cart.books.map((book, index) => {
            const { bookId, bookName, bookPrice } = book;
            return (
              <ul key={index}>
                <hr />
                <li>{bookId}</li>
                <li>{bookName}</li>
                <li>{bookPrice}</li>
              </ul>
            );
          })
        }
      </div>
      <div className="">
        <h1 className="mt-2 text-xl font-medium text-orange-600">Products</h1>
        {
          cart.products.map((product, index) => {
            const { productId, productName, productPrice } = product;
            return (
              <ul key={index}>
                <hr />
                <li>{productId}</li>
                <li>{productName}</li>
                <li>{productPrice}</li>
              </ul>
            );
          })
        }
      </div>
    </div>
  );
}
