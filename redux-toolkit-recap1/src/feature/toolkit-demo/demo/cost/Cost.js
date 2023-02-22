import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

function Cost() {
  const { products } = useSelector(state => state.product);
  console.log("Cost.js: products:", products);

  const CalculatePrice = useMemo(() => {
    console.log("useMemo: Cost.js");
    let price = 0;

    products.forEach(element => {
      price += element.price;
    });

    return (
      <div className="">Total Cost: ${price}</div>
    );
  }, [products]);

  return (
    <div>
      <h1 className="text-4xl font-semibold">Cost Component</h1>
      {console.log("<HTML>: Cost.js")}
      <div className="">
        {CalculatePrice}
      </div>
    </div>
  );
}

export default Cost;
