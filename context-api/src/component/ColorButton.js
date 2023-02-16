import React from 'react';
import { CommonContext } from '../context/CommonContext';

export default function ColorButton() {
  console.log("ColorButton");
  return (
    <CommonContext.Consumer>
      {
        ({ setColor, updateColor }) => (
          <div className="">
            <button onClick={() => setColor('red')}>Change BG1</button>
            <button onClick={updateColor}>Change BG2</button>
          </div>
        )
      }
    </CommonContext.Consumer>
  );
}
