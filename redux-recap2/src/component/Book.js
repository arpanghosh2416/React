import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../service";

export default function Book() {
  const dispatch = useDispatch();
  const [book] = useState({ bookId: "BK-01", bookName: "C++", bookPrice: 780 });
  console.log("LOGGER: Book.js: book:", book);

  return (
    <div className="px-3 py-4 rounded-lg shadow-md shadow-slate-400">
      <h1 className="text-4xl font-semibold">Book Component</h1>
      <button onClick={
        () => dispatch(actions.addBookToCart(book))
      } className="mt-2 px-2 py-2 duration-150 rounded shadow-md shadow-slate-400 hover:shadow-none hover:bg-blue-700 bg-blue-600 text-white">Add 1 Book To Cart</button>
    </div>
  );
}
