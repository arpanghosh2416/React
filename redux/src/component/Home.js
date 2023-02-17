import React from 'react';

export default function Home(props) {
  console.warn("Home.js: props:", props);

  return (
    <div className="">
      <div className="text-center text-4xl font-bold">
        <h1>Home Component</h1>
      </div>
      <div className="mx-10 p-2 inline-flex flex-col gap-4">
        <div className="p-4 flex flex-wrap justify-between items-center gap-4 rounded border border-slate-400">
          <div className="text-xl font-bold">
            <span>I-Phone Price: $100.00</span>
          </div>
          <button onClick={
            () => props.removeFromCartHandler()
          } className="px-4 py-2 rounded text-white bg-[#1900fd]" style={{ boxShadow: "1px 1px 4px 1px #130d44" }}>Remove From Cart</button>
          <button onClick={
            () => props.addToCartHandler({ itemName: "I-Phone", itemPrice: 100.00 })
          } className="px-4 py-2 rounded text-white bg-[#fd0000]" style={{ boxShadow: "1px 1px 4px 1px #880606" }}>Add To Cart</button>
        </div>
        <div className="p-4 flex flex-wrap justify-between items-center gap-4 rounded border border-slate-400">
          <div className="text-xl font-bold">
            <span>MI-Phone Price: $77.00</span>
          </div>
          <button onClick={
            () => props.removeFromCartHandler()
          } className="px-4 py-2 rounded text-white bg-[#1900fd]" style={{ boxShadow: "1px 1px 4px 1px #130d44" }}>Remove From Cart</button>
          <button onClick={
            () => props.addToCartHandler({ itemName: "MI-Phone", itemPrice: 77.00 })
          } className="px-4 py-2 rounded text-white bg-[#fd0000]" style={{ boxShadow: "1px 1px 4px 1px #880606" }}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
