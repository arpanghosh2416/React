import React from 'react';

export default function Cart(props) {
  console.warn("Cart.js: props:", props, props.getCardData.cardItems.length);

  return (
    <div className="">
      <div className="text-center text-4xl font-bold">
        <h1>Cart Component</h1>
      </div>
      <div className="relative mt-2 pr-10 py-4 text-right">
        <div className="absolute flex justify-center items-center top-0 right-6 w-[28px] rounded-full bg-orange-500">
          <span className="font-semibold">{props.getCardData.cardItems.length}</span>
        </div>
        <i class="fa-solid fa-cart-plus text-4xl text-red-600"></i>
      </div>
    </div>
  );
}
