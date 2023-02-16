import React from 'react';
import { CommonContext } from '../context/CommonContext';

export default function Main() {
  console.log("Main");
  return (
    <CommonContext.Consumer>
      {
        ({ color }) => (
          <div className="" style={{ backgroundColor: color }}>
            <h1>This is Main.js</h1>
          </div>
        )
      }
    </CommonContext.Consumer>
  );
}
