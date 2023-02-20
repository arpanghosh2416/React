import React, { useEffect, useMemo, useState } from "react";

export default function Cart(props) {
  const [count, setCount] = useState(0);
  console.log("LOGGER: Cart.js: props:", props);

  useEffect(() => {
    console.warn("LOGGER: Cart.js: useEffect");
    setCount(prev => prev + 1);
  }, [props]);

  const restComponent = useMemo(() => {
    return (
      <div className="">
        {console.log("INSIDE HTML")}
        <h1 className="text-4xl font-semibold">Cart Component</h1>
      </div>
    );
  }, []);

  return (
    <div className="px-3 py-4 rounded-lg shadow-md shadow-slate-400">
      {restComponent}
      {/* <div className="mt-2">
        <span className="text-2xl font-medium text-orange-600">Items Count: {
          props.getCart.cart.books.length + props.getCart.cart.products.length
        }</span>
      </div> */}
      <div className="mt-2">
        <span className="text-2xl font-medium text-orange-600">Items Count: {count}</span>
      </div>
    </div>
  );
}
