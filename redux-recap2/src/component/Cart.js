import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const [count, setCount] = useState(0);
  const { cart } = useSelector(state => state.cart);
  console.log("LOGGER: Cart.js: cart:", cart);

  const restComponent = useMemo(() => {
    console.log("LOGGER: Cart.js: useMemo-nonRender:");

    return (
      <div className="">
        {console.log("INSIDE HTML")}
        <h1 className="text-4xl font-semibold">Cart Component</h1>
      </div>
    );
  }, []);

  useMemo(() => {
    let sum = 0;
    console.log("LOGGER: Cart.js: useMemo-render:");

    for (const items in cart) {
      sum += cart[items].length;
    }

    setCount(sum);
  }, [cart.books.length, cart.products.length]);

  return (
    // <div className="px-3 py-4 rounded-lg shadow-md shadow-slate-400">
    //   <h1 className="text-4xl font-semibold">Cart Component</h1>
    //   <div className="mt-2">
    //     <span className="text-2xl font-medium text-orange-600">Items Count: {count}</span>
    //   </div>
    // </div>

    <div className="px-3 py-4 rounded-lg shadow-md shadow-slate-400">
      {restComponent}
      <div className="mt-2">
        <span className="text-2xl font-medium text-orange-600">Items Count: {count}</span>
      </div>
    </div>
  );
}
