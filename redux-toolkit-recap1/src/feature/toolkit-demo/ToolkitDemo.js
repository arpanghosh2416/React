import React from 'react';
import Cart from './demo/cart/Cart';
import Cost from './demo/cost/Cost';
import Product from './demo/product/Product';

function ToolkitDemo() {
  return (
    <div className="">
      <h1 className="text-4xl">Welcome to Toolkit-Demo</h1>
      <div className="mb-4 flex justify-end">
        <div className="mx-2 p-6 rounded-md" style={{ boxShadow: "2px 2px 4px 2px #808183" }}>
          <Cart />
        </div>
      </div>
      <div className="mx-2 flex justify-center gap-6">
        <div className="w-full flex justify-center items-center rounded-md" style={{ boxShadow: "2px 2px 4px 2px #808183" }}>
          <Cost />
        </div>
        <div className="w-full flex justify-center items-center rounded-md" style={{ boxShadow: "2px 2px 4px 2px #808183" }}>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default ToolkitDemo;
