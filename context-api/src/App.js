import { useState } from 'react';
import ColorButton from './component/ColorButton';
import Main from './component/Main';
import { CommonContext } from './context/CommonContext';

function App() {
  const [color, setColor] = useState('aqua');

  const updateColor = () => setColor('yellow');

  console.log("App");
  return (
    <CommonContext.Provider value={{ color, setColor, updateColor }}>
      <div className="">
        <h1>This is App.js (Complete & Easy reference on context-api)</h1>
        <Main />
        <ColorButton />
      </div>
    </CommonContext.Provider>
  );
}

export default App;
