import React from 'react';
import { useSelector } from 'react-redux';

function Coin() {
  const { color } = useSelector(state => state.theme);
  const coin = useSelector(state => state.counter.count);
  console.log("Coin.js: coin:", coin);

  return (
    <div style={{ color: color }}>
      <h1>Coin: {coin}</h1>
    </div>
  );
}

export default Coin;
